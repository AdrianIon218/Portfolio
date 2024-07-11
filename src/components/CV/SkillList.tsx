import { useMemo } from "react";
import classes from "./CV.module.css";
import { SkillListProps } from "./SkillSection";
import { useTranslation } from "react-i18next";

export default function Skill(props: SkillListProps) {
  const { t } = useTranslation();

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
  }, [props.languageSkills]);

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
          &nbsp;{t("skills.languages")}
        </h3>
        <ul className={classes.listSquare}>{languageSillElements}</ul>
      </div>
    </>
  );
}
