import { KeystoneUSBBridge } from "@keystonehq/metamask-keystone-usb-keyring";
import { TransportWebUSB } from "@keystonehq/hw-transport-webusb";

export class KeystoneWebUSBBridge extends KeystoneUSBBridge {
  constructor() {
    super();
  }

  async getTransport() {
    return TransportWebUSB.connect();
  }
}