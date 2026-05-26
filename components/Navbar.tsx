"use client";

import NavLinksMainData from "@/data/NavLinksMainData";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

  return (
    <header className=" text-black sticky top-0 z-50 bg-[#F6F1EB]">
      <nav className="container mx-auto px-4 py-4 flex items-center max-w-7xl">
        <div className="flex items-center space-x-4">
          <Link href="/" className="nav-logo">
            <Image
              src="/logos/aiorisis_logo_social_media_big.png"
              alt="Logo"
              width={65}
              height={80}
              className="w-auto h-auto border-white border-7 bg-white rounded-full max-w-[120px] md:max-w-[220px] lg:max-w-[280px]"
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-1 xl:space-x-1  text-xl text-[#B9007C] font-bold ml-18">
          {NavLinksMainData.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 && (
                <li className="text-black font-normal" aria-hidden="true">
                  -
                </li>
              )}
              <li className="nav-item">
                  <Link
                href={link.href}
                className={`px-2 py-1 text-lg font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#B9007C] border-b-2 border-[#B9007C]"
                    : "text-gray-700 hover:text-[#B9007C] border-b-2 border-transparent"
                }`}
              >
                  {link.label}
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
        <ul className="hidden lg:flex ml-auto">
          <li className="nav-item">
            <Link
              href="https://members.aiorisis.gr/"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 bg-[#B9007C] text-white hover:bg-[#9a0068] shadow-md ml-4"
            >
              Κράτηση Θέσης
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        <button
          className="lg:hidden p-2 text-gray-600 ml-auto"
          aria-label="Άνοιγμα μενού"
          onClick={() => setIsOpen(!isOpen)}
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
        <div className="lg:hidden bg-white border-t rounded-b-2xl overflow-hidden animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col p-4 space-y-2">
            {NavLinksMainData.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-bold rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-[#B9007C] bg-[#B9007C]/5 border-l-4 border-[#B9007C]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100">
              <Link
                href="https://members.aiorisis.gr/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-bold text-center text-white bg-[#B9007C] hover:bg-[#9a0068] rounded-xl shadow-md transition-all active:scale-95"
              >
                Κράτηση Θέσης
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
