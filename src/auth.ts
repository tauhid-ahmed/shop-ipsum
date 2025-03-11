import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

const config = {
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
  },

  // callbacks: {
  //   // async signIn({ user, account, profile, email, credentials }) {
  //   //   return true;
  //   // },
  //   // async redirect({ url, baseUrl }) {
  //   //   return baseUrl;
  //   // },
  //   // async session({ session, user, token }) {
  //   //   return session;
  //   // },
  //   // async jwt({ token, user, account, profile, isNewUser }) {
  //   //   return token;
  //   // },
  // },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
