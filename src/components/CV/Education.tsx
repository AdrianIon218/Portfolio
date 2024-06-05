import classes from "./CV.module.css";

export type EducationProps = {
  universityName: string;
  facultyName: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  detailsLink?: string;
};

export default function Education(props: EducationProps) {
  return (
    <div className={classes.divColumn}>
      <h3 className={`${classes.elementsAligned} ${classes["no-margin-y"]}`}>
        <i className="fas fa-school" />
        {props.universityName}
      </h3>
      <ul className={classes["no-margin-top"]}>
        <li>{props.facultyName}</li>
        <li>Degree: {props.degree}</li>
        <li>Field of Study: {props.fieldOfStudy}</li>
        <li>Period: {props.period}</li>
      </ul>
      {props.detailsLink && (
        <a
          className={classes.linkInfo}
          href={props.detailsLink}
          target="_blank"
          title="More info about the study program"
        >
          More info <i className="fas fa-arrow-right" />
        </a>
      )}
    </div>
  );
}
