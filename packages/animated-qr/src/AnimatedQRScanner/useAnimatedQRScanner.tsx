import React, { ReactElement, useMemo } from "react";
import { Purpose } from "./types";
import { BaseQRScanner } from "./BaseQRScanner";
import { useAnimatedScan } from "./useAnimatedScan";

interface BaseScannerProps {
  handleScan: (ur: string) => void;
  handleError: (error: string) => void;
  [otherProps: string]: any;
}

export interface ScannerHookParams {
  purpose: Purpose;
  Scanner?: (props: BaseScannerProps) => ReactElement;
  defaultPopup?: string;
}

export const useAnimatedQRScanner = ({
  purpose,
  Scanner = BaseQRScanner,
  defaultPopup,
}: ScannerHookParams): {
  AnimatedQRScanner: (props: BaseScannerProps) => JSX.Element;
} => {
  const AnimatedQRScanner = useMemo(() => {
    return ({
      handleScan,
      handleError,
      ...rest
    }: BaseScannerProps): JSX.Element => {
      const { handleScanSuccess, handleScanFailure } = useAnimatedScan({
        purpose,
        handleScan,
        handleError,
        defaultPopup,
      });

      return (
        <div style={{ width: rest?.options?.width ?? 300 }}>
          <Scanner
            handleScan={handleScanSuccess}
            handleError={handleScanFailure}
            {...rest}
          />
        </div>
      );
    };
  }, []);

  return {
    AnimatedQRScanner,
  };
};
