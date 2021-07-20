import React, { useMemo, useState } from 'react';
import QrReader from 'react-qr-reader';
import { EventEmitter } from 'events';
import { Button } from '../components/Button';

import { Read, SupportedResult } from '../types';
import { ButtonGroup } from '../components/ButtonGroup';
import { URDecoder } from '@ngraveio/bc-ur';

export interface URQRCodeData {
    total: number;
    index: number;
    data: string;
}

export const useAnimatedQRCodeReader = (): [JSX.Element, { read: Read }] => {
    const [expectTypes, setExpectTypes] = useState<SupportedResult[]>([]);
    const [urDecoder, setURDecoder] = useState(new URDecoder());
    const [error, setError] = useState('');
    const ee = useMemo(() => new EventEmitter(), []);
    const [title, setTitle] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    const [description, setDescription] = useState<string | null>(null);
    const reset = () => {
        setURDecoder(new URDecoder());
        setError('');
    };

    const processQRCode = (qr: string) => {
        processUR(qr);
    };

    const handleStop = () => {
        ee.emit('read', {
            status: 'canceled',
        });
    };

    const handleRetry = () => {
        reset();
    };

    const processUR = (ur: string) => {
        try {
            if (!urDecoder.isComplete()) {
                urDecoder.receivePart(ur);
                setProgress(urDecoder.getProgress());
            } else {
                const result = urDecoder.resultUR();
                expectTypes.forEach((et) => {
                    if (et === result.type) {
                        ee.emit('read', {
                            result,
                            status: 'success',
                        });
                        return;
                    }
                });
                throw new Error(`received ur type ${result.type}, but expected [${expectTypes.join(',')}]`);
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
            read: (expect, options) => {
                return new Promise((resolve) => {
                    setExpectTypes(expect);
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
