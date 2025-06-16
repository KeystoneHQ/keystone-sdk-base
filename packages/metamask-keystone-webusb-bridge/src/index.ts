import { KeystoneUSBBridge } from "@keystonehq/metamask-keystone-usb-keyring";
import { TransportWebUSB } from "@keystonehq/hw-transport-webusb";

export class KeystoneWebUSBBridge extends KeystoneUSBBridge {
  static transport: TransportWebUSB;
  async getTransport() {
    await TransportWebUSB.requestPermission();
    if (KeystoneWebUSBBridge.transport) {
      return KeystoneWebUSBBridge.transport;
    }
    KeystoneWebUSBBridge.transport = await TransportWebUSB.connect();
    return KeystoneWebUSBBridge.transport;
  }
}
