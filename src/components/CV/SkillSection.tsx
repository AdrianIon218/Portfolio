import SkillList from "./SkillList";
import classes from "./CV.module.css";

export type SkillListProps = {
  softwareSkills: SoftwareType[];
  languageSkills: LanguageType[];
};

export type SoftwareType = {
  id: number;
  name: string;
};

export type LanguageType = {
  name: string;
  level: string;
};

export default function SkillSection(props: SkillListProps) {
  return (
    <section className={`${classes.divColumn} ${classes.divSection}`}>
      <h2 className={classes.title}>
        <i className="fas fa-award" />
        &nbsp;Skills
      </h2>
      <SkillList {...props} />
    </section>
  );
}
