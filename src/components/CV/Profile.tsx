import classes from "./CV.module.css";
import Nationality from "./Nationality";
import BluredLoadImage from "../Layout/BluredLoadImage";
import { useTranslation } from "react-i18next";

type ProfileProps = {
  birthdate: string;
  isEuropean: boolean;
  name: string;
  photoProfile: string;
  address: string;
  jobTitle: string;
  cvLink: string;
  bluredPhotoProfile: string;
};

function calculateAge(birthdate: string) {
  const diff_ms = Date.now() - new Date(birthdate).getTime();
  return Math.abs(new Date(diff_ms).getUTCFullYear() - 1970);
}

export default function Profile(props: ProfileProps) {
  const { t } = useTranslation();
  const { birthdate } = props;

  const age = calculateAge(birthdate);

  return (
    <section>
      <h2 className={classes.title}>{props.name}</h2>
      <div className={classes.center}>
        <BluredLoadImage
          image={props.photoProfile}
          bluredImg={props.bluredPhotoProfile}
          ctnClasses={classes.myPhoto}
        />
      </div>
      <div className={`${classes.center} ${classes.divColumn}`}>
        <i className="fas fa-map-marker-alt">&nbsp;{props.address}</i>
        <i className="fas fa-male">&nbsp;{t("profile.age", { age })}</i>
        <i className="fas fa-suitcase">&nbsp;{props.jobTitle}</i>
        <Nationality isEuropean={props.isEuropean} />
        <p className={classes.ctnCenter}>
          <a href={props.cvLink} target="_blank" className={classes.linkInfo}>
            {t("profile.viewCV")} <i className="fas fa-eye" />
          </a>
        </p>
      </div>
    </section>
  );
}
