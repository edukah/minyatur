import Module from '../core/module.js';

class Message extends Module {
  static resizeInitialized = false;

  constructor (sliderInstance) {
    super(sliderInstance, 'message');
  }

  setMessage (message) {
    this.message = message;
  }

  init () {
    if (!Message.resizeInitialized) {
      window.addEventListener('resize', Message.calculateFontSize);
      Message.resizeInitialized = true;
    }
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

    Message.calculateFontSize();

    return this.boardListItemMessageWrapper;
  }

  static calculateFontSize () {
    const wrappers = document.querySelectorAll('.minyatur-message__overlay');
    for (const wrapper of wrappers) {
      const container = wrapper.querySelector('.minyatur-message__container');
      if (!container) continue;

      const width = wrapper.offsetWidth;
      const height = wrapper.offsetHeight;

      const minSide = Math.min(width, height);

      container.style.fontSize = `${Math.floor(minSide / 12)}px`;
    }
  }
}

export default Message;