"use client";

import { useSession, signIn, signOut } from "next-auth/react";

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export function useAuth() {
  const { data: session, status } = useSession();
  console.log({ session });

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";
  const user: User | null = isAuthenticated ? session?.user ?? null : null;

  return {
    user,
    isLoading,
    isAuthenticated,
    signIn,
    signOut,
  };
}
