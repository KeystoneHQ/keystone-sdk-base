import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAnimatedQRCodePlayer } from './useAnimatedQRCodePlayer';
import { useAnimatedQRCodeReader } from './useAnimatedQRCodeReader';
import { Play, Read } from '../types';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const useController = (): [
    JSX.Element,
    {
        play: Play;
        read: Read;
    },
] => {
    const [visible, setVisible] = useState(false);
    const [mode, setMode] = useState<'read' | 'play'>('play');
    const [AnimatedQRCodePlayer, { play }] = useAnimatedQRCodePlayer();
    const [AnimatedQRCodeReader, { read }] = useAnimatedQRCodeReader();
    const reset = () => {
        setVisible(false);
        setMode('play');
    };
    const element = (
        <Modal isOpen={visible} style={customStyles}>
            <div
                style={{
                    width: 320,
                    boxSizing: 'border-box',
                    padding: 16,
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {mode === 'read' ? AnimatedQRCodeReader : AnimatedQRCodePlayer}
            </div>
        </Modal>
    );
    return [
        element,
        {
            play: async (
                data,
                options,
            ) => {
                setVisible(true);
                setMode('play');
                await play(data, options);
                reset();
                return;
            },
            read: async (options) => {
                setVisible(true);
                setMode('read');
                const result = await read(options);
                reset();
                return result;
            },
        },
    ];
};
