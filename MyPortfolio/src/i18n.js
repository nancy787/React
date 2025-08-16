import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import de from '../public/locales/de/translation.json'
import en from "../public/locales/en/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: en },
      de: { translation: de }
    },
    react: {
      useSuspense: false, // 👈 disables suspense
    }
  });

export default i18n;
