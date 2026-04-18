import { ILinkButtonProps } from "@/Interfaces/UtilsInterfaces";
import classes from "./LinkButton.module.css";

function LinkButton({ children, href }: ILinkButtonProps) {
  const handleClick = (): void => {
    window.open(href, "_blank");
  };

  return (
    <button className={classes.linkButton} onClick={handleClick}>
      {children}
    </button>
  );
}

export default LinkButton;
