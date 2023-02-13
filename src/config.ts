import { z } from "zod";
import getConfig from "next/config";

const appConfig = z.object({
  SHOW_AGENDA: z.preprocess(
    (value) => (value === "true" ? true : false),
    z.boolean().default(false)
  ),
  SEND_MESSAGE_URL: z.string().optional(),
});

const config = appConfig.parse(getConfig().publicRuntimeConfig || {});

export default config;
