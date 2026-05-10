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
    <header className="bg-white text-black">
      <nav className="container mx-auto px-4 py-4 flex items-center max-w-7xl">
        <div className="flex items-center space-x-4">
          <Link href="/" className="nav-logo">
            <Image
              src="/logos/aiorisis_logo_social_media_big.png"
              alt="Logo"
              width={65}
              height={100}
              className="w-auto h-auto max-w-[160px] md:max-w-[220px] lg:max-w-[280px]" // Διορθώθηκε για να αποφευχθεί η μεγέθυνση
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[#B9007C] font-bold ml-30">
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
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-[#B9007C] text-white shadow-md"
                    : "hover:bg-gray-200 text-gray-700"
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
              href="/https://members.aiorisis.gr/"
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
                  className="block px-4 py-3 text-base font-medium text-[#B9007C] hover:bg-gray-100 rounded-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100">
              <Link
                href="/https://members.aiorisis.gr/"
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
