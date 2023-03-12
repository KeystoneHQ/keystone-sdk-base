import React, { useEffect, useMemo, useState } from "react";
import { BarcodeFormat, DecodeHintType } from "@zxing/library";
import { BrowserQRCodeReader, IScannerControls } from "@zxing/browser";

const VIDEO_ID = "qr-scanner-video";

interface BaseQRScannerProps {
  handleScan: (result: string) => void;
  handleError?: (error: string) => void;
  blur?: boolean;
  videoLoaded?: (canPlay: boolean) => void;
  width?: string | number;
  height?: string | number;
}

type HTMLVideoElementScanPreview = HTMLVideoElement & {
  pendingScanRequest?: Promise<IScannerControls | undefined>;
};

export const BaseQRScanner = ({
  handleScan,
  handleError,
  blur = true,
  videoLoaded,
  width,
  height,
}: BaseQRScannerProps): JSX.Element => {
  const [canplay, setCanplay] = useState(false);
  const codeReader = useMemo(() => {
    const hint = new Map();
    hint.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.QR_CODE]);
    return new BrowserQRCodeReader(hint, {
      delayBetweenScanAttempts: 50,
      delayBetweenScanSuccess: 100,
    });
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById(
      VIDEO_ID
    ) as HTMLVideoElementScanPreview;
    const canplayListener = () => {
      setCanplay(true);
      videoLoaded && videoLoaded(true);
    };
    videoElement.addEventListener("canplay", canplayListener);

    const pendingScanRequest =
      videoElement?.pendingScanRequest ?? Promise.resolve(undefined);
    const scanRequest = pendingScanRequest
      .then(() =>
        codeReader.decodeFromVideoDevice(
          undefined,
          videoElement,
          (result, error) => {
            if (result) {
              handleScan(result.getText());
            }
            if (error) {
              handleError(error.message);
            }
          }
        )
      )
      .catch((error) => {
        console.error(error);
        return undefined;
      });

    if (videoElement) {
      videoElement.pendingScanRequest = scanRequest;
    }

    return () => {
      videoElement.removeEventListener("canplay", canplayListener);
      scanRequest.then((controls) => {
        if (controls) {
          controls.stop();
        }
      });
    };
  }, []);

  return (
    <video
      id={VIDEO_ID}
      data-testid={VIDEO_ID}
      style={{
        display: canplay ? "block" : "none",
        width: width || "auto",
        height: height || "auto",
        objectFit: "cover",
        transform: "rotateY(180deg)",
        filter: blur ? "blur(4px)" : "none",
      }}
    />
  );
};
