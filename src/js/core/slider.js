import DEFAULTS from '../config.js';
import Language from './language.js';
import AspectRatioManager from './ratio-sizer.js';
import helpData from '../docs/help.json';
import defaultStyle from '!!css-loader?{"sourceMap":false,"exportType":"string"}!sass-loader?{"api":"modern"}!../../scss/main.scss';

class Slider {
  sliderItems = new Map();
  config = new Map();

  // --- Private Class Fields ---
  #disabled = false;
  #transitionStartHandler;
  #transitionEndHandler;
  #touchStartHandler;
  #touchMoveHandler;
  #touchStopHandler;
  #scrollHandler;
  #boardListContainerCalculateHeightHandler;
  #pendingMove = null;
  #scrollEndTimer = null;
  #touchStartX = 0;
  #touchDeltaX = 0;
  #touchChangeRatio = 0;
  #onTouch = null;
  #boardListContainer;
  #aspectRatioManager;
  #modules;
  #userDefinedItems;

  constructor (targetOrConfig = {}) {
    this.activeIndex = 0;
    this.boardListOnShift = null;

    if (!targetOrConfig.target) throw new Error('Minyatur: `target` parameter is required.');

    this.mainContainer = typeof targetOrConfig.target === 'string' ? document.querySelector(targetOrConfig.target) : targetOrConfig.target;
    if (!(this.mainContainer instanceof globalThis.HTMLElement)) {
      throw new Error('Minyatur: Please provide a valid DOM element or selector.');
    }

    if (this.mainContainer.__minyatur) return this.mainContainer.__minyatur;

    this.mainContainer.classList.add('minyatur');
    this.mainContainer.__minyatur = this;

    this.#mergeConfig(targetOrConfig);

    // Load language
    Language.load(this.config.get('languageCode'));
    this.language = Language;

    // Auto-inject default style if needed
    if (this.config.get('styleAutoload')) {
      if (!document.querySelector('.minyatur-default-style') && !document.querySelector('link[href*="minyatur.css"]')) {
        const styleElement = document.createElement('style');
        styleElement.setAttribute('type', 'text/css');
        styleElement.classList.add('minyatur-default-style');
        styleElement.innerHTML = defaultStyle;
        document.head.appendChild(styleElement);
      }
    }

    // Use user-defined items or fallback to DOM children
    this.#userDefinedItems = targetOrConfig.items?.length ? targetOrConfig.items : [...this.mainContainer.firstElementChild.children || []];

    if (!this.#userDefinedItems.length) {
      this.#printItemErrorMessage();

      return { next: () => {}, prev: () => {}, insert: () => {}, add: () => {}, remove: () => {}, destroy: () => {}, enable: () => {}, disable: () => {} };
    }

    // Empty the main container
    while (this.mainContainer.firstChild) {
      this.mainContainer.removeChild(this.mainContainer.lastChild);
    }

    // BroadWrapper, holder for slider items
    this.boardWrapper = document.createElement('div');
    this.boardWrapper.classList.add('minyatur-board');
    this.boardWrapper.style.visibility = 'hidden';
    this.mainContainer.appendChild(this.boardWrapper);

    // AspectRatio and width and height related settings.
    this.#boardListContainer = document.createElement('div');
    this.#boardListContainer.classList.add('minyatur-board-list-container');
    this.#boardListContainer.style.overflow = 'hidden';
    this.#boardListContainer.style.height = '0';
    this.boardWrapper.appendChild(this.#boardListContainer);

    // Since the measurement properties return values after adding the BoardContainer as a child, values such as ratioPercent, maxWidth, maxHeight of the slider are calculated and evaluated here.
    if (this.config.get('maxWidth') != null) {
      this.boardWrapper.style.maxWidth = this.config.get('maxWidth');
    }

    this.#aspectRatioManager = new AspectRatioManager(this);

    this.#boardListContainerCalculateHeight();
    this.#boardListContainerCalculateHeightHandler = this.#boardListContainerCalculateHeight.bind(this);
    globalThis.addEventListener('resize', this.#boardListContainerCalculateHeightHandler);

    // Generate boardlist
    this.boardList = document.createElement('ul');

    // Transition Events
    this.#transitionStartHandler = () => {
      this.boardListOnShift = true;
    };
    this.#transitionEndHandler = () => {
      this.boardListOnShift = null;
      this.#transitionOff();
    };
    this.boardList.addEventListener('transitionstart', this.#transitionStartHandler);
    this.boardList.addEventListener('transitionend', this.#transitionEndHandler);

    // touchstart
    this.#touchStartHandler = this.#touchStart.bind(this);
    this.boardList.addEventListener('touchstart', this.#touchStartHandler, { passive: true });

    // touchmove
    this.#touchMoveHandler = this.#touchMove.bind(this);
    this.boardList.addEventListener('touchmove', this.#touchMoveHandler, { passive: false });

    // touchend and touchcancel
    this.#touchStopHandler = this.#touchStop.bind(this);
    this.boardList.addEventListener('touchend', this.#touchStopHandler, { passive: true });
    this.boardList.addEventListener('touchcancel', this.#touchStopHandler, { passive: true });

    // End of scroll change scrollIndex
    this.#scrollHandler = () => {
      if (this.#scrollEndTimer) {
        globalThis.clearTimeout(this.#scrollEndTimer);
      }

      this.#scrollEndTimer = globalThis.setTimeout(() => {
        this.boardListOnShift = null;

        const scrollIndex = Math.round(this.boardList.scrollLeft / this.boardList.firstElementChild.offsetWidth);

        if (this.activeIndex !== scrollIndex) {
          this.insertItem(scrollIndex, { behavior: 'smooth', source: 'scrollEvent' });
        }

        // Execute the last pending move captured during animation
        if (this.#pendingMove) {
          const direction = this.#pendingMove;
          this.#pendingMove = null;

          if (direction === 'next') {
            this.nextItem({ source: 'pendingMove' });
          } else {
            this.prevItem({ source: 'pendingMove' });
          }
        }
      }, 70);
    };
    this.boardList.addEventListener('scroll', this.#scrollHandler);

    this.#boardListContainer.appendChild(this.boardList);

    this.#init();

    return {
      next: ({ behavior } = {}) => { this.nextItem({ behavior, source: 'api' }); },
      prev: ({ behavior } = {}) => { this.prevItem({ behavior, source: 'api' }); },
      insert: (index, { behavior } = {}) => { this.insertItem(index, { behavior, source: 'api' }); },
      add: (element, index) => this.add(element, index),
      remove: (index) => this.remove(index),
      destroy: () => this.destroy(),
      enable: () => this.enable(),
      disable: () => this.disable()
    };
  }

  #mergeConfig (customConfig) {
  // data-attributes → config keys
    const configFromAttributes = {};

    Object.entries(this.mainContainer.dataset).forEach(([key, value]) => {
      const rawKey = key.replace('minyatur', '');
      const keyToConfig = rawKey.charAt(0).toLowerCase() + rawKey.slice(1);
      configFromAttributes[keyToConfig] = value;
    });

    [DEFAULTS, customConfig, configFromAttributes].forEach(source => {
      Object.entries(source).forEach(([key, value]) => {
        this.config.set(key, value);
      });
    });
  }

  handleError (error, context = {}) {
    const onError = this.config.get('onError');

    if (typeof onError === 'function') {
      try {
        onError(error, context);
      } catch (callbackError) {
        console.error('[Minyatur|Slider] onError callback threw an error.', callbackError);
      }
    } else {
      console.error('[Minyatur|Slider]', error.message || error, context);
    }
  }

  async #init () {
    await this.#initItems();
    await this.#initModules();

    if (!this.sliderItems.size) {
      this.#printItemErrorMessage();

      return;
    }

    // Add active class after DOM is fully rendered
    globalThis.requestAnimationFrame(() => {
      this.insertItem(this.config.get('startIndex') - 1, { behavior: 'instant', source: 'init' });

      // Finally make the slider visible
      this.boardWrapper.style.visibility = null;
    });
  }

  async #initItems () {
    for (const item of this.#userDefinedItems) {
      try {
        const ItemModule = await import(`../item/${item.tagName.toLowerCase()}.js`);
        const ItemClass = ItemModule.default;

        const itemInstance = new ItemClass(this);
        itemInstance.setElement(item);

        const boardListItem = document.createElement('li');
        this.boardList.appendChild(boardListItem);

        boardListItem.appendChild(item);

        if (item.getAttribute('data-message')) {
          const MessageModule = await import('../modules/message.js');
          const MessageClass = MessageModule.default;

          const messageInstance = new MessageClass(this);
          messageInstance.setMessage(item.getAttribute('data-message'));

          boardListItem.appendChild(messageInstance.getElement());
        }

        this.sliderItems.set([...this.boardList.children].indexOf(boardListItem), { instance: itemInstance, element: item, message: item.getAttribute('data-message') });
      } catch (error) {
        this.handleError(error, { module: 'slider', operation: 'initItems', element: item, tagName: item.tagName?.toLowerCase() });
      }
    }
  }

  async #initModules () {
    if (!this.config.has('module')) {
      return;
    }

    const moduleConfigValue = this.config.get('module');

    let moduleConfigArray;
    if (typeof moduleConfigValue === 'string' || moduleConfigValue instanceof String) {
      moduleConfigArray = moduleConfigValue.split(',').map(s => s.trim());
    } else {
      moduleConfigArray = moduleConfigValue;
    }

    if (!Array.isArray(moduleConfigArray) || !moduleConfigArray.length) {
      return;
    }

    this.#modules = new Set();

    // Access to the modules then initialize
    // Object.keys(moduleConfigArray).forEach(key => {
    for (const moduleName of moduleConfigArray) {
      try {
        const exportedModule = await import(`../modules/${moduleName}.js`);
        const Module = exportedModule.default;

        const ModuleInstance = new Module(this);
        this.#modules.add(ModuleInstance);

        if (ModuleInstance.append) {
          ModuleInstance.append();
        }
      } catch (error) {
        this.handleError(error, { module: 'slider', operation: 'initModules', moduleName });
      }
    }
  }

  #boardListContainerCalculateHeight () {
    const paddingTop = this.#aspectRatioManager.calculatePaddingTop();
    this.#boardListContainer.style.paddingTop = paddingTop;
  }

