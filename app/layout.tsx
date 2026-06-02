import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Ubuntu_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/extraComponents/ScrollToTopButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/extraComponents/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin", "greek"],
});

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin", "greek"],
});

export const metadata: Metadata = {
  title: "Αιώρησις | Aerial Yoga, Silks, Flying Pole, Rope, Straps, Vinyasa Flow Yoga & Flexibility Studio",
  description: "Σύγχρονο στούντιο κίνησης και yoga στην Αρτέμιδος 42, Θεσσαλονίκη.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${ubuntuSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <CookieConsent />
              <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
