import { getUserByEmail, getUserByEmailWithAccount } from "@/db/queries/users";
import { updateEmailVerifiedStatus } from "@/db/mutations/users";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { type Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { db } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  events: {
    linkAccount: async ({ user }) => {
      await updateEmailVerifiedStatus(user.email as string);
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
    Google,
    Github,
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "credentials") return true;
      const userWithAccount = await getUserByEmailWithAccount(
        user.email as string
      );
      if (!userWithAccount || !userWithAccount.accounts?.provider) return true;
      if (userWithAccount.accounts?.provider !== account?.provider)
        return false;
      return true;
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
    async session({ session, token, trigger }): Promise<Session> {
      const data = {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          role: token.role,
        },
      };
      if (trigger === "update") {
        data.user.name = session.user.name;
      }
      return data;
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
