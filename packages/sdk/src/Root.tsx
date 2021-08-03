import {setupSdk} from './service';
import { useController } from './hooks/useController';

export default () => {
    const [Controller, { read, play, cameraReady, showError }] = useController();
    setupSdk(read, play, cameraReady, showError);
    return Controller;
};
