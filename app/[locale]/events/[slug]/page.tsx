import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  getLocale,
  getTranslations,
} from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { events } from "@/data/EventData";

import {
  createTranslator,
  type Locale,
} from "@/components/extraComponents/LocaleSwitchTranslate";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const event = events.find(
    (event) => event.slug === slug
  );

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  const locale = (await getLocale()) as Locale;
  const tData = createTranslator(locale);

  const baseUrl = "https://www.aiorisis.gr";

  const title = tData(event.title);
  const description = tData(event.description);

  const shortDescription =
    description.length > 155
      ? `${description.slice(0, 155)}...`
      : description;

  const eventUrl =
    locale === "en"
      ? `${baseUrl}/en/events/${event.slug}`
      : `${baseUrl}/events/${event.slug}`;

  return {
    title: `${title} | Aiorisis`,
    description: shortDescription,

    openGraph: {
      title,
      description: shortDescription,
      url: eventUrl,
      siteName: "Aiorisis",

      images: event.image
        ? [
          {
            url: `${baseUrl}${event.image}`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ]
        : [],

      locale: locale === "en" ? "en_US" : "el_GR",
      type: "article",
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function EventDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const event = events.find(
    (event) => event.slug === slug
  );

  if (!event) {
    notFound();
  }

  const locale = (await getLocale()) as Locale;

  const tData = createTranslator(locale);
  const t = await getTranslations("EventDetail");

  const eventTitle = tData(event.title);
  const eventDate = tData(event.date);
  const eventTime = tData(event.time);
  const eventDescription = tData(event.description);
  const eventLocation = tData(event.location);

  const instructorDetails = event.instructorDetails
    ? tData(event.instructorDetails)
    : "";

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-black">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative h-[50vh] min-h-[450px] w-full lg:h-[70vh]">
        {event.image && (
          <Image
            src={event.image}
            alt={eventTitle}
            fill
            className="object-cover"
            priority
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F6F1EB]" />

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-26 md:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-[#B9007C] px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              {t("eventDetails")}
            </span>

            <h1 className="mb-6 text-3xl font-bold leading-[1.2] text-white md:text-5xl lg:text-6xl">
              {eventTitle}
            </h1>

            <div className="flex flex-wrap gap-8 text-lg font-medium text-black/90">
              {/* Date */}
              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">
                  ▸
                </span>

                {eventDate}
              </div>

              {/* Time */}
              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">
                  ▸
                </span>

                {eventTime}
              </div>

              {/* Location */}
              {eventLocation && (
                <div className="flex items-center gap-3">
                  <span className="text-[#B9007C]">
                    ▸
                  </span>

                  {eventLocation}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="container mx-auto px-4 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="space-y-16 lg:col-span-2">
            {/* Description */}

            <section>
              <div className="prose prose-lg max-w-none whitespace-pre-line leading-relaxed text-neutral-700">
                {eventDescription}
              </div>
            </section>

            {/* Includes */}

            {event.includes.length > 0 && (
              <section className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-sm md:p-12">
                <h3 className="mb-10 text-2xl font-bold">
                  {t("includes")}
                </h3>

                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {event.includes.map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4"
                      >
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B9007C] text-[10px] text-white">
                          ✓
                        </span>

                        <span className="leading-snug text-neutral-600">
                          {tData(item)}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </section>
            )}
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <aside className="space-y-8">
            {/* Instructors */}

            {event.instructors.length > 0 && (
              <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl">
                <h3 className="mb-8 text-2xl font-bold text-neutral-950">
                  {t("instructors")}
                </h3>

                <div className="flex flex-col gap-4">
                  {event.instructors.map(
                    (instructor, index) => {
                      const instructorName =
                        tData(instructor);

                      return (
                        <div
                          key={index}
                          className="group flex items-center gap-4"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-lg font-bold text-[#B9007C] transition-colors group-hover:bg-[#B9007C] group-hover:text-white">
                            {instructorName.charAt(0)}
                          </div>

                          <span className="font-medium text-neutral-800">
                            {instructorName}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>

                {/* Instructor Details */}

                {instructorDetails && (
                  <div className="mt-8 border-t border-neutral-100 pt-6">
                    <p className="whitespace-pre-line text-xs leading-relaxed text-neutral-600">
                      {instructorDetails}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Participation */}

            <div className="rounded-[2.5rem] border border-black/5 bg-white p-10 shadow-2xl">
              <h3 className="mb-8 text-2xl font-bold text-neutral-950">
                {t("participation")}
              </h3>

              {event.googleFormLink ? (
                <NextLink
                  href={event.googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-[#B9007C] py-5 text-center text-sm font-bold text-white shadow-xl shadow-[#B9007C]/20 transition-all hover:-translate-y-1 hover:bg-[#9a0068] active:scale-95"
                >
                  {t("bookSpot")}
                </NextLink>
              ) : (
                <Link
                  href="/contact"
                  className="block w-full rounded-full bg-[#B9007C] py-5 text-center text-sm font-bold text-white shadow-xl shadow-[#B9007C]/20 transition-all hover:-translate-y-1 hover:bg-[#9a0068] active:scale-95"
                >
                  {t("contactUs")}
                </Link>
              )}
            </div>

            {/* Back */}

            <div className="pt-4">
              <Link
                href="/events"
                className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-50"
              >
                ← {t("backToEvents")}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}