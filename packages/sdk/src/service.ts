import React from "react";
import * as ReactDOM from "react-dom";
import { EventEmitter } from "events";
import Modal from "react-modal";
import { createRoot } from "react-dom/client";
import { Play, Read, SDK } from "./types";
import { useEffect } from 'react';
import { useController } from "./hooks/useController";


const ee = new EventEmitter();
let read: Read;
let play: Play;
let cameraReady: boolean;

const Container = () => {
  const [Controller, { read, play, cameraReady }] = useController();
  useEffect(() => {
    setupSdk(read, play, cameraReady);
    ee.emit('RenderDone');
  }, []);
  return Controller;
};

const bootstrap = (): void => {
  const htmlBody = document
    .getElementsByTagName("body")
    .item(0) as HTMLBodyElement;
  const sdkDiv = document.createElement("div");
  sdkDiv.id = "kv_sdk_container";
  htmlBody.appendChild(sdkDiv);
  Modal.setAppElement("#kv_sdk_container");

  const reactVersion = React.version;
  const big = reactVersion.split('.')[0];

  if (parseInt(big) < 18) {
    ReactDOM.render(React.createElement(Container), sdkDiv);
  } else {
    const RootElement = React.createElement(Container);
    createRoot(sdkDiv).render(RootElement);
  }
};

export const setupSdk = (r: Read, p: Play, status: boolean) => {
  read = r;
  play = p;
  cameraReady = status;
};


const sdkInstance: Promise<SDK> = new Promise((resolve) => {
  ee.on('RenderDone', () => {
    let sdkInstance: SDK = {
      read,
      play,
      cameraReady,
    };
    resolve(sdkInstance);
  });
});

const sdk = {
  bootstrap,
  getSdk: (): Promise<SDK> => sdkInstance,
};

export default sdk;
