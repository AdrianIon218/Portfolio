import Education, { EducationProps as EducationData } from "./Education";
import classes from "./CV.module.css";

type EducationListProps = {
  educationArr: EducationData[];
};

export default function EducationList({
  educationArr: arr,
}: EducationListProps) {
  const educationElements = arr.map((item, index) => {
    return <Education key={index} {...item} />;
  });

  return (
    <section className={`${classes.divColumn} ${classes.divSection}`}>
      <h2 className={classes.title}>
        <i className="fas fa-graduation-cap" />
        &nbsp;Education
      </h2>
      {educationElements}
    </section>
  );
}
