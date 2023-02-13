import {
  EvmSignature,
  EvmSignRequest
} from "@keystonehq/bc-ur-registry-evm";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";

type HexString = string;

export interface UR {
  cbor: HexString,
  type: string,
}

export type PlayQR = (ur: UR) => Promise<void>;
export type ReadQR = () => Promise<UR>;

export interface InteractionProvider {
  playQR: PlayQR;
  readQR: ReadQR;
  readCryptoMultiAccounts: () => Promise<CryptoMultiAccounts>;
  requestSignature: (signRequest: EvmSignRequest) => Promise<EvmSignature>;
}
