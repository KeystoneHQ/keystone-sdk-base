import * as uuid from "uuid";
import {InteractionProvider} from "./InteractionProvider";
import {ArweaveCryptoAccount, ArweaveSignRequest, SignType,} from "@keystonehq/bc-ur-registry-arweave";
import { Tracker } from "./Tracker";

const keyringType = "QR Hardware Wallet Device";

export class BaseKeyring {
  getInteraction = (): InteractionProvider => {
    throw new Error(
      "KeystoneError#invalid_extends: method getInteraction not implemented, please extend BaseKeyring by overwriting this method."
    );
  };
  static type = keyringType;
  protected xfp: string;
  protected type = keyringType;
  protected initialized: boolean;
  protected keyData: Buffer;
  protected name: string;
  protected device: string;

  constructor() {
    //common props
    this.name = "QR Hardware";
    this.initialized = false;
    this.device = "Arweave";
    this.xfp = "";
  }

  protected requestSignature = async (
    signRequest: ArweaveSignRequest,
    _requestId?: string,
  ): Promise<Buffer> => {
    const arweaveSignature = await this.getInteraction().requestSignature(
      signRequest
    );
    const requestIdBuffer = arweaveSignature.getRequestId();
    const signature = arweaveSignature.getSignature();
    if (requestIdBuffer) {
      const requestId = uuid.stringify(requestIdBuffer);
      if (requestId !== _requestId) {
        throw new Error(
          "KeystoneError#invalid_data: read signature error: mismatched requestId"
        );
      }
    }
    Tracker.track("sign", {
      distinctId: this.device,
      time: Date.now(),
      xfp: this.xfp,
      requestId: _requestId
    });
    return signature;
  };

  //initial read
  async readKeyring(): Promise<void> {
    const result = await this.getInteraction().readArweaveCryptoAccount();
    this.syncKeyring(result);
  }

  public syncKeyring(data: ArweaveCryptoAccount): void {
    const xfp = data.getMasterFingerprint().toString("hex");
    this.keyData = data.getKeyData();
    this.device = data.getDevice();
    this.xfp = xfp;
    this.initialized = true;
    Tracker.track("sync", {
      distinctId: data.getDevice(),
      time: Date.now(),
      xfp
    });
  }

  public getName = (): string => {
    return this.name;
  };

  getKeyData() {
    if (!this.initialized) {
      return null;
    }
    return this.keyData;
  }

  async signTransaction(
    txBuf: Buffer,
    saltLen: number
  ): Promise<Buffer> {
    const requestId = uuid.v4();
    const arweaveSignRequest = ArweaveSignRequest.constructArweaveRequest(
        txBuf,
        this.xfp,
        SignType.Transaction,
        saltLen,
        requestId
    );
    return this.requestSignature(arweaveSignRequest, requestId);
  }

  async signMessage(
    messageHex: Buffer,
    saltLen: number
  ): Promise<Buffer> {
    const arweaveSignRequest = ArweaveSignRequest.constructArweaveRequest(
        messageHex,
        this.xfp,
        SignType.Message,
        saltLen,
    );
    return this.requestSignature(arweaveSignRequest);
  }
}
