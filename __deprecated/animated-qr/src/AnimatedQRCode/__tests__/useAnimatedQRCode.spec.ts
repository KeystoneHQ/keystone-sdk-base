import { renderHook, act } from "@testing-library/react-hooks";
import { useAnimatedQRCode } from "../useAnimatedQRCode";
import { nftItem } from "./factory/ethNftItem";

describe("useAnimatedQRCode", () => {
  it("should return qr code value every 100ms by default", () => {
    jest.useFakeTimers();
    const { result } = renderHook(() =>
      useAnimatedQRCode({ cbor: nftItem.cbor, type: nftItem.type })
    );
    expect(result.current).toMatch(/^UR:ETH-NFT-ITEM\/1-19\//);

    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(result.current).toMatch(/^UR:ETH-NFT-ITEM\/2-19\//);
  });

  it("should return qr code value with given capacity", () => {
    jest.useFakeTimers();
    const { result } = renderHook(() =>
      useAnimatedQRCode({
        cbor: nftItem.cbor,
        type: nftItem.type,
        capacity: 200,
      })
    );

    // The sequence length increased since smaller capacity, default 400, is given
    expect(result.current).toMatch(/^UR:ETH-NFT-ITEM\/1-37\//);
  });

  it("should return qr code value with given interval", () => {
    jest.useFakeTimers();
    const { result } = renderHook(() =>
      useAnimatedQRCode({
        cbor: nftItem.cbor,
        type: nftItem.type,
        interval: 200,
      })
    );
    expect(result.current).toMatch(/^UR:ETH-NFT-ITEM\/1-19\//);

    // Remains 1-19 at 100ms since interval has been set to 200ms
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(result.current).toMatch(/^UR:ETH-NFT-ITEM\/1-19\//);

    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(result.current).toMatch(/^UR:ETH-NFT-ITEM\/2-19\//);
  });
});
