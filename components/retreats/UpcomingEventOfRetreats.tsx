"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import ShareAction from "@/components/extraComponents/ShareAction";

import { RetreatData } from "@/data/RetreatData";

import {
  createTranslator,
  type Locale,
} from "@/components/extraComponents/LocaleSwitchTranslate";

const isUpcoming = (dateString: string): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const retreatDate = new Date(dateString);
  retreatDate.setHours(0, 0, 0, 0);

  return retreatDate >= today;
};

const UpcomingEventOfRetreats = () => {
  const t = useTranslations("UpcomingEventOfRetreats");

  const locale = useLocale() as Locale;
  const tData = createTranslator(locale);

  const upcomingRetreats = RetreatData.filter((retreat) =>
    isUpcoming(retreat.startDate)
  );

  return (
    <section className="bg-[#F6F1EB] px-4 py-20 text-black md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.35em] text-[#B9007C]">
            {t("subtitle")}
          </span>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-neutral-600 md:text-base">
            {t("description1")}
            <br />
            {t("description2")}
          </p>
        </div>

        {/* No upcoming retreats */}
        {upcomingRetreats.length === 0 ? (
          <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-medium text-neutral-700">
              {t("noUpcomingRetreats")}
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              {t("noUpcomingRetreatsDescription")}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {upcomingRetreats.map((retreat, index) => (
              <article
                key={retreat.id}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-[270px] overflow-hidden sm:h-[360px]">
                  <Image
                    src={retreat.imageHorizontal || retreat.image}
                    alt={tData(retreat.title)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 100vw"
                    priority={index === 0}
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col p-7 md:p-10 lg:p-14">
                  <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B9007C]">
                    {t("featuredRetreatSubtitle")}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold leading-tight text-neutral-950 md:text-3xl">
                    {tData(retreat.title)}
                  </h3>

                  {/* Subtitle */}
                  {retreat.subtitle && (
                    <p className="mt-2 text-sm font-medium text-neutral-500">
                      {tData(retreat.subtitle)}
                    </p>
                  )}

                  {/* Date / Location */}
                  <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-600 sm:flex-row sm:flex-wrap">
                    <p className="flex items-center gap-2">
                      <span className="text-[#B9007C]">▸</span>
                      {tData(retreat.date)}
                    </p>

                    <p className="flex items-center gap-2">
                      <span className="text-[#B9007C]">▸</span>
                      {tData(retreat.location)}
                    </p>
                  </div>

                  {/* Description */}
                  <Link
                    href={`/retreats/${retreat.slug}`}
                    className="mt-6 line-clamp-3 text-sm leading-7 text-neutral-600 md:text-base"
                  >
                    {tData(retreat.description)}
                  </Link>

                  {/* Details */}
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {/* Instructors */}
                    {retreat.instructors.length > 0 && (
                      <div>
                        <h4 className="mb-3 text-sm font-bold text-neutral-900">
                          {t("instructors")}
                        </h4>

                        <ul className="space-y-2 text-sm text-neutral-600">
                          {retreat.instructors.map(
                            (instructor, instructorIndex) => (
                              <li
                                key={instructorIndex}
                                className="flex items-start gap-2"
                              >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B9007C]" />

                                <span>
                                  {tData(instructor)}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Includes */}
                    {retreat.includes.length > 0 && (
                      <div>
                        <h4 className="mb-3 text-sm font-bold text-neutral-900">
                          {t("featuredRetreatIncludes")}
                        </h4>

                        <ul className="space-y-2 text-sm text-neutral-600">
                          {retreat.includes
                            .slice(0, 4)
                            .map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-2"
                              >
                                <span className="w-1.5 text-[#B9007C]">
                                  -
                                </span>

                                <span>
                                  {tData(item)}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="mt-8 border-t border-black/10 pt-6">
                    <h4 className="mb-4 text-sm font-bold text-neutral-900">
                      {t("featuredRetreatCost")}
                    </h4>

                    <div className="grid gap-6 md:grid-cols-2">
                      {/* Early Bird */}
                      {retreat.pricing.earlyBird.endDate !== "N/A" && (
                        <div>
                          <p className="mb-2 font-semibold text-neutral-900">
                            {t("earlyBird")}
                          </p>

                          <p className="text-xs text-neutral-500 mb-3">
                            {t("until")}{" "}
                            {retreat.pricing.earlyBird.endDate}
                          </p>

                          <ul className="space-y-1 text-sm text-neutral-600">
                            {retreat.pricing.earlyBird.singleRoom && (
                              <li>
                                {t("singleRoom")}:{" "}
                                {tData(
                                  retreat.pricing.earlyBird.singleRoom
                                )}
                              </li>
                            )}

                            <li>
                              {t("doubleRoom")}:{" "}
                              {tData(
                                retreat.pricing.earlyBird.doubleRoom
                              )}
                            </li>

                            <li>
                              {t("tripleRoom")}:{" "}
                              {tData(
                                retreat.pricing.earlyBird.tripleRoom
                              )}
                            </li>

                            <li>
                              {t("quadRoom")}:{" "}
                              {tData(
                                retreat.pricing.earlyBird.quadRoom
                              )}
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Regular */}
                      <div>
                        <p className="mb-2 font-semibold text-neutral-900">
                          {t("regularPrice")}
                        </p>

                        <p className="text-xs text-neutral-500 mb-3">
                          {t("deposit")}:{" "}
                          {retreat.pricing.regular.deposit}
                        </p>

                        <ul className="space-y-1 text-sm text-neutral-600">
                          {retreat.pricing.regular.singleRoom && (
                            <li>
                              {t("singleRoom")}:{" "}
                              {tData(
                                retreat.pricing.regular.singleRoom
                              )}
                            </li>
                          )}

                          <li>
                            {t("doubleRoom")}:{" "}
                            {tData(
                              retreat.pricing.regular.doubleRoom
                            )}
                          </li>

                          <li>
                            {t("tripleRoom")}:{" "}
                            {tData(
                              retreat.pricing.regular.tripleRoom
                            )}
                          </li>

                          <li>
                            {t("quadRoom")}:{" "}
                            {tData(
                              retreat.pricing.regular.quadRoom
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                    <Link
                      href={`/retreats/${retreat.slug}`}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#B9007C] px-8 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#950064] md:w-max"
                    >
                      {t("learnMore")}
                    </Link>

                    <ShareAction
                      title={tData(retreat.title)}
                      text={
                        locale === "en"
                          ? `Check out the retreat: ${tData(
                            retreat.title
                          )} by Aiorisis!`
                          : `Δες το retreat: ${tData(
                            retreat.title
                          )} από το Αιώρησις!`
                      }
                      path={`/retreats/${retreat.slug}`}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEventOfRetreats;