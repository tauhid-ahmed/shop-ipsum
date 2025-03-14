"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const defaultUser = {
  id: "",
  name: "Guest User",
  email: "Please sign in or create an account",
  image: "/favicon.ico",
};

export function useAuth() {
  const { data: session, status } = useSession();
  const user = session?.user ?? defaultUser;
  user.image = user.image ? user.image : defaultUser.image;

  return {
    user,
    isAuthenticated: !!session,
    isLoading: status === "loading",
    signIn,
    signOut,
  };
}
