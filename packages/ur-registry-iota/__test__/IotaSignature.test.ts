// @ts-nocheck

import { IotaSignature, URRegistryDecoder } from "../src";
import * as uuid from "uuid";

describe("iota-signature", () => {
  it("should generate iota-signature", () => {
    const signature = Buffer.from(
      "f4b79835417490958c72492723409289b444f3af18274ba484a9eeaca9e760520e453776e5975df058b537476932a45239685f694fc6362fe5af6ba714da6505",
      "hex"
    );
    const requestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const publicKey = Buffer.from(
      "bfa73107effa14b21ff1b9ae2e6b2e770232b7c29018abbf76475b25395369c0",
      "hex"
    );
    const idBuffer = uuid.parse(requestId) as Uint8Array;

    const iotaSignature = new IotaSignature({
      signature,
      requestId: Buffer.from(idBuffer),
      publicKey,
    });

    const cborHex = iotaSignature.toCBOR().toString("hex");

    expect(cborHex).toBe(
      "a301d825509b1deb4d3b7d4bad9bdd2b0d7b3dcb6d025840f4b79835417490958c72492723409289b444f3af18274ba484a9eeaca9e760520e453776e5975df058b537476932a45239685f694fc6362fe5af6ba714da6505035820bfa73107effa14b21ff1b9ae2e6b2e770232b7c29018abbf76475b25395369c0"
    );
    const ur = iotaSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:iota-signature/otadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfzwkrlmkecfpjymhmdlkjpgadicnfzmoldqzfywfpecsdigroxlrptwypsptvdhngmbafeemkovwmshlwthdreemflineyoxgmesisheingwswendlvwpejeosbbtnihahaxhdcxrsosehatwszsbbprctwnrhpldmjedmktaoeyrlsamhcspyrskoflhpdaesguinrtcnttdphg"
    );
    const iotaSignatureDecoded = IotaSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(iotaSignatureDecoded.getRequestId())).toBe(requestId);
    expect(iotaSignatureDecoded.getSignature().toString("hex")).toEqual(
      "f4b79835417490958c72492723409289b444f3af18274ba484a9eeaca9e760520e453776e5975df058b537476932a45239685f694fc6362fe5af6ba714da6505"
    );
    expect(iotaSignatureDecoded.getPublicKey().toString("hex")).toEqual(
      "bfa73107effa14b21ff1b9ae2e6b2e770232b7c29018abbf76475b25395369c0"
    );

    const urDecoder = new URRegistryDecoder();
    urDecoder.receivePart(
      "ur:iota-signature/otadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfzwkrlmkecfpjymhmdlkjpgadicnfzmoldqzfywfpecsdigroxlrptwypsptvdhngmbafeemkovwmshlwthdreemflineyoxgmesisheingwswendlvwpejeosbbtnihahaxhdcxrsosehatwszsbbprctwnrhpldmjedmktaoeyrlsamhcspyrskoflhpdaesguinrtcnttdphg"
    );
    const decodeSig = IotaSignature.fromCBOR(urDecoder.resultUR().cbor);
    expect(decodeSig.getSignature().toString("hex")).toEqual(
      "f4b79835417490958c72492723409289b444f3af18274ba484a9eeaca9e760520e453776e5975df058b537476932a45239685f694fc6362fe5af6ba714da6505"
    );
    expect(decodeSig.getRequestId().toString("hex")).toEqual(
      "9b1deb4d3b7d4bad9bdd2b0d7b3dcb6d"
    );
  });
});
