import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import EN from './en';
import ES from './es';
import PT from './pt';

const fallbackLng = ['pt'];
const resources = {
  en: { ...EN },
  es: { ...ES },
  pt: { ...PT }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    lng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
