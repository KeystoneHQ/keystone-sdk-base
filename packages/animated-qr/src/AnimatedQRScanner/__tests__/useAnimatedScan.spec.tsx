import { renderHook, act } from "@testing-library/react-hooks";
import { useAnimatedScan } from "../useAnimatedScan";
import { Purpose, QRCodeError } from "../types";
import { hdKey } from "./factory/ur";

jest.mock("../useCamera", () => ({
  useCamera: jest.fn().mockReturnValue({
    cameraStatus: "READY",
  }),
}));

describe("useAnimatedScan", () => {
  describe("handleScanSuccess", () => {
    it("should call given handleScan function", () => {
      const stubHandleScan = jest.fn();
      const { result } = renderHook(() =>
        useAnimatedScan({
          purpose: Purpose.SYNC,
          handleScan: stubHandleScan,
          handleError: jest.fn(),
        })
      );

      const { handleScanSuccess } = result.current;
      act(() => {
        handleScanSuccess(hdKey.ur);
      });

      expect(stubHandleScan).toBeCalledWith({type: hdKey.type, cbor: hdKey.hex});
    });

    it("should enhance the given function to handle phantom QR code", () => {
      const stubHandleScan = jest.fn();
      const { result } = renderHook(() =>
        useAnimatedScan({
          purpose: Purpose.SYNC,
          handleScan: stubHandleScan,
          handleError: jest.fn(),
        })
      );

      const { handleScanSuccess } = result.current;
      act(() => {
        handleScanSuccess(hdKey.urSequences[0]);
      });
      expect(stubHandleScan).not.toBeCalled();

      act(() => {
        handleScanSuccess(hdKey.urSequences[1]);
      });

      expect(stubHandleScan).toBeCalledWith({type: hdKey.type, cbor: hdKey.hex});
    });
  });

  describe("handleScanFailure", () => {
    it("should give UNEXPECTED_QRCODE if ur type is not expected", () => {
      const stubHandleError = jest.fn();
      const { result } = renderHook(() =>
        useAnimatedScan({
          purpose: Purpose.SIGN,
          handleScan: jest.fn(),
          handleError: stubHandleError,
        })
      );

      const { handleScanSuccess } = result.current;
      act(() => {
        handleScanSuccess(hdKey.ur);
      });

      expect(stubHandleError).toBeCalledWith(QRCodeError.UNEXPECTED_QRCODE);
    });

    it("should give INVALID_QR_CODE if ur can't be decoded", () => {
      const stubHandleError = jest.fn();
      const { result } = renderHook(() =>
        useAnimatedScan({
          purpose: Purpose.SYNC,
          handleScan: jest.fn(),
          handleError: stubHandleError,
        })
      );

      const { handleScanSuccess } = result.current;
      act(() => {
        handleScanSuccess("ur:bytes/wrongData");
      });

      expect(stubHandleError).toBeCalledWith(QRCodeError.INVALID_QR_CODE);
    });
  });
});
