"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
    '/homepage-photos/homePage.png',
    '/homepage-photos/sliks.mp4',
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);


    return (
        <section className="relative min-h-[70vh] flex items-start overflow-hidden bg-black text-white">
            {/* Background Slideshow */}
            {images.map((src, index) => {
                const isVideo = src.endsWith('.mp4');
                
                return (
                    <div 
                        key={src} 
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
                        } transition-transform duration-[10000ms]`}
                    >
                        {isVideo ? (
                            <video
                                src={src}
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster={images[0]} // Χρήση της πρώτης εικόνας ως placeholder
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <Image
                                src={src}
                                alt={`Hero Slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        )}
                        {/* Overlay για καλύτερη ανάγνωση κειμένου */}
                        <div className="absolute inset-0 bg-black/30" />
                    </div>
                );
            })}

            {/* Content */}
            <div className="container mx-auto px-10 max-w-6xl relative z-10">
                <div className="max-w-xl bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl mx-auto lg:ml-auto lg:mr-0 mt-20 md:mt-32">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#B9007C] leading-tight">Δώσε στο σώμα <br /> και στο νου,</h2>
                    <p className="text-lg md:text-2xl font-light leading-relaxed">
                        τον χρόνο και τον τόπο να <span className="font-semibold italic">αφεθεί</span> μέσω της "αιώρησις"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;