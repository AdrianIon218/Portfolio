import classes from "./Contact.module.css";

export default function Email(props: React.PropsWithChildren) {
  return (
    <div className={classes.divRowCentered}>
      <i className={`fa fa-envelope ${classes.icon}`} aria-hidden="true" />
      <span className={`${classes.mailAddress} ${classes.standardFont}`}>
        {props.children}
      </span>
    </div>
  );
}
