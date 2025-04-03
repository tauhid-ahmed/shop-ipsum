"use server";
import { cookies } from "next/headers";

export async function setThemePreference(theme: string) {
  const cookieStore = await cookies();
  cookieStore.set("preference", theme);
}
