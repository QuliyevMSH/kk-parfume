import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import az from './locales/az.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    az: { translation: az },
    en: { translation: en },
    ru: { translation: ru }
  },
  lng: 'az',
  fallbackLng: 'az',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;