"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const defaultUser = {
  id: "",
  name: "Guest User",
  email: "Please sign in or create an account",
  image: "",
};

export function useAuth() {
  const { data: session, status } = useSession();
  const user = session?.user ?? defaultUser;

  return {
    user,
    isAuthenticated: !!session,
    isLoading: status === "loading",
    signIn,
    signOut,
  };
}
