"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSectionContact = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="relative h-[25vh] md:h-[40vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/curtain.webp"
          alt="Retreat - Αιώρησις"
          fill
          className="object-cover scale-110 animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
      </div>

      {/* Content */}
      <div 
        className="relative z-10 text-center px-6 mt-12"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
          Μαθήματα
        </h1>
        <div className="w-24 h-1.5 bg-[#B9007C] mx-auto mt-6 rounded-full shadow-lg shadow-[#B9007C]/50"></div>
      </div>
    </section>
  );
};

export default HeroSectionContact;