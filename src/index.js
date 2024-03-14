// localization.js



class Localization {

  constructor(defaultLanguage = 'en') {

    this.defaultLanguage = defaultLanguage;

    this.translations = {};

  }



  addTranslation(language, translations) {

    if (!this.translations[language]) {

      this.translations[language] = {};

    }

    Object.assign(this.translations[language], translations);

  }



  translate(key, language) {

    const lang = language || this.defaultLanguage;

    if (!this.translations[lang] || !this.translations[lang][key]) {

      return `(${key})`;

    }

    return this.translations[lang][key];

  }

}



module.exports = Localization;
