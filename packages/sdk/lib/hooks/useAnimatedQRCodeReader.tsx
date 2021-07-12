import React, { useMemo, useState } from 'react';
import QrReader from 'react-qr-reader';
import { EventEmitter } from 'events';
import { Button } from '../components/Button';

import { Read } from '../types';
import { ButtonGroup } from '../components/ButtonGroup';

import { UR } from '@keystonehq/qr-protocol';

export interface URQRCodeData {
    total: number;
    index: number;
    data: string;
}

export const useAnimatedQRCodeReader = (): [JSX.Element, { read: Read }] => {
    const [urDecoder, setURDecoder] = useState(UR.decodeByURDecoder());
    const [error, setError] = useState('');
    const ee = useMemo(() => new EventEmitter(), []);
    const [title, setTitle] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    const [description, setDescription] = useState<string | null>(null);
    const reset = () => {
        setURDecoder(UR.decodeByURDecoder());
        setError('');
    };

    const processQRCode = (qr: string) => {
        try {
            processJSON(qr);
        } catch (e1) {
            try {
                processUR(qr.toLocaleLowerCase());
            } catch (e2) {
                processText(qr);
            }
        }
    };

    const handleStop = () => {
        ee.emit('read', {
            type: 'none',
            result: '',
        });
    };

    const handleRetry = () => {
        reset();
    };

    const processJSON = (data: string) => {
        JSON.parse(data);
        ee.emit('read', {
            type: 'json',
            result: data,
        });
    };

    const processText = (data: string) => {
        ee.emit('read', {
            type: 'text',
            result: data,
        });
    };

    const processUR = (ur: string) => {
        try {
            if (!urDecoder.isComplete()) {
                urDecoder.receivePart(ur);
                setProgress(urDecoder.getProgress());
            } else {
                const result = urDecoder.result().decodeCBOR().toString('hex');
                ee.emit('read', {
                    type: 'ur',
                    result,
                });
            }
        } catch (e) {
            setError(e.message);
        }
    };

    const element = (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {title && <p>{title}</p>}
            {description && <p>{description}</p>}
            <QrReader
                onScan={(data: any) => {
                    if (data) {
                        processQRCode(data);
                    }
                }}
                delay={100}
                style={{ width: '100%' }}
                onError={(e) => {
                    setError(e.message);
                }}
            />
            <p>Current Progress: {(progress * 100).toFixed(0)} %</p>
            <ButtonGroup>
                <Button onClick={handleStop}>Close</Button>
                {error && <Button onClick={handleRetry}>Retry</Button>}
            </ButtonGroup>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );

    return [
        element,
        {
            read: (options) => {
                return new Promise((resolve) => {
                    if (options) {
                        options.title && setTitle(options.title);
                        options.description && setDescription(options.description);
                    }
                    ee.once('read', (result) => {
                        reset();
                        resolve(result);
                    });
                });
            },
        },
    ];
};
