import { DefaultInteractionProvider } from './DefaultInteractionProvider';
import { BaseKeyring } from '../BaseKeyring';

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
        });
    }
    getInteraction = () => {
        return new DefaultInteractionProvider();
    };
}
