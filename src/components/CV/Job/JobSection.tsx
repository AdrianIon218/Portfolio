import { useTranslation } from "react-i18next";
import classes from "./Job.module.css";
import Job from "./Job";
import { IJobSectionProps } from "@/Interfaces/ProjectInterfaces";

export default function JobSection({ jobsArr: arr }: IJobSectionProps) {
  const { t } = useTranslation();
  const jobsElements = arr.map((job, index) => {
    return <Job key={`job-${index}`} {...job} />;
  });

  return (
    <section className={classes.jobSection}>
      <h2>
        <i className="fas fa-briefcase" />
        &nbsp;{t("work.title")}
      </h2>

      {jobsElements}
    </section>
  );
}
