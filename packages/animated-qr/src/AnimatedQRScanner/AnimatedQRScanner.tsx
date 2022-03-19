import React from "react";
import { BaseQRScanner } from "./BaseQRScanner";
import { ScannerProps } from "./types";
import { useAnimatedScan } from "./useAnimatedScan";

const CAMERA_VIDEO_WIDTH = 300;

export const AnimatedQRScanner = ({
  purpose,
  handleScan,
  handleError,
  options,
  defaultPopup,
}: ScannerProps) => {
  const { handleScanSuccess, handleScanFailure } = useAnimatedScan({
    purpose,
    handleScan,
    handleError,
    defaultPopup,
  });

  return (
    <div style={{ width: options?.width ?? CAMERA_VIDEO_WIDTH }}>
      <BaseQRScanner
        handleScan={handleScanSuccess}
        handleError={handleScanFailure}
        blur={options?.blur}
      />
    </div>
  );
};
