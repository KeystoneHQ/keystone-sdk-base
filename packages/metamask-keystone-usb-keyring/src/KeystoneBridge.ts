import { ExtendedPubkey } from "@keystonehq/hw-app-eth/lib/types";

export abstract class KeystoneBridge {
  abstract init(): Promise<void>;
  abstract getKeys: (paths: string[]) => Promise<{
    keys: ExtendedPubkey[];
    mfp: string;
  }>;
  abstract signTransaction: (
    path: string,
    rawTxHex: string,
    isLegacy?: boolean
  ) => Promise<{
    r: string;
    s: string;
    v: string;
  }>;
  abstract signPersonalMessage: (
    path: string,
    message: string
  ) => Promise<{
    r: string;
    s: string;
    v: string;
  }>;
  abstract signEIP712Message: (
    path: string,
    jsonMessage: unknown
  ) => Promise<{
    r: string;
    s: string;
    v: string;
  }>;
}
