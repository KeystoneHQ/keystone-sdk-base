import { Eth } from "@keystonehq/hw-app-eth";
import { ExtendedPubkey } from "@keystonehq/hw-app-eth/lib/types";
import { TransportHID } from "@keystonehq/hw-transport-usb";

export abstract class KeystoneUSBBridge {
  private client: Eth;

  constructor() {}

  abstract getTransport(): Promise<TransportHID>;

  async init() {
    const transport = await this.getTransport();
    this.client = new Eth(transport);
    this.getKeys = this.client.getKeys.bind(this.client);
    this.signTransaction = this.client.signTransaction.bind(this.client);
    this.signPersonalMessage = this.client.signPersonalMessage.bind(this.client);
    this.signEIP712Message = this.client.signEIP712Message.bind(this.client);
  }

  getKeys: (paths: string[]) => Promise<{
    keys: ExtendedPubkey[];
    mfp: string;
  }>;
  signTransaction: (
    path: string,
    rawTxHex: string,
    isLegacy?: boolean
  ) => Promise<{
    r: string;
    s: string;
    v: string;
  }>;
  signPersonalMessage: (
    path: string,
    message: string
  ) => Promise<{
    r: string;
    s: string;
    v: string;
  }>;
  signEIP712Message: (
    path: string,
    jsonMessage: unknown
  ) => Promise<{
    r: string;
    s: string;
    v: string;
  }>;
}
