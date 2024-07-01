import classes from "./CV.module.css";

export type EducationProps = {
  institute: string;
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
        {props.institute}
      </h3>
      <ul className={classes["no-margin-top"]}>
        {props.facultyName && <li>{props.facultyName}</li>}
        {props.degree && <li>Degree: {props.degree}</li>}
        {props.fieldOfStudy && <li>Field of Study: {props.fieldOfStudy}</li>}
        {props.period && <li>Period: {props.period}</li>}
      </ul>
      {props.detailsLink && (
        <a
          className={`${classes.linkInfo} ${classes.linkEducation}`}
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
