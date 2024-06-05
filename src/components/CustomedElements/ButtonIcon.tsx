import classes from "./ButtonIcon.module.css";
import { Link } from "react-router-dom";

export default function ButtonIcon(props: {
  img: string;
  alt: string;
  linkInternalPage?: string;
  linkExternalPage?: string;
  disable?: boolean;
}) {
  return (
    <>
      {props.linkExternalPage ? (
        <img
          onClick={() => window.open(props.linkExternalPage, "_blank")}
          className={classes.icon}
          src={props.img}
          alt={props.alt}
          title={props.alt}
        />
      ) : props.linkInternalPage ? (
        <Link
          to={props!.linkInternalPage}
          className={props.disable ? classes.disableLink : ""}
          title={props.alt}
        >
          <img className={classes.icon} src={props.img} alt={props.alt} />
        </Link>
      ) : null}
    </>
  );
}
