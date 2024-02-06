import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const ErrorObject = z.object({
  message: z.string().nullable(),
  description: z.string().nullish(),
});

const firstRouter = c.router({
  test: {
    method: "GET",
    path: "/first/test",
    responses: {
      200: z.object({
        message: z.string(),
      }),
    },
    summary: "First Test",
  },
});

const secondRouter = c.router({
  test: {
    method: "GET",
    path: "/second/test",
    responses: {
      200: z.object({
        message: z.string(),
      }),
    },
    summary: "Second Test",
  },
});

export const contract = c.router({
  first: firstRouter,
  second: secondRouter,
});
