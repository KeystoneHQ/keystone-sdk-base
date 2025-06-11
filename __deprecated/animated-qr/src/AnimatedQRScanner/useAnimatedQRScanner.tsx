import React, {
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  CameraStatus,
  ScannerProps,
  getAnimatedScan,
} from "@keystonehq/animated-qr-base";
import { BaseQRScanner } from "./BaseQRScanner";
import { useCamera } from "./useCamera";

interface BaseScannerProps {
  handleScan: (ur: string) => void;
  handleError: (error: string) => void;
  onProgress?: (progress: number) => void;
  [otherProps: string]: any;
}

export interface ScannerHookParams {
  Scanner?: (props: BaseScannerProps) => ReactElement;
  scannerProps?: Record<string, any>;
}

export const useAnimatedQRScanner = (
  props?: ScannerHookParams
): {
  isDone: boolean;
  hasPermission: boolean;
  AnimatedQRScanner: (props: ScannerProps) => ReactElement;
  setIsDone: (isDone: boolean) => void;
} => {
  const [isDone, setIsDone] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean>(true);
  // Prevent AnimatedQRScanner from redrawing without using isDone as a dependency.
  // Using ref to get the latest state in AnimatedQRScanner.
  const isScanDone = useRef(isDone);

  // Check permission
  const { cameraStatus } = useCamera();

  const AnimatedQRScanner = useMemo(() => {
    return ({
      purpose,
      urTypes,
      handleScan,
      handleError,
      videoLoaded,
      onProgress,
      options,
      ...args
    }: ScannerProps): ReactElement => {
      const onError = (err: string) => {
        if (isScanDone.current) {
          return;
        }
        setIsDone(true);
        handleError(err);
      };

      const onSuccess = (ur: { type: string; cbor: string }) => {
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
        onProgress,
      });

      const onVideoLoaded = (canPlay: boolean) => {
        setHasPermission(canPlay);
        if (typeof videoLoaded === "function") {
          videoLoaded(canPlay);
        }
      };

      const ScannerComponent = props?.Scanner ?? BaseQRScanner;

      return (
        <ScannerComponent
          handleScan={handleScanSuccess}
          handleError={handleScanFailure}
          videoLoaded={onVideoLoaded}
          {...props?.scannerProps}
          {...options}
          {...args}
        />
      );
    };
  }, []);

  useEffect(() => {
    isScanDone.current = isDone;
  }, [isDone]);

  useEffect(() => {
    if (
      cameraStatus === CameraStatus.PERMISSION_NEEDED ||
      cameraStatus === CameraStatus.NO_WEBCAM
    ) {
      setHasPermission(false);
    }
  }, [cameraStatus]);

  return {
    isDone,
    hasPermission,
    AnimatedQRScanner,
    setIsDone,
  };
};
