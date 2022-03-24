import { useEffect, useRef, useState } from "react";
import { CameraStatus } from "./types";
import { checkStatus } from "./webcamUtils";

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;

export const useCamera = (
  defaultPopup?: string
): { cameraStatus: CameraStatus } => {
  const [cameraStatus, setCameraStatus] = useState<CameraStatus>(
    CameraStatus.ACCESSING_CAMERA
  );
  const mounted = useRef(false);
  let permissionChecker = null;

  const checkPermissions = async () => {
    try {
      const { permissions } = await checkStatus(defaultPopup);
      if (permissions) {
        // Let the video stream load first...
        await new Promise((resolve) => setTimeout(resolve, SECOND * 2));
        if (!mounted.current) {
          return;
        }
        setCameraStatus(CameraStatus.READY);
      } else if (mounted.current) {
        // Keep checking for permissions
        permissionChecker = setTimeout(checkPermissions, SECOND);
        setCameraStatus(CameraStatus.PERMISSION_NEEDED);
      }
    } catch (error) {
      if (mounted.current) {
        setCameraStatus(CameraStatus.UNKNOWN_ERROR);
      }
    }
  };

  const initCamera = () => {
    try {
      checkPermissions();
    } catch (error) {
      if (!mounted.current) {
        return;
      }
      if ((error as unknown as { name?: string })?.name === "NotAllowedError") {
        setCameraStatus(CameraStatus.PERMISSION_NEEDED);
      } else {
        setCameraStatus(CameraStatus.UNKNOWN_ERROR);
      }
    }
  };

  const checkEnvironment = async () => {
    try {
      const { environmentReady } = await checkStatus(defaultPopup);
      if (environmentReady) {
        setCameraStatus(CameraStatus.READY);
      } else {
        setCameraStatus(CameraStatus.PERMISSION_NEEDED);
      }
    } catch (error) {
      if (mounted.current) {
        setCameraStatus(CameraStatus.UNKNOWN_ERROR);
      }
    }
    // initial attempt is required to trigger permission prompt
    return initCamera();
  };

  useEffect(() => {
    mounted.current = true;
    checkEnvironment();
    return () => {
      mounted.current = false;
      clearTimeout(permissionChecker);
    };
  }, []);

  useEffect(() => {
    if (cameraStatus === CameraStatus.READY) {
      initCamera();
    } else if (cameraStatus === CameraStatus.PERMISSION_NEEDED) {
      checkPermissions();
    }
  }, [cameraStatus]);

  return {
    cameraStatus,
  };
};
