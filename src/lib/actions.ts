import { db } from "../../drizzle/db";

export async function getData() {
  return await db.query.UserTable.findMany();
}
