'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');

    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(
      'cookie-consent',
      JSON.stringify({
        necessary: true,
        analytics: true,
      })
    );

    setIsVisible(false);
    window.location.reload();
  };

  const rejectCookies = () => {
    localStorage.setItem(
      'cookie-consent',
      JSON.stringify({
        necessary: true,
        analytics: false,
      })
    );

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-[100] flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-600 max-w-4xl">
        Χρησιμοποιούμε απαραίτητα cookies για τη λειτουργία του ιστότοπου και,
        με τη συγκατάθεσή σας, cookies ανάλυσης για να βελτιώνουμε την εμπειρία σας.
        Διαβάστε την{' '}
        <Link href="/privacy-policy" className="text-[#B9007C] underline">
          Πολιτική Απορρήτου
        </Link>.
      </div>

      <div className="flex gap-3">
        <button
          onClick={rejectCookies}
          className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition"
        >
          Απόρριψη
        </button>

        <button
          onClick={acceptCookies}
          className="bg-[#B9007C] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#950064] transition"
        >
          Αποδοχή
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;