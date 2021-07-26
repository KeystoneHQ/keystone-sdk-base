import React, { FunctionComponent } from 'react';

type Props = {
    progress: number;
    total: number;
};

export const Progress: FunctionComponent<Props> = ({ progress, total }) => {
    return <p>{`${progress} / ${total}`}</p>;
};
