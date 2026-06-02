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
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-[100] flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-600 max-w-4xl">
        Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας. Συνεχίζοντας την περιήγηση, συμφωνείτε με τη χρήση τους. 
        Διαβάστε την <Link href="/privacy-policy" className="text-[#B9007C] underline">Πολιτική Απορρήτου</Link>.
      </div>
      <div className="flex gap-4">
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