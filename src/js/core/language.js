class Language {
  static words = new Map();
  static defaultLanguageCode = 'en';

  static async load (languageCode) {
    try {
      const module = await import(`../language/${languageCode}.js`);
      this.setAll(module.default);
    } catch (e) {
      try {
        const fallbackModule = await import(`../language/${this.defaultLanguageCode}.js`);
        this.setAll(fallbackModule.default);
      } catch (e) {
        console.error("Failed to load both the selected and fallback language modules.");
      }
    }
  }

  static get (key) {
    return Language.words.get(key);
  }

  static getAll () {
    return Language.words;
  }

  static set (key, value) {
    return Language.words.set(key, value);
  }

  static setAll (translationObject) {
    Object.entries(translationObject).forEach(elem => {
      this.set(elem[0], elem[1]);
    });
  }

  static delete (key) {
    return Language.words.delete(key);
  }
}

if (globalThis.lang != null) {
  Language.load(globalThis.lang);
}

export default Language;