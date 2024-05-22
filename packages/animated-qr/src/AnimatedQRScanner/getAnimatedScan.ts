import { URDecoder } from "@ngraveio/bc-ur";
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
  let urDecoder = new URDecoder();
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
        urDecoder = new URDecoder();
      }
    } catch (e) {
      handleError(QRCodeError.INVALID_QR_CODE);
      urDecoder = new URDecoder();
    }
  };

  const handleScanFailure = (error: string) => {
    // Ignore Error of "Dimensions could be not found.".
    if (error === "Dimensions could be not found.") {
      return;
    }
    if (handleError && error) {
      handleError(error);
    }
  };

  return {
    handleScanSuccess,
    handleScanFailure,
  };
};
