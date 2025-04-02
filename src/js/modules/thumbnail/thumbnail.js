import Module from '../../core/module.js';

class Thumbnail extends Module {
  constructor (sliderInstance) {
    super(sliderInstance, 'thumbnail');

    // Step 1: Load from JS config (config.thumbnail)
    const jsConfig = sliderInstance.config.get('thumbnail');
    if (jsConfig && typeof jsConfig === 'object') {
      Object.entries(jsConfig).forEach(([key, value]) => {
        this.config.set(key, value);
      });
    }

    // Step 2: Override/supplement with HTML attributes (data-thumbnail-*)
    const nodeMap = this.sliderInstance.mainContainer.attributes;
    for (let i = nodeMap.length - 1; i >= 0; i--) {
      const attributeName = nodeMap[i].name;
      if (attributeName.startsWith('data-thumbnail-')) {
        const configName = attributeName
          .replace('data-thumbnail-', '')
          .split('-')
          .map((part, index) => index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1))
          .join('');

        this.config.set(configName, nodeMap[i].value);
      }
    }

    // External container
    if (this.config.has('id') && document.getElementById(this.config.get('id'))) {
      this.thumbnailWrapper = document.getElementById(this.config.get('id'));
      while (this.thumbnailWrapper.firstChild) {
        this.thumbnailWrapper.removeChild(this.thumbnailWrapper.lastChild);
      }
    } else {
      this.thumbnailWrapper = document.createElement('div');
      this.sliderInstance.mainContainer.appendChild(this.thumbnailWrapper);
    }
  }

  append () {
    return true;
  }

  insertItem (index) {
    [].forEach.call(this.thumbnailItems, item => {
      if (item.classList.contains('is-active')) {
        item.classList.remove('is-active');
      }
    });

    if (this.thumbnailItems[index]) {
      this.thumbnailItems[index].classList.add('is-active');
    }
  }

  clickHandler (attachedElem, event) {
    const index = Array.from(this.thumbnailItems).indexOf(attachedElem);

    if (index < 0) return;

    this.insertItem(index);

    this.sliderInstance.insertItem(index, { behavior: 'auto' });
  }

  async previewGenerator (source) {
    this.previewSource = source;

    // add slider items to thumbnail
    const sliderItems = [...this.sliderInstance.sliderItems.values()];

    for (const sliderItem of sliderItems) {
      await this.addPreviewItem(sliderItem);
    }
  }

  async addPreviewItem (sliderItem, atIndex) {
    const source = this.previewSource;

    try {
      const importModule = await import(`./preview/${sliderItem.element.tagName.toLowerCase()}.js`);
      const ImportModuleClass = importModule.default;

      const thumbnailListItem = ImportModuleClass[source](sliderItem);

      const clickHandler = this.clickHandler.bind(this, thumbnailListItem);
      thumbnailListItem.addEventListener('click', clickHandler);

      if (atIndex != null && atIndex < this.thumbnailList.children.length) {
        this.thumbnailList.insertBefore(thumbnailListItem, this.thumbnailList.children[atIndex]);
      } else {
        this.thumbnailList.appendChild(thumbnailListItem);
      }
    } catch (error) {
      this.sliderInstance.handleError(error, {
        module: 'thumbnail',
        operation: 'addPreviewItem',
        element: sliderItem.element,
        tagName: sliderItem.element?.tagName?.toLowerCase()
      });

      const thumbnailListItem = document.createElement('li');

      const thumbnailListItemContent = document.createElement('div');
      thumbnailListItemContent.classList.add('blank-item');
      thumbnailListItemContent.style.width = '100%';
      thumbnailListItemContent.style.height = '100%';

      thumbnailListItem.appendChild(thumbnailListItemContent);

      if (atIndex != null && atIndex < this.thumbnailList.children.length) {
        this.thumbnailList.insertBefore(thumbnailListItem, this.thumbnailList.children[atIndex]);
      } else {
        this.thumbnailList.appendChild(thumbnailListItem);
      }
    }
  }

  destroy () {
    if (!this.config.has('id')) {
      this.thumbnailWrapper.remove();
    } else {
      while (this.thumbnailWrapper.firstChild) {
        this.thumbnailWrapper.removeChild(this.thumbnailWrapper.lastChild);
      }
    }
  }

  removePreviewItem (index) {
    if (this.thumbnailList.children[index]) {
      this.thumbnailList.children[index].remove();
    }
  }
}

export default Thumbnail;
