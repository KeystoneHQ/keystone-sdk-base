import { useEffect, useMemo, useState } from "react";
import { UR, UREncoder } from "@ngraveio/bc-ur";

interface AnimatedQRCodeHookProps {
  cbor: string;
  type: string;
  capacity?: number;
  interval?: number;
}

const MAX_FRAGMENT_LENGTH = 400;
const DEFAULT_INTERVAL = 100;

export const useAnimatedQRCode = ({
  cbor,
  type,
  capacity = MAX_FRAGMENT_LENGTH,
  interval = DEFAULT_INTERVAL,
}: AnimatedQRCodeHookProps): string => {
  const urEncoder = useMemo(
    () => new UREncoder(new UR(Buffer.from(cbor, "hex"), type), capacity),
    [cbor, type]
  );

  const [currentQRCode, setCurrentQRCode] = useState(
    urEncoder.nextPart().toUpperCase()
  );

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentQRCode(urEncoder.nextPart().toUpperCase());
    }, interval);
    return () => {
      clearInterval(id);
    };
  }, [urEncoder]);

  return currentQRCode;
};
