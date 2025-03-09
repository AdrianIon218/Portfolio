import { useTranslation } from "react-i18next";
import classes from "./NoPage.module.css";

function NoPage() {
  const { t } = useTranslation();

  return (
    <section className={classes.noPageCtn}>
      <div className={classes.noPage}>
        <p className={classes.emoji}>&#128533;</p>
        <h1>
          {t("noPageMessage")}
          <span className={classes.red}> !</span>
        </h1>
      </div>
    </section>
  );
}

export default NoPage;
