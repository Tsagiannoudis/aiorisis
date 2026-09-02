import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { teachers } from "@/data/TeacherProfileData";
import RevealCards from "@/components/extraComponents/animations/RevealCards";

import {
  createTranslator,
  type Locale,
} from "@/components/extraComponents/LocaleSwitchTranslate";

const OurTeamOfAiorisis = async () => {
  const locale = (await getLocale()) as Locale;

  const tData = createTranslator(locale);
  const t = await getTranslations("OurTeamOfAiorisis");

  return (
    <section className="relative py-16 md:py-24 bg-[#85c9bb8d] overflow-hidden">
      {/* Διακοσμητικό Background Logo */}
      <div className="absolute -bottom-20 -left-20 opacity-20 pointer-events-none -rotate-12 hidden lg:block">
        <Image
          src="/lotus-white2.png"
          alt="LOTUS DECOR"
          width={600}
          height={600}
        />
      </div>

      <div className="container relative mx-auto px-4 max-w-7xl z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center text-black mb-8">
          {t("title")}
        </h2>

        {/* Section Description */}
        <p className="text-gray-800 font-light leading-relaxed text-center max-w-3xl mx-auto">
          {t("description")}
        </p>

        {/* Lotus Icon */}
        <div className="flex justify-center mb-8">
          <Image
            src="/lotus-white4.png"
            alt="LOTUS ICON"
            width={100}
            height={100}
          />
        </div>

        {/* Teachers */}
        <RevealCards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          {teachers.map((teacher) => (
            <Link
              href={`/our-team/${teacher.slug}`}
              key={teacher.id}
              className="flex flex-col items-center group"
            >
              {/* Teacher Image */}
              <div className="relative mb-6 overflow-hidden rounded-full border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[#B9007C]/20">
                <Image
                  src={teacher.image}
                  alt={teacher.fullName}
                  width={220}
                  height={220}
                  className="object-cover aspect-square"
                />
              </div>

              {/* Teacher Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {teacher.fullName[locale]}
                </h3>

                <p className="text-[#B9007C] text-sm font-semibold tracking-widest">
                  {tData(teacher.categoryType)}
                </p>
              </div>
            </Link>
          ))}
        </RevealCards>
      </div>
    </section>
  );
};

export default OurTeamOfAiorisis;