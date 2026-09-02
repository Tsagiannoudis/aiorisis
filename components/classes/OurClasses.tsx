"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { classes } from "@/data/ClassOfStudioData";

import {
  createTranslator,
  type Locale,
} from "@/components/extraComponents/LocaleSwitchTranslate";

const OurClasses = () => {
  const t = useTranslations("OurClasses");
  const locale = useLocale() as Locale;
  const tData = createTranslator(locale);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-[#F7F4EF] py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          className="mb-14 md:mb-20 max-w-3xl"
          data-aos="fade-up"
        >
          <p className="text-[#B9007C] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            {t("tagline")}
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            {t("title")}
            <br />
            {t("titleSpan")}
          </h2>

          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {classes.map((classRoom, index) => (
            <Link
              href={`/classes/${classRoom.slug}`}
              key={classRoom.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group block"
            >
              <article className="flex flex-col items-center text-center h-full">
                <div className="relative mb-6 aspect-square w-full max-w-[320px] overflow-hidden rounded-full border border-[#B9007C]/25 bg-white shadow-sm transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={classRoom.image}
                      alt={tData(classRoom.className)}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      priority={index < 3}
                    />

                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
                  </div>
                </div>

                <h3 className="mb-3 text-xl md:text-2xl font-black text-gray-900 transition-colors duration-300 group-hover:text-[#B9007C]">
                  {tData(classRoom.className)}
                </h3>

                <p className="mb-5 max-w-[280px] text-sm font-light leading-relaxed text-gray-600 line-clamp-3">
                  {tData(classRoom.shortDescription)}
                </p>

                <div className="flex flex-col items-center gap-3 mt-auto">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#B9007C]">
                    {t("duration")}: {tData(classRoom.timeOfClass)}
                  </span>

                  <span className="text-sm font-bold text-[#B9007C]">
                    {t("learnMore")} →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClasses;