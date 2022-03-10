import React from "react";
import { Button } from "./Button";

export const InitialPage = (props: {
  walletMode: string;
  link: string;
  onButtonClick: () => void;
}) => {
  return (
    <div style={{ paddingLeft: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", padding: 0 }}>
        <img
          style={{ display: "inline-block" }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAKAAAAACc9ikyAAAD+ElEQVRYCb1WbWiNURw/Z9caY5SyrKzVhuUtZcYoJdZ8kMywGClG+WK+eJsPmogNKfZBxBbmAyPyEgvtA8UUX9inbVeb8AGTd8t2j9/vdp91ntPzPPd57h3/+t1z/uf/ev7nnP9zhUiMsmH2BOgF9ifmIjmrVpgrDWuScxfMeqUW2EqiB2sjgrlJTDsNZmHACqyP2xJzGcyq2iU4E7kTzFVw7fEw+Qbou9bn94K7FCIlgNFh6I7y0E8oAQ9/NlEBuAig71ifv4VspM1iiJnHHsGZyPohjmdzxzeu79acsyFJm8UQMnzbfONmUIvnsRTG4g3DWAM8B24DM4GkaR88WMGcxkYtQr2h+wl8niYPPJ0Aix+AU2Cu8UlmASRe0gHA1L1JYaLUBEPToc7v1hx7XdISTc/3tAiaXs+uE3K2ZdJaQE/MnLdDzvvhm3ij2wDTkc4vj3lLx/gmji7tqmL6voYNcRze17zwv4CemNuc/xt8NSoqsau5OfoD2TSAxDb+EXDTNdeX0igeHYSCaajzfGoWZWDidU90O84XWIZuYw4EvwDT0OK527GG8VUPfcuO4wPAsVvqt/MolIYDbsSmxLPUiS+gEpgBOH1Z+7HOC90MMBFXYnn0jM35S8hDrtZJCFgBluZEHB/bIWenc6XVV1Qo/MCxCoM2ucUi0lwubX4YfBng1TKvQ1426MWY1NSolAs94jJKVoYaOh2DbqGw3ddQqutqkGcooEG5rmHM+8DvMNZs7KVuUaiUWOUjOO0k9HIjSpzOq1RRv0xgus2jnTkONhxbKsZ4A7gFlMbWRChddMLtZ4v3O0YiojZvq8rkEbwCrOai278Dkw98BxYBLYD+anaB58sREzerosiAaMExjCbvl0KpooAV6HIx2IN1Bk8FTgF6cLDiCLCTk86z8mlKSCzBbr6S90NSooumiXYm8MjBgG+3KbZehXGygw6XmAQrEU0C77TETxII3ofA6zrrZR+PIAvoBrhTEnvAPIBJZAIdQLzS8r8BkxGTNqq5AxLHocQY8iYxOIKuwCu4Sxkr8B7g5bLoIiYMTjoExAtOvTqASYiORtmmJCohxRfyBv3GeqkVnDJWgLQQaAV45iw3k5oKsAMySb9UDcVaKuduUYWiX1xDObPJI/AHDBXhBsnvwiBZCXChAuA/nWdkQLxg0bJGOf8/tDtG9fxNKqNfisX4ZKamC/Gw/Zzs9e9GiL1Q5n0ICn6A5gQJ5KY7C4Ig33s90WibdXOsr3ud7wsoshcwiaAUPfegRm76syHgBylINaIX0c1hout8FecB/i/Uy23OedvZP/4Z5cDzSeAnYAZnK54P/BcahygHAD5dNh12tilAIPoLD0OnpwCV000AAAAASUVORK5CYII="
          alt=""
        />
        <div
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginLeft: "1rem",
          }}
        >
          Sync Keystone
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
          1. Turn on your Keystone hardware device
        </li>
        <li
          style={{ marginBottom: "0.75rem" }}
        >{`2. Select your "${props.walletMode}" as your Watch-only wallet(Companion App)`}</li>
        <li style={{ marginBottom: "0.75rem" }}>
          {" "}
          3. Press the "Scan Keystone" button and scan the QR Code displayed on
          your Keystone hardware wallet
        </li>
        <li style={{ marginBottom: "0.75rem" }}>
          {" "}
          4. Select account and check your watch-only wallet
        </li>
      </ul>
      <div style={{ marginBottom: "1rem" }}>
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
      </div>
      <Button onClick={props.onButtonClick}>Sync Keystone</Button>
    </div>
  );
};
