"use client";
import { useSession } from "next-auth/react";

export default function SignedOut({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  if (!session) return children;
  return null;
}
