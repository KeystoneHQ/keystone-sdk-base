import React, { ReactElement, useMemo } from "react";
import { ScannerProps } from "./types";
import { BaseQRScanner } from "./BaseQRScanner";
import { getAnimatedScan } from "./getAnimatedScan";
import { CAMERA_VIDEO_WIDTH } from "./AnimatedQRScanner";

interface BaseScannerProps {
  handleScan: (ur: string) => void;
  handleError: (error: string) => void;
  [otherProps: string]: any;
}

export interface ScannerHookParams {
  Scanner?: (props: BaseScannerProps) => ReactElement;
  scannerProps?: Record<string, any>
}

export const useAnimatedQRScanner = ({
  Scanner = BaseQRScanner,
  scannerProps = {}
}: ScannerHookParams): {
  AnimatedQRScanner: (props: ScannerProps) => ReactElement;
} => {
  const AnimatedQRScanner = useMemo(() => {
    return ({purpose, handleScan, handleError, options}: ScannerProps): ReactElement => {
      const { handleScanSuccess, handleScanFailure } = getAnimatedScan({
        purpose,
        handleScan,
        handleError,
      });

      return (
        <div style={{ width: options?.width || CAMERA_VIDEO_WIDTH }}>
          <Scanner
            handleScan={handleScanSuccess}
            handleError={handleScanFailure}
            {...scannerProps}
          />
        </div>
      );
    };
  }, []);

  return {
    AnimatedQRScanner,
  };
};
