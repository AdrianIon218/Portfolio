import classes from "./GradientButton.module.css";
import { IGradientButtonProps } from "@/Interfaces/UtilsInterfaces";

function GradientButton({
  children,
  onClick,
  disabled,
  type = "button",
}: IGradientButtonProps) {
  return (
    <button
      className={classes.gradientBtn}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default GradientButton;
