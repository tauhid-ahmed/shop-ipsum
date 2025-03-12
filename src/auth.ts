import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";

const config = {
  adapter: DrizzleAdapter(db),
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        return {
          ...credentials,
          id: "1",
          name: "John Doe",
          email: "jdoe@me.com",
        };
      },
    }),
  ],

  callbacks: {
    async signIn() {
      return true;
    },
    async session() {
      return {};
    },
    async jwt() {
      return {};
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
