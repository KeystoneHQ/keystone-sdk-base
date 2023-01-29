import React, { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { ScannerProps } from "./types";
import { BaseQRScanner } from "./BaseQRScanner";
import { getAnimatedScan } from "./getAnimatedScan";

interface BaseScannerProps {
  handleScan: (ur: string) => void;
  handleError: (error: string) => void;
  [otherProps: string]: any;
}

export interface ScannerHookParams {
  Scanner?: (props: BaseScannerProps) => ReactElement;
  scannerProps?: Record<string, any>;
}

export const useAnimatedQRScanner = ({
  Scanner = BaseQRScanner,
  scannerProps = {},
}: ScannerHookParams): {
  isDone: boolean;
  AnimatedQRScanner: (props: ScannerProps) => ReactElement;
  setIsDone: (isDone: boolean) => void;
} => {
  const [isDone, setIsDone] = useState(false);
  const isScanDone = useRef(false);

  const AnimatedQRScanner = useMemo(() => {
    return ({
      purpose,
      urTypes,
      handleScan,
      handleError,
      options,
    }: ScannerProps): ReactElement => {
      // Error 5 times in 500ms, then trigger the error handler.
      const errTimes = [];
      const onError = (err: string) => {
        if (isScanDone.current) {
          return;
        }
        // Error "Dimensions could be not found." is triggered too frequently.
        if (!/^Dimensions/i.test(err)) {
          setIsDone(true);
          handleError(err);
          return;
        }
        const i = 4;
        const t = Date.now()
        errTimes.unshift(t);
        if (errTimes[i] && t - errTimes[i] < 500) {
          errTimes.length = 0;
          setIsDone(true);
          handleError(err);
        }
      };

      const onSuccess = (ur: {type: string, cbor: string}) => {
        if (isScanDone.current) {
          return;
        }
        setIsDone(true);
        handleScan(ur);
      };

      const { handleScanSuccess, handleScanFailure } = getAnimatedScan({
        purpose,
        urTypes,
        handleScan: onSuccess,
        handleError: onError,
      });

      return (
        <Scanner
          handleScan={handleScanSuccess}
          handleError={handleScanFailure}
          {...scannerProps}
          {...options}
        />
      );
    };
  }, []);

  useEffect(() => {
    isScanDone.current = isDone;
  }, [isDone]);

  return {
    isDone,
    AnimatedQRScanner,
    setIsDone,
  };
};
