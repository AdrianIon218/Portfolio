import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className={classes.divColumn}>
      <h3 className={`${classes.elementsAligned} ${classes["no-margin-y"]}`}>
        <i className="fas fa-school" />
        {props.institute}
      </h3>
      <ul className={classes["no-margin-top"]}>
        {props.facultyName && <li>{props.facultyName}</li>}
        {props.degree && (
          <li>
            {t("education.degree")} {props.degree}
          </li>
        )}
        {props.fieldOfStudy && (
          <li>
            {t("education.fieldOfStudy")} {props.fieldOfStudy}
          </li>
        )}
        {props.period && (
          <li>
            {t("education.period")} {props.period}
          </li>
        )}
      </ul>
      {props.detailsLink && (
        <a
          className={`${classes.linkInfo} ${classes.linkEducation}`}
          href={props.detailsLink}
          target="_blank"
          title={t("education.moreInfoTooltip")}
        >
          {t("moreInfo")} <i className="fas fa-arrow-right" />
        </a>
      )}
    </div>
  );
}
