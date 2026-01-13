import Card from "./Card";
import classes from "./Projects.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import LoadingSpinner from "../Layout/LoadingSpinner";
import ProjectPanel from "./ProjectPanel";
import { IProjectData } from "@/Interfaces/ProjectInterfaces";

export default function ProjectsPage() {
  const { projectsArr } = useContext(UserContext);
  const [isFirstCardLoaded, setIsCardLoaded] = useState(false);
  const [currentProject, setCurrentProject] = useState<IProjectData | null>(
    null
  );

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
        onClick={() =>
          setCurrentProject({
            photoLink: project.photo,
            porjectLink: project.link,
            linkBtnLabel: project.linkBtnLabel,
            categories: project.categories,
            description: project.description,
            title: project.title,
            content: project.content,
          })
        }
      />
    );
  });

  return (
    <>
      {!isFirstCardLoaded && <LoadingSpinner />}
      {currentProject && (
        <ProjectPanel
          onClosePanel={() => setCurrentProject(null)}
          content={currentProject.content}
          title={currentProject.title}
          link={currentProject.porjectLink}
          linkBtnLabel={currentProject.linkBtnLabel}
        />
      )}
      <section
        className={classes.cardsContainer}
        style={isFirstCardLoaded ? {} : { display: "none" }}
      >
        {projectsElements}
      </section>
    </>
  );
}
