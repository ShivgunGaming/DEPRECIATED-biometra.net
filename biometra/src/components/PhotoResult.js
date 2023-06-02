import React from "react";
import styles from "../styles/index.module.css";

function PhotoResult({ photoUrl = "" }) {
  return (
    React.createElement("div", { className: styles.container },
      React.createElement("img", { alt: "Web component result", src: photoUrl })
    )
  );
}

export default PhotoResult;
