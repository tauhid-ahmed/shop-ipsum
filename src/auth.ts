import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";
import { AuthTokenType } from "./features/auth/types";
import { getUserByEmail, getUserByEmailWithAccount } from "./db/queries";
import { updateUserEmailVerification } from "./db/mutations/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  events: {
    linkAccount: async ({ user }) => {
      await updateUserEmailVerification(user.id as string);
    },
  },
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials) {
        const { email } = credentials;
        const user = await getUserByEmail(email as string);
        if (!user) return null;
        return user;
      },
    }),
    Google({
      authorization: {
        url: "https://accounts.google.com/o/oauth2/v2/auth",
      },
    }),
    Github,
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "credentials") return true;
      const userWithAccount = await getUserByEmailWithAccount(
        user.email as string
      );
      if (!userWithAccount || !userWithAccount.provider) return true;
      if (userWithAccount?.provider !== account?.provider) return false;
      return true;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          role: (token as AuthTokenType).role,
          id: (token as AuthTokenType).id,
        },
      };
    },
    async jwt({ token, account, user }) {
      if (account && user) {
        const userData = await getUserByEmail(user.email as string);
        if (userData) {
          token.role = userData.role;
          token.id = userData.id;
        }
      }
      return token;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/sign-in",
  },
});
