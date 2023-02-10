import {
  EvmSignature,
  EvmSignRequest
} from "@keystonehq/bc-ur-registry-evm";
import { InteractionProvider, UR } from "./InteractionProvider";
import sdk, { PlayStatus, ReadStatus, SupportedResult } from "@keystonehq/sdk";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";

export class DefaultInteractionProvider implements InteractionProvider {
  static keystoneSDK;

  constructor() {
    if (!DefaultInteractionProvider.keystoneSDK) {
      sdk.bootstrap();
      DefaultInteractionProvider.keystoneSDK = sdk.getSdk();
    }
  }

  public async playQR(ur: UR): Promise<void> {
    const status = await DefaultInteractionProvider.keystoneSDK.play(ur, {
      hasNext: true,
      title: 'Scan with your Keystone',
      description: 'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature',
      maxFragmentLength: 400
    });
    if (status === PlayStatus.canceled) {
      throw new Error("#keystone_error[play-cancel]: play canceled");
    }
  }

  public async readQR(): Promise<UR> {
    const result = await DefaultInteractionProvider.keystoneSDK.read(
      [SupportedResult.UR_COSMOS_SIGNATURE],
      {
        title: "Scan Keystone",
        description: "Please scan the QR code displayed on your Keystone",
      }
    );
    if (result.status === ReadStatus.canceled) {
      throw new Error("#keystone_error[read-cancel]: read signature canceled");
    }
    return result.result;
  }

  public async readCryptoMultiAccounts() {
    const result = await this.readQR();
    return CryptoMultiAccounts.fromCBOR(Buffer.from(result.cbor));
  };

  public async requestSignature(
    signRequest: EvmSignRequest,
  ) {
    const ur = signRequest.toUR();
    await this.playQR({
      type: ur.type,
      cbor: ur.cbor.toString('hex'),
    });
    const result = await this.readQR();
    return EvmSignature.fromCBOR(Buffer.from(result.cbor, 'hex'));
  };
}
