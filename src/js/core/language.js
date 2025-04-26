class Language {
  static words = new Map();
  static defaultLanguageCode = 'en';

  static async load (languageCode) {
    const loadLang = async (code) => {
      const module = await import(`../language/${code}.js`);
      
      return module.default;
    };

    try {
      const langData = await loadLang(languageCode);
      this.setAll(langData);
    } catch (err) {
      console.warn(`[i18n] '${languageCode}' not found, falling back to '${this.defaultLanguageCode}'`, err);
      const fallbackData = await loadLang(this.defaultLanguageCode);
      this.setAll(fallbackData);
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
    Object.entries(translationObject).forEach(([key, value]) => {
      this.set(key, value);
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
