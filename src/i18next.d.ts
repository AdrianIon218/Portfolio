import "i18next";
import translationsENG from "./locales/en/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: { translation: typeof translationsENG };
  }
}
