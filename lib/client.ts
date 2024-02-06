import { initClient, tsRestFetchApi } from "@ts-rest/core";
import { contract } from "./contract";

export function initApiClient() {
  const client = initClient(contract, {
    baseUrl: `http://localhost:3000/api`,
    baseHeaders: {},
    credentials: "include",
    api: async (args) => {
      console.log("args", args.path);
      return tsRestFetchApi(args);
    },
  });

  return client;
}
