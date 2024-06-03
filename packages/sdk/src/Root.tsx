import { useEffect } from 'react';
import { setupSdk } from "./service";
import { useController } from "./hooks/useController";

export default () => {
  const [Controller, { read, play, cameraReady }] = useController();
  useEffect(() => {
    setupSdk(read, play, cameraReady);
  }, []);
  return Controller;
};