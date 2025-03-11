import { db } from "..";

export const getUserByEmail = async (email: string) => {
  const user = await db.query.users.findFirst({
    where: (user, { eq }) => eq(user.email, email),
  });
  if (!user) return "";
  return user;
};
