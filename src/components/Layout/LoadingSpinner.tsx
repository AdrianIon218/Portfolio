import classes from "./LoadingSpinner.module.css";

export type LoadingSpinnerVariant = "line" | "circle";

function LoadingSpinner({
  variant = "line",
}: {
  variant?: LoadingSpinnerVariant;
}) {
  return (
    <div className={classes.loaderContainer}>
      <div
        className={
          variant === "circle" ? classes.circleSpinner : classes.lineLoader
        }
      />
    </div>
  );
}

export default LoadingSpinner;
