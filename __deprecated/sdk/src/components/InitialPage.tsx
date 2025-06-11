import React from "react";
import { Button } from "./Button";

const mulitCoinLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAKAAAAACc9ikyAAAD+ElEQVRYCb1WbWiNURw/Z9caY5SyrKzVhuUtZcYoJdZ8kMywGClG+WK+eJsPmogNKfZBxBbmAyPyEgvtA8UUX9inbVeb8AGTd8t2j9/vdp91ntPzPPd57h3/+t1z/uf/ev7nnP9zhUiMsmH2BOgF9ifmIjmrVpgrDWuScxfMeqUW2EqiB2sjgrlJTDsNZmHACqyP2xJzGcyq2iU4E7kTzFVw7fEw+Qbou9bn94K7FCIlgNFh6I7y0E8oAQ9/NlEBuAig71ifv4VspM1iiJnHHsGZyPohjmdzxzeu79acsyFJm8UQMnzbfONmUIvnsRTG4g3DWAM8B24DM4GkaR88WMGcxkYtQr2h+wl8niYPPJ0Aix+AU2Cu8UlmASRe0gHA1L1JYaLUBEPToc7v1hx7XdISTc/3tAiaXs+uE3K2ZdJaQE/MnLdDzvvhm3ij2wDTkc4vj3lLx/gmji7tqmL6voYNcRze17zwv4CemNuc/xt8NSoqsau5OfoD2TSAxDb+EXDTNdeX0igeHYSCaajzfGoWZWDidU90O84XWIZuYw4EvwDT0OK527GG8VUPfcuO4wPAsVvqt/MolIYDbsSmxLPUiS+gEpgBOH1Z+7HOC90MMBFXYnn0jM35S8hDrtZJCFgBluZEHB/bIWenc6XVV1Qo/MCxCoM2ucUi0lwubX4YfBng1TKvQ1426MWY1NSolAs94jJKVoYaOh2DbqGw3ddQqutqkGcooEG5rmHM+8DvMNZs7KVuUaiUWOUjOO0k9HIjSpzOq1RRv0xgus2jnTkONhxbKsZ4A7gFlMbWRChddMLtZ4v3O0YiojZvq8rkEbwCrOai278Dkw98BxYBLYD+anaB58sREzerosiAaMExjCbvl0KpooAV6HIx2IN1Bk8FTgF6cLDiCLCTk86z8mlKSCzBbr6S90NSooumiXYm8MjBgG+3KbZehXGygw6XmAQrEU0C77TETxII3ofA6zrrZR+PIAvoBrhTEnvAPIBJZAIdQLzS8r8BkxGTNqq5AxLHocQY8iYxOIKuwCu4Sxkr8B7g5bLoIiYMTjoExAtOvTqASYiORtmmJCohxRfyBv3GeqkVnDJWgLQQaAV45iw3k5oKsAMySb9UDcVaKuduUYWiX1xDObPJI/AHDBXhBsnvwiBZCXChAuA/nWdkQLxg0bJGOf8/tDtG9fxNKqNfisX4ZKamC/Gw/Zzs9e9GiL1Q5n0ICn6A5gQJ5KY7C4Ig33s90WibdXOsr3ud7wsoshcwiaAUPfegRm76syHgBylINaIX0c1hout8FecB/i/Uy23OedvZP/4Z5cDzSeAnYAZnK54P/BcahygHAD5dNh12tilAIPoLD0OnpwCV000AAAAASUVORK5CYII=";

const BtcOnlyLogo = "data:image/png;base64,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";

export const InitialPage = (props: {
  walletMode: string;
  link: string | undefined;
  description?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  },
  onButtonClick: () => void;
}) => {
  return (
    <div style={{ paddingLeft: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", padding: 0 }}>
        <img
          style={{ display: "inline-block", width: "2.5rem", height: "2.5rem"}}
          src={props.walletMode === "btc" ? BtcOnlyLogo : mulitCoinLogo }
          alt=""
        />
        <div
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginLeft: "1rem",
          }}
        >
          {props.walletMode === "btc" ? "Sync Keystone BTC" : "Sync Keystone"}
        </div>
      </div>
      <ul
        style={{
          marginTop: "2rem",
          listStyleType: "none",
          padding: 0,
          fontSize: "1rem",
        }}
      >
        <li style={{ marginBottom: "0.75rem" }}>
          {props.description ? props.description[0] : '1. Turn on your Keystone hardware device'}
        </li>
        <li
          style={{ marginBottom: "0.75rem" }}
        >{props.description ? props.description[1] : `2. Select your "${props.walletMode}" as your Watch-only wallet(Companion App)`}</li>
        <li style={{ marginBottom: "0.75rem" }}>
          {" "}
          {props.description ? props.description[2] : '3. Press the "Scan Keystone" button and scan the QR Code displayed on your Keystone hardware wallet'}
        </li>
        <li style={{ marginBottom: "0.75rem" }}>
          {" "}
          {props.description ? props.description[3] : "4. Select account and check your watch-only wallet"}
        </li>
      </ul>
      {props.link.length > 0 && (<div style={{ marginBottom: "1rem" }}>
        <a
          style={{
            marginTop: "1.25rem",
            color: "#784FFE",
            textDecoration: "none",
          }}
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          Click here to view detailed tutorial
        </a>
      </div>)}
      <Button onClick={props.onButtonClick}>Sync Keystone</Button>
    </div>
  );
};
