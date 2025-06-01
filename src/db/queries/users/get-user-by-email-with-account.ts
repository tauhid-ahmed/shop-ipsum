import { db, eq } from "@/db";
import { users, accounts } from "@/db/schemas";

export const getUserByEmailWithAccounts = async (email: string) => {
  const normalizedEmail = email.toLowerCase().trim();

  const result = await db
    .select({
      user: users,
      account: accounts,
    })
    .from(users)
    .leftJoin(accounts, eq(users.id, accounts.userId))
    .where(eq(users.email, normalizedEmail));

  if (result.length === 0) return null;

  const user = result[0].user;
  const accountsList = result
    .filter((row) => row.account !== null)
    .map((row) => row.account);

  return {
    ...user,
    accounts: accountsList,
  };
};
