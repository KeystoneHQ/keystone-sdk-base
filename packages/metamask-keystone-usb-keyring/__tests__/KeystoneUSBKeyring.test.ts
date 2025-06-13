import {
  KEYSTONE_HD_PATH,
  KeystoneUSBKeyring,
} from "../src/KeystoneUSBKeyring";
import { TransportHID } from "@keystonehq/hw-transport-usb";
import { TransportNodeUSB } from "@keystonehq/hw-transport-nodeusb";
import { KeystoneUSBBridge } from "../src/KeystoneUSBBridge";

jest.setTimeout(30000);

class KeystoneNodeUSBBridge extends KeystoneUSBBridge {
  static transport: TransportNodeUSB;
  async getTransport(): Promise<TransportHID> {
    await TransportNodeUSB.requestPermission();
    if (KeystoneNodeUSBBridge.transport) {
      return KeystoneNodeUSBBridge.transport;
    }
    KeystoneNodeUSBBridge.transport = await TransportNodeUSB.connect();
    return KeystoneNodeUSBBridge.transport;
  }
  static async create(): Promise<KeystoneNodeUSBBridge> {
    const bridge = new KeystoneNodeUSBBridge();
    await bridge.init();
    return bridge;
  }
}

describe("KeystoneUSBKeyring test", () => {
  it("initial with node usb", async () => {
    try {
      TransportNodeUSB.requestPermission();
      const bridge = await KeystoneNodeUSBBridge.create();
      const keyring = new KeystoneUSBKeyring(bridge);
      keyring.setHDPath(KEYSTONE_HD_PATH.LEDGER_LEGACY);

      console.log("keyring", await keyring.getFirstPage());
      console.log("keyring", await keyring.getNextPage());
      console.log("keyring", await keyring.getNextPage());
    } catch (error) {
      console.info("connect keystone to run this test");
    }
  });
});
