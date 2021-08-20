import { CryptoHDKey, ETHSignature, EthSignRequest } from '@keystonehq/bc-ur-registry-eth';

export interface InteractionProvider {
    readCryptoHDKey: () => Promise<CryptoHDKey>;
    requestSignature: (
        signRequest: EthSignRequest,
        requestTitle?: string,
        requestDescription?: string,
    ) => Promise<ETHSignature>;
}
