import { contract } from "@/lib/contract";
import { createNextRoute, createNextRouter } from "@/next/src";
import { NextApiRequest, NextApiResponse } from "next";

const router = createNextRoute(contract.first, {
  test: async () => {
    return {
      status: 200,
      body: {
        message: "first result",
      },
    };
  },
});

export default createNextRouter(contract.first, router, {});

