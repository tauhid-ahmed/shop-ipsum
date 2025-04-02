"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  React.useEffect(() => {
    const documentElement = document.documentElement;
    const preferredTheme = localStorage.getItem("preferredTheme");
    if (preferredTheme) {
      documentElement.dataset.themeColor = preferredTheme;
    } else {
      documentElement.dataset.themeColor = "blue";
    }
  }, []);
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
