import classes from "./Skill.module.css";
import { useTranslation } from "react-i18next";
import { ISkillListProps } from "@/Interfaces/ProjectInterfaces";
import SkillList from "./SkillList";

export default function SkillSection(props: ISkillListProps) {
  const { t } = useTranslation();

  return (
    <section className={classes.skillSection}>
      <div className={classes.sillsContainer}>
        <h2 className={classes.title}>
          <i className="fas fa-award" />
          &nbsp;
          {t("skills.title")}
        </h2>
        <SkillList {...props} />
      </div>
    </section>
  );
}
