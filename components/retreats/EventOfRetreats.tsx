"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { RetreatData } from "@/data/RetreatData";

import {
  createTranslator,
  type Locale,
} from "@/components/extraComponents/LocaleSwitchTranslate";

const isPastRetreat = (dateString: string): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const retreatDate = new Date(dateString);
  retreatDate.setHours(0, 0, 0, 0);

  return retreatDate < today;
};

const EventOfRetreats = () => {
  const t = useTranslations("EventOfRetreats");

  const locale = useLocale() as Locale;
  const tData = createTranslator(locale);

  const pastRetreats = RetreatData
    .filter((retreat) => isPastRetreat(retreat.startDate))
    .slice()
    .reverse();

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 text-black">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 text-xs uppercase tracking-[0.35em] text-[#B9007C]">
            {t("subtitle")}
          </span>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
            {t("description1")}
            <br />
            {t("description2")}
          </p>
        </div>

        {/* No past retreats */}
        {pastRetreats.length === 0 ? (
          <p className="text-center text-xl text-gray-600">
            {t("noPastRetreats")}
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastRetreats.map((retreat) => (
              <article
                key={retreat.id}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-[280px] sm:h-[360px] overflow-hidden">
                  <Image
                    src={retreat.image}
                    alt={tData(retreat.title)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Date */}
                  <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-medium tracking-wide text-black backdrop-blur-md">
                    {tData(retreat.date)}
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-semibold leading-tight">
                      {tData(retreat.title)}
                    </h3>

                    {retreat.subtitle && (
                      <p className="mt-2 text-sm text-white/80">
                        {tData(retreat.subtitle)}
                      </p>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="line-clamp-3 text-sm leading-7 text-neutral-600">
                    {tData(retreat.description)}
                  </p>

                  <div className="mt-4 flex flex-col gap-1 text-sm text-neutral-500">
                    <span>
                      {tData(retreat.location)}
                    </span>
                  </div>

                  <Link
                    href={`/retreats/${retreat.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#B9007C] transition hover:gap-4"
                  >
                    {t("learnMore")}
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventOfRetreats;