import { useTranslation } from "react-i18next";
import classes from "./CV.module.css";
import useDateFormated from "./useDateFormated";

export type JobProps = {
  id: number;
  position: string;
  startDate: string;
  endDate: string;
  companyName: string;
  location: string;
  description: string;
  order: number;
};

export default function Job(props: JobProps) {
  const { t } = useTranslation();
  const startDateFormated = useDateFormated(props.startDate);
  const endDateFormated = useDateFormated(props.endDate);

  return (
    <div>
      <h3 className={classes.elementsAligned}>
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
