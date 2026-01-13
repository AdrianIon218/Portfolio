import classes from "./Projects.module.css";
import { useId } from "react";
import { ICardProps } from "@/Interfaces/ProjectInterfaces";

export default function Card(props: ICardProps) {
  const key = useId();

  function onCardClick() {
    if (props.content) {
      props.onClick();
    } else {
      window.open(props.porjectLink, "_blank");
    }
  }

  const categories = props.categories.map((item, index) => {
    return item.photo.length > 0 ? (
      <img
        key={`${key}-${index}`}
        alt={item.name}
        className={classes.categoryContainer}
        src={item.photo}
      />
    ) : (
      <div key={`${key}-${index}`} className={classes.categoryContainer}>
        {item.name}
      </div>
    );
  });

  return (
    <div className={classes.cardElement} onClick={onCardClick}>
      <div className={classes.rowContainer}>{categories}</div>
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
  );
}
