// @ts-nocheck

import { CardanoCertKey, CardanoSignRequest } from "../src";
import { CryptoKeypath, PathComponent } from "../src";
import * as uuid from "uuid";
import { CardanoUtxo, CardanoUtxoData } from "../src/CardanoUtxo";
import { CardanoCertKeyData } from "../src/CardanoCertKey";

describe("cardano-sign-request", () => {
  it("test should generate cardano-sign-request", () => {
    const signData = Buffer.from(
      "84a400828258204e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99038258204e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99040182a200581d6179df4c75f7616d7d1fd39cbc1a6ea6b40a0d7b89fea62fc0909b6c370119c350a200581d61c9b0c9761fd1dc0404abd55efc895026628b5035ac623c614fbad0310119c35002198ecb0300a0f5f6",
      "hex"
    );

    const signKeyPath1 = new CryptoKeypath(
      [
        new PathComponent({ index: 1852, hardened: true }),
        new PathComponent({ index: 1815, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: false }),
        new PathComponent({ index: 0, hardened: false }),
      ],
      Buffer.from("73c5da0a", "hex")
    );

    const signKeyPath2 = new CryptoKeypath(
      [
        new PathComponent({ index: 1852, hardened: true }),
        new PathComponent({ index: 1815, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: false }),
        new PathComponent({ index: 1, hardened: false }),
      ],
      Buffer.from("73c5da0a", "hex")
    );

    const utxos = [
      new CardanoUtxo({
        transactionHash: Buffer.from(
          "4e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99",
          "hex"
        ),
        index: 3,
        amount: 10000000,
        keyPath: signKeyPath1,
        address:
          "addr1qy8ac7qqy0vtulyl7wntmsxc6wex80gvcyjy33qffrhm7sh927ysx5sftuw0dlft05dz3c7revpf7jx0xnlcjz3g69mq4afdhv",
      }),
      new CardanoUtxo({
        transactionHash: Buffer.from(
          "4e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99",
          "hex"
        ),
        index: 4,
        amount: 18020000,
        keyPath: signKeyPath2,
        address:
          "addr1qyz85693g4fr8c55mfyxhae8j2u04pydxrgqr73vmwpx3azv4dgkyrgylj5yl2m0jlpdpeswyyzjs0vhwvnl6xg9f7ssrxkz90",
      }),
    ];

    const certKeyPath = new CryptoKeypath(
      [
        new PathComponent({ index: 1852, hardened: true }),
        new PathComponent({ index: 1815, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 2, hardened: false }),
        new PathComponent({ index: 0, hardened: false }),
      ],
      Buffer.from("73c5da0a", "hex")
    );

    const certKeys = [
      new CardanoCertKey({
        keyHash: Buffer.from(
          "e557890352095f1cf6fd2b7d1a28e3c3cb029f48cf34ff890a28d176",
          "hex"
        ),
        keyPath: certKeyPath,
      }),
    ];

    const cardanoRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(cardanoRequestId);

    const cardanoSignRequest = new CardanoSignRequest({
      signData,
      utxos,
      certKeys,
      requestId: Buffer.from(idBuffer),
      origin: "cardano-wallet",
    });

    const cborHex = cardanoSignRequest.toCBOR().toString("hex");
    const ur = cardanoSignRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:cardano-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdoylroxaelflfhdcxglftjtlbuopftiwsoykgylnsbwpltdqzsbndpeemzocyoevlmdgutlryjpbnhhnlaxlfhdcxglftjtlbuopftiwsoykgylnsbwpltdqzsbndpeemzocyoevlmdgutlryjpbnhhnlaaadlfoeaehdcahskkurgskpylhsjnkicttensrfcyjtolqzbkbtkgldzeoldlrtmhndjzemadcfsrgdoeaehdcahssopfsokoctttuoaaaapytlhyztldgddsidlugdecpsidfnhsgwrdtiehadcfsrgdaocfmnsbaxaenbykynaxlftaaynlonadhdcxglftjtlbuopftiwsoykgylnsbwpltdqzsbndpeemzocyoevlmdgutlryjpbnhhnlaoaxaxcyaemkmtlaaataaddyoeadlecfatfnykcfatchykaeykaewkaewkaocyjksktnbkahksiohsieiejpehjskkethsiaemjsjskkdykojykpjzkkjzemktjtjyjnjkksiaenktihksetdyiokoiakkimkkeoeojsiyiyjpisjnemjkiseseyemkkjkksecjkiyjykpktdyiejziyjydyeciekneoiaemjpihkojoiyemimksdyksjtjziaimkneoioenesjnjseehsiyieiskotaaynlonadhdcxglftjtlbuopftiwsoykgylnsbwpltdqzsbndpeemzocyoevlmdgutlryjpbnhhnlaoaaaxcyadbgynnbaataaddyoeadlecfatfnykcfatchykaeykaewkadwkaocyjksktnbkahksiohsieiejpehjskkkneteceneseoioeeiyjpetiaececjniykkksishsihetimeykpdyeejokkieksjpiojsjpemeokojnktjokseohsknkoeeieiojekkjpiokkjzimeckkjzeyjndyimjzjoiejoihjkktkkkkknimjkdykoisktkojtjzenksioesiyemjkjkjpksjeknesdyaalytaaynsoeadhdcevwhgldaxgmasheceynzcdnkicydevlsrsbaonefdtkeezmldbkdettkoaotaaddyoeadlecfatfnykcfatchykaeykaowkaewkaocyjksktnbkahjtiahsjpiehsjtjldpkthsjzjzihjydstoptbg"
    );

    const cardanoSignRequestDecoded = CardanoSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(cardanoSignRequest.getRequestId())).toBe(
      cardanoRequestId
    );
    expect(cardanoSignRequest.getOrigin()).toBe("cardano-wallet");
    expect(cardanoSignRequestDecoded.getSignData().toString("hex")).toEqual(
      "84a400828258204e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99038258204e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99040182a200581d6179df4c75f7616d7d1fd39cbc1a6ea6b40a0d7b89fea62fc0909b6c370119c350a200581d61c9b0c9761fd1dc0404abd55efc895026628b5035ac623c614fbad0310119c35002198ecb0300a0f5f6"
    );
    expect(cardanoSignRequestDecoded.getUtxos()[0].getAddress()).toEqual(
      "addr1qy8ac7qqy0vtulyl7wntmsxc6wex80gvcyjy33qffrhm7sh927ysx5sftuw0dlft05dz3c7revpf7jx0xnlcjz3g69mq4afdhv"
    );
    expect(cardanoSignRequestDecoded.getUtxos()[1].getIndex()).toEqual(4);
  });

  it("should construct an cardano-sign-request object from string", () => {
    const signData = Buffer.from(
      "84a400828258204e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99038258204e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99040182a200581d6179df4c75f7616d7d1fd39cbc1a6ea6b40a0d7b89fea62fc0909b6c370119c350a200581d61c9b0c9761fd1dc0404abd55efc895026628b5035ac623c614fbad0310119c35002198ecb0300a0f5f6",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const utxos: CardanoUtxoData = [
      {
        transactionHash:
          "4e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99",
        index: 3,
        amount: 10000000,
        xfp: "73c5da0a",
        hdPath: "m/1852'/1815'/0'/0/0",
        address:
          "addr1qy8ac7qqy0vtulyl7wntmsxc6wex80gvcyjy33qffrhm7sh927ysx5sftuw0dlft05dz3c7revpf7jx0xnlcjz3g69mq4afdhv",
      },
      {
        transactionHash:
          "4e3a6e7fdcb0d0efa17bf79c13aed2b4cb9baf37fb1aa2e39553d5bd720c5c99",
        index: 4,
        amount: 18020000,
        xfp: "73c5da0a",
        hdPath: "m/1852'/1815'/0'/0/1",
        address:
          "addr1qyz85693g4fr8c55mfyxhae8j2u04pydxrgqr73vmwpx3azv4dgkyrgylj5yl2m0jlpdpeswyyzjs0vhwvnl6xg9f7ssrxkz90",
      },
    ];

    const certKeys: CardanoCertKeyData[] = [
      {
        keyHash: "e557890352095f1cf6fd2b7d1a28e3c3cb029f48cf34ff890a28d176",
        xfp: "73c5da0a",
        keyPath: "m/1852'/1815'/0'/2/0",
      },
    ];

    const request = CardanoSignRequest.constructCardanoSignRequest(
      signData,
      utxos,
      certKeys,
      requestID,
      "cardano-wallet"
    );

    const ur = request.toUREncoder(2000).nextPart();
    expect(ur).toBe(
      "ur:cardano-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdoylroxaelflfhdcxglftjtlbuopftiwsoykgylnsbwpltdqzsbndpeemzocyoevlmdgutlryjpbnhhnlaxlfhdcxglftjtlbuopftiwsoykgylnsbwpltdqzsbndpeemzocyoevlmdgutlryjpbnhhnlaaadlfoeaehdcahskkurgskpylhsjnkicttensrfcyjtolqzbkbtkgldzeoldlrtmhndjzemadcfsrgdoeaehdcahssopfsokoctttuoaaaapytlhyztldgddsidlugdecpsidfnhsgwrdtiehadcfsrgdaocfmnsbaxaenbykynaxlftaaynlonadhdcxglftjtlbuopftiwsoykgylnsbwpltdqzsbndpeemzocyoevlmdgutlryjpbnhhnlaoaxaxcyaemkmtlaaataaddyoeadlecfatfnykcfatchykaeykaewkaewkaocyjksktnbkahksiohsieiejpehjskkethsiaemjsjskkdykojykpjzkkjzemktjtjyjnjkksiaenktihksetdyiokoiakkimkkeoeojsiyiyjpisjnemjkiseseyemkkjkksecjkiyjykpktdyiejziyjydyeciekneoiaemjpihkojoiyemimksdyksjtjziaimkneoioenesjnjseehsiyieiskotaaynlonadhdcxglftjtlbuopftiwsoykgylnsbwpltdqzsbndpeemzocyoevlmdgutlryjpbnhhnlaoaaaxcyadbgynnbaataaddyoeadlecfatfnykcfatchykaeykaewkadwkaocyjksktnbkahksiohsieiejpehjskkkneteceneseoioeeiyjpetiaececjniykkksishsihetimeykpdyeejokkieksjpiojsjpemeokojnktjokseohsknkoeeieiojekkjpiokkjzimeckkjzeyjndyimjzjoiejoihjkktkkkkknimjkdykoisktkojtjzenksioesiyemjkjkjpksjeknesdyaalytaaynsoeadhdcevwhgldaxgmasheceynzcdnkicydevlsrsbaonefdtkeezmldbkdettkoaotaaddyoeadlecfatfnykcfatchykaeykaowkaewkaocyjksktnbkahjtiahsjpiehsjtjldpkthsjzjzihjydstoptbg"
    );
  });
});
