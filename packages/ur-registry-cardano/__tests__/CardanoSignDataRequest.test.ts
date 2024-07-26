// @ts-nocheck

import { CardanoCertKey, CardanoSignDataRequest } from "../src";
import { CryptoKeypath, PathComponent } from "../src";
import * as uuid from "uuid";

describe("cardano-sign-data-request", () => {
  it("test should generate cardano-sign-data-request", () => {
    const cardanoSignDataRequest =
      CardanoSignDataRequest.constructCardanoSignDataRequest(
        "e3bff0cb003cf867acfd117fb514dfaf7a8dd5dddf6e68cc71f553de5046ae2b",
        "m/44'/148'/0'",
        "ca0e65d9bb8d0dca5e88adc5e1c644cc7d62e5a139350330281ed7e3a6938d2c",
        "1250B6BC",
        "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        "cardano-wallet"
      );

    const cborHex = cardanoSignDataRequest.toCBOR().toString("hex");
    const ur = cardanoSignDataRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:cardano-sign-data-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdcxvlrswtsbaefnyaiopszcbylbrebburpeknlgtluturjtissfjsykguuegdfgpldnaxtaaddyoeadlncsdwykcsmwykaeykaocysgbaihtaaajtiahsjpiehsjtjldpkthsjzjzihjyamfybggdrprfpydmuodr"
    );

    const cardanoSignDataRequestDecoded = CardanoSignDataRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(cardanoSignDataRequestDecoded.getSignData().toString("hex")).toBe(
      "e3bff0cb003cf867acfd117fb514dfaf7a8dd5dddf6e68cc71f553de5046ae2b"
    );
  });
});
