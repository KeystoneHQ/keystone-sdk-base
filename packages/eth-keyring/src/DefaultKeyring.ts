import { DefaultInteractionProvider } from "./DefaultInteractionProvider";
import { BaseKeyring, StoredKeyring } from "@keystonehq/base-eth-keyring";

export class DefaultKeyring extends BaseKeyring {
  static type = BaseKeyring.type;

  static getEmptyKeyring(): DefaultKeyring {
    return new DefaultKeyring();
  }

  constructor(opts?: StoredKeyring) {
    super(opts);
  }

  getInteraction = () => {
    return new DefaultInteractionProvider();
  };
}
