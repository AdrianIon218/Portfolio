import { useId, useMemo, useRef } from "react";
import classes from "./Projects.module.css";
import RepoLink from "./RepoLink";
import { ContentType } from "../Context/UserContextTypes";
import { useTranslation } from "react-i18next";
import QRCodeImg from "./QRCodeImg";

type ProjectPanelProps = {
  onClosePanel: () => void;
  content: ContentType[];
  title: string;
  link: string;
  linkBtnLabel: string;
};

function ProjectPanel(props: ProjectPanelProps) {
  const { t } = useTranslation();
  const isNotThePortfolioPage = props.title !== "Portfolio";
  const panelRef = useRef<HTMLDivElement>(null);
  const key = useId();

  const closePresentation = () => {
    panelRef.current?.classList.add(classes.closePanel);
    setTimeout(props.onClosePanel, 600);
  };

  function openCardLink() {
    props.link && window.open(props.link, "_blank");
  }

  const contentElements = useMemo(() => {
    return props.content.map((item, index) => {
      switch (item.type) {
        case "p":
          return <p key={item.text}>{item.text}</p>;
        case "dependencies":
          return (
            <div
              className={classes.dependenciesCtn}
              key={`${key}-dependencies-${index}`}
            >
              <h4>{t("project.dependencies")}</h4>
              <ul>
                {item.dependencies.map((dependency) => (
                  <li key={`${key}-${dependency}`}>{dependency}</li>
                ))}
              </ul>
            </div>
          );
        case "qr_code":
          return (
            <QRCodeImg
              src={item.image}
              title={t("project.qrCode")}
              key={item.image}
            />
          );
        case "bitbucket":
        case "github":
          return <RepoLink link={item.link} type={item.type} key={item.link} />;
        default:
          return null;
      }
    });
  }, [props.content]);

  return (
    <div className={classes.backdrop} onClick={closePresentation}>
      <div className={classes.contentContainer} ref={panelRef}>
        {!isNotThePortfolioPage && (
          <div className={classes.current_page_indicator}>
            {t("project.currentPage")}
          </div>
        )}
        <div
          className={classes.projectPresentation}
          onClick={(e) => e.stopPropagation()}
        >
          <h2>{props.title}</h2>
          {isNotThePortfolioPage && (
            <button onClick={openCardLink} className={classes.btn_link}>
              {props.linkBtnLabel}
            </button>
          )}
          {contentElements}
        </div>
        <button
          className={classes.project_presenation__exit}
          onClick={closePresentation}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ProjectPanel;
