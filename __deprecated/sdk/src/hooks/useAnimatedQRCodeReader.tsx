import React, { useMemo, useState, Suspense } from "react";
import { EventEmitter } from "events";
import { Button } from "../components/Button";
import { URTypeError } from "../error";

import { Read, SupportedResult } from "../types";
import { ButtonGroup } from "../components/ButtonGroup";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { URDecoder } from "@ngraveio/bc-ur";
import { Scanner } from '@yudiel/react-qr-scanner';

export interface URQRCodeData {
  total: number;
  index: number;
  data: string;
}

let URTypeErrorMessage = "";

export const useAnimatedQRCodeReader = (): [
  JSX.Element,
  { read: Read; cameraReady: boolean }
] => {
  const [cameraReady, setCameraReady] = useState<boolean>(false);
  const [expectTypes, setExpectTypes] = useState<SupportedResult[]>([]);
  const [urDecoder, setURDecoder] = useState(new URDecoder());
  const [error, setError] = useState("");
  const ee = useMemo(() => new EventEmitter(), []);
  const [title, setTitle] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [description, setDescription] = useState<string | null>(null);
  const reset = () => {
    setURDecoder(new URDecoder());
    setError("");
    setProgress(0);
  };

  const processQRCode = (qr: string, errorMessgeOnURType: string) => {
    processUR(qr, errorMessgeOnURType);
  };

  const handleStop = () => {
    ee.emit("read", {
      status: "canceled",
    });
  };

  const handleRetry = () => {
    reset();
  };

  const processUR = (ur: string, errorMessgeOnURType: string) => {
    try {
      if (!urDecoder.isComplete()) {
        urDecoder.receivePart(ur);
        setProgress(urDecoder.getProgress());
      } else {
        const result = urDecoder.resultUR();
        let foundExpected = false;
        expectTypes.forEach((et) => {
          if (et === result.type) {
            foundExpected = true;
            ee.emit("read", {
              result,
              status: "success",
            });
            return;
          }
        });
        if (!foundExpected)
          throw new URTypeError(
            `received ur type ${result.type}, but expected [${expectTypes.join(
              ","
            )}]`
          );
      }
    } catch (e) {
      if (e instanceof URTypeError) {
        setError(errorMessgeOnURType);
      } else {
        setError((e as Error).message);
      }
    }
  };

  const element = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {title && (
        <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{title}</p>
      )}
      {description && (
        <p style={{ fontSize: "1rem", textAlign: "center" }}>{description}</p>
      )}
      <Suspense fallback={<div style={{ position: "relative", width: "100%" }} />}>
        <div style={{ position: "relative", width: "100%" }}>
          {!cameraReady ? (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <LoadingSpinner />
            </div>
          ) : null}
          <Scanner
            onResult={(data: any) => {
              if (data) {
                setCameraReady(true);
                processQRCode(data, URTypeErrorMessage);
              }
            }}
            styles={{ container: { width: "100%" }, finderBorder: 0 }}
            onError={(e) => {
              setError(e.message);
            }}
            options={{ delayBetweenScanSuccess: 100, delayBetweenScanAttempts: 100 }}
            components={{ tracker: false, audio: false, torch: false, count: false, onOff: false }}
          />
        </div>
      </Suspense>
      {progress > 0 && progress <= 1 && <p>{(progress * 100).toFixed(0)} %</p>}
      {error && <p style={{ color: "red", fontSize: "1rem" }}>{error}</p>}
      <ButtonGroup>
        <Button onClick={handleStop}>Close</Button>
        {error && <Button onClick={handleRetry}>Retry</Button>}
      </ButtonGroup>
    </div>
  );

  return [
    element,
    {
      read: (expect, options) => {
        return new Promise((resolve) => {
          setExpectTypes(expect);
          if (options) {
            options.title && setTitle(options.title);
            options.description && setDescription(options.description);
            URTypeErrorMessage = options.URTypeErrorMessage
              ? options.URTypeErrorMessage
              : "";
          }
          ee.once("read", (result) => {
            reset();
            resolve(result);
          });
        });
      },
      cameraReady,
    },
  ];
};
