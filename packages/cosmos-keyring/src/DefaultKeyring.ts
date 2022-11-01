import { DefaultInteractionProvider } from "./DefaultInteractionProvider";
import { BaseKeyring } from "./BaseKeyring";

export class DefaultKeyring extends BaseKeyring {
  static type = BaseKeyring.type;

  static getEmptyKeyring(): DefaultKeyring {
    return new DefaultKeyring();
  }

  constructor() {
    super();
  }

  getInteraction = () => {
    return new DefaultInteractionProvider();
  };
}
