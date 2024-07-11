import Education, { EducationProps as EducationData } from "./Education";
import classes from "./CV.module.css";
import { useTranslation } from "react-i18next";

type EducationListProps = {
  educationArr: EducationData[];
};

export default function EducationList({
  educationArr: arr,
}: EducationListProps) {
  const { t } = useTranslation();
  const educationElements = arr.map((item, index) => {
    return <Education key={index} {...item} />;
  });

  return (
    <section className={`${classes.divColumn} ${classes.divSection}`}>
      <h2 className={classes.title}>
        <i className="fas fa-graduation-cap" />
        &nbsp;
        {t("education.title")}
      </h2>
      {educationElements}
    </section>
  );
}
