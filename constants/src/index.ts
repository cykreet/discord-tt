import { config } from "dotenv-safe";
import { sync } from "find-up";

if (process.env.NODE_ENV !== "production") {
  config({ example: sync(".env.example"), path: sync(".env") });
}

export const NODE_ENV = process.env.NODE_ENV;
export const CLIENT_ID = process.env.CLIENT_ID;
