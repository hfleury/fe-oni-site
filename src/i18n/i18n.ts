import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ptBR from './pt-BR.json';
import sv from './sv.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    'pt-BR': { translation: ptBR },
    sv: { translation: sv }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;