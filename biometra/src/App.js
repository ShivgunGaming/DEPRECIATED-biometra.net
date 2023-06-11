//Main App.js code
//Still need to add biometrics to Biometra
//Still need to add Auto Face Capture UI Library

import React, { useState, useEffect, useCallback } from 'react';
import { Select } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount.js';
import RecoverAccount from './components/RecoverAccount.js';
import WalletView from './components/WalletView.js';
import logo from './biologothree.png';
import '@innovatrics/dot-face-auto-capture';
import './App.css';

const FaceCamera = (props) => {
  useEffect(() => {
    const faceAutoCaptureHTMLElement = document.getElementById('x-dot-face-auto-capture');
    if (faceAutoCaptureHTMLElement) {
      faceAutoCaptureHTMLElement.cameraOptions = props;
    }
  }, [props]);

  return React.createElement('x-dot-face-auto-capture', { id: 'x-dot-face-auto-capture' });
};

function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState('0x1');

  const handleFacePhotoTaken = (image, resolution) => {
    console.log('Face image:', image);
    console.log('Resolution:', resolution);
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
            { label: 'Ethereum', value: '0x1' },
            { label: 'Mumbai', value: '0x13881' },
            { label: 'Polygon', value: '0x89' },
            { label: 'Avalanche', value: '0xa86a' },
            { label: 'Binance', value: '0x38' },
          ]}
          className="dropdown"
        ></Select>
      </header>
      <Routes>
        {wallet && seedPhrase ? (
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
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route
              path="/recover"
              element={
                <RecoverAccount setSeedPhrase={setSeedPhrase} setWallet={setWallet} />
              }
            />
            <Route
              path="/yourwallet"
              element={
                <>
                  <CreateAccount setSeedPhrase={setSeedPhrase} setWallet={setWallet} />
                  <FaceCamera
                    imageType="png"
                    cameraFacing="user"
                    onPhotoTaken={handleFacePhotoTaken}
                    onError={handleError}
                  />
                </>
              }
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
