import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#C0C0C0] text-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
          {/* Αριστερή Στήλη: Πληροφορίες */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900 border-b-2 border-[#B9007C] inline-block pb-1 mb-2">
              Πληροφορίες
            </h4>
            <div className="space-y-1 font-light">
              <p>Αρτέμιδος 42</p>
              <p>Θεσσαλονίκη, 54644</p>
              <p className="font-medium pt-2 text-[#B9007C]">6948577225</p>
              <div className="pt-4">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Αρτέμιδος+42+Θεσσαλονίκη+54644"
                  target="_blank"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:text-[#B9007C] transition-colors"
                >
                  Άνοιγμα Χάρτη →
                </Link>
              </div>
            </div>
          </div>

          {/* Κεντρική Στήλη: Logo */}
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src="/logos/aiorisis_logo-transp-new.png"
              alt="Logo"
              width={320}
              height={120}
              className="h-auto max-w-[160px] md:max-w-[220px] lg:max-w-[260px] mb-4"
            />
          </div>

          {/* Δεξιά Στήλη: Ώρες Λειτουργίας */}
          <div className="space-y-4 md:text-right">
            <h4 className="text-xl font-bold text-gray-900 border-b-2 border-[#B9007C] inline-block pb-1 mb-2">
              Ώρες Λειτουργίας
            </h4>
            <div className="space-y-3 font-light">
              <div>
                <p className="font-medium text-[#B9007C]">Δευτέρα έως Παρασκευή</p>
                <p>10:15 – 13:00</p>
                <p>17:00 – 23:00</p>
              </div>
              <div className="pt-1">
                <p className="font-medium text-[#B9007C]">Σάββατο</p>
                <p>10:30 – 14:30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-400/30">
          <p className="text-center text-sm text-gray-600">
            Αιώρησις &copy; {new Date().getFullYear()}. | All rights reserved. | Power by tSagian Projects.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;