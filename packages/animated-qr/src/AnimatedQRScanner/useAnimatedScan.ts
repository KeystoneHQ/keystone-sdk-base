import { useCallback, useState } from "react";
import { URRegistryDecoder } from "@keystonehq/ur-decoder";
import { CameraStatus, QRCodeError, ScannerProps } from "./types";
import { purposeToURType } from "./constant";
import { useCamera } from "./useCamera";

interface ScannerHook {
  handleScanSuccess: (ur: string) => void;
  handleScanFailure: (error: string) => void;
}

export const useAnimatedScan = ({
  purpose,
  handleScan,
  handleError,
  defaultPopup,
}: Omit<ScannerProps, "Options">): ScannerHook => {
  const [urDecoder, setURDecoder] = useState(new URRegistryDecoder());
  const { cameraStatus } = useCamera(defaultPopup);

  if (
    cameraStatus === CameraStatus.NO_WEBCAM ||
    cameraStatus === CameraStatus.PERMISSION_NEEDED ||
    cameraStatus === CameraStatus.UNKNOWN_ERROR
  ) {
    handleError(cameraStatus);
  }

  const handleScanSuccess = useCallback(
    (data: string) => {
      try {
        urDecoder.receivePart(data);
        if (!urDecoder.isComplete()) {
          return;
        }

        if (urDecoder.isSuccess()) {
          const ur = urDecoder.resultUR();
          if (purposeToURType[purpose].includes(ur.type)) {
            handleScan(ur.cbor.toString("hex"));
          } else {
            handleError(QRCodeError.UNEXPECTED_QRCODE);
          }
        } else {
          handleError(urDecoder.resultError());
        }
        setURDecoder(new URRegistryDecoder());
      } catch (e) {
        handleError(QRCodeError.UNKNOWN_QR_CODE);
      }
    },
    [urDecoder, handleError, handleScan]
  );

  const handleScanFailure = useCallback(
    (error: string) => {
      if (handleError && error) {
        handleError(error);
      }
      setURDecoder(new URRegistryDecoder());
    },
    [handleError]
  );

  return {
    handleScanSuccess,
    handleScanFailure,
  };
};
