import { contract } from "@/lib/contract";
import { createNextRoute, createNextRouter } from "@/next/src";

const router = createNextRoute(contract.second, {
  test: async () => {
    return {
      status: 200,
      body: {
        message: "first result",
      },
    };
  },
});

export default createNextRouter(contract.second, router, {});