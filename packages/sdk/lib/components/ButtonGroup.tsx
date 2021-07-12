import React, { FunctionComponent } from 'react';

export const ButtonGroup: FunctionComponent = (props) => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            {props.children}
        </div>
    );
};
