import {
  useLayoutEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { useTranslation } from "react-i18next";

type LanguageTranslations = {
  [key: string]: string;
};

function LanguageBtn() {
  const [isMenuOpen, setMenuOpen] = useState();
  const { t, i18n } = useTranslation();
  const activeLanguage =
    useSyncExternalStore(
      (listener: () => void) => {
        window.addEventListener("storage", listener);
        return () => window.removeEventListener("storage", listener);
      },
      () => localStorage.getItem("@activeLanguage")
    ) || i18n.language;
  const availableLanguages = useMemo(
    () => Object.keys(i18n.store.data),
    [i18n.store.data]
  );

  const languageNames = useMemo(
    () =>
      availableLanguages
        .map((lang) => {
          const nameGenerator = new Intl.DisplayNames(lang, {
            type: "language",
          });
          const langName = nameGenerator.of(lang) as string;

          return {
            [lang]: langName.charAt(0).toUpperCase() + langName.slice(1),
          };
        })
        .reduce((accumulatorLangs, currentLang) => ({
          ...accumulatorLangs,
          ...currentLang,
        })) as LanguageTranslations,
    [availableLanguages]
  );

  useLayoutEffect(() => {
    if (i18n.language !== activeLanguage) i18n.changeLanguage(activeLanguage);
  }, []);

  return <button>LanguageBtn</button>;
}

export default LanguageBtn;
