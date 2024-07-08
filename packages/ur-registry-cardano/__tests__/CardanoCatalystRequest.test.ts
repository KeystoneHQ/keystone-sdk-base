// @ts-nocheck

import { CardanoCatalystRequest } from "../src";
import * as uuid from "uuid";

describe("cardano-catalyst-request", () => {
  it("test should generate cardano-catalyst-request", () => {
    const cardanoCatalystVotingRequest = {
      requestId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      path: "m/1852'/1815'/0'/2/0",
      delegations: [
        {
          xfp: "52744703",
          hdPath: "m/1694'/1815'/0'/0'/0'",
          weight: 1,
        },
        {
          xfp: "52744703",
          hdPath: "m/1694'/1815'/1'/0'/0'",
          weight: 3,
        },
      ],
      stakePub:
        "ad4b948699193634a39dd56f779a2951a24779ad52aa7916f6912b8ec4702cee",
      paymentAddress:
        "00588e8e1d18cba576a4d35758069fe94e53f638b6faf7c07b8abd2bc5c5cdee47b60edc7772855324c85033c638364214cbfc6627889f81c4",
      nonce: 5479467,
      voting_purpose: 0,
      xfp: "52744703",
      origin: "cardano-wallet",
    };

    const request = CardanoCatalystRequest.constructCardanoCatalystRequest(
      cardanoCatalystVotingRequest.delegations,
      cardanoCatalystVotingRequest.stakePub,
      cardanoCatalystVotingRequest.paymentAddress,
      cardanoCatalystVotingRequest.nonce,
      cardanoCatalystVotingRequest.voting_purpose,
      cardanoCatalystVotingRequest.path,
      cardanoCatalystVotingRequest.xfp,
      cardanoCatalystVotingRequest.requestId,
      cardanoCatalystVotingRequest.origin
    );

    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:cardano-catalyst-voting-registration/pdadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaolftaayoyoeadtaaddyoeadlecfamnnykcfatchykaeykaeykaeykaocygmjyflaxaoadtaayoyoeadtaaddyoeadlecfamnnykcfatchykadykaeykaeykaocygmjyflaxaoaxaxhdcxpmgrmwlnnlcfeneeotnttljlktnydtgyoeflkkpmgmpkkkcmynmednmnssjodwwyaahdesaehdmnmncacssbonkooxtehghdamnewlglguynetrpzsylrtkglerydnsksksnwyflrpbauoktjplpgudkspgdeoswetenfwbbsbztiydilonelyssahcyaegunsdnamaeattaaddyoeadlecfatfnykcfatchykaeykaowkaewkaocygmjyflaxayjtiahsjpiehsjtjldpkthsjzjzihjyrtmhkoee"
    );
  });
});
