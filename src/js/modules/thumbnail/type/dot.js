import Thumbnail from '../thumbnail.js';

class Dot extends Thumbnail {
  constructor (sliderInstance) {
    super(sliderInstance);

    this.thumbnailWrapper.classList.add('minyatur-thumbnail__dot');

    this.thumbnailList = document.createElement('ul');
    this.thumbnailWrapper.appendChild(this.thumbnailList);

    this.thumbnailItems = this.thumbnailList.children;

    this.previewGenerator('dot');

    return this;
  }
}

export default Dot;
