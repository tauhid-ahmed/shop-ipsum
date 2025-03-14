import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";
import { AuthTokenType } from "./features/auth/types";
import { getUserByEmail } from "./db/queries";
import { updateUser } from "./db/mutations/users";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

export const { handlers, signIn, signOut, auth } = NextAuth({
  // debug: true,
  adapter: DrizzleAdapter(db),
  events: {
    linkAccount: async ({ user }) => {
      await updateUser(user.id as string);
    },
  },
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials) {
        // no validation because validation is done on the server actions.
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
    async signIn() {
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
        // Populate token with user data from the database or provider
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
