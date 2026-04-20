import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Profile from "./Profile";
import SkillSection from "./Skills/SkillSection";
import EducationSection from "./Education/EducationSection";
import JobSection from "./Job/JobSection";
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
    <div className={classes.portfolioContainer}>
      {cvData && <Profile {...cvData} />}

      {educationArr && <EducationSection educationArr={educationArr} />}

      {languageSkills && softwareSkills && (
        <SkillSection
          languageSkills={languageSkills}
          softwareSkills={softwareSkills}
        />
      )}

      {jobsArr && <JobSection jobsArr={jobsArr} />}
    </div>
  );
}
