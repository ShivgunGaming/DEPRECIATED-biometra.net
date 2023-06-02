import React from "react";
import { useEffect } from "react";

function FaceUi(props) {
  useEffect(() => {
    const uiElement = document.getElementById("x-dot-face-auto-capture-ui");

    if (uiElement) {
      uiElement.props = props;
    }
  });

  return React.createElement("x-dot-face-auto-capture-ui", {
    id: "x-dot-face-auto-capture-ui",
  });
}

export default FaceUi;
