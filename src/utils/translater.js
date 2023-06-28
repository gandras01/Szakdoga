import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: require('../config/locales/en.json'),
    },
    hu: {
      translations: require('../config/locales/hu.json'),
    },
  },
  fallbackLng: 'hu',
  debug: true,
  lng: localStorage.getItem('lng') || 'hu',
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'hu', 'de', 'hr'];

export default i18n;
