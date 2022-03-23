import React from "react";
import { render, screen } from "@testing-library/react";
import { BaseQRCode } from "../BaseQRCode";

describe("BaseQRCode", () => {
  it("should render a QR Code with given value", () => {
    render(<BaseQRCode value={"012345"} />);

    expect(screen.getByText("012345")).toBeInTheDocument();
  });
});
