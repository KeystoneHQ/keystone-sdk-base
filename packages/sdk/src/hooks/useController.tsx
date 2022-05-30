import React, { useMemo, useState } from "react";
import Modal from "react-modal";
import { EventEmitter } from "events";
import { useAnimatedQRCodePlayer } from "./useAnimatedQRCodePlayer";
import { useAnimatedQRCodeReader } from "./useAnimatedQRCodeReader";
import { Play, PlayStatus, Read, ReadStatus } from "../types";
import { InitialPage } from "../components/InitialPage";

const customStyles = {
  overlay: {
    zIndex: 999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "10px",
    width: "37rem",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    postion: "relative",
  },
};

export const useController = (): [
  JSX.Element,
  {
    play: Play;
    read: Read;
    cameraReady: boolean;
  }
] => {
  const ee = useMemo(() => new EventEmitter(), []);
  const [visible, setVisible] = useState(false);
  const [walletMode, setWalltMode] = useState("");
  const [link, setLink] = useState("");
  const [mode, setMode] = useState<"read" | "play" | "initial" | null>(null);
  const [AnimatedQRCodePlayer, { play }] = useAnimatedQRCodePlayer();
  const [AnimatedQRCodeReader, { read, cameraReady }] =
    useAnimatedQRCodeReader();
  const close = () => {
    ee.emit("close");
    reset();
  };

  const reset = () => {
    setMode(null);
    setLink("");
    setWalltMode("");
    setVisible(false);
  };

  const goToRead = () => {
    setMode("read");
  };

  const renderPannel = (pageMode: string) => {
    if (pageMode === "initial") {
      return (
        <InitialPage
          walletMode={walletMode}
          link={link}
          onButtonClick={goToRead}
        />
      );
    } else if (pageMode === "read") {
      return AnimatedQRCodeReader;
    } else if (pageMode === "play") {
      return AnimatedQRCodePlayer;
    } else {
      return null;
    }
  };

  const element = (
    <Modal isOpen={visible} style={customStyles}>
      <div onClick={close}>
        <img
          style={{ position: "absolute", top: "1rem", right: "1rem" }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATDPpdAAAAmklEQVQoFZWRwQ3DIAwAa4brJPBP80hnaD/lD5N0iYxEfRVBxBGRwsvgO2PZklJaReTrvX/eTk7O+VVKuTtgDRYVPyOeHAysAFV40jCGEB69aHN/YSRZGK4JVuKu5/DrToDoqnI9tOh4vXJ2Qlc96kSY2lTfWs0m9DCT0r3MSkUrXR9r3eBCNbuDrY/td23z7Vg3wQhGIgcD+wPGY2fPvHuWagAAAABJRU5ErkJggg=="
        />
      </div>
      <div
        style={{
          width: "35rem",
          padding: 18,
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#002237",
        }}
      >
        {renderPannel(mode)}
      </div>
    </Modal>
  );
  return [
    element,
    {
      play: (data, options) => {
        return new Promise<PlayStatus>((resolve) => {
          ee.once("close", () => {
            resolve(PlayStatus.canceled);
          });
          setVisible(true);
          setMode("play");
          play(data, options).then(() => {
            reset();
            resolve(PlayStatus.success);
          });
        });
      },
      read: async (expect, options) => {
        return new Promise((resolve) => {
          ee.once("close", () => {
            reset();
            resolve({
              status: ReadStatus.canceled,
            });
          });
          if (options.renderInitial) {
            setWalltMode(options.renderInitial.walletMode);
            setLink(options.renderInitial.link);
            setMode("initial");
            setVisible(true);
            read(expect, options).then((result) => {
              reset();
              resolve(result);
            });
          } else {
            setMode("read");
            setVisible(true);
            read(expect, options).then((result) => {
              reset();
              resolve(result);
            });
          }
        });
      },
      cameraReady,
    },
  ];
};
