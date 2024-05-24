import React from "react";
import QRCodeSVG from "qrcode.react";

export const BaseQRCode = ({
  size = 200,
  data = "",
  ecl = "L",
}: {
  data: string;
  size?: number;
  ecl?: "L" | "M" | "Q" | "H";
}) => {
  return <QRCodeSVG value={data} size={size} level={ecl} />;
};
