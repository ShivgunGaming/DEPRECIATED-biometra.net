import React, { useEffect } from "react";

/*
 * When component is initialized, sam.wasm file will be fetched from http://localhost:3000/sam.wasm.
 * That's why sam.wasm file needs to be placed in the root of the public folder.
 */

function DocumentUi(props) {
  useEffect(() => {
    const uiElement = document.getElementById(
      "x-dot-document-auto-capture-ui"
    );

    if (uiElement) {
      uiElement.props = props;
    }
  });

  return React.createElement("x-dot-document-auto-capture-ui", {
    id: "x-dot-document-auto-capture-ui",
  });
}

export default DocumentUi;
