import { useTranslation } from "react-i18next";
import classes from "./Job.module.css";
import useDateFormated from "../useDateFormated";
import { IJobProps } from "@/Interfaces/ProjectInterfaces";

export default function Job(props: IJobProps) {
  const { t } = useTranslation();
  const startDateFormated = useDateFormated(props.startDate);
  const endDateFormated = useDateFormated(props.endDate);

  return (
    <div className={classes.jobItem}>
      <h3 className={classes.jobTitle}>
        <i className="fas fa-business-time" />
        {props.position}
      </h3>

      <ul>
        <li>
          {t("work.company")} {props.companyName}
        </li>
        <li>
          {t("work.period")} {`${startDateFormated} - ${endDateFormated}`}
        </li>
        <li>
          {t("work.location")} {props.location}
        </li>
        <li>
          {t("work.description")}
          <span className={classes.description}>- {props.description}</span>
        </li>
      </ul>
    </div>
  );
}
