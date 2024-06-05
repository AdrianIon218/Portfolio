import { useMemo } from "react";
import classes from "./CV.module.css";
import { SkillListProps } from "./SkillSection";

export default function Skill(props: SkillListProps) {
  const softwareSkillElements = useMemo(() => {
    return props.softwareSkills.map((item) => (
      <li key={item.name}>{item.name}</li>
    ));
  }, [props.softwareSkills]);

  const languageSillElements = useMemo(() => {
    return props.languageSkills.map((item) => (
      <li key={item.name}>
        {item.name}: {item.level}
      </li>
    ));
  }, []);

  return (
    <>
      <div>
        <h3>
          <i className="fas fa-laptop-code" />
          &nbsp;Software:
        </h3>
        <ul className={classes.listSquare}>{softwareSkillElements}</ul>
      </div>
      <div>
        <h3>
          <i className="fas fa-apple-alt" />
          &nbsp;Languages:
        </h3>
        <ul className={classes.listSquare}>{languageSillElements}</ul>
      </div>
    </>
  );
}
