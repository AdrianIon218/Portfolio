import classes from "./CV.module.css";

type NationalityProps = {
  isEuropean: boolean;
};

export default function Nationality(props: NationalityProps) {
  const europeanFlag = props.isEuropean ? (
    <img
      title="EU citizen"
      src="https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/europeanFlag.png"
      className={classes.flag}
      alt="European"
    />
  ) : null;

  const nationalityFlag = (
    <img
      title="Romanian"
      src={
        "https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/romanianFlag.png"
      }
      className={classes.flag}
      alt="Romanian"
    />
  );

  return !europeanFlag && !nationalityFlag ? null : (
    <p>
      {" "}
      {nationalityFlag} {europeanFlag}{" "}
    </p>
  );
}
