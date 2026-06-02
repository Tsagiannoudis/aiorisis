"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSectionPrivacy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative min-h-[450px] h-[35vh] md:h-[55vh] w-full flex items-center overflow-hidden bg-[#F6F1EB]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black/35">
        <Image
          src="/7.webp"
          alt="Privacy - Αιώρησις"
          fill
          className="object-cover scale-110 animate-subtle-zoom transition-transform duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F6F1EB]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-2xl text-white"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#B9007C]/20 backdrop-blur-sm text-[#ef92ce] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Privacy Policy
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter drop-shadow-2xl mb-2">
            Πολιτική Απορρήτου
          </h1>
          <div className="w-24 h-1.5 bg-[#B9007C] rounded-full shadow-lg shadow-[#B9007C]/50 mb-6 md:mb-8"></div>

          <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
            <p className="text-2xl md:text-4xl font-light leading-tight">
              Σεβόμαστε την ιδιωτικότητα σας
            </p>
            <p className="text-sm md:text-sm text-white/80 font-medium tracking-wide">
              και δεσμευόμαστε να προστατεύουμε τα προσωπικά δεδομένα που μας εμπιστεύεστε.
            </p>
          </div>

          <div className="flex items-center gap-5 mt-20 bg-white border border-gray-200 p-5 rounded-2xl w-fit shadow-sm" data-aos="fade-up" data-aos-delay="400">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#B9007C]/5 rounded-xl">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#B9007C" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl text-black font-light leading-tight">
                Τελευταία ενημέρωση
              </p>
              <p className="text-sm md:text-sm text-[#B9007C] font-bold tracking-wide">
                02 Ιουνίου 2026
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionPrivacy;