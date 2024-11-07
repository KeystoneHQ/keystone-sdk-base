import { SuiSignHashRequest, SuiSignRequest } from "../src";

describe("sui-sign-hash-request", () => {
  it("should construct an signRequest object from string", () => {
    const publicKeyHdPaths = ["m/44'/784'/0'/0'/0'"];
    const xfps = ["52744703"];
    const intentMessage = Buffer.from(
      "00000000000301008e5c1c0a270bb73b227ad2d1701b27ccbdedf501524c8a628759710d7876876deaa2b90500000000205b7c8adf36fc382dbbbb813415ab3a9bb2191d74c1f13452da7b889a49c92a650008dc000000000000000020bdf133158235f97b97a650c33c56c70951251a3ec2cfbca1fa1468169d8dfda20202010000010101000101020000010200504886c9ec43bff70af37f55865094cc3a799cb54479f252d30cd3717f15ecdc0209fa408be1a8db94026b34f9e71e39fea21aa7478fcd4f5fabce7c01aa0be284eca2b905000000002031c3a369455d6bd80c7366aa720a45ecaa62f9d92c5416f27ed817bf57850e0814197ba88574f872c9e5da61f6474663eea313ba5b7dd604844ea6321647c31feda2b9050000000020fd09263e975f575ad595e9925272b9a1bc721d5b02def7155dc28ac17d53191f504886c9ec43bff70af37f55865094cc3a799cb54479f252d30cd3717f15ecdcee02000000000000002d31010000000000",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const addresses = [
      Buffer.from(
        "504886c9ec43bff70af37f55865094cc3a799cb54479f252d30cd3717f15ecdc",
        "hex"
      ),
    ];

    const request = SuiSignRequest.constructSuiRequest(
      intentMessage,
      publicKeyHdPaths,
      xfps,
      requestID,
      addresses,
      "Suiet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:sui-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohkadjpaeaeaeaeaeaxadaemnhhcebkdibdrlfrcpkntdttjocwdisfryweykadgmgsleidlthkjsbtkskoltjnwdoerhahaeaeaeaecxhpkeleurenztetdprkrklyeebzpyftndprcfcajysewneegmtnkglonygasodrihaeayuoaeaeaeaeaeaeaeaecxrywneobzlfecytkgmsolgdsrfnhfstasgydacyfmsatkrfoyzsbbiscmntlgzcoeaoaoadaeaeadadadaeadadaoaeaeadaoaegdfdlnsowpfxrsylbkwflbgolngdmwsfftkknsrefykkwzgmtebntejslbbzwpuoaoaszsfzluvypduymwaojeeeytvdckeszeoecyosflmysngwhepytokeadpkbdvolrwpoerhahaeaeaeaecxehsrotinfehljetpbnjkiypkjpbkfewppkidyttadwghcmwzkbtpchrshglpbaaybbcfkgpdlpjyyajpsovwtnhsynflfgiawyotbwrdhpkitbaalrgloleycmflsrctweoerhahaeaeaeaecxzcasdsfmmshehghttlmdwlmogmjprhoyrfjpcahpaoueylbzhlsalesekigucfctgdfdlnsowpfxrsylbkwflbgolngdmwsfftkknsrefykkwzgmtebntejslbbzwpuowyaoaeaeaeaeaeaeaedpehadaeaeaeaeaeaxlytaaddyoeadlecsdwykcfaxbeykaeykaeykaeykaocygmjyflaxaalyhdcxgdfdlnsowpfxrsylbkwflbgolngdmwsfftkknsrefykkwzgmtebntejslbbzwpuoahihgukpinihjyissejstb"
    );
  });

  it("should construct an signHashRequest object from messageHash", () => {
    const publicKeyHdPaths = ["m/44'/784'/0'/0'/0'"];
    const xfps = ["52744703"];
    const messageHash =
      "ce035bd8ab6499dcaa01d623aa7c977ec9be13798046ca1f86c9f3ebcd2f4d13";
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const addresses = [
      Buffer.from(
        "504886c9ec43bff70af37f55865094cc3a799cb54479f252d30cd3717f15ecdc",
        "hex"
      ),
    ];

    const request = SuiSignHashRequest.constructSuiRequest(
      messageHash,
      publicKeyHdPaths,
      xfps,
      requestID,
      addresses,
      "Suiet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:sui-sign-hash-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaoksfziaihdyeoecidieethsideneeesesieiahshsdyehieeneyeohshsemiaesememihiaesidiheheoemesetdyeeeniahsehiyeteniaesiyeoihidiaieeyiyeeieeheoaxlytaaddyoeadlecsdwykcfaxbeykaeykaeykaeykaocygmjyflaxaalyhdcxgdfdlnsowpfxrsylbkwflbgolngdmwsfftkknsrefykkwzgmtebntejslbbzwpuoahihgukpinihjydakpldns"
    );
  });
});
