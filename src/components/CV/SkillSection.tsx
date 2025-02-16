import SkillList from "./SkillList";
import classes from "./CV.module.css";
import { useTranslation } from "react-i18next";

export type SkillListProps = {
  softwareSkills: SoftwareType[];
  languageSkills: LanguageType[];
};

export type SoftwareType = {
  id: number;
  name: string;
  orderNum: number;
};

export type LanguageType = {
  name: string;
  level: string;
};

export default function SkillSection(props: SkillListProps) {
  const { t } = useTranslation();

  return (
    <section className={`${classes.divColumn} ${classes.divSection}`}>
      <h2 className={classes.title}>
        <i className="fas fa-award" />
        &nbsp;
        {t("skills.title")}
      </h2>
      <SkillList {...props} />
    </section>
  );
}
