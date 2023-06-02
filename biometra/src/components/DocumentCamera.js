import React, { useEffect } from "react";

/*
 * When component is initialized, sam.wasm file will be fetched from http://localhost:3000/sam.wasm.
 * That's why sam.wasm file needs to be placed in the root of the public folder.
 */

function DocumentCamera(props) {
  useEffect(() => {
    // 2. Init existed custom web-component
    const documentAutoCaptureHTMLElement = document.getElementById(
      "x-dot-document-auto-capture"
    );

    if (documentAutoCaptureHTMLElement) {
      documentAutoCaptureHTMLElement.cameraOptions = props;
    }
  });
  // 1. Return empty custom web-component html TAG
  return React.createElement("x-dot-document-auto-capture", {
    id: "x-dot-document-auto-capture",
  });
}

export default DocumentCamera;
