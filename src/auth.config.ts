import NextAuth from "next-auth";
const authConfig = {
  providers: [],
};

export const { auth } = NextAuth(authConfig);
