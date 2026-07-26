"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const QuoteClass = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#FFF] py-24 md:py-36 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl text-center relative">
        {/* Decorative Background Quote Mark */}
        <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[12rem] md:text-[16rem] text-[#B9007C]/5 font-serif pointer-events-none select-none">
          &ldquo;
        </span>

        <div className="relative z-10" data-aos="fade-up">
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-extralight text-gray-800 leading-[1.1] tracking-tight italic">
            &ldquo;<span className="font-black text-[#B9007C] not-italic">Δύναμη </span>  στο σώμα. <br/> <span className="font-black text-[#B9007C] not-italic">Ελευθερία  </span> στην κίνηση.&rdquo;
          </blockquote>
          
          {/* Decorative Divider */}
          <div className="mt-12 flex justify-center items-center gap-4">
            <div className="w-12 h-px bg-[#B9007C]/30"></div>
            <div className="w-2 h-2 rounded-full bg-[#B9007C]"></div>
            <div className="w-12 h-px bg-[#B9007C]/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuoteClass;
