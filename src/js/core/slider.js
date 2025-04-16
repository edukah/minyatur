import DEFAULTS from '../config.js';
import Language from './language.js';
import defaultStyle from '!!css-loader?{"sourceMap":false,"exportType":"string"}!sass-loader?{"api":"modern"}!../../scss/main.scss';

class Slider {
  sliderItems = new Map();
  config = new Map();

  constructor (targetOrConfig = {}) {
    this.activeIndex = 0;
    this.boardListOnShift = null;

    if (!targetOrConfig.target) throw new Error('Minyatur: `target` parameter is required.');

    this.mainContainer = typeof targetOrConfig.target === 'string' ? document.querySelector(targetOrConfig.target) : targetOrConfig.target;
    if (!(this.mainContainer instanceof window.HTMLElement)) {
      throw new Error('Minyatur: Please provide a valid DOM element or selector.');
    }

    this.mainContainer.classList.add('minyatur');
    this.mainContainer.__minyatur = this;

    this.mergeConfig(targetOrConfig);

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
    this.userDefinedItems = targetOrConfig.items?.length ? targetOrConfig.items : [...this.mainContainer.firstElementChild.children || []];

    if (!this.userDefinedItems.length) {
      this.printItemErrorMessage();
      
      return;
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
    this.boardListContainer = document.createElement('div');
    this.boardListContainer.classList.add('minyatur-board-list-container');
    this.boardListContainer.style.overflow = 'hidden';
    this.boardListContainer.style.height = '0';
    this.boardWrapper.appendChild(this.boardListContainer);

    // Since the measurement properties return values after adding the BoardContainer as a child, values such as ratioPercent, maxWidth, maxHeight of the slider are calculated and evaluated here.
    if (this.config.get('maxWidth') != null) {
      this.boardWrapper.style.maxWidth = this.config.get('maxWidth');
    }

    this.boardListContainerCalculateHeight();

    this._boardListContainerCalculateHeight = this.boardListContainerCalculateHeight.bind(this);
    window.addEventListener('resize', this._boardListContainerCalculateHeight);

    // Generate boardlist
    this.boardList = document.createElement('ul');

    // Transition Events
    this.boardList.addEventListener('transitionstart', () => {
      this.boardListOnShift = true;
    });
    this.boardList.addEventListener('transitionend', () => {
      this.boardListOnShift = null;

      this.transitionOff();
    });

    // touchstart
    this._touchStart = this.touchStart.bind(this);
    this.boardList.addEventListener('touchstart', this._touchStart, { passive: true });

    // touchmove
    this._touchMove = this.touchMove.bind(this);
    this.boardList.addEventListener('touchmove', this._touchMove, { passive: false });

    // touchend and touchcancel
    this._touchStop = this.touchStop.bind(this);
    this.boardList.addEventListener('touchend', this._touchStop, { passive: true });
    this.boardList.addEventListener('touchcancel', this._touchStop, { passive: true });

    // End of scroll change scrollIndex
    this.boardList.addEventListener('scroll', () => {
      if (this.scrollEndTimer) {
        window.clearTimeout(this.scrollEndTimer);
      }

      if (this.boardListOnShift) {
        return;
      }

      this.scrollEndTimer = window.setTimeout(() => {
        const scrollIndex = Math.round(this.boardList.scrollLeft / this.boardList.firstElementChild.offsetWidth);

        if (this.activeIndex !== scrollIndex) {
          this.insertItem(scrollIndex, { behavior: 'smooth', source: 'scrollEvent' });
        }
      }, 70);
    });

    this.boardListContainer.appendChild(this.boardList);

    this.init();

    return {
      next: ({ behavior } = {}) => { this.nextItem({ behavior, source: 'api' }); },
      prev: ({ behavior } = {}) => { this.prevItem({ behavior, source: 'api' }); },
      insert: (index, { behavior } = {}) => { this.insertItem(index, { behavior, source: 'api' }); }
    };
  }

  mergeConfig (customConfig) {
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

  async init () {
    await this.initItems();
    await this.initModules();

    if (!this.sliderItems.size) {
      this.printItemErrorMessage();

      return;
    }

    // DOM tamamen yerleştirildikten sonra aktif sınıfı ekle
    window.requestAnimationFrame(() => {
      this.insertItem(this.config.get('startIndex') - 1, { behavior: 'instant', source: 'init' });

      // Finally make the slider visible
      this.boardWrapper.style.visibility = null;
    });
  }

  async initItems () {
    for (const item of this.userDefinedItems) {
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
        console.warn(error);
      }
    }
  }

  async initModules () {
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

    this.modules = new Set();

    // Access to the modules then initialize
    // Object.keys(moduleConfigArray).forEach(key => {
    for (const moduleName of moduleConfigArray) {
      try {
        const exportedModule = await import(`../modules/${moduleName}.js`);
        const Module = exportedModule.default;

        const ModuleInstance = new Module(this);
        this.modules.add(ModuleInstance);

        if (ModuleInstance.append) {
          ModuleInstance.append();
        }
      } catch (error) {
        console.warn(error.message);
      }
    }
  }

  boardListContainerCalculateHeight () {
    const ratioPercent = this.config.get('aspectRatio').split(':');
    const calculatedHeight = (this.boardWrapper.offsetWidth / ratioPercent[0]) * ratioPercent[1];

    if (this.config.get('maxHeight') == null || (this.boardListContainer.offsetHeight <= parseInt(this.config.get('maxHeight')) && calculatedHeight <= parseInt(this.config.get('maxHeight')))) {
      this.boardListContainer.style.paddingTop = `${100 / (ratioPercent[0] / ratioPercent[1])}%`;
    } else {
      this.boardListContainer.style.paddingTop = this.config.get('maxHeight');
    }
  }

  transitionOn () {
    this.boardList.style.transition = 'all 250ms ease 0ms';
  }

  transitionOff () {
    this.boardList.style.transition = null;
  }

  insertItem (newIndex, { behavior = null, _source = null } = {}) {
    if (this.activeIndex > newIndex && newIndex < 0 && this.config.get('loop')) {
      this.prevLoopMotion();

      return;
    }

    if (this.activeIndex < newIndex && newIndex >= this.boardList.children.length && this.config.get('loop')) {
      this.nextLoopMotion();

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
    this.triggerModuleHide(this.activeIndex);

    this.activeIndex = newIndex;

    // module show
    this.triggerModuleInit(this.activeIndex);

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
      this.boardList.scrollTo(scrollOptions);
    }
  }

  triggerModuleHide (_index) {
    // Hide method, oldIndex element
    this.sliderItems.get(this.activeIndex).instance.hide();
  }

  triggerModuleInit (newIndex) {
    // Pass newIndex to the modules
    this.modules.forEach(v => {
      if (v.insertItem != null) {
        v.insertItem(newIndex);
      }
    });

    // Show method, newIndex element
    this.sliderItems.get(newIndex).instance.show();
  }

  prevItem ({ behavior = null, source = null } = {}) {
    if (this.boardListOnShift) {
      return;
    }

    const targetIndex = this.activeIndex - 1;

    if (targetIndex < 0) {
      if (this.config.get('loop')) {
        this.prevLoopMotion();

        return;
      } else {
        this.prevEndMotion();

        return;
      }
    }

    this.insertItem(targetIndex, { behavior, source });
  }

  nextItem ({ behavior = null, source = null } = {}) {
    if (this.boardListOnShift) {
      return;
    }

    const targetIndex = this.activeIndex + 1;

    if (targetIndex >= this.boardList.children.length) {
      if (this.config.get('loop')) {
        this.nextLoopMotion();

        return;
      } else {
        this.nextEndMotion();

        return;
      }
    }

    this.insertItem(targetIndex, { behavior, source });
  }

  prevEndMotion () {
    const boardRelativeDelta = this.boardList.firstElementChild.offsetWidth / 6;
    const staticDelta = 100;

    const finalDelta = Math.min(boardRelativeDelta, staticDelta);

    this.endMotion(`${finalDelta}px`);
  }

  nextEndMotion () {
    const boardRelativeDelta = this.boardList.firstElementChild.offsetWidth / 6;
    const staticDelta = 100;

    const finalDelta = Math.min(boardRelativeDelta, staticDelta);

    this.endMotion(`-${finalDelta}px`);
  }

  endMotion (positionWithUnit) {
    this.transitionOn();
    this.boardList.style.transform = `translateX(${positionWithUnit})`;

    this.boardList.addEventListener('transitionend', () => {
      this.transitionOn();
      this.boardList.style.transform = null;
    }, { once: true });
  }

  prevLoopMotion () {
    this.loopMotion('prev');
  }

  nextLoopMotion () {
    this.loopMotion('next');
  }

  loopMotion (direction) {
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

    this.transitionOn();
    this.boardList.style.transform = `translateX(${firstMoveDeltaX}px)`;

    this.boardList.addEventListener('transitionend', () => {
      this.insertItem(targetIndex, { behavior: 'instant', source: 'loopMotion' });

      this.boardList.style.transform = `translateX(${lastMoveDeltaX}px)`;

      window.setTimeout(() => {
        this.transitionOn();
        this.boardList.style.transform = null;
        this.boardList.style.overflow = null;
      }, 10);
    }, { once: true });
  }

  touchStart (event) {
    if (this.boardListOnShift) {
      return;
    }

    this.boardListOnShift = true;

    this.touchStartX = event.touches[0].pageX;
    this.touchChangeRatio = this.boardList.firstElementChild.offsetWidth / 4.5;
    this.onTouch = true;
  }

  touchMove (event) {
    if (!this.onTouch) {
      return;
    }

    if (!this.config.get('loop')) {
      return;
    }

    this.touchDeltaX = event.touches[0].pageX - this.touchStartX;
  }

  touchStop () {
    this.boardListOnShift = null;

    if (!this.config.get('loop')) {
      return;
    }

    this.onTouch = null;

    if (this.activeIndex === 0 && this.touchDeltaX > this.touchChangeRatio) {
      this.onTouch = null;

      this.insertItem(this.activeIndex - 1, { source: 'touchStop' });

      return;
    }

    if (this.activeIndex === (this.boardList.children.length - 1) && this.touchDeltaX < -this.touchChangeRatio) {
      this.onTouch = null;

      this.insertItem(this.activeIndex + 1, { source: 'touchStop' });
    }
  }

  isTouch () {
    if ('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
      return true;
    }

    const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    const mq = function (query) {
      return window.matchMedia(query).matches;
    };

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    mq(query);
  }

  static printItemErrorMessage () {
    console.error('Minyatur Error: There is no image to show.',
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

  static manual () {
    const lines = [
      ['%c====================  Minyatur Slider Manual  ====================%c\n\n', ['color: #6c5ce7; font-weight: bold;', '']],

      ['%cHow to initialize (JS):%c\n', ['color: #00b894; font-weight: bold;', '']],
      [`new Minyatur({\n  target: '#slider',\n  loop: true,\n  languageCode: 'en',\n  aspectRatio: '16:9',\n  module: ['thumbnail', 'fullscreen', 'message', 'control', 'mouse', 'zoom'],\n  thumbnail: {\n    type: 'slider',\n    id: 'thumbs'\n  },\n  zoom: {\n    expandedZoom: true\n  }\n});\n\n`, []],

      ['%cHow to configure via HTML:%c\n', ['color: #00b894; font-weight: bold;', '']],
      [`<div id="slider"\n     data-minyatur-aspect-ratio="16:9"\n     data-minyatur-module="thumbnail,fullscreen,message,zoom"\n     data-minyatur-thumbnail-type="slider"\n     data-thumbnail-id="thumbs">\n  <img src="1.jpg" data-message="First image" />\n  <img src="2.jpg" data-message="Second image" />\n</div>\n\n`, []],

      ['%cAvailable Config Keys:%c\n', ['color: #00cec9; font-weight: bold;', '']],
      [`aspectRatio         string          Slider display ratio (e.g. 16:9)\n` +
       `maxWidth            string|null     Max width of container\n` +
       `maxHeight           string|null     Max height of container\n` +
       `contentWidthLimit   string          Button container limit\n` +
       `loop                boolean         Enables circular sliding\n` +
       `startIndex          number          Initial index (1-based)\n` +
       `styleAutoload       boolean         Load default CSS\n` +
       `languageCode        string          Language key (e.g. en, tr)\n` +
       `module              string[]        List of modules to activate\n\n`, []],

      ['%cModule-Specific Options:%c\n', ['color: #e17055; font-weight: bold;', '']],
      [`thumbnail.type       string          dot | slider | basic\n` +
         `thumbnail.id         string|null     ID of thumbnail container\n` +
         `zoom.expandedZoom    boolean         Enables larger zoom area\n\n`, []],

      ['%cNotes:%c\n', ['color: #636e72; font-weight: bold;', '']],
      [`- JavaScript config values override HTML data-* attributes.\n` +
           `- All config values are optional unless required by a module.\n` +
           `- Use data-minyatur-* or JS config depending on your setup.\n\n`, []],

      ['%c============================================================%c\n', ['color: #6c5ce7;', '']]
    ];

    const message = lines.map(([text]) => text).join('');
    const styles = lines.flatMap(([_, styles = []]) => styles);
    console.log(message, ...styles);
  }
}

export default Slider;