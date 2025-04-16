import Module from '../core/module.js';
import Basic from './thumbnail/type/basic.js';
import Dot from './thumbnail/type/dot.js';
import Slider from './thumbnail/type/slider.js';

class Thumbnail extends Module {
  constructor (sliderInstance) {
    super(sliderInstance, 'thumbnail');

    // Load correct type from config
    const type = this.config.get('type');

    // Delegate to corresponding thumbnail type
    if (type === 'basic') return new Basic(sliderInstance);
    if (type === 'slider') return new Slider(sliderInstance);

    // Default to dot
    return new Dot(sliderInstance);
  }
}

export default Thumbnail;
