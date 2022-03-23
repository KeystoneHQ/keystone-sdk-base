import React from "react";
import { render, screen } from "@testing-library/react";
import { AnimatedQRCode } from "../index";
import { nftItem } from "./factory/ethNftItem";

describe("AnimatedQRCode", () => {
  it("should render a QR Code", () => {
    render(<AnimatedQRCode cbor={"01234567"} type={"bytes"} />);

    expect(screen.getByText("UR:BYTES/ADCNFEIOZCDNBSKG")).toBeInTheDocument();
  });

  it("should render animated QR Code when code size is larger than capacity", () => {
    render(<AnimatedQRCode cbor={nftItem.cbor} type={nftItem.type} />);

    expect(screen.getByText(/UR:ETH-NFT-ITEM\/1-19\//)).toBeInTheDocument();
  });
});
