import React from "react";
import { BaseQRCode } from "./BaseQRCode";
import { useAnimatedQRCode } from "./useAnimatedQRCode";

interface AnimatedQRCodeProps {
  cbor: string;
  type: string;
  options?: {
    size?: number;
    capacity?: number;
    interval?: number;
  };
}

export const AnimatedQRCode = ({
  cbor,
  type,
  options,
}: AnimatedQRCodeProps): JSX.Element => {
  const currentQRCode = useAnimatedQRCode({
    cbor,
    type,
    capacity: options?.capacity,
    interval: options?.interval,
  });

  return <BaseQRCode value={currentQRCode} size={options?.size} />;
};
