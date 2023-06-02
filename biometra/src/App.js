import "./App.css";
import { useState, useCallback } from "react";
import logo from "./biologothree.png";
import { Select } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount.js";
import RecoverAccount from "./components/RecoverAccount.js";
import WalletView from "./components/WalletView.js";
import ComponentSelect from "./components/ComponentSelect";
import DocumentAutoCapture from "./components/DocumentAutoCapture";
import FaceAutoCapture from "./components/FaceAutoCapture";
import PhotoResult from "./components/PhotoResult";
import styles from "./styles/index.module.css";

function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");
  const [step, setStep] = useState("FACE_CAPTURE"); // Display "FACE_CAPTURE" step first
  const [photoUrl, setPhotoUrl] = useState();

  const handlePhotoTaken = (image, data, content) => {
    const imageUrl = URL.createObjectURL(image);
    setPhotoUrl(imageUrl);
  };

  const handleDocumentPhotoTaken = (image, data) => {
    handlePhotoTaken(image, data);
  };

  const handleFaceCapturePhotoTaken = (image, data) => {
    handlePhotoTaken(image, data);
  };

  const handleError = useCallback((error) => {
    alert(error);
  }, []);

  const handleBackClick = () => {
    setPhotoUrl(undefined);
    setStep("SELECT_COMPONENT");
  };

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case "DOCUMENT_CAPTURE":
        return (
          <>
            <DocumentAutoCapture
              onPhotoTaken={handleDocumentPhotoTaken}
              onError={handleError}
              onBackClick={handleBackClick}
            />
            {photoUrl && <PhotoResult photoUrl={photoUrl} />}
          </>
        );
      case "FACE_CAPTURE":
        return (
          <>
            <FaceAutoCapture
              onPhotoTaken={handleFaceCapturePhotoTaken}
              onError={handleError}
              onBackClick={handleBackClick}
            />
            {photoUrl && <PhotoResult photoUrl={photoUrl} />}
          </>
        );
      default:
        return <ComponentSelect setStep={setStep} />;
    }
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="headerLogo" alt="logo" />
        <div className="themeToggler"></div>
        <Select
          onChange={(val) => setSelectedChain(val)}
          value={selectedChain}
          options={[
            { label: "Ethereum", value: "0x1" },
            { label: "Mumbai", value: "0x13881" },
            { label: "Polygon", value: "0x89" },
            { label: "Avalanche", value: "0xa86a" },
            { label: "Binance", value: "0x38" },
          ]}
          className="dropdown"
        ></Select>
      </header>
      {wallet && seedPhrase ? (
        <Routes>
          <Route
            path="/yourwallet"
            element={
              <WalletView
                wallet={wallet}
                setWallet={setWallet}
                seedPhrase={seedPhrase}
                setSeedPhrase={setSeedPhrase}
                selectedChain={selectedChain}
              />
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/recover"
            element={
              <RecoverAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          ></Route>
          <Route
            path="/yourwallet"
            element={
              <CreateAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
        </Routes>
      )}
      <div className={styles.app}>
        <h1>DOT Web Components Integration</h1>
        {renderStep(step)}
      </div>
    </div>
  );
}

export default App;
