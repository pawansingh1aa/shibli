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
    default: "जशवंत सिंह (Jashwant Singh) — आज़मगढ़, उत्तर प्रदेश",
    template: `%s | जशवंत सिंह शिब्ली सिंह`,
  },
  description: siteMeta.description,
  keywords: [
    "जशवंत सिंह", "शिब्ली सिंह", "Jashwant Singh", "Jaswant Singh",
    "Shibli Singh", "jashwantshiblisingh", "आज़मगढ़", "Azamgarh",
    "सुभासपा", "SBSP", "ग्राम प्रधान", "उत्तर प्रदेश",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: siteMeta.siteName,
    type: "website",
    locale: "hi_IN",
    images: [{
      url: `${siteMeta.baseUrl}/profile.jpg`,
      width: 400,
      height: 500,
      alt: "जशवंत सिंह (शिब्ली सिंह) — आज़मगढ़",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${siteMeta.baseUrl}/profile.jpg`],
  },
  verification: {
    google: "YAHAN_CODE_DAALNA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          मुख्य सामग्री पर जाएं
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <NotificationPrompt />
      </body>
    </html>
  );
}
