import { useState, useSyncExternalStore } from "react";
import classes from "./BluredLoadImage.module.css";
import classesCV from "../CV/CV.module.css";

interface IBluredLoadImageProps {
  bluredImg: string;
  image: string;
}

const subscribe = (listener: () => void) => {
  window.addEventListener("storage", listener);
  return () => window.removeEventListener("storage", listener);
};

const getSnapshot = () => {
  return sessionStorage.getItem("@loadedImages");
};

function BluredLoadImage(props: IBluredLoadImageProps) {
  const sessionImages = JSON.parse(
    useSyncExternalStore(subscribe, getSnapshot) ?? "[]"
  ) as string[];
  const isImageAlreadyLoadedInSession = sessionImages.includes(props.image);
  const [isImageLoaded, setImageLoaded] = useState(false);

  const onLoadHandler = () => {
    setImageLoaded(true);
    if (!isImageAlreadyLoadedInSession) {
      sessionStorage.setItem(
        "@loadedImages",
        JSON.stringify([...sessionImages, props.image])
      );
    }
  };

  return (
    <div
      className={`${classesCV.myPhoto}  ${classes.blurLoad} ${
        (isImageAlreadyLoadedInSession || isImageLoaded) && classes.loaded
      }`}
      style={{
        backgroundImage: `url(${props.bluredImg})`,
      }}
    >
      <img
        className={classes.imgProfile}
        alt={props.image}
        src={props.image}
        onLoad={onLoadHandler}
      />
    </div>
  );
}

export default BluredLoadImage;
