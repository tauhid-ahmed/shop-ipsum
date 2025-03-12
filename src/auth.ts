import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";
import { AuthTokenType } from "./features/auth/types";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        return credentials;
      },
    }),
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
    async jwt({ token }) {
      return token as AuthTokenType;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
});
