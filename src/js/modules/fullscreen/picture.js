import Img from './img.js';

class Picture extends Img {
  constructor (sliderInstance, mainWrapper) {
    super(sliderInstance, mainWrapper);

    this._resizeListener = this.resizeListener.bind(this);
    this._resizeTimeout = null;

    window.addEventListener('resize', this._resizeListener);
  }

  imageInit () {
    const activeSliderItem = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex].firstElementChild;
    this.activeSliderItemImg = activeSliderItem.querySelector('img');

    this.imageElem.src = this.activeSliderItemImg?.currentSrc || this.activeSliderItemImg?.src || '';
    this.imageElem.setAttribute('data-zoom-max-scale', '2');

    this.zoomOut();
  }

  resizeListener () {
    if (this._resizeTimeout) {
      window.clearTimeout(this._resizeTimeout);
    }

    this._resizeTimeout = window.setTimeout(() => {
      const activeSliderItem = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex].firstElementChild;
      this.activeSliderItemImg = activeSliderItem.querySelector('img');
      const activeSrc = this.activeSliderItemImg?.currentSrc || this.activeSliderItemImg?.src || '';

      if (this.imageElem.src !== activeSrc) {
        this.imageInit();
      }
    }, 100); // 200ms bekliyoruz, istersen 150-300 yaparız
  }

  /* destroy () {
    window.removeEventListener('resize', this._resizeListener);
    if (this._resizeTimeout) {
      window.clearTimeout(this._resizeTimeout);
      this._resizeTimeout = null;
    }
  } */
}

export default Picture;

