export enum QRCodeError {
  UNEXPECTED_QRCODE = "UNEXPECTED_QRCODE",
  INVALID_QR_CODE = "INVALID_QR_CODE",
}

export interface ScannerProps {
  purpose: Purpose;
  handleScan: (ur: { type: string; cbor: string }) => void;
  handleError: (error: string) => void;
  options?: {
    width?: number;
    blur?: boolean;
  };
  videoLoaded?: (canPlay: boolean) => void
}

export enum Purpose {
  SYNC = "sync",
  SIGN = "sign",
}
