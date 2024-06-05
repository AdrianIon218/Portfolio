import classes from "./Contact.module.css";

function LinkContact(props: { href: string; name: string }) {
  return (
    <div className={classes.divRowCentered}>
      <i
        className={`fas fa-external-link-alt ${classes.icon}`}
        aria-hidden="true"
      />
      <a
        className={classes.contact_link}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.name}
      </a>
    </div>
  );
}

export default LinkContact;
