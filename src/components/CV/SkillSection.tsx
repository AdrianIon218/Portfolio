import SkillList from "./SkillList";
import classes from "./CV.module.css";
import { useTranslation } from "react-i18next";
import { SkillListProps } from "@/Interfaces/ProjectInterfaces";
import GlobeContainer from "./Globe/GlobeContainer";

export default function SkillSection(props: SkillListProps) {
  const { t } = useTranslation();

  return (
    <section className={classes.divColumn}>
      <h2 className={classes.title}>
        <i className="fas fa-award" />
        &nbsp;
        {t("skills.title")}
      </h2>
      <GlobeContainer />
      <SkillList {...props} />
    </section>
  );
}
