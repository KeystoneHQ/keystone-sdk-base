import { InteractionProvider } from "@keystonehq/base-eth-keyring";
import {Eth} from "@keystonehq/hw-app-eth";
import { TransportWebUSB } from "@keystonehq/hw-transport-webusb";
import { EventEmitter } from "events";
import {
  EthSignRequest,
  ETHSignature,
} from "@keystonehq/bc-ur-registry-eth";
import { Wallet } from "@keystonehq/hw-app-eth";

export class MetamaskInteractionProvider
  extends EventEmitter
  implements InteractionProvider
{
  static instance: MetamaskInteractionProvider;
  static eth: Eth;
  constructor() {
    super();
    if (MetamaskInteractionProvider.instance) {
      return MetamaskInteractionProvider.instance;
    }
    MetamaskInteractionProvider.instance = this;
    TransportWebUSB.connect()
      .then((transport) => {
        MetamaskInteractionProvider.eth = new Eth(transport);
      })
      .catch((error) => {
        console.error("Error connecting to keystone", error);
      });
  }

  readCryptoHDKeyOrCryptoAccount = async () => {
    throw new Error("not implemented");
  };

  submitCryptoHDKey = (cbor: string) => {
    console.error("not implemented");
  };

  submitCryptoAccount = (cbor: string) => {};

  cancelSync = () => {
    this.emit("keystone-sync_cancel");
  };

  requestSignature = (
    signRequest: EthSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ): Promise<ETHSignature> => {
    console.error("not implemented");
    return Promise.reject(new Error("not implemented"));
  };
}
