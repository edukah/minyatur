import Module from '../../core/module.js';

class Div extends Module {
  constructor (sliderInstance, mainWrapper) {
    super(sliderInstance, 'fullscreen');

    this.mainWrapper = mainWrapper;
  }

  init () {
    // div wrapper
    this.divWrapper = document.createElement('div');
    this.divWrapper.classList.add('minyatur-fullscreen_div__wrapper');

    // div container
    this.divContainer = document.createElement('div');
    this.divContainer.classList.add('minyatur-fullscreen_div__container');

    this.divWrapper.appendChild(this.divContainer);

    // append to root
    this.mainWrapper.appendChild(this.divWrapper);
  }

  show () {
    if (this.divWrapper == null) {
      this.init();
    }

    while (this.divContainer.firstChild) {
      this.divContainer.removeChild(this.divContainer.lastChild);
    }

    const activeSliderItem = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex].firstElementChild;
    const elementClone = activeSliderItem.cloneNode(true);

    // aspect ratio from settings
    const ratioPercent = this.sliderInstance.config.get('aspectRatio').split(':');
    const calculatedHeight = Math.abs(100 / ratioPercent[0] * ratioPercent[1]);

    this.divContainer.style.paddingTop = `${calculatedHeight}%`;
    this.divContainer.appendChild(elementClone);

    this.divWrapper.classList.remove('is-hidden');
  }

  hide () {
    this.divWrapper.classList.add('is-hidden');
  }
}

export default Div;
