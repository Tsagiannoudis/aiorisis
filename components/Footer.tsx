import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:items-center">
          <div className="text-center md:text-left">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#B9007C]">
              Πληροφορίες
            </h4>

            <div className="space-y-2 text-sm leading-7 text-neutral-600">
              <p>Αρτέμιδος 42</p>
              <p>Θεσσαλονίκη, 54644</p>

              <Link
                href="tel:6948577225"
                className="inline-block pt-2 font-semibold text-[#B9007C] transition hover:opacity-70"
              >
                6948577225
              </Link>

              <div className="pt-4">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Αρτέμιδος+42+Θεσσαλονίκη+54644"
                  target="_blank"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 transition hover:text-[#B9007C]"
                >
                  Άνοιγμα Χάρτη →
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logos/aiorisis_logo-transp-new.png"
              alt="Aiorisis logo"
              width={320}
              height={140}
              className="h-auto w-[180px] md:w-[230px]"
            />

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
              est. 2021
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#B9007C]">
              Ώρες Λειτουργίας
            </h4>

            <div className="space-y-5 text-sm leading-7 text-neutral-600">
              <div>
                <p className="font-semibold text-neutral-900">
                  Δευτέρα έως Παρασκευή
                </p>
                <p>10:15 – 13:00</p>
                <p>17:00 – 23:00</p>
              </div>

              <div>
                <p className="font-semibold text-neutral-900">Σάββατο</p>
                <p>10:30 – 14:30</p>
              </div>
            </div>
          </div>
        </div>

        {/* All rights reserved + social media */}
        <div className="flex flex-col md:flex-row mt-12 border-t justify-between items-center gap-6 border-black/10 pt-8">
          <p className=" flex text-lg text-neutral-500">
            Aκολουθήστε μας στα κοινωνικά δίκτυα:
            <Link
              href="https://www.facebook.com/aiorisis/"
              target="_blank"
              className="text-2xl pl-2 pr-2 text-neutral-700 transition hover:text-[#B9007C]"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/aiorisis/"
              target="_blank"
              className="text-2xl text-neutral-700 transition hover:text-[#B9007C]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
          </p>

          <p> | </p>

          <p className="text-lg text-neutral-500 text-center md:text-left">
            Αιώρησις © {new Date().getFullYear()}. All rights reserved. Powered
            by{" "}
            <Link
              href="https://www.tsagiannoudis.gr/"
              target="_blank"
              className="font-medium text-neutral-700 transition hover:text-[#B9007C]"
            >
              tSagian Projects.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
