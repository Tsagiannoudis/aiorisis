"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSectionContact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative min-h-[450px] h-[55vh] md:h-[75vh] w-full flex items-center overflow-hidden bg-[#F6F1EB]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black/35">
        <Image
          src="/clas.webp"
          alt="Events - Αιώρησις"
          fill
          className="object-cover scale-110 animate-subtle-zoom transition-transform duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F6F1EB]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1 rounded-full bg-[#B9007C]/20 backdrop-blur-sm text-[#ef92ce] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Experience Aiorisis
            </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-8">
            Τα Μαθήματά Μας
          </h1>
          <div className="w-12 h-1.5 bg-[#B9007C] rounded-full shadow-lg shadow-[#B9007C]/50 mb-6"></div>

          <p className="text-lg md:text-xl text-black/90 font-light max-w-xl leading-relaxed border-l border-white/20 pl-6">
            Ανακαλύψτε την τέχνη της εναέριας κίνησης και της γιόγκα μέσα από εξειδικευμένα προγράμματα για κάθε επίπεδο.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionContact;
