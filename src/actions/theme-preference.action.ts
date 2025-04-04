"use server";
import { cookies } from "next/headers";

export async function setThemePreference(theme: string) {
  const cookieStore = await cookies();
  const currentTheme = cookieStore.get("preference")?.value;

  if (currentTheme === theme) return;

  cookieStore.set("preference", theme);
}
