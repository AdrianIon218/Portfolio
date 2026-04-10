import { useTranslation } from "react-i18next";
import classes from "./CV.module.css";

export default function Nationality() {
  const { t } = useTranslation();

  return (
    <p className={classes.noMargin}>
      <img
        title={t("profile.nationality")}
        src={
          "https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/romanianFlag.png"
        }
        className={classes.flag}
        alt="Romanian"
      />{" "}
      <img
        title={t("profile.euCitizen")}
        src="https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/europeanFlag.png"
        className={classes.flag}
        alt="European"
      />{" "}
    </p>
  );
}
