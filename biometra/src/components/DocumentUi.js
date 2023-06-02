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
