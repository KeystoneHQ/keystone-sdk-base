export enum CameraStatus {
  ACCESSING_CAMERA = "ACCESSING_CAMERA",
  NO_WEBCAM = "NO_WEBCAM_FOUND",
  PERMISSION_NEEDED = "NO_WEBCAM_ACCESS",
  READY = "READY",
  UNKNOWN_ERROR = "UNKNOWN_CAMERA_ERROR",
}

export enum QRCodeError {
  UNEXPECTED_QRCODE = "UNEXPECTED_QRCODE",
  INVALID_QR_CODE = "INVALID_QR_CODE",
}

export type ScannerError =
  | CameraStatus.NO_WEBCAM
  | CameraStatus.PERMISSION_NEEDED
  | CameraStatus.UNKNOWN_ERROR
  | QRCodeError
  | string;

export interface ScannerProps {
  purpose: Purpose;
  handleScan: (ur: { type: string; cbor: string }) => void;
  handleError: (error: ScannerError) => void;
  options?: {
    width?: number;
    blur?: boolean;
  };
  defaultPopup?: string;
}

export enum Purpose {
  SYNC = "sync",
  SIGN = "sign",
}
