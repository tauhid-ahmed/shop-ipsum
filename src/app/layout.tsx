import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { APP_NAME, APP_DESCRIPTION, APP_URL } from "@/constants/app.config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import SessionProvider from "@/providers/session-provider";
const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/logo.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${inter.variable} ${inter.className} antialiased bg-background`}
      >
        <SessionProvider>
          <Analytics />
          <SpeedInsights />
          <ThemeProvider>{children}</ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
