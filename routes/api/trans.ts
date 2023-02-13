import { Handlers } from "$fresh/server.ts";
import jsonToTS from "json_to_ts";

interface Params {
  data: string;
}

export const handler: Handlers = {
  async POST(req, _ctx) {
    const body = await req.text();
    try {
      const data: Params = JSON.parse(body);
      const arr = jsonToTS(data.data);
      return new Response(arr.join("\n"));
    } catch (error) {
      console.error("body invalid", body, error);
      return new Response("not valid JSON", {
        status: 400,
      });
    }
  },
};
