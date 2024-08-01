import Card from "./Card";
import classes from "./Projects.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import LoadingSpinner from "../Layout/LoadingSpinner";

export default function ProjectsPage() {
  const { projectsArr } = useContext(UserContext);
  const [isFirstCardLoaded, setIsCardLoaded] = useState(false);

  if (!projectsArr) {
    return <LoadingSpinner />;
  }

  const projectsElements = projectsArr.map((project, index) => {
    return (
      <Card
        key={index}
        photoLink={project.photo}
        porjectLink={project.link}
        categories={project.categories}
        description={project.description}
        title={project.title}
        content={project.content}
        linkBtnLabel={project.linkBtnLabel}
        onLoad={() => {
          index === 0 && setIsCardLoaded(true);
        }}
      />
    );
  });

  return (
    <>
      {!isFirstCardLoaded && <LoadingSpinner />}
      <section
        className={classes.cardsContainer}
        style={isFirstCardLoaded ? {} : { display: "none" }}
      >
        {projectsElements}
      </section>
    </>
  );
}
