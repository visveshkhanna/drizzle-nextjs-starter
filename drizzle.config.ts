import { defineConfig, Config } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABSE_URL || "",
  },
  verbose: true,
  strict: true,
} as Config);
