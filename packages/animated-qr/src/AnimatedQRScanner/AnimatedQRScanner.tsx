import React from "react";
import { BaseQRScanner } from "./BaseQRScanner";
import { ScannerProps } from "./types";
import { getAnimatedScan } from "./getAnimatedScan";

export const CAMERA_VIDEO_WIDTH = 300;

export const AnimatedQRScanner = ({
  purpose,
  handleScan,
  handleError,
  options,
  videoLoaded,
}: ScannerProps) => {
  const { handleScanSuccess, handleScanFailure } = getAnimatedScan({
    purpose,
    handleScan,
    handleError,
  });

  return (
    <div style={{ width: options?.width || CAMERA_VIDEO_WIDTH }}>
      <BaseQRScanner
        handleScan={handleScanSuccess}
        handleError={handleScanFailure}
        blur={options?.blur}
        videoLoaded={videoLoaded}
      />
    </div>
  );
};
