import { JSONRPCRequestPayload } from 'ethereum-types';

import { Callback, ErrorCallback, Subprovider } from '@0x/subproviders';


export class WalletChainSubprovider extends Subprovider {
    private onChainChange: Function

    constructor(onChainChange){
        super();
        this.onChainChange = onChainChange
    }
    
    public async handleRequest(payload: JSONRPCRequestPayload, next: Callback, end: ErrorCallback): Promise<void> {
        switch(payload.method) {
            case 'wallet_switchEthereumChain':
                // show ui for request
                // execute callback
                
                end(null, true)
                return
            default:
                next()
                return
        }
    }

}