  #transitionOn () {
    this.boardList.style.transition = 'all 250ms ease 0ms';
  }

  #transitionOff () {
    this.boardList.style.transition = null;
  }

  insertItem (newIndex, { behavior = null, source = null } = {}) {
    if (this.activeIndex > newIndex && newIndex < 0 && this.config.get('loop')) {
      this.#prevLoopMotion();

      return;
    }

    if (this.activeIndex < newIndex && newIndex >= this.boardList.children.length && this.config.get('loop')) {
      this.#nextLoopMotion();

      return;
    }

    // Index
    if (newIndex < 0) {
      newIndex = 0;
    }

    if (newIndex >= this.boardList.children.length) {
      newIndex = this.boardList.children.length - 1;
    }

    // module hide;
    this.#triggerModuleHide(this.activeIndex);

    this.activeIndex = newIndex;

    // module show
    this.#triggerModuleInit(this.activeIndex);

    // Scroll
    const scrollAbsoluteX = this.boardList.firstElementChild.offsetWidth * this.activeIndex;

    if (!['smooth', 'instant', 'auto'].includes(behavior)) {
      behavior = 'smooth';
    }

    const scrollOptions = {
      left: scrollAbsoluteX,
      top: 0,
      behavior
    };

    // If there is a difference, move it
    if (this.boardList.scrollLeft !== scrollAbsoluteX) {
      this.boardListOnShift = true;
      this.boardList.scrollTo(scrollOptions);
    }
  }

  #triggerModuleHide (_index) {
    const itemData = this.sliderItems.get(this.activeIndex);
    if (!itemData) return;

    itemData.instance.hide();
  }

  #triggerModuleInit (newIndex) {
    // Pass newIndex to the modules
    if (this.#modules) {
      this.#modules.forEach(v => {
        if (v.insertItem != null) {
          v.insertItem(newIndex);
        }
      });
    }

    const itemData = this.sliderItems.get(newIndex);
    if (!itemData) return;

    itemData.instance.show();
  }

  prevItem ({ behavior = null, source = null } = {}) {
    if (this.#disabled) return;

    if (this.boardListOnShift) {
      this.#pendingMove = 'prev';

      return;
    }

    const targetIndex = this.activeIndex - 1;

    if (targetIndex < 0) {
      if (this.config.get('loop')) {
        this.#prevLoopMotion();

        return;
      } else {
        this.#prevEndMotion();

        return;
      }
    }

    this.insertItem(targetIndex, { behavior, source });
  }

  nextItem ({ behavior = null, source = null } = {}) {
    if (this.#disabled) return;

    if (this.boardListOnShift) {
      this.#pendingMove = 'next';

      return;
    }

    const targetIndex = this.activeIndex + 1;

    if (targetIndex >= this.boardList.children.length) {
      if (this.config.get('loop')) {
        this.#nextLoopMotion();

        return;
      } else {
        this.#nextEndMotion();

        return;
      }
    }

    this.insertItem(targetIndex, { behavior, source });
  }

  #prevEndMotion () {
    const boardRelativeDelta = this.boardList.firstElementChild.offsetWidth / 6;
    const staticDelta = 100;

    const finalDelta = Math.min(boardRelativeDelta, staticDelta);

    this.#endMotion(`${finalDelta}px`);
  }

  #nextEndMotion () {
    const boardRelativeDelta = this.boardList.firstElementChild.offsetWidth / 6;
    const staticDelta = 100;

    const finalDelta = Math.min(boardRelativeDelta, staticDelta);

    this.#endMotion(`-${finalDelta}px`);
  }

  #endMotion (positionWithUnit) {
    this.#transitionOn();
    this.boardList.style.transform = `translateX(${positionWithUnit})`;

    this.boardList.addEventListener('transitionend', () => {
      this.#transitionOn();
      this.boardList.style.transform = null;
    }, { once: true });
  }

  #prevLoopMotion () {
    this.#loopMotion('prev');
  }

  #nextLoopMotion () {
    this.#loopMotion('next');
  }

  #loopMotion (direction) {
    if (this.boardListOnShift) {
      return;
    }

    let firstMoveDeltaX, lastMoveDeltaX, targetIndex;

    if (direction === 'next') {
      const startPoint = this.boardList.scrollWidth - (this.boardList.scrollLeft + this.boardList.offsetWidth);
      this.boardList.style.transform = `translateX(${startPoint}px)`;
      this.boardList.style.overflow = 'hidden';

      firstMoveDeltaX = -this.boardList.firstElementChild.offsetWidth;
      lastMoveDeltaX = this.boardList.firstElementChild.offsetWidth;

      targetIndex = 0;
    }

    if (direction === 'prev') {
      const startPoint = -this.boardList.scrollLeft;
      this.boardList.style.transform = `translateX(${startPoint}px)`;
      this.boardList.style.overflow = 'hidden';

      firstMoveDeltaX = this.boardList.firstElementChild.offsetWidth;
      lastMoveDeltaX = -this.boardList.firstElementChild.offsetWidth;

      targetIndex = this.boardList.children.length - 1;
    }

    this.#transitionOn();
    this.boardList.style.transform = `translateX(${firstMoveDeltaX}px)`;

    this.boardList.addEventListener('transitionend', () => {
      this.insertItem(targetIndex, { behavior: 'instant', source: 'loopMotion' });

      this.boardList.style.transform = `translateX(${lastMoveDeltaX}px)`;

      globalThis.setTimeout(() => {
        this.#transitionOn();
        this.boardList.style.transform = null;
        this.boardList.style.overflow = null;
      }, 10);
    }, { once: true });
  }

  #touchStart (event) {
    if (this.#disabled) return;

    if (this.boardListOnShift) {
      return;
    }

    this.boardListOnShift = true;

    this.#touchStartX = event.touches[0].pageX;
    this.#touchDeltaX = 0;
    this.#touchChangeRatio = this.boardList.firstElementChild.offsetWidth / 4.5;
    this.#onTouch = true;
  }

  #touchMove (event) {
    if (!this.#onTouch) {
      return;
    }

    if (!this.config.get('loop')) {
      return;
    }

    this.#touchDeltaX = event.touches[0].pageX - this.#touchStartX;
  }

  #touchStop () {
    this.boardListOnShift = null;

    if (!this.config.get('loop')) {
      return;
    }

    this.#onTouch = null;

    if (this.activeIndex === 0 && this.#touchDeltaX > this.#touchChangeRatio) {
      this.insertItem(this.activeIndex - 1, { source: 'touchStop' });

      return;
    }

    if (this.activeIndex === (this.boardList.children.length - 1) && this.#touchDeltaX < -this.#touchChangeRatio) {
      this.insertItem(this.activeIndex + 1, { source: 'touchStop' });
    }
  }

  static SUPPORTED_TYPES = ['img', 'picture', 'div', 'video'];

  async add (element, index) {
    if (this.#disabled) return;

    if (!(element instanceof globalThis.HTMLElement)) {
      throw new TypeError('Minyatur: `add()` requires an HTMLElement.');
    }

    const tagName = element.tagName.toLowerCase();

    if (!Slider.SUPPORTED_TYPES.includes(tagName)) {
      throw new Error(
        `Minyatur: <${tagName}> is not a supported item type. Supported types: ${Slider.SUPPORTED_TYPES.map(t => `<${t}>`).join(', ')}.`
      );
    }

    try {
      const size = this.sliderItems.size;

      // Resolve index: undefined or out of range → append to end
      if (index == null || index > size) {
        index = size;
      } else {
        index = Math.max(0, index);
      }

      // Dynamic import for item type
      const ItemModule = await import(`../item/${tagName}.js`);
      const ItemClass = ItemModule.default;

      const itemInstance = new ItemClass(this);
      itemInstance.setElement(element);

      // Create <li> wrapper
      const boardListItem = document.createElement('li');
      boardListItem.appendChild(element);

      // Message overlay
      if (element.getAttribute('data-message')) {
        const MessageModule = await import('../modules/message.js');
        const MessageClass = MessageModule.default;

        const messageInstance = new MessageClass(this);
        messageInstance.setMessage(element.getAttribute('data-message'));

        boardListItem.appendChild(messageInstance.getElement());
      }

      // Insert into boardList DOM
      if (index < this.boardList.children.length) {
        this.boardList.insertBefore(boardListItem, this.boardList.children[index]);
      } else {
        this.boardList.appendChild(boardListItem);
      }

      // Rebuild sliderItems Map with new item at correct position
      const entries = [...this.sliderItems.entries()];
      this.sliderItems.clear();

      for (const [key, value] of entries) {
        if (key >= index) {
          this.sliderItems.set(key + 1, value);
        } else {
          this.sliderItems.set(key, value);
        }
      }

      this.sliderItems.set(index, { instance: itemInstance, element, message: element.getAttribute('data-message') });

      // Adjust activeIndex
      if (index <= this.activeIndex && size > 0) {
        this.activeIndex++;
      }

      // Notify modules
      if (this.#modules) {
        for (const mod of this.#modules) {
          if (mod.createButtons && this.sliderItems.size > 1) {
            mod.createButtons();
          }

          if (mod.addPreviewItem) {
            const sliderItem = this.sliderItems.get(index);
            await mod.addPreviewItem(sliderItem, index);
          }
        }
      }

      // Refresh active state
      this.#triggerModuleInit(this.activeIndex);
    } catch (error) {
      this.handleError(error, { module: 'slider', operation: 'add', element, tagName });
    }
  }

  remove (index) {
    if (this.#disabled) return;

    const size = this.sliderItems.size;

    if (size === 0) {
      return;
    }

    // Resolve index: undefined → last item, clamp to valid range
    if (index == null) {
      index = size - 1;
    } else {
      index = Math.max(0, Math.min(index, size - 1));
    }

    // Hide the item if it's currently active
    const itemData = this.sliderItems.get(index);
    if (itemData && index === this.activeIndex) {
      itemData.instance.hide();
    }

    // Remove <li> from DOM
    if (this.boardList.children[index]) {
      this.boardList.children[index].remove();
    }

    // Rebuild sliderItems Map without the removed index
    const entries = [...this.sliderItems.entries()];
    this.sliderItems.clear();

    for (const [key, value] of entries) {
      if (key < index) {
        this.sliderItems.set(key, value);
      } else if (key > index) {
        this.sliderItems.set(key - 1, value);
      }
    }

    const newSize = this.sliderItems.size;

    // Adjust activeIndex
    if (newSize === 0) {
      this.activeIndex = 0;
    } else if (index < this.activeIndex) {
      this.activeIndex--;
    } else if (this.activeIndex >= newSize) {
      this.activeIndex = newSize - 1;
    }

    // Notify modules
    if (this.#modules) {
      for (const mod of this.#modules) {
        if (mod.removePreviewItem) {
          mod.removePreviewItem(index);
        }

        if (mod.removeButtons && newSize <= 1) {
          mod.removeButtons();
        }
      }
    }

    // If items remain, scroll to active and refresh state
    if (newSize > 0) {
      const scrollAbsoluteX = this.boardList.firstElementChild.offsetWidth * this.activeIndex;
      this.boardList.scrollTo({ left: scrollAbsoluteX, top: 0, behavior: 'instant' });

      this.#triggerModuleInit(this.activeIndex);
    }
  }

  destroy () {
    // Remove global listener
    globalThis.removeEventListener('resize', this.#boardListContainerCalculateHeightHandler);

    // Remove boardList listeners
    this.boardList.removeEventListener('transitionstart', this.#transitionStartHandler);
    this.boardList.removeEventListener('transitionend', this.#transitionEndHandler);
    this.boardList.removeEventListener('touchstart', this.#touchStartHandler);
    this.boardList.removeEventListener('touchmove', this.#touchMoveHandler);
    this.boardList.removeEventListener('touchend', this.#touchStopHandler);
    this.boardList.removeEventListener('touchcancel', this.#touchStopHandler);
    this.boardList.removeEventListener('scroll', this.#scrollHandler);

    // Clear timeout
    if (this.#scrollEndTimer) {
      globalThis.clearTimeout(this.#scrollEndTimer);
    }

    // Destroy modules
    if (this.#modules) {
      for (const mod of this.#modules) {
        if (typeof mod.destroy === 'function') {
          mod.destroy();
        }
      }
      this.#modules.clear();
    }

    // Remove generated DOM
    this.boardWrapper.remove();

    // Clean up state
    delete this.mainContainer.__minyatur;
    this.mainContainer.classList.remove('minyatur');
    this.sliderItems.clear();
    this.config.clear();
  }

  enable () {
    this.#disabled = false;
    this.mainContainer.classList.remove('is-disabled');
  }

  disable () {
    this.#disabled = true;
    this.mainContainer.classList.add('is-disabled');
  }

  #printItemErrorMessage () {
    console.error('[Minyatur|Slider] There is no image to show.',
      '\n',
      'Please insert `div` inside of `slider container element` and then insert elements to the `div`.',
      '\n',
      'Example:',
      '\n',
      '<div id="minyatur-container">',
      '\n',
      '\t<div>',
      '\n',
      '\t\t<img src="source" />',
      '\n',
      '\t\t<img src="source" />',
      '\n',
      '\t</div>',
      '\n',
      '</div>'
    );
  }

  /**
   * Returns the Minyatur instance attached to the given element.
   * @param {Element} element - Container element or a child of it.
   * @returns {Slider|undefined} Minyatur instance or undefined.
   */
  static getInstance (element) {
    return element?.__minyatur ?? element?.closest('.minyatur')?.__minyatur;
  }

  /**
   * Static method to display documentation in the console.
   */
  static help () {
    const lines = helpData.map(({ text, style }) => [`%c${text}\n`, style]);
    const messages = lines.map(([text]) => text);
    const styles = lines.flatMap(([_, style]) => style || '');

    console.info(messages.join(''), ...styles);
  }
}

export default Slider;
