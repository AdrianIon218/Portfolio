import { useTranslation } from "react-i18next";
import classes from "./CV.module.css";

type NationalityProps = {
  isEuropean: boolean;
};

export default function Nationality(props: NationalityProps) {
  const { t } = useTranslation();

  const europeanFlag = props.isEuropean ? (
    <img
      title={t("profile.euCitizen")}
      src="https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/europeanFlag.png"
      className={classes.flag}
      alt="European"
    />
  ) : null;

  const nationalityFlag = (
    <img
      title={t("profile.nationality")}
      src={
        "https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/romanianFlag.png"
      }
      className={classes.flag}
      alt="Romanian"
    />
  );

  return !europeanFlag && !nationalityFlag ? null : (
    <p className={classes.notionalityCtn}>
      {" "}
      {nationalityFlag} {europeanFlag}{" "}
    </p>
  );
}
