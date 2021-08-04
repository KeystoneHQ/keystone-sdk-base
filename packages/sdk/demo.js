import sdk, {SupportedResult} from './dist/index'

sdk.bootstrap()

const keystonehqSdk = sdk.getSdk()

const showRead = async () => {
    const decodedResult = await keystonehqSdk.read([SupportedResult.UR_CRYPTO_HDKEY], {
        title: 'Sync Keystone',
        description: "Please scan the QR code displayed on your Keystone",
        renderInitial: {
            walletMode:'Web3',
            link: "https://keyst.one/defi"
        },
        URTypeErrorMessage: "The scanned QR code is not the sync code from the Keystone hardware wallet. Please verify the code and try again ( Keystone firmware V1.3.0 or newer required)."
    });
    
    console.log(decodedResult)
}

showRead().then(console.log)