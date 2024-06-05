import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Profile from "./Profile";
import SkillSection from "./SkillSection";
import EducationList from "./EducationList";
import JobsList from "./JobsList";
import classes from "./CV.module.css";
import LoadingSpinner from "../Layout/LoadingSpinner";

export default function CV() {
  const userCtx = useContext(UserContext);
  const { cvData, educationArr, languageSkills, softwareSkills, jobsArr } =
    userCtx;

  if (
    !cvData ||
    !educationArr ||
    !languageSkills ||
    !softwareSkills ||
    !jobsArr
  ) {
    return <LoadingSpinner />;
  }

  return (
    <section className={classes.pageContainer}>
      {cvData && <Profile {...cvData} />}

      {educationArr && <EducationList educationArr={educationArr} />}

      {languageSkills && softwareSkills && (
        <SkillSection
          languageSkills={languageSkills}
          softwareSkills={softwareSkills}
        />
      )}

      {jobsArr && <JobsList jobsArr={jobsArr} />}
    </section>
  );
}
