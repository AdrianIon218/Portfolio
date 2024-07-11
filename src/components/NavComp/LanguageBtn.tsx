import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./LanguageBtn.module.css";

type LanguageTranslations = {
  [key: string]: string;
};

function getFlagByLang(lang: string) {
  switch (lang) {
    case "en":
      return "src/assets/englishFlag.jpg";
    case "ro":
      return "src/assets/romanianFlag.png";
    default:
      return "";
  }
}

function LanguageBtn() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language;

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

  function setLanguage(ev: React.MouseEvent<HTMLElement>, lang: string) {
    ev.preventDefault();
    setMenuOpen(false);
    if (i18n.language !== lang) {
      localStorage.setItem("@activeLanguage", lang);
      i18n.changeLanguage(lang);
    }
  }

  function toggleMenu() {
    setMenuOpen((state) => !state);
  }

  return (
    <div className={classes.btnLangCtn}>
      <div
        className={classes.btnLang}
        style={{ backgroundImage: `url(src/assets/${t("langFlag")})` }}
        onClick={toggleMenu}
        onBlur={() => {
          setTimeout(() => setMenuOpen(false), 250);
        }}
        tabIndex={0}
      >
        <div
          className={`${classes.dropdownContent} ${
            isMenuOpen ? classes.menuOpen : ""
          }`}
        >
          {availableLanguages.map((item) => (
            <button
              type="button"
              onClickCapture={(event) => setLanguage(event, item)}
              key={item}
              className={item === activeLanguage ? classes.activeLang : ""}
            >
              <img src={getFlagByLang(item)} className={classes.flagImg} />
              {languageNames[item]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageBtn;
