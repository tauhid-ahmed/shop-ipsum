import { db } from "@/db";
import { type UserType, users } from "@/db/schemas";

export const createUser = async (data: UserType) =>
  await db.insert(users).values(data).returning();
