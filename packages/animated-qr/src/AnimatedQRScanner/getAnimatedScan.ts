import { URRegistryDecoder } from "@keystonehq/ur-decoder";
import { QRCodeError, ScannerProps } from "./types";
import { purposeToURType } from "./constant";

interface ScannerHook {
  handleScanSuccess: (ur: string) => void;
  handleScanFailure: (error: string) => void;
}

export const getAnimatedScan = ({
  purpose,
  urTypes,
  handleScan,
  handleError,
}: Omit<ScannerProps, "Options">): ScannerHook => {
  let urDecoder = new URRegistryDecoder();
  const handleScanSuccess = (data: string) => {
    try {
      urDecoder.receivePart(data);
      if (!urDecoder.isComplete()) {
        return;
      }

      if (urDecoder.isError()) {
        handleError(QRCodeError.INVALID_QR_CODE);
      }

      if (urDecoder.isSuccess()) {
        const ur = urDecoder.resultUR();
        const types = []
        if (purpose && purposeToURType[purpose]) {
          types.push(...purposeToURType[purpose])
        }
        if (urTypes instanceof Array) {
          types.push(...urTypes)
        }
        if (types.includes(ur.type)) {
          handleScan({ type: ur.type, cbor: ur.cbor.toString("hex") });
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
