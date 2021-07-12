import React, { useEffect, useMemo, useState } from 'react';
import { interval } from 'rxjs';
import { BaseQRCode } from '../components/BaseQRCode';
import { Play } from '../types';
import { EventEmitter } from 'events';
import { Button } from '../components/Button';
import { ButtonGroup } from '../components/ButtonGroup';
import { UR } from '@keystonehq/qr-protocol';

export const useAnimatedQRCodePlayer = (): [JSX.Element, { play: Play }] => {
    const [data, setData] = useState<string>('');

    const [refreshSpeed, setRefreshSpeed] = useState(500);
    const [hasNext, setHasNext] = useState(false);
    const [title, setTitle] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);

    const [isPause, setPause] = useState(false);

    const urEncoder = useMemo(() => UR.encodeByUREncoder(Buffer.from(data, 'hex')), [data]);

    const [qr, setQR] = useState<string>(urEncoder.nextPart());

    const pause = () => {
        setPause(true);
    };

    const play = () => {
        setPause(false);
    };

    const ee = useMemo(() => new EventEmitter(), []);
    const reset = () => {
        setData('');
        setRefreshSpeed(500);
    };

    useEffect(() => {
        if (!isPause) {
            const subscribe = interval(refreshSpeed).subscribe(() => {
                setQR(urEncoder.nextPart());
            });
            return () => {
                subscribe.unsubscribe();
            };
        }
    }, [refreshSpeed, isPause, urEncoder]);

    const finish = () => {
        ee.emit('finish', true);
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
            <BaseQRCode size={288} data={qr} />
            <ButtonGroup>
                {isPause ? <Button onClick={play}>Play</Button> : <Button onClick={pause}>Pause</Button>}
            </ButtonGroup>
            <ButtonGroup>
                <Button onClick={finish}>{hasNext ? 'Continue' : 'Finish'}</Button>
            </ButtonGroup>
        </div>
    );

    return [
        element,
        {
            play: (data, options) => {
                return new Promise((resolve) => {
                    setData(data);
                    if (options) {
                        options.refreshSpeed && setRefreshSpeed(options.refreshSpeed);
                        options.hasNext && setHasNext(options.hasNext);
                        options.title && setTitle(options.title);
                        options.description && setDescription(options.description);
                    }
                    ee.once('finish', () => {
                        reset();
                        resolve();
                    });
                });
            },
        },
    ];
};
