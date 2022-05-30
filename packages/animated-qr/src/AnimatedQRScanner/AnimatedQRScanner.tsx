import React, { useEffect, useRef } from "react";
import { BaseQRScanner } from "./BaseQRScanner";
import { CameraStatus, ScannerProps } from "./types";
import { getAnimatedScan } from "./getAnimatedScan";
import { useCamera } from "./useCamera";

export const CAMERA_VIDEO_WIDTH = 300;

export const AnimatedQRScanner = ({
  purpose,
  handleScan,
  handleError,
  options,
  videoLoaded,
}: ScannerProps) => {
  const camera = useRef(CameraStatus.ACCESSING_CAMERA);
  const { cameraStatus } = useCamera();
  const { handleScanSuccess, handleScanFailure } = getAnimatedScan({
    purpose,
    handleScan,
    handleError,
  });

  useEffect(() => {
    if (!videoLoaded || camera.current === cameraStatus) {
      return;
    }

    if (
      cameraStatus === CameraStatus.PERMISSION_NEEDED ||
      cameraStatus === CameraStatus.NO_WEBCAM
    ) {
      videoLoaded(false);
    } else if (cameraStatus === CameraStatus.READY) {
      videoLoaded(true);
    }
  }, [cameraStatus]);

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
