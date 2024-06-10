import { createEnv } from "@t3-oss/env-core";
import { configDotenv } from "dotenv";
import { z } from "zod";

configDotenv(); // load the token and everything else in `.env`

// wrap environment variables into an object
// this will also do type checking during runtime
export const env = createEnv({
    isServer: true,
    server: {
        MPPNET_TOKEN: z.string()
    },
    runtimeEnv: process.env
});

export default env;
