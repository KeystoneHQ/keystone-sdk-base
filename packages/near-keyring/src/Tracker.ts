import ky from "ky";
import { MP_TOKEN, MP_PROJECT_ID } from "./Secret";

interface MPPayload {
  distinctId: string;
  time: number;
  requestId?: string;
  xfp: string;
}
export class Tracker {
  public static async track(event_name, payload: MPPayload) {
    const url = `https://api.mixpanel.com/import?strict=1&project_id=${MP_PROJECT_ID}`;
    const insertId = payload.requestId ? payload.requestId : payload.xfp;
    const body = JSON.stringify([
      {
        properties: {
          distinct_id: payload.distinctId,
          time: payload.time,
          $insert_id: insertId,
          xfp: payload.xfp,
        },
        event: event_name,
      },
    ]);
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${MP_TOKEN}`,
      },
      body,
    };
    try {
      const res = await ky.post(url, options);
      return res.json();
    } catch (err) {
      console.error("error:" + err);
    }
  }
}
