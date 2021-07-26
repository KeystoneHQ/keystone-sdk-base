import React, { FunctionComponent } from 'react';

type Props = {
    onClick: () => any;
};

const styleBase = {
    minWidth: 64,
    height: 24,
    background: 'transparent',
    borderColor: 'grey',
    borderWidth: 1,
    outline: 'none',
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
