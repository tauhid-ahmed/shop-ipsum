import { db } from "@/db";

export const getUserByEmail = async (email: string) =>
  await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.email, email.toLowerCase().trim()),
  });
