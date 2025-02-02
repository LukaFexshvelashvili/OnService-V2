import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ka from "./ka.json";
import en from "./en.json";
import ru from "./ru.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "ka",
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lang",
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      caches: ["localStorage", "cookie"],
    },
    resources: {
      ka: {
        translation: ka,
      },
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
  });
export default i18next;
