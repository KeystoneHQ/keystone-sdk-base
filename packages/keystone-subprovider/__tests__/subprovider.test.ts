import KeystoneSubprovider from '../src'
import Common from '@ethereumjs/common';
import { Transaction } from '@ethereumjs/tx';
import { rlp } from 'ethereumjs-util';


const SupportedResult = {
    'UR_CRYPTO_HDKEY' : 1
}

jest.mock('@keystonehq/sdk', () => {
    return {
        bootstrap:() => { console.log('bootstraped')},
        getSdk :  () => ({
            read: async (a, b) => Promise.resolve({
                status: 'success',
                result: {
                    cbor: Buffer.from("a403582102eae4b876a8696134b868f88cc2f51f715f2dbedb7446b8e6edf3d4541c4eb67b045820d882718b7a42806803eeb17f7483f20620611adb88fc943c898dc5aba94c281906d90130a20186182cf5183cf500f5021ae9181cf3081ad32e4508", 'hex')
                }
            }),
        }),
        SupportedResult
    }
})

describe('Keystone Subprovider', () => {
    it('should get address', async () => {
        const provider = new KeystoneSubprovider({
          networkId: 1
        })
        const addresses  = await provider.getAccountsAsync();
        expect(addresses).toEqual(    [
            '0x9858EfFD232B4033E47d90003D41EC34EcaEda94',
            '0x6Fac4D18c912343BF86fa7049364Dd4E424Ab9C0',
            '0xb6716976A3ebe8D39aCEB04372f22Ff8e6802D7A',
            '0xF3f50213C1d2e255e4B2bAD430F8A38EEF8D718E',
            '0x51cA8ff9f1C0a99f88E86B8112eA3237F55374cA',
            '0xA40cFBFc8534FFC84E20a7d8bBC3729B26a35F6f',
            '0xB191a13bfE648B61002F2e2135867015B71816a6',
            '0x593814d3309e2dF31D112824F0bb5aa7Cb0D7d47',
            '0xB14c391e2bf19E5a26941617ab546FA620A4f163',
            '0x4C1C56443AbFe6dD33de31dAaF0a6E929DBc4971'
          ])
    })

    it('should do some testing', () => {
        const txParams = {
            nonce: '0x00',
            gasPrice: '0x09184e72a000',
            gasLimit: '0x2710',
            to: '0x0000000000000000000000000000000000000000',
            value: '0x00',
            data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
          }

        const common = Common.forCustomChain('mainnet', { chainId : 1})
        const tx = Transaction.fromTxData(txParams, {common: common})

        const signeTx = Transaction.fromTxData({
            ...txParams,
            r: '0x6d19ce88a3272c2d8cb8ca6a58bf1e72f63d4adc6163b25256b0f6a4e7841066',
            s: '0x4c857185f395e590dfa7bc7a08fd675aa1127802f204eae7cdcfa6e1797840d0',
            v: '0x25'
        }, { common: common })
        console.log(`0x${signeTx.serialize().toString('hex')}`);



    })
})