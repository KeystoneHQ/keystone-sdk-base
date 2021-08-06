export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    MATIC = 137,
    MATIC_TESTNET = 80001,
    FANTOM = 250,
    FANTOM_TESTNET = 4002,
    XDAI = 100,
    BSC = 56,
    BSC_TESTNET = 97,
    ARBITRUM = 42161,
    ARBITRUM_TESTNET = 79377087078960,
    MOONBEAM_TESTNET = 1287,
    HECO = 128,
    HECO_TESTNET = 256,
    OKEX = 66,
    OKEX_TESTNET = 65,
}



export const SUPPORTED_NETWORKS: {
    [chainId in ChainId]?: {
      chainId: string
      chainName: string
      nativeCurrency: {
        name: string
        symbol: string
        decimals: number
      }
      rpcUrls: string[]
      blockExplorerUrls: string[]
    }
  } = {
    [ChainId.MAINNET]: {
      chainId: '0x1',
      chainName: 'Ethereum',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.infura.io/v3/1ef55d552de6419386f927559b13e052'],
      blockExplorerUrls: ['https://etherscan.com'],
    },
    [ChainId.FANTOM]: {
      chainId: '0xfa',
      chainName: 'Fantom',
      nativeCurrency: {
        name: 'Fantom',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: ['https://rpcapi.fantom.network'],
      blockExplorerUrls: ['https://ftmscan.com'],
    },
    [ChainId.BSC]: {
      chainId: '0x38',
      chainName: 'Binance Smart Chain',
      nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed.binance.org'],
      blockExplorerUrls: ['https://bscscan.com'],
    },
    [ChainId.MATIC]: {
      chainId: '0x89',
      chainName: 'Matic',
      nativeCurrency: {
        name: 'Matic',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://rpc-mainnet.maticvigil.com'], // ['https://matic-mainnet.chainstacklabs.com/'],
      blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
    },
    [ChainId.HECO]: {
      chainId: '0x80',
      chainName: 'Heco',
      nativeCurrency: {
        name: 'Heco Token',
        symbol: 'HT',
        decimals: 18,
      },
      rpcUrls: ['https://http-mainnet.hecochain.com'],
      blockExplorerUrls: ['https://hecoinfo.com'],
    },
    [ChainId.XDAI]: {
      chainId: '0x64',
      chainName: 'xDai',
      nativeCurrency: {
        name: 'xDai Token',
        symbol: 'xDai',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.xdaichain.com'],
      blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
    },
    [ChainId.OKEX]: {
      chainId: '0x42',
      chainName: 'OKEx',
      nativeCurrency: {
        name: 'OKEx Token',
        symbol: 'OKT',
        decimals: 18,
      },
      rpcUrls: ['https://exchainrpc.okex.org'],
      blockExplorerUrls: ['https://www.oklink.com/okexchain'],
    },
    [ChainId.ARBITRUM]: {
      chainId: '0xA4B1',
      chainName: 'Arbitrum',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://arb1.arbitrum.io/rpc'],
      blockExplorerUrls: ['https://mainnet-arb-explorer.netlify.app'],
    },
  }