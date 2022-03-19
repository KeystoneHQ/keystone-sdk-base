import React, { useEffect, useMemo, useState } from "react";
import { BarcodeFormat, DecodeHintType } from "@zxing/library";
import { BrowserQRCodeReader } from "@zxing/browser";

const VIDEO_ID = "qr-scanner-video";

interface ReaderProps {
  handleScan: (result: string) => void;
  handleError?: (error: string) => void;
  blur?: boolean;
}

export const BaseQRScanner = ({
  handleScan,
  handleError,
  blur = true,
}: ReaderProps): JSX.Element => {
  const [canplay, setCanplay] = useState(false);
  const codeReader = useMemo(() => {
    const hint = new Map();
    hint.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.QR_CODE]);
    return new BrowserQRCodeReader(hint, {
      delayBetweenScanAttempts: 100,
      delayBetweenScanSuccess: 100,
    });
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById(VIDEO_ID) as HTMLVideoElement;
    const canplayListener = () => {
      setCanplay(true);
    };
    videoElement.addEventListener("canplay", canplayListener);

    const promise = codeReader.decodeFromVideoDevice(
      undefined,
      videoElement,
      (result) => {
        if (result) {
          handleScan(result.getText());
        }
      }
    );
    return () => {
      videoElement.removeEventListener("canplay", canplayListener);
      promise
        .then((controls) => {
          if (controls) {
            controls.stop();
          }
        })
        .catch((error) => {
          handleError && handleError(error);
        });
    };
  }, []);

  return (
    <video
      id={VIDEO_ID}
      style={{
        display: canplay ? "block" : "none",
        width: "100%",
        filter: blur ? "blur(4px)" : "none",
      }}
    />
  );
};
