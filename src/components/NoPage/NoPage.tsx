import classes from "./NoPage.module.css";

function NoPage() {
  return (
    <section className={classes["no-page-ctn"]}>
      <div className={classes["no-page"]}>
        <p className={classes.emoji}>&#128533;</p>
        <h1>
          Sorry, the page you accessed does not exist{" "}
          <span className={classes.red}>!</span>
        </h1>
      </div>
    </section>
  );
}

export default NoPage;
