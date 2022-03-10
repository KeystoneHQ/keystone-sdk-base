import sdk, { SupportedResult } from "./dist/index";
import { URDecoder } from "@ngraveio/bc-ur";

sdk.bootstrap();

const keystonehqSdk = sdk.getSdk();

const showRead = async () => {
  const decodedResult = await keystonehqSdk.read(
    [SupportedResult.UR_CRYPTO_HDKEY],
    {
      title: "Sync Keystone",
      description: "Please scan the QR code displayed on your Keystone",
      renderInitial: {
        walletMode: "Web3",
        link: "https://keyst.one/defi",
      },
      URTypeErrorMessage:
        "The scanned QR code is not the sync code from the Keystone hardware wallet. Please verify the code and try again ( Keystone firmware V1.3.0 or newer required).",
    }
  );

  console.log(decodedResult);
};

// showRead().then(console.log)

const showPlay = async () => {
  const ur =
    "ur:eth-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdgryagalalnascsgljpnbaelfdibemwaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaelaoxlbjyihjkjyeyaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaehnaehglalalaaxadaaadahtaaddyoeadlecsdwykadykadykaewkadwkaocybgeehfkswdtklffd";
  await keystonehqSdk.play(URDecoder.decode(ur), {
    hasNext: true,
    title: "Scan with your Keystone",
    description:
      'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature',
  });
};

showPlay().then(console.log);
