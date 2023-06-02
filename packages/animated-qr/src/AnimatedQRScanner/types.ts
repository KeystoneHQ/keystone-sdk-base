export enum QRCodeError {
  UNEXPECTED_QRCODE = "UNEXPECTED_QRCODE",
  INVALID_QR_CODE = "INVALID_QR_CODE",
}

export enum CameraStatus {
  ACCESSING_CAMERA = "ACCESSING_CAMERA",
  NO_WEBCAM = "NO_WEBCAM_FOUND",
  PERMISSION_NEEDED = "NO_WEBCAM_ACCESS",
  READY = "READY",
  UNKNOWN_ERROR = "UNKNOWN_CAMERA_ERROR",
}

export type CameraError = "NO_WEBCAM_FOUND" | "NO_WEBCAM_ACCESS"

export interface ScannerProps {
  purpose?: Purpose
  urTypes?: string[]
  handleScan: (ur: { type: string; cbor: string }) => void
  handleError: (error: string) => void
  options?: {
    width?: number | string
    height?: number | string
    blur?: boolean
  }
  videoLoaded?: (canPlay: boolean, error?: CameraError) => void
  onProgress?: (progress: number) => void
}

export enum Purpose {
  SYNC = "sync",
  SIGN = "sign",
  SOL_SYNC = "sol-sync",
  SOL_SIGN = "sol-sign",
  NEAR_SYNC = "near-sync",
  NEAR_SIGN = "near-sign",
  COSMOS_SYNC = "cosmos-sync",
  COSMOS_SIGN = "cosmos-sign",
}

export enum URType {
  CRYPTO_HDKEY = "crypto-hdkey",
  CRYPTO_ACCOUNT = "crypto-account",
  CRYPTO_MULTI_ACCOUNTS = "crypto-multi-accounts",
  ETH_SIGNATURE = "eth-signature",
  SOL_SIGNATURE = "sol-signature",
  NEAR_SIGNATURE = "near-signature",
  COSMOS_SIGNATURE = "cosmos-signature",
  EVM_SIGNATURE = "evm-signature",
}
