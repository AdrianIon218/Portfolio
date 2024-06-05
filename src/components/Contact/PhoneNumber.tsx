import classes from "./Contact.module.css";

export default function PhoneNumber(
  props: React.PropsWithChildren & { photoName: string; alt: string }
) {
  return (
    <div className={classes.divRowCentered}>
      <i className={`fa fa-phone ${classes.icon}`} aria-hidden="true" />
      <img
        className={`${classes.phoneNationality} ${classes.icon}`}
        src={props.photoName}
        alt={props.alt}
      />
      <div>{props.children}</div>
    </div>
  );
}
