class Picture {
  static observedItems = new Set();
  static resizeInitialized = false;

  static image (sliderItem) {
    if (!this.resizeInitialized) {
      this.initializeResizeObserver();
    }

    const pictureElement = sliderItem.element;
    const imgElement = pictureElement.querySelector('img');

    const thumbnailListItem = document.createElement('li');
    const thumbnailImage = document.createElement('img');

    thumbnailImage.src = imgElement.currentSrc || imgElement.src;

    thumbnailListItem.appendChild(thumbnailImage);

    this.observedItems.add({ pictureElement, imgElement, thumbnailImage });

    return thumbnailListItem;
  }

  static dot () {
    const dotItem = document.createElement('li');
    
    return dotItem;
  }

  static resetImages () {
    for (const { imgElement, thumbnailImage } of this.observedItems) {
      thumbnailImage.src = imgElement.currentSrc || imgElement.src;
    }
  }

  static initializeResizeObserver () {
    if (this.resizeInitialized) return;

    window.addEventListener('resize', () => {
      this.resetImages();
    });

    this.resizeInitialized = true;
  }
}

export default Picture;
