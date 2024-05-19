import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

const client = postgres(process.env.DATABSE_URL as string);
export const db = drizzle(client, {
  schema,
  logger: true,
});
