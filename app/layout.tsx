import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotificationPrompt from "@/components/NotificationPrompt";
import { siteMeta, profile } from "@/lib/data/profile";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.baseUrl),
  title: {
    default: siteMeta.siteName,
    template: `%s | ${profile.name}`,
  },
  description: siteMeta.description,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: siteMeta.siteName,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`} translate="yes">
      <head />
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to main content
        </a>
        <Navbar />        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <NotificationPrompt />
      </body>
    </html>
  );
}
