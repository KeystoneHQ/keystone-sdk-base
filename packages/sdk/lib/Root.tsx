import service from './service';
import { useController } from './hooks/useController';

export default () => {
    const [Controller, { read, play }] = useController();
    service.setup(read, play);
    return Controller;
};
