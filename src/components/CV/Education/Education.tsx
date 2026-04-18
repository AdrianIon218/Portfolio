import { useTranslation } from "react-i18next";
import { IEducationProps } from "@/Interfaces/ProjectInterfaces";
import classes from "./Education.module.css";
import LocationMap from "../../CustomedElements/LocationMap";
import LinkButton from "@/components/CustomedElements/LinkButton";

export default function Education(props: IEducationProps) {
  const { t } = useTranslation();

  return (
    <div className={classes.educationItem}>
      <div>
        <h3 className={`${classes.schoolName} no-margin-y`}>
          <i className="fas fa-school" />
          {props.institute}
        </h3>
        <ul className={classes.educationList}>
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
      </div>

      {props.location && (
        <LocationMap position={props.location} title={props.institute} />
      )}

      {props.detailsLink && (
        <div className={classes.linkInfoCtn}>
          <LinkButton href={props.detailsLink}>{t("moreInfo")}</LinkButton>
        </div>
      )}
    </div>
  );
}
