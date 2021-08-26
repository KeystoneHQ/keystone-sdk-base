import { extend } from '@keystonehq/bc-ur-registry';
const { RegistryType } = extend;

export const ExtendedRegistryTypes = {
    ETH_SIGN_REQUEST: new RegistryType('eth-sign-request', 401),
    ETH_SIGNATAURE: new RegistryType('eth-signature', 402),
};
