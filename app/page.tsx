"use client";

import { initApiClient } from "@/lib/client";

const client = initApiClient();

export default function Home() {
  console.log("fds");
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <button
            onClick={async () => {
              console.log("click");
              const result = await client.first.test();
              console.log(result);
            }}
            className="bg-blue-500 p-2"
          >
            First API
          </button>
        </li>
        <li>
          <button
            onClick={async () => {
              console.log("click");
              const result = await client.second.test();
              console.log(result);
            }}
            className="bg-blue-500 p-2"
          >
            Second API
          </button>
        </li>
      </ul>
    </div>
  );
}
