import React, { useEffect, useState, useCallback } from "react";
import { Select, Switch } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount.js";
import RecoverAccount from "./components/RecoverAccount.js";
import WalletView from "./components/WalletView.js";
import logoLight from "./biologothree.png";
import logoDark from "./biodarklogothree.png";
import "@innovatrics/dot-auto-capture-ui/face";
import "./App.css";

const FaceCamera = (props) => {
  useEffect(() => {
    const faceAutoCaptureHTMLElement = document.getElementById(
      "x-dot-face-auto-capture"
    );

    if (faceAutoCaptureHTMLElement) {
      faceAutoCaptureHTMLElement.cameraOptions = props;
    }
  });

  return <x-dot-face-auto-capture id="x-dot-face-auto-capture" />;
};

const FaceUi = (props) => {
  useEffect(() => {
    const uiElement = document.getElementById("x-dot-face-auto-capture-ui");

    if (uiElement) {
      uiElement.props = props;
    }
  });

  return <x-dot-face-auto-capture-ui id="x-dot-face-auto-capture-ui" />;
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [showCreateWallet, setShowCreateWallet] = useState(false);
  const [selectedChain, setSelectedChain] = useState("0x1");

  const handleFacePhotoTaken = (image, resolution) => {
    console.log("Face image:", image);
    console.log("Resolution:", resolution);
  };

  const handleError = useCallback((error) => {
    alert(error);
  }, []);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header>
        <div className="headerContent">
          <img
            src={darkMode ? logoDark : logoLight}
            className="headerLogo"
            alt="logo"
          />
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode((prevMode) => !prevMode)}
            checkedChildren="Dark Mode"
            unCheckedChildren="Light Mode"
            className="themeToggler"
          />
          <Select
            onChange={(val) => setSelectedChain(val)}
            value={selectedChain}
            options={[
              { label: "Ethereum", value: "0x1" },
              { label: "Avalanche", value: "0xa86a" },
              { label: "Binance", value: "0x38" },
            ]}
            className="dropdown"
          />
        </div>
      </header>
      <div className="content">

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
            <Route path="/" element={<Home darkMode={darkMode} />} />
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
                <CreateAccount
                  setSeedPhrase={setSeedPhrase}
                  setWallet={setWallet}
                />
              }
            />
          </Routes>
        )}
      </div>
    </div>
  );  
}

export default App;
