"use client";

import NavLinksMainData from "@/data/NavLinksMainData";
import Image from "next/image";
import NextLink from "next/link";
import { Fragment, useState } from "react";

import { useLocale, useTranslations } from "next-intl";

import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const t = useTranslations("Navbar");

  const switchLocale = (newLocale: "el" | "en") => {
    if (locale === newLocale) {
      return;
    }

    router.replace(pathname, {
      locale: newLocale,
    });

    setIsOpen(false);
  };

  return (
    <header className="text-black sticky top-0 h-32 min-h-[6rem] z-50 bg-[#F6F1EB] rounded-b-4xl shadow-sm">
      <nav className="container mx-auto px-4 h-full min-h-[6rem] flex flex-wrap items-center justify-between max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="nav-logo relative mt-12 z-10"
          >
            <Image
              src="/logos/aiorisis_logo_social_media_big.png"
              alt="Aiorisis"
              width={75}
              height={90}
              priority
              className="w-auto h-auto border-white border-[6px] bg-white rounded-full max-w-[150px] md:max-w-[150px] lg:max-w-[150px] shadow-sm translate-y-2"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-wrap items-center space-x-1 xl:space-x-1 text-xl text-[#B9007C] font-bold ml-8">
          {NavLinksMainData.map((link, index) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

            return (
              <Fragment key={link.href}>
                {index > 0 && (
                  <li
                    className="text-black font-normal"
                    aria-hidden="true"
                  >
                    -
                  </li>
                )}

                <li className="nav-item">
                  <Link
                    href={link.href}
                    className={`px-2 py-1 text-lg font-medium transition-all duration-200 ${isActive
                      ? "text-[#B9007C] border-b-2 border-[#B9007C]"
                      : "text-gray-700 hover:text-[#B9007C] border-b-2 border-transparent"
                      }`}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              </Fragment>
            );
          })}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex ml-auto items-center gap-4">
          {/* Language Switch */}
          <div className="flex items-center gap-2 ml-4 text-xs font-bold tracking-[0.15em]">
            <button
              type="button"
              onClick={() => switchLocale("el")}
              className={`transition-colors ${locale === "el"
                ? "text-[#B9007C]"
                : "text-gray-500 hover:text-[#B9007C]"
                }`}
              aria-label="Ελληνικά"
            >
              EL
            </button>

            <span
              className="text-gray-300"
              aria-hidden="true"
            >
              ·
            </span>

            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={`transition-colors ${locale === "en"
                ? "text-[#B9007C]"
                : "text-gray-500 hover:text-[#B9007C]"
                }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Booking */}
          <NextLink
            href="https://members.aiorisis.gr/"
            className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 bg-[#B9007C] text-white hover:bg-[#9a0068] shadow-md"
          >
            {t("booking")}
          </NextLink>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-600 ml-auto"
          aria-label={
            isOpen
              ? locale === "en"
                ? "Close menu"
                : "Κλείσιμο μενού"
              : locale === "en"
                ? "Open menu"
                : "Άνοιγμα μενού"
          }
          aria-expanded={isOpen}
          onClick={() => setIsOpen((previous) => !previous)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-24 left-0 right-0 bg-white border-t rounded-b-2xl overflow-hidden animate-in slide-in-from-top duration-300 shadow-lg">
          <ul className="flex flex-col p-4 space-y-2 pt-18">
            {NavLinksMainData.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-bold rounded-lg transition-colors ${isActive
                      ? "text-[#B9007C] bg-[#B9007C]/5 border-l-4 border-[#B9007C]"
                      : "text-gray-700 hover:bg-gray-50"
                      }`}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              );
            })}

            {/* Mobile Language Switch */}
            <li className="pt-4">
              <div className="flex items-center justify-center gap-4 py-3">
                <button
                  type="button"
                  onClick={() => switchLocale("el")}
                  className={`text-sm font-bold tracking-[0.15em] transition-colors ${locale === "el"
                    ? "text-[#B9007C]"
                    : "text-gray-400 hover:text-[#B9007C]"
                    }`}
                >
                  EL
                </button>

                <span className="text-gray-300">·</span>

                <button
                  type="button"
                  onClick={() => switchLocale("en")}
                  className={`text-sm font-bold tracking-[0.15em] transition-colors ${locale === "en"
                    ? "text-[#B9007C]"
                    : "text-gray-400 hover:text-[#B9007C]"
                    }`}
                >
                  EN
                </button>
              </div>
            </li>

            {/* Mobile Booking */}
            <li className="pt-2 border-t border-gray-100">
              <NextLink
                href="https://members.aiorisis.gr/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-bold text-center text-white bg-[#B9007C] hover:bg-[#9a0068] rounded-xl shadow-md transition-all active:scale-95"
              >
                {t("booking")}
              </NextLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;