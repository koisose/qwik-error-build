import { type RequestHandler } from "@builder.io/qwik-city";
import fs from "fs";
import path from "path";
import addJobToQueue from "~/utils/bullmq/queue";

const imageBuffer = fs.readFileSync(
  path.resolve("./src/media/sorry.png"),
);

export const onGet: RequestHandler = async ({ params, send }) => {
  const fileName = path.resolve("./src/media/" + params.id);
  try {
    const data = { jobName: "create-image", id: params.id };
    addJobToQueue(data);
    if (fs.existsSync(fileName)) {
      const imageBuffer = fs.readFileSync(fileName);
      send(
        new Response(imageBuffer, {
          status: 200,
          headers: {
            "Content-Type": "image/png",
          },
        }),
      );
    } else {
      send(
        new Response(imageBuffer, {
          status: 200,
          headers: {
            "Content-Type": "image/png",
          },
        }),
      );
    }
  } catch (e) {
    send(
      new Response(imageBuffer, {
        status: 200,
        headers: {
          "Content-Type": "image/png",
        },
      }),
    );
  }
};
