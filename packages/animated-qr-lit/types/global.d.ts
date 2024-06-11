type Nullable<T> = T | null | undefined;

type HTMLVideoElementScanPreview<T> = HTMLVideoElement & {
  pendingScanRequest?: Promise<T | undefined>;
};

interface AnimatedQRCodeProps {
  cbor: string;
  type: string;
  size?: number;
  capacity?: number;
  interval?: number;
}
