// @ts-nocheck

import { CardanoSignature } from "../src";
import * as uuid from "uuid";

describe("cardano-signature", () => {
  it("test should generate cardano-signature", () => {
    const witnessSet = Buffer.from(
      "a100828258207233f4cd5f24fa554e1ea4ed9251e39f4e18b2e0efd909b27ca01333c22ac49a5840725d8d98bab67eec8bf2704153f725f35ff7b0c9fabee135d97cf6c6b0885b14aa8748d9ba236abd19560b43afb0c5ac6d03359a1ef71b0712fc300d73e23e07825820c4af2472a9b27acad95967b1f5ff224cf3065824f6f1f0df7dbf4b52b819b1e85840c1ba75df625c7f657633f85f07d0bfd67f4e8ffb6b81b4b65a0ab186b459c4434971c25191b2725bff3f29bb9c1d247aabd60e63f0ea6ba53db0624ae1bcc101",
      "hex"
    );
    const requestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(requestId) as Uint8Array;

    const cardanoSignature = new CardanoSignature(
      witnessSet,
      Buffer.from(idBuffer)
    );

    const cborHex = cardanoSignature.toCBOR().toString("hex");
    const ur = cardanoSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:cardano-signature/oeadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdsnoyaelflfhdcxjpeowksnhedkzsgoglckoxwemogyvlneglcsprvtwstaasprkenbbweosadrssnyhdfzjphllgmkrdrpkbwpluwzjofpguyldawfheylpfsozsrnvyectakeynswpflohpbbpkltfdtardcnimrycfhfbdfxpepfskpsjnaxecnyckylcwatbgztdybtjkvofmatlfhdcxsspedkjpptprknsgtahkiopaykzmcpgswfamhddkynwnwturkirsgrgmrocfpavshdfzserdkpuridhhlbihkoeoyaheattirstblbglmyzojelyqzrphtbkpalnqzhkssfxgajssagymeprjphpzmfhdtrknscadkknpytbbaiawtwdjeonfspfidgevyrfseadrttbehnd"
    );

    const nearSignatureDecoded = CardanoSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(nearSignatureDecoded.getRequestId())).toBe(requestId);
    expect(nearSignatureDecoded.getWitnessSet().toString("hex")).toEqual(
      "a100828258207233f4cd5f24fa554e1ea4ed9251e39f4e18b2e0efd909b27ca01333c22ac49a5840725d8d98bab67eec8bf2704153f725f35ff7b0c9fabee135d97cf6c6b0885b14aa8748d9ba236abd19560b43afb0c5ac6d03359a1ef71b0712fc300d73e23e07825820c4af2472a9b27acad95967b1f5ff224cf3065824f6f1f0df7dbf4b52b819b1e85840c1ba75df625c7f657633f85f07d0bfd67f4e8ffb6b81b4b65a0ab186b459c4434971c25191b2725bff3f29bb9c1d247aabd60e63f0ea6ba53db0624ae1bcc101"
    );
  });
});
