import Education from "./Education";
import classes from "./Education.module.css";
import { useTranslation } from "react-i18next";
import { IEducationSectionProps } from "@/Interfaces/ProjectInterfaces";

export default function EducationSection({
  educationArr: arr,
}: IEducationSectionProps) {
  const { t } = useTranslation();
  const educationElements = arr.map((item, index) => {
    return <Education key={index} {...item} />;
  });

  return (
    <section className={`${classes.eductionContainer}`}>
      <div className={classes.educationTitle}>
        <span>
          <i className="fas fa-graduation-cap" />
        </span>
        <h2>{t("education.title")}</h2>
      </div>

      {educationElements}
    </section>
  );
}
