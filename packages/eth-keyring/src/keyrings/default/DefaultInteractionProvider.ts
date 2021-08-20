import { EthSignRequest, CryptoHDKey, ETHSignature } from '@keystonehq/bc-ur-registry-eth';
import { InteractionProvider } from '../InteractionProvider';
import sdk, { SupportedResult, ReadStatus, PlayStatus } from '@keystonehq/sdk';

export class DefaultInteractionProvider implements InteractionProvider {
    private static instance;
    private keystoneSDK = undefined;

    constructor() {
        if (DefaultInteractionProvider.instance) {
            return DefaultInteractionProvider.instance;
        }
        sdk.bootstrap();
        this.keystoneSDK = sdk.getSdk();
        DefaultInteractionProvider.instance = this;
    }

    public readCryptoHDKey = async () => {
        const decodedResult = await this.keystoneSDK.read([SupportedResult.UR_CRYPTO_HDKEY], {
            title: 'Sync Keystone',
            description: 'Please scan the QR code displayed on your Keystone',
            renderInitial: {
                walletMode: 'Web3',
                link: 'https://keyst.one/defi',
            },
            URTypeErrorMessage:
                'The scanned QR code is not the sync code from the Keystone hardware wallet. Please verify the code and try again ( Keystone firmware V1.3.0 or newer required).',
        });
        if (decodedResult.status === ReadStatus.success) {
            const { result } = decodedResult;
            const cryptoHDKey = CryptoHDKey.fromCBOR(result.cbor);
            return cryptoHDKey;
        } else {
            throw new Error('Reading canceled');
        }
    };

    public requestSignature = async (
        ethSignRequest: EthSignRequest,
        requestTitle?: string,
        requestDescription?: string,
    ) => {
        const status = await this.keystoneSDK.play(ethSignRequest.toUR(), {
            hasNext: true,
            title: requestTitle,
            description: requestDescription,
        });
        if (status === PlayStatus.canceled) throw new Error('#ktek_error[play-cancel]: play canceled');
        const result = await this.keystoneSDK.read([SupportedResult.UR_ETH_SIGNATURE], {
            title: 'Scan Keystone',
            description: 'Please scan the QR code displayed on your Keystone',
        });
        if (result.status === ReadStatus.canceled) {
            throw new Error('#ktek_error[read-cancel]: read signature canceled');
        } else {
            return ETHSignature.fromCBOR(result.result.cbor);
        }
    };
}
