import { ConnectorUpdate } from '@web3-react/types'
import { AbstractConnector } from '@web3-react/abstract-connector'
import Web3ProviderEngine from 'web3-provider-engine'
import KeystoneSubprovider from '@keystonehq/keystone-subprovider'
import CacheSubprovider from 'web3-provider-engine/subproviders/cache.js'
import { RPCSubprovider } from '@0x/subproviders/lib/src/subproviders/rpc_subprovider'

const DEFAULT_RPC = 'https://mainnet.infura.io/v3/1ef55d552de6419386f927559b13e052'

interface KeystoneConnectorArguments {
    supportedChainIds: number[],
    url?: string,
    pollingInterval?: number
    requestTimeoutMs?: number
}

export class KeystoneConnector extends AbstractConnector {
    private activeChainId: number
    private readonly url: string
    private activeKeyProvider: KeystoneSubprovider
    private activeRPCProvider: RPCSubprovider
    private readonly pollingInterval?: number
    private readonly requestTimeoutMs?: number

    private provider: any

    constructor({
        supportedChainIds,
        url,
        pollingInterval,
        requestTimeoutMs,
    }: KeystoneConnectorArguments) {
        super({ supportedChainIds})
        this.activeChainId = supportedChainIds[0];
        this.pollingInterval = pollingInterval;
        this.requestTimeoutMs = requestTimeoutMs;
        this.url = url? url: DEFAULT_RPC;
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
            this.activeRPCProvider = new RPCSubprovider(this.url, this.requestTimeoutMs)
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
    
}