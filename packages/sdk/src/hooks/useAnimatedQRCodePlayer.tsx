import React, { useEffect, useMemo, useState } from "react";
import { interval } from "rxjs";
import { BaseQRCode } from "../components/BaseQRCode";
import { Play, PlayStatus } from "../types";
import { EventEmitter } from "events";
import { Button } from "../components/Button";
import { ButtonGroup } from "../components/ButtonGroup";
import { UR, UREncoder } from "@ngraveio/bc-ur";

const DEFAULT_SPEED = 100;

const DEFAULT_MAX_FRAGMENT_LENGTH = 400;

const DEFAULT_UR = new UR(Buffer.from("NO DATA", "utf-8"));

export const useAnimatedQRCodePlayer = (): [JSX.Element, { play: Play }] => {
  const [data, setData] = useState<UR>(DEFAULT_UR);
  const [shouldShow, setShouldShow] = useState(false);

  const [refreshSpeed, setRefreshSpeed] = useState(DEFAULT_SPEED);
  const [maxFragmentLength, setMaxFragmentLength] = useState(DEFAULT_MAX_FRAGMENT_LENGTH)
  const [hasNext, setHasNext] = useState(false);
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  const urEncoder = useMemo(() => new UREncoder(data, maxFragmentLength), [data]);

  const [qr, setQR] = useState<string>(urEncoder.nextPart());

  const ee = useMemo(() => new EventEmitter(), []);
  const reset = () => {
    setData(DEFAULT_UR);
    setShouldShow(false);
    setRefreshSpeed(DEFAULT_SPEED);
  };

  useEffect(() => {
    if (urEncoder.cbor.toString("hex") !== DEFAULT_UR.cbor.toString("hex")) {
      setShouldShow(true);
    }
  }, [urEncoder]);

  useEffect(() => {
    const subscribe = interval(refreshSpeed).subscribe(() => {
      setQR(urEncoder.nextPart());
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, [refreshSpeed, urEncoder]);

  const finish = () => {
    ee.emit("finish", true);
  };

  const element = shouldShow ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {title && (
        <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{title}</p>
      )}
      <BaseQRCode size={288} data={qr} />
      {description && (
        <p style={{ fontSize: "1rem", textAlign: "center" }}>{description}</p>
      )}
      <ButtonGroup>
        <Button onClick={finish}>{hasNext ? "Scan Keystone" : "Finish"}</Button>
      </ButtonGroup>
    </div>
  ) : (
    <div></div>
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
            options.maxFragmentLength && setMaxFragmentLength(options.maxFragmentLength)
          }
          ee.once("finish", () => {
            reset();
            resolve(PlayStatus.success);
          });
        });
      },
    },
  ];
};
