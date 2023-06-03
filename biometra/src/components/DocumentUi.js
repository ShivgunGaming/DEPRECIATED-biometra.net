//Reduced all 8 js biometric scanning components to one function and 2 variables
import React, { useEffect } from "react";

function DocumentUi(props) {
  useEffect(() => {
    const initializeDocumentUi = () => {
      const uiElement = document.getElementById(
        "x-dot-document-auto-capture-ui"
      );

      if (uiElement) {
        uiElement.props = props;
      }
    };

    initializeDocumentUi();
  }, [props]);

  return <x-dot-document-auto-capture-ui id="x-dot-document-auto-capture-ui" />;
}

export default DocumentUi;
