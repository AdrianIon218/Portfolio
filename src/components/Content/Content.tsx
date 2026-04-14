import classes from "./Content.module.css";

export default function Content(props: React.PropsWithChildren) {
  return (
    <main className={classes.main}>
      <div className={classes.content}>{props.children}</div>
    </main>
  );
}
