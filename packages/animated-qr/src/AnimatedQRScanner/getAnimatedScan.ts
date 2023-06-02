import { URRegistryDecoder } from "@keystonehq/ur-decoder";
import { QRCodeError, ScannerProps } from "./types";
import { purposeToURType } from "./constant";

interface ScannerHook {
  handleScanSuccess: (ur: string) => void;
  handleScanFailure: (error: string) => void;
}

export const getAnimatedScan = ({
  purpose,
  urTypes = [],
  handleScan,
  handleError,
  onProgress,
}: Omit<ScannerProps, "Options">): ScannerHook => {
  let urDecoder = new URRegistryDecoder();
  const handleScanSuccess = (data: string) => {
    try {
      urDecoder.receivePart(data);
      if (!urDecoder.isComplete()) {
        !!onProgress &&
          onProgress(Math.trunc(urDecoder.estimatedPercentComplete() * 100));
        return;
      }

      if (urDecoder.isError()) {
        handleError(QRCodeError.INVALID_QR_CODE);
      }

      if (urDecoder.isSuccess()) {
        const ur = urDecoder.resultUR();
        const types = [];
        if (purpose && purposeToURType[purpose]) {
          types.push(...purposeToURType[purpose]);
        }
        types.push(...urTypes);
        if (types.includes(ur.type)) {
          !!onProgress && onProgress(100);
          try {
            handleScan({ type: ur.type, cbor: ur.cbor.toString("hex") });
          } catch (e) {
            handleError("FAILED_TO_HANDLE_QR_CODE");
          }
        } else {
          handleError(QRCodeError.UNEXPECTED_QRCODE);
        }
        urDecoder = new URRegistryDecoder();
      }
    } catch (e) {
      handleError(QRCodeError.INVALID_QR_CODE);
      urDecoder = new URRegistryDecoder();
    }
  };

  const handleScanFailure = (error: string) => {
    if (handleError && error) {
      handleError(error);
    }
  };

  return {
    handleScanSuccess,
    handleScanFailure,
  };
};
