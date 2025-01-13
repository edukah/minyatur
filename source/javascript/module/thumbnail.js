import Basic from './thumbnail/type/basic.js';
import Dot from './thumbnail/type/dot.js';
import Slider from './thumbnail/type/slider.js';

class Thumbnail {
  config = new Map();

  constructor(sliderInstance) {
    this.sliderInstance = sliderInstance;

    // Get config from attributes
    const nodeMap = this.sliderInstance.mainContainer.attributes;
    for (let i = nodeMap.length - 1; i >= 0; i--) {
      const attributeName = nodeMap[i].name;

      if (attributeName.search('thumbnail-') !== -1) {
        const configName = attributeName.split('thumbnail-').pop().split('-').map((value, index) => {
          if (index > 0) {
            return value[0].toUpperCase() + value.slice(1).toLowerCase();
          }

          return value;
        }).join();

        this.config.set(configName, nodeMap[i].value);
      }
    }

    if (this.config.has('type') && this.config.get('type') === 'basic') {
      return new Basic(sliderInstance);
    }

    if (this.config.has('type') && this.config.get('type') === 'slider') {
      return new Slider(sliderInstance);
    }

    return new Dot(sliderInstance);
  }
}

export default Thumbnail;
