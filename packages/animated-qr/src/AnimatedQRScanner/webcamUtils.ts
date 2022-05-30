import { CameraStatus } from "./types";

/**
 * When the user click's the icon in their browser's extension bar; the default view
 */

const isPopupView = (defaultPopup = "popup.html"): boolean => {
  const parsedUrl = new URL(window.location.href);
  return parsedUrl.pathname === `/${defaultPopup}`;
};

/**
 * Is the platform (browser) ,where the extension is running, is Firefox or Brave
 */

const isOnFirefoxOrBrave = (): boolean => {
  const { navigator } = window;
  const { userAgent } = navigator;

  return userAgent.includes("Firefox") || "brave" in navigator;
};

export const checkStatus = async (defaultPopup?: string) => {
  const isPopup = isPopupView(defaultPopup);
  const isFirefoxOrBrave = isOnFirefoxOrBrave();

  const devices = await window.navigator.mediaDevices.enumerateDevices();
  const webcams = devices.filter((device) => device.kind === "videoinput");
  const hasWebcam = webcams.length > 0;
  // A non-empty-string label implies that the webcam has been granted permission, as
  // otherwise the label is kept blank to prevent fingerprinting
  const hasWebcamPermissions = webcams.some(
    (webcam) => webcam.label && webcam.label.length > 0
  );

  if (hasWebcam) {
    let environmentReady = true;
    if ((isFirefoxOrBrave && isPopup) || (isPopup && !hasWebcamPermissions)) {
      environmentReady = false;
    }
    return {
      permissions: hasWebcamPermissions,
      environmentReady,
    };
  }
  throw new Error(CameraStatus.NO_WEBCAM);
};
