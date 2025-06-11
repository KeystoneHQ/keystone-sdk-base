import React, { ReactElement, useMemo } from "react";
import { useAnimatedQRCode } from "./useAnimatedQRCode";

interface HOCProps {
  WrappedComponent: React.ComponentType
  valueFieldName?: string,
  additionalProps?: {
    [props: string]: any
  }
}

interface AnimatedQRCodeProps {
  cbor: string;
  type: string;
  capacity?: number;
  interval?: number;
}

const MAX_FRAGMENT_LENGTH = 400;
const DEFAULT_INTERVAL = 100;

export const withAnimatedQRCode = ({
  WrappedComponent,
  valueFieldName = "text",
  additionalProps = {}
}: HOCProps): (props: AnimatedQRCodeProps) => ReactElement => {
  const AnimatedQRCode = useMemo(() => {
    return ({cbor, type, capacity = MAX_FRAGMENT_LENGTH, interval = DEFAULT_INTERVAL}: AnimatedQRCodeProps): ReactElement => {
      const currentQRCode = useAnimatedQRCode({cbor, type, capacity, interval})

      return (
        <WrappedComponent {...{[valueFieldName]: currentQRCode}} {...additionalProps} />
      );
    };
  }, []);

  return AnimatedQRCode
};
