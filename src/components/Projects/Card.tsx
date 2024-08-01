import classes from "./Projects.module.css";
import ProjectPanel from "./ProjectPanel";
import { useId, useState } from "react";
import { CategoryIcon, ContentType } from "../Context/UserContextTypes";

type CardProps = {
  photoLink: string;
  porjectLink: string;
  linkBtnLabel: string;
  categories: CategoryIcon[];
  description: string;
  title: string;
  content: ContentType[];
  onLoad: () => void;
};

export default function Card(props: CardProps) {
  const [isProjectPanelShown, setProjectPanel] = useState(false);
  const key = useId();

  function onCardClick() {
    if (props.content) {
      setProjectPanel(true);
    } else {
      window.open(props.porjectLink, "_blank");
    }
  }

  function onClosePanel() {
    setProjectPanel(false);
  }

  const categories = props.categories.map((item, index) => {
    return item.photo.length > 0 ? (
      <img
        key={`${key}-${index}`}
        alt={item.name}
        className={classes.category_container}
        src={item.photo}
      />
    ) : (
      <div key={`${key}-${index}`} className={classes.category_container}>
        {item.name}
      </div>
    );
  });

  return (
    <>
      {isProjectPanelShown && (
        <ProjectPanel
          onClosePanel={onClosePanel}
          content={props.content}
          title={props.title}
          link={props.porjectLink}
          linkBtnLabel={props.linkBtnLabel}
        />
      )}
      <div className={classes.CardElement} onClick={onCardClick}>
        <div className={classes.row_container}>{categories}</div>
        <div className={classes.card}>
          <img src={props.photoLink} alt={props.title} onLoad={props.onLoad} />
          <label>{props.title}</label>
        </div>
        <span
          className={classes.tooltiptext}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {props.description}
        </span>
      </div>
    </>
  );
}
