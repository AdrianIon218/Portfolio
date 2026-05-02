import { useId } from "react";
import { useTranslation } from "react-i18next";
import { ICardProps } from "@/Interfaces/ProjectInterfaces";
import classes from "./Projects.module.css";
import GradientButton from "../CustomedElements/GradientButton";

export default function Card(props: ICardProps) {
  const { t } = useTranslation();
  const key = useId();

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
    <div className={classes.card}>
      <div className={`${classes.cardSide} ${classes.cardSideFront}`}>
        <img src={props.photoLink} alt={props.title} onLoad={props.onLoad} />
        <label>{props.title}</label>
      </div>

      <div className={`${classes.cardSide} ${classes.cardSideBack}`}>
        <label className={classes.cardDescription}>{props.description}</label>
        <GradientButton
          onClick={props.onClick}
          disabled={!props.content && !props.porjectLink}
        >
          {t("project.view")}
        </GradientButton>
      </div>
    </div>
  );
}
