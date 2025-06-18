"use client";
import { User } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  if (isAuthenticated) {
    return {
      user: session.user as User,
      isLoading,
      isAuthenticated,
      signIn,
      signOut,
    };
  } else return { user: null };
}
