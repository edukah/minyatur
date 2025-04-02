import Module from '../core/module.js';

class Fullscreen extends Module {
  instances = new WeakMap();

  constructor (sliderInstance) {
    super(sliderInstance, 'fullscreen');

    this._eventRouter = this.eventRouter.bind(this);
    this.sliderInstance.boardWrapper.addEventListener('click', this._eventRouter);

    this._keyhandler = this.keyhandler.bind(this);
  }

  async eventRouter () {
    const boardChild = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex];
    if (!boardChild || !boardChild.firstElementChild) return;

    this.activeSliderItem = boardChild.firstElementChild;

    try {
      const importModule = await import(`./fullscreen/${this.activeSliderItem.tagName.toLowerCase()}.js`);
      const ImportDefaultClass = importModule.default;

      if (!this.mainWrapper) {
        this.init();
      }

      if (!this.instances.has(ImportDefaultClass)) {
        this.instances.set(ImportDefaultClass, new ImportDefaultClass(this.sliderInstance, this.mainWrapper));
      }

      this.activeClassInstance = this.instances.get(ImportDefaultClass);

      this.show();
    } catch (error) {
      this.sliderInstance.handleError(error, {
        module: 'fullscreen',
        operation: 'eventRouter',
        element: this.activeSliderItem
      });
    }
  }

  init () {
    this.containerId = 'id-' + Math.floor((1 + Math.random()) * 0x10 ** 10).toString(16).substring(1);

    this.mainWrapper = document.createElement('div');
    this.mainWrapper.id = this.containerId;
    this.mainWrapper.classList.add('minyatur-fullscreen');

    this.mainWrapper.addEventListener('dblclick', event => event.preventDefault());
    this.mainWrapper.addEventListener('click', event => event.preventDefault());

    // Disable pich zoom
    this.mainWrapper.addEventListener('touchmove', event => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, { passive: false });
    // this.mainWrapper.addEventListener('touchmove', event => event.preventDefault(), { passive: false });
    // this.mainWrapper.addEventListener('touchend', event => event.preventDefault(), { passive: false });

    this.backcloth = document.createElement('div');
    this.backcloth.classList.add('minyatur-fullscreen__backcloth');
    this.mainWrapper.appendChild(this.backcloth);

    this.closeButtonContainer = document.createElement('div');
    this.closeButtonContainer.classList.add('minyatur-fullscreen__close-button-container');
    this.closeButtonContainer.title = this.sliderInstance.language.get('close');
    this.mainWrapper.appendChild(this.closeButtonContainer);

    this._hide = this.hide.bind(this);

    this.closeButton = document.createElement('button');
    this.closeButton.innerHTML = '<i class="ph-bold ph-x" style="font-size: 2em"></i>';
    // this.closeButton.addEventListener('touchstart', this._hide, { capture: false });
    this.closeButton.addEventListener('click', this._hide, { capture: false });
    this.closeButtonContainer.appendChild(this.closeButton);

    document.body.appendChild(this.mainWrapper);
  }

  show () {
    if (!this._keyhandlerActive) {
      document.addEventListener('keydown', this._keyhandler);
      this._keyhandlerActive = true;
    }

    document.body.style.overflow = 'hidden';

    this.mainWrapper.classList.remove('is-hidden');
    this.activeClassInstance.show();
  }

  hide () {
    document.removeEventListener('keydown', this._keyhandler);
    this._keyhandlerActive = false;
    document.body.style.overflow = null;

    this.mainWrapper.classList.add('is-hidden');
    this.activeClassInstance.hide();
  }

  destroy () {
    this.sliderInstance.boardWrapper.removeEventListener('click', this._eventRouter);
    document.removeEventListener('keydown', this._keyhandler);

    if (this.activeClassInstance && typeof this.activeClassInstance.destroy === 'function') {
      this.activeClassInstance.destroy();
    }

    if (this.mainWrapper) {
      this.mainWrapper.remove();
    }
  }

  keyhandler (event) {
    const isEscape = 'key' in event ? (event.key === 'Escape' || event.key === 'Esc') : (event.keyCode === 27);

    if (isEscape) {
      this.hide();
    }
  }
}

export default Fullscreen;