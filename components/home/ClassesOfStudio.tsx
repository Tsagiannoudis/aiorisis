import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { classes } from "@/data/ClassOfStudioData";

import {
  createTranslator,
  type Locale,
} from "@/components/extraComponents/LocaleSwitchTranslate";

const ClassesOfStudio = async () => {
  const locale = (await getLocale()) as Locale;

  const tData = createTranslator(locale);
  const t = await getTranslations("ClassesOfStudio");

  return (
    <section className="relative py-32 bg-[#F6F1EB] overflow-hidden">
      {/* Διακοσμητικό Background Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B9007C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-200/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative mx-auto px-4 max-w-7xl z-10">
        {/* Lotus Icon */}
        <div className="flex justify-center mb-8">
          <Image
            src="/mat.png"
            alt="LOTUS ICON"
            width={50}
            height={50}
          />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h2>

          <div className="w-20 h-1 bg-[#B9007C] mx-auto mb-8 rounded-full" />

          <p className="text-gray-500 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Classes Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {classes.map((classData) => (
            <Link
              href={`/classes/${classData.slug}`}
              key={classData.id}
              className="group relative flex flex-col items-center text-center p-10 rounded-[3rem] bg-white backdrop-blur-sm border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(185,0,124,0.08)] hover:-translate-y-2 lg:last:col-start-2"
            >
              {/* Icon Container */}
              <div className="relative w-36 h-36 mb-8 transition-all duration-700 ease-out group-hover:scale-110">
                <div className="absolute inset-0 bg-[#B9007C] opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-700" />

                <Image
                  src={classData.icon || "/placeholder.webp"}
                  alt={tData(classData.className)}
                  fill
                  className="relative object-contain"
                />
              </div>

              {/* Class Name */}
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#B9007C] transition-colors duration-300">
                {tData(classData.className)}
              </h3>

              <div className="w-10 h-[2px] bg-gray-200 mb-6 group-hover:w-20 group-hover:bg-[#B9007C] transition-all duration-500" />

              {/* Short Description */}
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                {tData(classData.shortDescription)}
              </p>

              {/* Learn More */}
              <div className="mt-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[#B9007C] text-sm font-semibold tracking-wider">
                  {t("learnMore")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesOfStudio;