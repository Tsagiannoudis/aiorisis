"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

const images = ["/homepage-photos/homePage.webp"];

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 0,
    });
  }, []);

  return (
    <>
      <section className="relative z-10 text-gray-900 pt-24 md:pt-12 pb-10 md:pb-8">
        <div className="container mx-auto px-4 max-w-7xl overflow-hidden">
          <div className="font-[family-name:var(--font-ubuntu-sans)] opacity-60">
            <h1
              className="text-6xl sm:text-7xl md:text-[11rem] lg:text-[16rem] tracking-tighter leading-none"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-anchor-placement="top-bottom"
            >
              αιώρησις
            </h1>

            <div
              className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-[#B9007C] text-left md:text-left md:ml-8 -mt-2 md:-mt-8"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Studio
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden text-gray-800 pb-16 md:pb-32 md:-mt-35">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 w-full text-right md:text-right md:pr-8 mb-10 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight opacity-60">
              <span className="font-semibold italic text-[#B9007C]">
                Yoga
              </span>{" "}
              {t("ground")}

              <br />

              {t("movement")}{" "}
              <span className="font-semibold italic text-[#B9007C]">
                {t("air")}
              </span>
              .
            </h2>
          </div>

          <div
            className="relative h-[400px] md:h-[550px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100"
            data-aos-delay="300"
          >
            <Image
              src={images[0]}
              alt="Aiorisis Studio"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;