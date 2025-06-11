import { BarcodeFormat, DecodeHintType } from "@zxing/library";
import { BrowserQRCodeReader, IScannerControls } from "@zxing/browser";
import { ScannerProps, getAnimatedScan } from "@keystonehq/animated-qr-base";

const codeReader = () => {
  const hint = new Map();
  hint.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.QR_CODE]);
  return new BrowserQRCodeReader(hint, {
    delayBetweenScanAttempts: 50,
    delayBetweenScanSuccess: 100,
  });
};

interface SetupProps extends Omit<ScannerProps, "options"> {
  video: HTMLVideoElementScanPreview<IScannerControls>;
}

export const setupScanner = ({
  video,
  purpose,
  urTypes,
  handleScan,
  handleError,
  videoLoaded,
  onProgress,
}: SetupProps) => {
  const { handleScanSuccess, handleScanFailure } = getAnimatedScan({
    purpose,
    urTypes,
    handleScan,
    handleError,
    onProgress,
  });
  const canplayListener = () => {
    videoLoaded && videoLoaded(true);
  };
  video.addEventListener("canplay", canplayListener);
  const pendingScanRequest =
    video?.pendingScanRequest ?? Promise.resolve(undefined);
  const scanRequest = pendingScanRequest
    .then(() =>
      codeReader().decodeFromVideoDevice(undefined, video, (result, error) => {
        if (result) {
          handleScanSuccess(result.getText());
        }
        if (error) {
          handleScanFailure(error.message);
        }
      })
    )
    .catch((error) => {
      console.error(error);
      return undefined;
    });

  if (video) {
    video.pendingScanRequest = scanRequest;
  }

  return () => {
    video.removeEventListener("canplay", canplayListener);
    scanRequest.then((controls) => {
      if (controls) {
        controls.stop();
      }
    });
  };
};
