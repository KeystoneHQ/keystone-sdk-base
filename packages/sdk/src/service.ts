import ReactDOM from "react-dom";
import Root from "./Root";
import React from "react";
import { Play, Read } from "./types";
import Modal from "react-modal";

let initialized = false;
let read: Read;
let play: Play;
let cameraReady: boolean;

const bootstrap = (): void => {
  const htmlBody = document
    .getElementsByTagName("body")
    .item(0) as HTMLBodyElement;
  const sdkDiv = document.createElement("div");
  sdkDiv.id = "kv_sdk_container";
  htmlBody.appendChild(sdkDiv);
  Modal.setAppElement("#kv_sdk_container");
  ReactDOM.render(React.createElement(Root), sdkDiv);
};

export const setupSdk = (r: Read, p: Play, status: boolean) => {
  initialized = true;
  read = r;
  play = p;
  cameraReady = status;
};

const sdk = {
  bootstrap,
  getSdk: () => {
    if (initialized) {
      return {
        read,
        play,
        cameraReady,
      };
    } else {
      throw new Error("SDK is not initialized");
    }
  },
};

export default sdk;
