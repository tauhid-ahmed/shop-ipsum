import { db } from "..";

export const getUserByEmail = async (email: string) => {
  try {
    return await db.query.users.findFirst({
      where: (user, { eq }) => eq(user.email, email.toLowerCase()),
    });
  } catch (_) {
    return null;
  }
};
