import { NewUserType } from "@/features/auth/types";
import { db } from "..";
import { users } from "../schemas";

export const createUser = async (data: NewUserType) => {
  try {
    return await db.insert(users).values(data).returning();
  } catch (_) {
    return [];
  }
};
