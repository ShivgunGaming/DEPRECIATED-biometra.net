import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

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
