import { useTranslation } from "react-i18next";
import classes from "./CV.module.css";
import Job, { JobProps as JobData } from "./Job.js";

type JobsListProps = {
  jobsArr: JobData[];
};

export default function JobsList({ jobsArr: arr }: JobsListProps) {
  const { t } = useTranslation();
  const jobsElements = arr.map((job, index) => {
    return <Job key={`job-${index}`} {...job} />;
  });

  return (
    <section className={`${classes.divColumn} ${classes.divSection}`}>
      <h2 className={classes.title}>
        <i className="fas fa-briefcase" />
        &nbsp;{t("work.title")}
      </h2>
      {jobsElements}
    </section>
  );
}
