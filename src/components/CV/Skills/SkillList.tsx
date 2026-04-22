import { useMemo } from "react";
import classes from "./Skill.module.css";
import { useTranslation } from "react-i18next";
import { ISkillListProps } from "@/Interfaces/ProjectInterfaces";

export default function Skill(props: ISkillListProps) {
  const { t } = useTranslation();

  const softwareSkillElements = useMemo(() => {
    return props.softwareSkills.map((item) => (
      <li key={item.name}>{item.name}</li>
    ));
  }, [props.softwareSkills]);

  const languageSillElements = useMemo(() => {
    return props.languageSkills.map((item) => (
      <li key={item.name}>
        {item.name} - {item.level}
      </li>
    ));
  }, [props.languageSkills]);

  return (
    <div className={classes.skillListCtn}>
      <div>
        <h3>
          <i className="fas fa-laptop-code" />
          &nbsp;{t("skills.software")}
        </h3>
        <ul className={classes.softSkillsCtn}>{softwareSkillElements}</ul>
      </div>

      <div>
        <h3>
          <i className="fas fa-apple-alt" />
          &nbsp;{t("skills.languages")}
        </h3>
        <ul className={classes.languageCtn}>{languageSillElements}</ul>
      </div>
    </div>
  );
}
