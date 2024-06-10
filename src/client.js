import { Client } from "mpp-client-net";
import env from "./env.js";

// create the client
export const client = new Client("wss://mppclone.com:8443", env.MPPNET_TOKEN);

// connect
client.start();
client.setChannel("test/fishing");

export default client;
