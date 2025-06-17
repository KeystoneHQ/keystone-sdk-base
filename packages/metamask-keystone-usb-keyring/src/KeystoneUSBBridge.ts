import { KeystoneBridge } from "./KeystoneBridge";
import { Eth } from "@keystonehq/hw-app-eth";
import { ExtendedPubkey } from "@keystonehq/hw-app-eth/lib/types";
import { TransportHID } from "@keystonehq/hw-transport-usb";

export abstract class KeystoneUSBBridge implements KeystoneBridge {
  private client: Eth;

  abstract getTransport(): Promise<TransportHID>;

  async init() {
    const transport = await this.getTransport();
    this.client = new Eth(transport);
  }

  getKeys: (
    paths: string[]
  ) => Promise<{ keys: ExtendedPubkey[]; mfp: string }> = async (
    paths: string[]
  ) => {
    return this.client.getKeys(paths);
  };
  signTransaction: (
    path: string,
    rawTxHex: string,
    isLegacy?: boolean
  ) => Promise<{ r: string; s: string; v: string }> = async (
    path: string,
    rawTxHex: string,
    isLegacy?: boolean
  ) => {
    return this.client.signTransaction(path, rawTxHex, isLegacy);
  };
  signPersonalMessage: (
    path: string,
    message: string
  ) => Promise<{ r: string; s: string; v: string }> = async (
    path: string,
    message: string
  ) => {
    return this.client.signPersonalMessage(path, message);
  };
  signEIP712Message: (
    path: string,
    jsonMessage: unknown
  ) => Promise<{ r: string; s: string; v: string }> = async (
    path: string,
    jsonMessage: unknown
  ) => {
    return this.client.signEIP712Message(path, jsonMessage);
  };
}
