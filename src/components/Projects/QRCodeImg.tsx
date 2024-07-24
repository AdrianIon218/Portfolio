import { useState } from "react";
import classes from "./Projects.module.css";
import LoadingSpinner from "../Layout/LoadingSpinner";

function QRCodeImg({ src, title }: { src: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={classes.qrCodeCtn}>
      {loaded ? null : <LoadingSpinner cls={classes.loadingQRCtn} />}

      <img
        style={loaded ? {} : { display: "none" }}
        title={title}
        src={src}
        className={classes.qrCodeImg}
        alt="QR code"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default QRCodeImg;
