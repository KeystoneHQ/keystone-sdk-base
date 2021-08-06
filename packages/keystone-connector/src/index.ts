import { ConnectorUpdate } from '@web3-react/types'
import { AbstractConnector } from '@web3-react/abstract-connector'
import Web3ProviderEngine from 'web3-provider-engine'
import KeystoneSubprovider from '@keystonehq/keystone-subprovider'
import CacheSubprovider from 'web3-provider-engine/subproviders/cache.js'
import { RPCSubprovider } from '@0x/subproviders/lib/src/subproviders/rpc_subprovider'
import { SUPPORTED_NETWORKS } from './config'

interface KeystoneConnectorArguments {
    supportedChainIds: number[],
    url?: string,
    pollingInterval?: number
    requestTimeoutMs?: number
}


interface AddEthereumChainParameter {
    chainId: string;
    blockExplorerUrls?: string[];
    chainName?: string;
    iconUrls?: string[];
    nativeCurrency?: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls?: string[];
  }

export class KeystoneConnector extends AbstractConnector {
    private activeChainId: number
    private activeKeyProvider: KeystoneSubprovider
    private activeRPCProvider: RPCSubprovider
    private readonly pollingInterval?: number
    private readonly requestTimeoutMs?: number
    private chainInfos: {
        [chainId: number]: {
            chainId: number,
            rpc: string
        }
    }

    private provider: any

    constructor({
        supportedChainIds,
        pollingInterval,
        requestTimeoutMs,
    }: KeystoneConnectorArguments) {
        super({ supportedChainIds })
        this.activeChainId = supportedChainIds[0];
        this.pollingInterval = pollingInterval;
        this.requestTimeoutMs = requestTimeoutMs;
        this.supportedChainIds.forEach(each => {
            if (SUPPORTED_NETWORKS[each]) {
                this.chainInfos[each] = {
                    chainId: each,
                    rpc: SUPPORTED_NETWORKS[each]['rpcUrls'][0]
                }
            }
        })
    }


    public async activate(): Promise<ConnectorUpdate> {
        if (!this.provider) {
            const engine = new Web3ProviderEngine({ pollingInterval: this.pollingInterval })
            this.activeKeyProvider = new KeystoneSubprovider({
                networkId: this.activeChainId,
            });
            engine.addProvider(
                this.activeKeyProvider
            )
            engine.addProvider(new CacheSubprovider())
            const rpcUrl = this.chainInfos[this.activeChainId]['rpc']
            this.activeRPCProvider = new RPCSubprovider(rpcUrl, this.requestTimeoutMs)
            engine.addProvider(this.activeRPCProvider)
            this.provider = engine
        }

        this.provider.start()

        return { provider: this.provider, chainId: this.activeChainId }
    }
    public async getProvider(): Promise<Web3ProviderEngine> {
        return this.provider
    }
    public async getChainId(): Promise<number> {
        return this.activeChainId
    }
    public async getAccount(): Promise<string> {
        return this.provider._providers[0].getAccountsAsync(1).then((accounts: string[]): string => accounts[0])
    }
    public deactivate() {
        this.provider.stop()
    }

    public async close() {
        this.deactivate();
    }

    public onSwitchChain(params: {
        chainId: string
    }): boolean {
        const chainId = parseInt(params.chainId, 16)
        if(this.chainInfos[chainId]) {
            this.switchChain(chainId, this.chainInfos[chainId]['rpc'])
            return true
        } else {
            return false
        }
        
    }

    public onUpdateChain(params: {
        chainId: string,
        chainName: string,
        rpcUrl: string,
        nativeCurrency: {
            name: string
            symbol: string
        },
        blockExplorerUrl: string
    }): boolean {
        const chainId = parseInt(params.chainId, 16)
        if (this.chainInfos[chainId]) {
            this.switchChain(chainId, this.chainInfos[chainId]['rpc'])
            return true
        } else {
            if(params.rpcUrl.length > 0) {
                this.addChainInfo(chainId, params.rpcUrl)
                this.switchChain(chainId, params.rpcUrl)
                return true
            } 
            return false
        }
    }

    public onAddChain(params: AddEthereumChainParameter): boolean {
        const chainId = parseInt(params.chainId, 16)
        if (this.chainInfos[chainId]) {
            this.switchChain(chainId, this.chainInfos[chainId]['rpc'])
            return true
        } else {
            if(params.rpcUrls[0].length > 0) {
                this.addChainInfo(chainId, params.rpcUrls[0])
                this.switchChain(chainId, params.rpcUrls[0])
                return true
            }
            return false
        }
    }


    private switchChain(chainId: number, rpc: string) {
        this.provider.stop()
        this.provider.removeProvider(this.activeKeyProvider)
        this.provider.removeProvider(this.activeRPCProvider)
        this.activeChainId = chainId
        this.activeKeyProvider = new KeystoneSubprovider({
            networkId: this.activeChainId
        })
        this.activeRPCProvider = new RPCSubprovider(rpc, this.requestTimeoutMs)
        this.provider.addProvider(this.activeKeyProvider)
        this.provider.addProvider(this.activeRPCProvider)
        this.provider.start()
    }

    private addChainInfo(chainId: number, rpc: string) {
        this.chainInfos[chainId] = {
            chainId,
            rpc
        }
    }

}