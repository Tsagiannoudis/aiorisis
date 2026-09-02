"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import ShareAction from "@/components/extraComponents/ShareAction";

import { events } from "@/data/EventData";

import {
  createTranslator,
  type Locale,
} from "@/components/extraComponents/LocaleSwitchTranslate";

const isUpcoming = (dateString: string): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(dateString);
  eventDate.setHours(0, 0, 0, 0);

  return eventDate >= today;
};

const UpcomingEventOfEvents = () => {
  const t = useTranslations("UpcomingEventOfEvents");

  const locale = useLocale() as Locale;
  const tData = createTranslator(locale);

  const upcomingEvents = events.filter((event) =>
    isUpcoming(event.startDate)
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

        {/* No upcoming events */}
        {upcomingEvents.length === 0 ? (
          <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-medium text-neutral-700">
              {t("noUpcomingEvents")}
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              {t("noUpcomingEventsDescription")}
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {upcomingEvents.map((event, index) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-[270px] overflow-hidden sm:h-[360px]">
                  <Image
                    src={event.image || "/placeholder.webp"}
                    alt={tData(event.title)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col p-7 md:p-10 lg:p-14">
                  <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B9007C]">
                    {t("featuredEventSubtitle")}
                  </span>

                  {/* Event title */}
                  <h3 className="text-2xl font-bold leading-tight text-neutral-950 md:text-3xl">
                    {tData(event.title)}
                  </h3>

                  {/* Date / Time / Location */}
                  <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-600 sm:flex-row sm:flex-wrap">
                    <p className="flex items-center gap-2">
                      <span className="text-[#B9007C]">▸</span>
                      {tData(event.date)}
                    </p>

                    <p className="flex items-center gap-2">
                      <span className="text-[#B9007C]">▸</span>
                      {tData(event.time)}
                    </p>

                    {tData(event.location) && (
                      <p className="flex items-center gap-2">
                        <span className="text-[#B9007C]">▸</span>
                        {tData(event.location)}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <Link
                    href={`/events/${event.slug}`}
                    className="mt-6 line-clamp-3 text-sm leading-7 text-neutral-600 md:text-base"
                  >
                    {tData(event.description)}
                  </Link>

                  {/* Details */}
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {/* Instructors */}
                    {event.instructors.length > 0 && (
                      <div>
                        <h4 className="mb-3 text-sm font-bold text-neutral-900">
                          {t("instructors")}
                        </h4>

                        <ul className="space-y-2 text-sm text-neutral-600">
                          {event.instructors.map(
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
                    {event.includes.length > 0 && (
                      <div>
                        <h4 className="mb-3 text-sm font-bold text-neutral-900">
                          {t("featuredEventIncludes")}
                        </h4>

                        <ul className="space-y-2 text-sm text-neutral-600">
                          {event.includes
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
                  {event.pricing && (
                    <div className="mt-8 border-t border-black/10 pt-6">
                      <h4 className="mb-3 text-sm font-bold text-neutral-900">
                        {t("featuredEventCost")}
                      </h4>

                      <div className="space-y-2 text-sm leading-6 text-neutral-600">
                        {event.pricing.earlyBird &&
                          event.pricing.earlyBird.endDate !==
                          "N/A" && (
                            <div>
                              {/* Θα βάλουμε εδώ pricing όταν το οργανώσουμε */}
                            </div>
                          )}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#B9007C] px-8 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#950064] md:w-max"
                    >
                      {t("learnMore")}
                    </Link>

                    <ShareAction
                      title={tData(event.title)}
                      text={
                        locale === "en"
                          ? `Check out the event: ${tData(
                            event.title
                          )} at Aiorisis Studio!`
                          : `Δες το event: ${tData(
                            event.title
                          )} στο Αιώρησις Studio!`
                      }
                      path={`/events/${event.slug}`}
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

export default UpcomingEventOfEvents;
