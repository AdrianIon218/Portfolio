import classes from "./LoadingSpinner.module.css";

function LoadingSpinner({ cls }: { cls?: string }) {
  const classesStr = cls ? `${classes.spinner} ${cls}` : classes.spinner;

  return <div className={classesStr} />;
}

export default LoadingSpinner;
