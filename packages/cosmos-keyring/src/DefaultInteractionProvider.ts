import {
  CosmosSignature,
  CosmosSignRequest
} from "@keystonehq/bc-ur-registry-cosmos";
import { InteractionProvider } from "./InteractionProvider";
import sdk, { PlayStatus, ReadStatus, SupportedResult } from "@keystonehq/sdk";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";

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

  public readCryptoMultiAccounts = async () => {
    const decodedResult = await this.keystoneSDK.read(
      [SupportedResult.UR_CRYPTO_MULTI_ACCOUNTS],
      {
        title: "Sync Keystone",
        description: "Please scan the QR code displayed on your Keystone",
        renderInitial: {
          walletMode: "Cosmos",
          link: "https://keyst.one/defi"
        },
        URTypeErrorMessage:
          "The scanned QR code is not the sync code from the Keystone hardware wallet. Please verify the code and try again"
      }
    );
    if (decodedResult.status === ReadStatus.success) {
      const { result } = decodedResult;
      return CryptoMultiAccounts.fromCBOR(result.cbor);
    } else {
      throw new Error("Reading canceled");
    }
  };

  public requestSignature = async (
    cosmosSignRequest: CosmosSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ) => {
    const status = await this.keystoneSDK.play(cosmosSignRequest.toUR(), {
      hasNext: true,
      title: requestTitle,
      description: requestDescription,
      maxFragmentLength: 400
    });
    if (status === PlayStatus.canceled)
      throw new Error("#ktek_error[play-cancel]: play canceled");
    const result = await this.keystoneSDK.read(
      [SupportedResult.UR_COSMOS_SIGNATURE],
      {
        title: "Scan Keystone",
        description: "Please scan the QR code displayed on your Keystone",
      }
    );
    if (result.status === ReadStatus.canceled) {
      throw new Error("#ktek_error[read-cancel]: read signature canceled");
    } else {
      return CosmosSignature.fromCBOR(result.result.cbor);
    }
  };
}
