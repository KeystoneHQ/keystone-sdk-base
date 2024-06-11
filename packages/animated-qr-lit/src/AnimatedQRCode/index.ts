import { LitElement, html, css } from "lit";
import { property } from "lit/decorators/property.js";
import { customElement } from "lit/decorators/custom-element.js";
import QRCode from "qrcode";
import { UR, UREncoder } from "@ngraveio/bc-ur";

const MAX_FRAGMENT_LENGTH = 400;
const DEFAULT_INTERVAL = 100;
const DEFAULT_QR_SIZE = 180;

@customElement("animated-qrcode-lit")
export class AnimatedQRCodeLite extends LitElement {
  private timer: NodeJS.Timeout;
  private urEncoder: UREncoder;

  @property({ type: String })
  cbor: string;

  @property({ type: String })
  type: string;

  @property({ type: Number })
  capacity: number = MAX_FRAGMENT_LENGTH;

  @property({ type: Number })
  interval: number = DEFAULT_INTERVAL;

  @property({ type: Number })
  size: number = DEFAULT_QR_SIZE;

  static styles = css`
    :host {
      display: block;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  generateQRCode() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.urEncoder = new UREncoder(
      new UR(Buffer.from(this.cbor, "hex"), this.type),
      this.capacity
    );
    this.timer = setInterval(() => {
      this.updateQrcode(this.urEncoder.nextPart().toUpperCase());
    }, this.interval);
  }

  async updateQrcode(data: string) {
    const img = this.shadowRoot.querySelector("img");
    img.src = await QRCode.toDataURL(data, {
      margin: 0,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.generateQRCode();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.timer);
  }

  updated(nextProps) {
    this.generateQRCode();
    if (nextProps.has("size")) {
      this.style.width = `${this.size}px`;
      this.style.height = `${this.size}px`;
    }
  }

  render() {
    return html`<img style="width: ${this.size - 10}px; height: auto;" />`;
  }
}
