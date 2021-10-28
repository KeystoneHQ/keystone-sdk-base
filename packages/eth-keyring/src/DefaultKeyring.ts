import { DefaultInteractionProvider } from './DefaultInteractionProvider';
import { BaseKeyring, StoredKeyring } from '@keystonehq/base-eth-keyring';

export class DefaultKeyring extends BaseKeyring {
    static type = BaseKeyring.type;

    static getEmptyKeyring(): DefaultKeyring {
        return new DefaultKeyring({
            xfp: '',
            xpub: '',
            hdPath: '',
            perPage: 5,
            page: 0,
            accounts: [],
            currentAccount: 0,
            paths: {},
            name: 'Keystone',
        });
    }

    constructor(opts?: StoredKeyring) {
        super(opts);
    }

    getInteraction = () => {
        return new DefaultInteractionProvider();
    };
}
