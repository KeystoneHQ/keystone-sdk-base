import { JSONRPCRequestPayload } from 'ethereum-types';

import { Callback, ErrorCallback, Subprovider } from '@0x/subproviders';


export class WalletChainSubprovider extends Subprovider {
    private onAddChain: Function
    private onUpdateChain: Function
    private onSwitchChain: Function

    constructor(onAddChain, onUpdateChain, onSwitchChain){
        super();
        this.onAddChain = onAddChain
        this.onUpdateChain = onUpdateChain
        this.onSwitchChain = onSwitchChain
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