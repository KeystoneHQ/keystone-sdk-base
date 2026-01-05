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
}

describe("KeystoneUSBKeyring test", () => {
  it("initial with node usb", async () => {
    try {
      TransportNodeUSB.requestPermission();
      const bridge = new KeystoneNodeUSBBridge();
      const keyring = new KeystoneUSBKeyring({ bridge });
      await keyring.init();
      keyring.setHdPath(KEYSTONE_HD_PATH.LEDGER_LEGACY);

      // console.log("keyring", await keyring.getFirstPage());
      // console.log("keyring", await keyring.getNextPage());
      // console.log("keyring", await keyring.getNextPage());
    } catch (error) {
      console.info("connect keystone to run this test");
    }
  });
});
