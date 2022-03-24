import { renderHook } from "@testing-library/react-hooks";
import { useCamera } from "../useCamera";
import { CameraStatus } from "../types";
import * as webcamUtils from "../webcamUtils";

describe("useCamera", () => {
  it("should return camera status", async () => {
    jest.spyOn(webcamUtils, "checkStatus").mockResolvedValue({
      permissions: true,
      environmentReady: true,
    });

    const { result, waitForNextUpdate } = renderHook(() => useCamera());
    expect(result.current.cameraStatus).toBe(CameraStatus.ACCESSING_CAMERA);

    await waitForNextUpdate();
    expect(result.current.cameraStatus).toBe(CameraStatus.READY);
  });

  it("should return NO_WEBCAM_ACCESS when lacking camera permission", async () => {
    jest.spyOn(webcamUtils, "checkStatus").mockResolvedValue({
      permissions: false,
      environmentReady: false,
    });

    const { result, waitForNextUpdate } = renderHook(() => useCamera());
    expect(result.current.cameraStatus).toBe(CameraStatus.ACCESSING_CAMERA);

    await waitForNextUpdate();
    expect(result.current.cameraStatus).toBe(CameraStatus.PERMISSION_NEEDED);
  });

  it("should return NO_WEBCAM_ACCESS when environment is not ready", async () => {
    jest.spyOn(webcamUtils, "checkStatus").mockResolvedValue({
      permissions: true,
      environmentReady: false,
    });

    const { result, waitForNextUpdate } = renderHook(() => useCamera());
    expect(result.current.cameraStatus).toBe(CameraStatus.ACCESSING_CAMERA);

    await waitForNextUpdate();
    expect(result.current.cameraStatus).toBe(CameraStatus.PERMISSION_NEEDED);
  });
});
