import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ButtonGroup: React.FC<Props> = (props:Props) => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "1rem",
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </div>
  );
};
