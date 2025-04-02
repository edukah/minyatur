import Module from '../core/module.js';

class Control extends Module {
  constructor (sliderInstance) {
    super(sliderInstance, 'control');

    if (this.sliderInstance.sliderItems.size > 1) {
      this.createButtons();
    }
  }

  createButtons () {
    if (this.buttonContainer) {
      return;
    }

    this.buttonContainer = document.createElement('div');
    this.buttonContainer.classList.add('minyatur__button-container');
    this.sliderInstance.boardWrapper.appendChild(this.buttonContainer);

    if (this.sliderInstance.config.has('contentWidthLimit')) {
      this.buttonContainer.style.maxWidth = this.sliderInstance.config.get('contentWidthLimit');
    }

    this.prevButton = document.createElement('div');
    this.prevButton.classList.add('minyatur__button--prev');
    this.buttonContainer.appendChild(this.prevButton);

    this.nextButton = document.createElement('div');
    this.nextButton.classList.add('minyatur__button--next');
    this.buttonContainer.appendChild(this.nextButton);

    this._prevItem = this.prevItem.bind(this);
    this.prevButton.addEventListener('click', this._prevItem);

    this._nextItem = this.nextItem.bind(this);
    this.nextButton.addEventListener('click', this._nextItem);
  }

  removeButtons () {
    if (!this.buttonContainer) {
      return;
    }

    this.prevButton.removeEventListener('click', this._prevItem);
    this.nextButton.removeEventListener('click', this._nextItem);

    this.buttonContainer.remove();
    this.buttonContainer = null;
    this.prevButton = null;
    this.nextButton = null;
  }

  destroy () {
    this.removeButtons();
  }

  prevItem (event) {
    this.sliderInstance.prevItem({ source: 'button' });
    event.stopPropagation();
  }

  nextItem (event) {
    this.sliderInstance.nextItem({ source: 'button' });
    event.stopPropagation();
  }
}

export default Control;
