import {
  ArweaveCryptoAccount,
  ArweaveSignature,
  ArweaveSignRequest,
} from "@keystonehq/bc-ur-registry-arweave";
import { InteractionProvider } from "./InteractionProvider";
import sdk, { PlayStatus, ReadStatus, SupportedResult } from "@keystonehq/sdk";

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

  public readArweaveCryptoAccount = async () => {
    const decodedResult = await this.keystoneSDK.read(
      [SupportedResult.UR_ARWEAVE_CRYPTO_ACCOUNT],
      {
        title: "Sync Keystone",
        description: "Please scan the QR code displayed on your Keystone",
        renderInitial: {
          walletMode: "Arconnect",
          link: "https://keyst.one/defi",
        },
        URTypeErrorMessage:
          "The scanned QR code is not the sync code from the Keystone hardware wallet. Please verify the code and try again",
      }
    );
    if (decodedResult.status === ReadStatus.success) {
      const { result } = decodedResult;
      return ArweaveCryptoAccount.fromCBOR(result.cbor);
    } else {
      throw new Error("Reading canceled");
    }
  };

  public requestSignature = async (
    arweaveSignRequest: ArweaveSignRequest
  ) => {
    const status = await this.keystoneSDK.play(arweaveSignRequest.toUR(), {
      hasNext: true,
      maxFragmentLength: 400,
    });
    if (status === PlayStatus.canceled)
      throw new Error("#ktek_error[play-cancel]: play canceled");
    const result = await this.keystoneSDK.read(
      [SupportedResult.UR_ARWEAVE_SIGNATURE],
      {
        title: "Scan Keystone",
        description: "Please scan the QR code displayed on your Keystone",
      }
    );
    if (result.status === ReadStatus.canceled) {
      throw new Error("#ktek_error[read-cancel]: read signature canceled");
    } else {
      return ArweaveSignature.fromCBOR(result.result.cbor);
    }
  };
}
