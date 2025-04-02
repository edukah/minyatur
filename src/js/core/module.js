// Base class for modules that support both JS and HTML config
class Module {
  constructor (sliderInstance, moduleName) {
    this.sliderInstance = sliderInstance;
    this.config = new Map();

    // Load config from JS object: config[moduleName] = { key: value }
    const jsConfig = sliderInstance.config.get(moduleName);
    if (jsConfig && typeof jsConfig === 'object') {
      for (const [key, value] of Object.entries(jsConfig)) {
        this.config.set(key, value);
      }
    }

    // Override or supplement with HTML data attributes: data-moduleName-*
    const attrs = sliderInstance.mainContainer.attributes;
    for (const attr of attrs) {
      if (attr.name.startsWith(`data-${moduleName}-`)) {
        const key = attr.name
          .replace(`data-${moduleName}-`, '')
          .split('-')
          .map((part, i) => i === 0 ? part : part[0].toUpperCase() + part.slice(1))
          .join('');

        this.config.set(key, attr.value);
      }
    }
  }
}

export default Module;
