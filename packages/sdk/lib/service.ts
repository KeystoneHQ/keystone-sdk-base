import ReactDOM from 'react-dom';
import Root from './Root';
import React from 'react';
import { Play, Read } from './types';
import Modal from 'react-modal';

let initialized = false;

const bootstrap = (): void => {
    const htmlBody = document.getElementsByTagName('body').item(0) as HTMLBodyElement;
    const sdkDiv = document.createElement('div');
    sdkDiv.id = 'kv_sdk_container';
    htmlBody.appendChild(sdkDiv);
    Modal.setAppElement('#kv_sdk_container');
    ReactDOM.render(React.createElement(Root), sdkDiv);
};

const setup = (r: Read, p: Play) => {
    initialized = true;
    read = r;
    play = p;
};

let read: Read;

let play: Play;

export default {
    bootstrap,
    setup,
    makeService: () => {
        if (initialized) {
            return {
                read,
                play,
            };
        } else {
            throw new Error('SDK is not initialized');
        }
    },
};
