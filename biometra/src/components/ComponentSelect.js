import styles from "../styles/button.module.css";

function ComponentSelect({ setStep }) {
  const handleDocumentClick = () => {
    setStep("DOCUMENT_CAPTURE");
  };

  const handleFaceClick = () => {
    setStep("FACE_CAPTURE");
  };

  const handleMagnifEyeLivenessClick = () => {
    setStep("MAGNIFEYE_LIVENESS");
  };

  return (
    <div>
      <button className={styles.primary} onClick={handleDocumentClick}>
        Document
      </button>
      <button className={styles.primary} onClick={handleFaceClick}>
        Face
      </button>
      <button className={styles.primary} onClick={handleMagnifEyeLivenessClick}>
        MagnifEye Liveness
      </button>
    </div>
  );
}

export default ComponentSelect;
