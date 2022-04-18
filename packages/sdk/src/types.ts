import { UR } from "@ngraveio/bc-ur";

type DecodedSuccess = {
  result: UR;
  status: ReadStatus.success;
};

type DecodedCanceled = {
  status: ReadStatus.canceled;
};

export type DecodedResult = DecodedSuccess | DecodedCanceled;

export enum ReadStatus {
  canceled = "canceled",
  success = "success",
}

export enum PlayStatus {
  canceled = "canceled",
  success = "success",
}

export type Play = (
  data: UR,
  options?: {
    refreshSpeed?: number;
    hasNext?: boolean;
    title?: string;
    description?: string;
  }
) => Promise<PlayStatus>;

export type Read = (
  expect: SupportedResult[],
  options?: {
    title?: string;
    description?: string;
    renderInitial?: {
      walletMode: string;
      link: string;
    };
    URTypeErrorMessage?: string;
  }
) => Promise<DecodedResult>;

export enum SupportedResult {
  UR_BYTES = "bytes",
  UR_CRYPTO_HDKEY = "crypto-hdkey",
  UR_CRYPTO_ACCOUNT = "crypto-account",
  UR_ETH_SIGN_REQUEST = "eth-sign-request",
  UR_ETH_SIGNATURE = "eth-signature",
  UR_CRYPTO_MULTI_ACCOUNTS = "crypto-multi-accounts",
  UR_SOL_SIGN_REQUEST = "sol-sign-request",
  UR_SOL_SIGNATURE = "sol-signature",
}
