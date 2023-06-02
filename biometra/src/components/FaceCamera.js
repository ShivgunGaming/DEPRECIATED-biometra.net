import React from "react";
import "@innovatrics/dot-face-auto-capture";
import { useEffect } from "react";

function FaceCamera(props) {
  useEffect(() => {
    const faceAutoCaptureHTMLElement = document.getElementById(
      "x-dot-face-auto-capture"
    );

    if (faceAutoCaptureHTMLElement) {
      faceAutoCaptureHTMLElement.cameraOptions = props;
    }
  });

  return React.createElement("x-dot-face-auto-capture", {
    id: "x-dot-face-auto-capture",
  });
}

export default FaceCamera;
