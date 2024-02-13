import "@/styles/globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";
import { ThemeProvider } from "@/components/layout/theme-provider";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name}, Software Engineer`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="min-h-[calc(100vh-72px)] bg-[radial-gradient(150%_50%_at_50%_50%,rgba(16,123,230,0.8)_0%,rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(150%_50%_at_50%_50%,rgba(16,123,230,0.15)_50%,rgba(9,9,11,1)_100%)]">
                {children}
                <Analytics />
              </div>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
