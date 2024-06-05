import Card from "./Card";
import classes from "./Projects.module.css";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import LoadingSpinner from "../Layout/LoadingSpinner";

export default function ProjectsPage() {
  const { projectsArr } = useContext(UserContext);

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
      />
    );
  });

  return (
    <section className={classes.cardsContainer}>{projectsElements}</section>
  );
}
