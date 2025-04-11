import Module from '../core/module.js';

class Message extends Module {
  messsage = '';

  constructor (sliderInstance) {
    super(sliderInstance, 'message');
  }

  setMessage (messsage) {
    this.messsage = messsage;
  }

  getElement () {
    // Wrapper'ı buraya sadece contentWidthLimit ekleyebilmek için koyuyoruz. contentWidthLimit kaldırılırsa wrapper'de kaldırılabilir.
    this.boardListItemMessageWrapper = document.createElement('div');
    this.boardListItemMessageWrapper.classList.add('minyatur-on-image-message-wrapper');

    if (this.sliderInstance.config.has('contentWidthLimit')) {
      this.boardListItemMessageWrapper.style.maxWidth = this.sliderInstance.config.get('contentWidthLimit');
    }

    this.boardListItemMessageContainer = document.createElement('div');
    this.boardListItemMessageContainer.classList.add('minyatur-on-image-message-container');
    this.boardListItemMessageContainer.appendChild(document.createTextNode(this.messsage));

    this.boardListItemMessageWrapper.appendChild(this.boardListItemMessageContainer);

    this._calculateFontSize = this.calculateFontSize.bind(this);
    window.addEventListener('resize', this._calculateFontSize);

    this.calculateFontSize();

    return this.boardListItemMessageWrapper;
  }

  calculateFontSize () {
    const minimumLenght = Math.min(this.sliderInstance.boardWrapper.offsetWidth, this.sliderInstance.boardWrapper.offsetHeight);

    this.boardListItemMessageContainer.style.fontSize = `${parseInt(minimumLenght) / 12}px`;
  }
}

export default Message;