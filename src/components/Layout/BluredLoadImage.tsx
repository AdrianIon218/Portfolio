import { useState } from "react";
import classes from "./BluredLoadImage.module.css";

interface IBluredLoadImageProps {
  bluredImg: string;
  image: string;
  ctnClasses?: string;
}

function BluredLoadImage(props: IBluredLoadImageProps) {
  const [isImageLoaded, setImageLoaded] = useState(false);
  return (
    <div
      className={`${props.ctnClasses}  ${classes.blurLoad} ${
        isImageLoaded && classes.loaded
      }`}
      style={{
        backgroundImage: `url(${props.bluredImg})`,
      }}
    >
      <img
        className={classes.imgProfile}
        alt={props.image}
        src={props.image}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}

export default BluredLoadImage;
