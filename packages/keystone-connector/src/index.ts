import { ConnectorUpdate } from '@web3-react/types';
import { AbstractConnector } from '@web3-react/abstract-connector';
import Web3ProviderEngine from 'web3-provider-engine';
import KeystoneSubprovider from '@keystonehq/keystone-subprovider';
import CacheSubprovider from 'web3-provider-engine/subproviders/cache.js';
import { RPCSubprovider } from '@0x/subproviders/lib/src/subproviders/rpc_subprovider';

const DEFAULT_RPC = 'https://mainnet.infura.io/v3/1ef55d552de6419386f927559b13e052';

interface KeystoneConnectorArguments {
    chainId: number;
    url?: string;
    pollingInterval?: number;
    requestTimeoutMs?: number;
}

export class KeystoneConnector extends AbstractConnector {
    private readonly chainId: number;
    private readonly url: string;
    private readonly pollingInterval?: number;
    private readonly requestTimeoutMs?: number;

    private provider: any;

    constructor({ chainId, url, pollingInterval, requestTimeoutMs }: KeystoneConnectorArguments) {
        super({ supportedChainIds: [chainId] });
        this.chainId = chainId;
        this.pollingInterval = pollingInterval;
        this.requestTimeoutMs = requestTimeoutMs;
        this.url = url ? url : DEFAULT_RPC;
    }

    public async activate(): Promise<ConnectorUpdate> {
        if (!this.provider) {
            const engine = new Web3ProviderEngine({ pollingInterval: this.pollingInterval });
            engine.addProvider(
                new KeystoneSubprovider({
                    networkId: this.chainId,
                }),
            );
            engine.addProvider(new CacheSubprovider());
            engine.addProvider(new RPCSubprovider(this.url, this.requestTimeoutMs));
            this.provider = engine;
        }

        this.provider.start();

        return { provider: this.provider, chainId: this.chainId };
    }
    public async getProvider(): Promise<Web3ProviderEngine> {
        return this.provider;
    }
    public async getChainId(): Promise<number> {
        return this.chainId;
    }
    public async getAccount(): Promise<string> {
        return this.provider._providers[0].getAccountsAsync(1).then((accounts: string[]): string => accounts[0]);
    }
    public deactivate() {
        this.provider.stop();
    }

    public async close() {
        this.deactivate();
    }
}
