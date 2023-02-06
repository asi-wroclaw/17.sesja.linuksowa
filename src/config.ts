import { z } from "zod";
import getConfig from "next/config";

const appConfig = z.object({
  SHOW_AGENDA: z.preprocess(
    (value) => (value === "true" ? true : false),
    z.boolean().default(false)
  ),
});

const config = appConfig.parse(getConfig().publicRuntimeConfig || {});

export default config;
