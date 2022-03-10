import React, { FunctionComponent } from "react";

type Props = {
  onClick: () => any;
};

const styleBase = {
  minWidth: "16rem",
  height: "3rem",
  background: "#784FFE",
  borderColor: "grey",
  borderRadius: "8px",
  borderWidth: 1,
  color: "white",
  outline: "none",
  margin: 2,
};

export const Button: FunctionComponent<Props> = (props) => {
  const { onClick, children } = props;
  return (
    <button onClick={onClick} style={styleBase}>
      {children}
    </button>
  );
};
