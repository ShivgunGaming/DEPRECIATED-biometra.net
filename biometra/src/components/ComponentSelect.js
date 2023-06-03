//Reduced all 8 js components to one function and 2 variables
import React from "react";
import styles from "../styles/button.module.css";

function ComponentSelect({ setStep }) {
  const handleClick = (step) => {
    setStep(step);
  };

  return (
    <div>
      <button className={styles.primary} onClick={() => handleClick("DOCUMENT_CAPTURE")}>
        Document
      </button>
      <button className={styles.primary} onClick={() => handleClick("FACE_CAPTURE")}>
        Face
      </button>
      <button className={styles.primary} onClick={() => handleClick("MAGNIFEYE_LIVENESS")}>
        MagnifEye Liveness
      </button>
    </div>
  );
}

export default ComponentSelect;
