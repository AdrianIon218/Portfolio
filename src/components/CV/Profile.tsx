import classes from "./CV.module.css";
import Nationality from "./Nationality";
import BluredLoadImage from "../Layout/BluredLoadImage";
import { useTranslation } from "react-i18next";
import LinkButton from "../CustomedElements/LinkButton";

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

  return (
    <section className={classes.profileContainer}>
      <div className={classes.profileInfo}>
        <BluredLoadImage
          image={props.photoProfile}
          bluredImg={props.bluredPhotoProfile}
        />
        <h2 className={classes.profileTitle}>{props.name}</h2>

        <div className={classes.profileDetails}>
          <i className="fas fa-map-marker-alt">&nbsp;{props.address}</i>
          <i className="fas fa-male">
            &nbsp;{t("profile.age", { age: calculateAge(birthdate) })}
          </i>
          <i className="fas fa-suitcase">&nbsp;{props.jobTitle}</i>
          <Nationality />

          <div className={classes.cvLinkCtn}>
            <LinkButton href={props.cvLink}>{t("profile.viewCV")}</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
