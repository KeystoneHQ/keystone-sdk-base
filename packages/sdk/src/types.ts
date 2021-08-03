import { UR } from '@ngraveio/bc-ur';

type DecodedSuccess = {
    result: UR;
    status: 'success';
};

type DecodedCanceled = {
    status: 'canceled';
};

export type DecodedResult = DecodedSuccess | DecodedCanceled;

export type Play = (
    data: UR,
    options?: {
        refreshSpeed?: number;
        hasNext?: boolean;
        title?: string;
        description?: string;
    },
) => Promise<void>;

export type Read = (
    expect: SupportedResult[],
    options?: { title?: string; description?: string, renderInitial?: {
        walletMode: string,
        link: string
    }, URTypeErrorMessage?: string },
) => Promise<DecodedResult>;

export enum SupportedResult {
    UR_BYTES = 'bytes',
    UR_CRYPTO_HDKEY = 'crypto-hdkey',
    UR_ETH_SIGN_REQUEST = 'eth-sign-request',
    UR_ETH_SIGNATURE = 'eth-signature',
}
