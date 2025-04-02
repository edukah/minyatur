import Module from '../core/module.js';

class Message extends Module {
  constructor (sliderInstance) {
    super(sliderInstance, 'message');

    this._calculateFontSize = Message.calculateFontSize.bind(null, this.sliderInstance);
    globalThis.addEventListener('resize', this._calculateFontSize);
  }

  destroy () {
    globalThis.removeEventListener('resize', this._calculateFontSize);
  }

  setMessage (message) {
    this.message = message;
  }

  getElement () {
    this.boardListItemMessageWrapper = document.createElement('div');
    this.boardListItemMessageWrapper.classList.add('minyatur-message__overlay');

    if (this.sliderInstance.config.has('contentWidthLimit')) {
      this.boardListItemMessageWrapper.style.maxWidth = this.sliderInstance.config.get('contentWidthLimit');
    }

    this.boardListItemMessageContainer = document.createElement('div');
    this.boardListItemMessageContainer.classList.add('minyatur-message__container');
    this.boardListItemMessageContainer.appendChild(document.createTextNode(this.message));

    this.boardListItemMessageWrapper.appendChild(this.boardListItemMessageContainer);

    Message.calculateFontSize(this.sliderInstance);

    return this.boardListItemMessageWrapper;
  }

  static calculateFontSize (sliderInstance) {
    const minSide = Math.min(sliderInstance.boardWrapper.offsetWidth, sliderInstance.boardWrapper.offsetHeight);
    const fontSize = `${Math.floor(minSide / 10)}px`;

    const containers = document.querySelectorAll('.minyatur-message__container');
    for (const container of containers) {
      container.style.fontSize = fontSize;
    }
  }
}

export default Message;