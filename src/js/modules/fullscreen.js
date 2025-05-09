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
    this.activeSliderItem = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex].firstElementChild;

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
      // console.error(`An error occurred while loading the fullscreen module: ${error.message}`);
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
    this.closeButton.innerHTML = '<i class="fa-solid fa-xmark fa-2x"></i>';
    // this.closeButton.addEventListener('touchstart', this._hide, { capture: false });
    this.closeButton.addEventListener('click', this._hide, { capture: false });
    this.closeButtonContainer.appendChild(this.closeButton);

    document.body.appendChild(this.mainWrapper);
  }

  show () {
    document.addEventListener('keydown', this._keyhandler);
    document.body.style.overflow = 'hidden';

    this.mainWrapper.classList.remove('hidden');
    this.activeClassInstance.show();
  }

  hide () {
    document.removeEventListener('keydown', this._keyhandler);
    document.body.style.overflow = null;

    this.mainWrapper.classList.add('hidden');
    this.activeClassInstance.hide();
  }

  keyhandler (event) {
    let isEscape = false;

    if ('key' in event) {
      isEscape = (event.key === 'Escape' || event.key === 'Esc');
    } else {
      isEscape = (event.keyCode === 27);
    }

    if (isEscape) {
      this.hide();
    }
  }
}

export default Fullscreen;