"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSectionRetreats = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="relative min-h-[450px] h-[55vh] md:h-[85vh] w-full flex items-center overflow-hidden bg-[#F6F1EB]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black/35">
        <Image
          src="/2.webp"
          alt="Retreat - Αιώρησις"
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
            Αναπνοή • Ροή • Επανασύνδεση
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter drop-shadow-2xl mb-2">
            Retreats
          </h1>
          <div className="w-24 h-1.5 bg-[#B9007C] rounded-full shadow-lg shadow-[#B9007C]/50 mb-6 md:mb-8"></div>

          <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
            <p className="text-2xl md:text-4xl font-light leading-tight">
              Ένα νέο ξεκίνημα
            </p>
            <p className="text-sm md:text-sm text-white/80 font-medium tracking-wide">
              Άφησε πίσω την ένταση και ανακάλυψε ξανά τη ροή σου.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionRetreats;