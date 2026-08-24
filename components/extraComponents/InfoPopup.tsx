'use client';

import { useState, useEffect } from 'react';
import { HiXMark, HiOutlineMegaphone } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';

const InfoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(20);

  useEffect(() => {
    // Εμφανίζουμε το popup
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Καθαρίζουμε το timer αν το component αφαιρεθεί πριν την εμφάνιση
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Ορίζουμε ένα timer για αυτόματο κλείσιμο
      const autoCloseTimer = setTimeout(() => {
        handleClose();
      }, 20000);

      // Timer για την αντίστροφη μέτρηση
      const countdownTimer = setInterval(() => {
        setSecondsLeft((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
      }, 1000);

      return () => {
        clearTimeout(autoCloseTimer);
        clearInterval(countdownTimer);
      };
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        {/* Κουμπί Κλεισίματος */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors z-10"
          aria-label="Κλείσιμο"
        >
          <HiXMark className="h-8 w-8" />
        </button>

        {/* Περιεχόμενο του Popup */}
        <div className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/lotus-white4.png"
              alt="Aiorisis Logo"
              width={80}
              height={80}
            />
          </div>
          <h3
            id="popup-title"
            className="text-2xl md:text-2xl font-bold text-gray-900 mb-4"
          >
           Ανακοίνωση
          </h3>
          <h2
            id="popup-title"
            className="text-2xl md:text-4xl font-bold text-[#B9007C] mb-16"
          >
           Νεό πρόγραμμα!
          </h2>
          <p className="text-gray-600 font-light leading-relaxed mb-2">
            Το πρόγραμμα της νέας σεζόν έχει αναρτηθεί!
          </p>
          <p className="text-gray-600 font-light leading-relaxed mb-2">
            Η σχολή μας θα ανοίξει στις <strong>01/09/2026</strong>.
          </p>
          <p className="text-gray-700 font-light leading-relaxed mb-6">
            Ανυπομονούμε να σας υποδεχτούμε ξανά!<br /> Καλές διακοπές!🌞⛱
          </p>
          {/* <Link
            href="/events/ocean-of-emotions"
            onClick={handleClose}
            className="inline-block bg-[#B9007C] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#950064] transition-transform duration-300 hover:scale-105"
          >
            Δείτε Περισσότερα
          </Link> */}
          <div className="mt-6 border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-500">
              Το παράθυρο θα κλείσει αυτόματα σε{" "}
              <span className="font-semibold text-gray-900">
                {secondsLeft}
              </span>{" "}
              δευτερόλεπτα.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-scale {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in-scale { animation: fade-in-scale 0.3s forwards; }
      `}</style>
    </div>
  );
};

export default InfoPopup;
