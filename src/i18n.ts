import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsENG from "./locales/en/translation.json";
import translationsRO from "./locales/ro/translation.json";

//https://hackernoon.com/how-to-create-multilingual-react-apps-with-react-i18next
i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: translationsENG },
      ro: { translation: translationsRO },
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
