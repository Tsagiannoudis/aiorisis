import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  EB_Garamond,
  Ubuntu_Sans,
} from "next/font/google";
import { notFound } from "next/navigation";

import {
  NextIntlClientProvider,
  hasLocale,
} from "next-intl";
import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";

import { routing } from "@/i18n/routing";

import "../globals.css";

import ScrollToTopButton from "@/components/extraComponents/ScrollToTopButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/extraComponents/api/GoogleAnalytics";
import CookieConsent from "@/components/extraComponents/CookieConsent";
import InfoPopup from "@/components/extraComponents/InfoPopup";

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
  title:
    "Αιώρησις | Aerial Yoga, Silks, Flying Pole, Rope, Straps, Vinyasa Flow Yoga & Flexibility Studio",
  description:
    "Σύγχρονο στούντιο κίνησης και yoga στην Αρτέμιδος 42, Θεσσαλονίκη.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  /*
   * Επιτρέπουμε μόνο τα locales που έχουμε δηλώσει
   * στο i18n/routing.ts: el | en
   */
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  /*
   * Ενημερώνουμε το next-intl για το locale
   * του συγκεκριμένου request.
   */
  setRequestLocale(locale);

  /*
   * Φορτώνουμε το σωστό:
   *
   * messages/el.json
   * ή
   * messages/en.json
   */
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${ebGaramond.variable}
        ${ubuntuSans.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics />

          <Navbar />

          {/* <InfoPopup /> */}

          {children}

          <CookieConsent />

          <ScrollToTopButton />

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}