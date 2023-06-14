import React, { useEffect } from "react";
import "./App.css";
import { useState, useCallback } from "react";
import logo from "./biologothree.png";
import { Select } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount.js";
import RecoverAccount from "./components/RecoverAccount.js";
import WalletView from "./components/WalletView.js";
import "@innovatrics/dot-auto-capture-ui/face";

const FaceCamera = (props) => {
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
};

const FaceUi = (props) => {
  useEffect(() => {
    const uiElement = document.getElementById("x-dot-face-auto-capture-ui");

    if (uiElement) {
      uiElement.props = props;
    }
  });

  return React.createElement("x-dot-face-auto-capture-ui", {
    id: "x-dot-face-auto-capture-ui",
  });
};

function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");

  const handleFacePhotoTaken = (image, resolution) => {
    console.log("Face image:", image);
    console.log("Resolution:", resolution);
  };

  const handleError = useCallback((error) => {
    alert(error);
  }, []);

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
          <Route path="/" element={<Home />} />
          <Route
            path="/recover"
            element={
              <RecoverAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
          <Route
            path="/yourwallet"
            element={
              <>
                <div style={{ position: "relative" }}>
                <CreateAccount
                  setSeedPhrase={setSeedPhrase}
                  setWallet={setWallet}
                />
                <FaceCamera
                  imageType="png"
                  cameraFacing="user"
                  onPhotoTaken={handleFacePhotoTaken}
                  onError={handleError}
                />
                <FaceUi
  
                />
                </div>
              </>
            }
          />
          <Route
            path="/biometrics"
            element={
              <RecoverAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
