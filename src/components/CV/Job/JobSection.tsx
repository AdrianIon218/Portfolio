import { useTranslation } from "react-i18next";
import classes from "./Job.module.css";
import Job, { JobProps as JobData } from "../Job.js";
import GlobeContainer from "../Globe/GlobeContainer.js";

type JobsListProps = {
  jobsArr: JobData[];
};

export default function JobSection({ jobsArr: arr }: JobsListProps) {
  const { t } = useTranslation();
  const jobsElements = arr.map((job, index) => {
    return <Job key={`job-${index}`} {...job} />;
  });

  return (
    <section className={classes.jobSection}>
      <GlobeContainer />
      <h2>
        <i className="fas fa-briefcase" />
        &nbsp;{t("work.title")}
      </h2>

      {jobsElements}
    </section>
  );
}
