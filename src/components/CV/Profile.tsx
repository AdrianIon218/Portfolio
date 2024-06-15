import { useState } from "react";
import classes from "./CV.module.css";
import Nationality from "./Nationality";
import BluredLoadImage from "../Layout/BluredLoadImage";

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
  var diff_ms = Date.now() - new Date(birthdate).getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export default function Profile(props: ProfileProps) {
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
        <i className="fas fa-male">&nbsp;{`${age} years old`}</i>
        <i className="fas fa-suitcase">&nbsp;{props.jobTitle}</i>
        <Nationality isEuropean={props.isEuropean} />
        <p className={classes.pCvCtn}>
          <a href={props.cvLink} target="_blank" className={classes.linkInfo}>
            View CV <i className="fas fa-eye" />
          </a>
        </p>
      </div>
    </section>
  );
}
