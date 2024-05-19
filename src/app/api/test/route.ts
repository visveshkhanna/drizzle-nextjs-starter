import { db } from "../../../../drizzle/db";
import { UserTable } from "../../../../drizzle/schema";

export async function GET(req: Request) {
  const data = await db.select().from(UserTable);
  console.log(data);
  return Response.json(data);
}
