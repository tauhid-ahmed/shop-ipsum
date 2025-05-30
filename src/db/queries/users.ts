import { AppError } from "@/lib/error/app-error";
import { db } from "..";

export const getUserByEmail = async (email: string) => {
  try {
    const normalizedEmail = email.toLowerCase().trim();

    const user = await db.query.users.findFirst({
      where: (user, { eq }) => eq(user.email, normalizedEmail),
    });

    return user;
  } catch (error: unknown) {
    console.error("Failed to get user by email:", error);

    throw new AppError("Failed to retrieve user by email.", {
      code: "USER_FETCH_FAILED",
      details: { email },
      cause: error,
    });
  }
};

export const getUserByEmailWithAccount = async (email: string) => {
  try {
    console.log("Fetching user with email:", email); // Debugging log

    // Fetch the user by email
    const user = await db.query.users.findFirst({
      where: (user, { eq }) => eq(user.email, email),
    });

    if (!user) {
      console.log("User not found.");
      return null; // If no user is found, return null
    }

    // Fetch accounts related to the user (simulating LEFT JOIN)
    const [accounts] = await db.query.accounts.findMany({
      where: (account, { eq }) => eq(account.userId, user.id),
    });

    // Simulate LEFT JOIN by attaching accounts to the user
    return { ...user, ...accounts };
  } catch (error) {
    console.error("Error fetching user by email:", error); // Detailed error log
    return null;
  }
};
