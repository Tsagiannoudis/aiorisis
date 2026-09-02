import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  getLocale,
  getTranslations,
} from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { RetreatData } from "@/data/RetreatData";

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

  const retreat = RetreatData.find(
    (retreat) => retreat.slug === slug
  );

  if (!retreat) {
    return {
      title: "Retreat Not Found",
    };
  }

  const locale = (await getLocale()) as Locale;
  const tData = createTranslator(locale);

  const baseUrl = "https://www.aiorisis.gr";

  const title = tData(retreat.title);
  const description = tData(retreat.description);

  const shortDescription =
    description.length > 155
      ? `${description.slice(0, 155)}...`
      : description;

  const retreatUrl =
    locale === "en"
      ? `${baseUrl}/en/retreats/${retreat.slug}`
      : `${baseUrl}/retreats/${retreat.slug}`;

  return {
    title: `${title} | Aiorisis`,
    description: shortDescription,

    openGraph: {
      title,
      description: shortDescription,
      url: retreatUrl,
      siteName: "Aiorisis",

      images: [
        {
          url: `${baseUrl}${retreat.imageHorizontal}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],

      locale: locale === "en" ? "en_US" : "el_GR",
      type: "website",
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function RetreatDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const retreat = RetreatData.find(
    (retreat) => retreat.slug === slug
  );

  if (!retreat) {
    notFound();
  }

  const locale = (await getLocale()) as Locale;

  const tData = createTranslator(locale);
  const t = await getTranslations("RetreatDetail");

  const retreatTitle = tData(retreat.title);
  const retreatDate = tData(retreat.date);
  const retreatLocation = tData(retreat.location);
  const retreatDescription = tData(retreat.description);

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-black">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative h-[50vh] min-h-[450px] w-full lg:h-[70vh]">
        <Image
          src={retreat.imageHorizontal}
          alt={retreatTitle}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F6F1EB]" />

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-26 md:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-[#B9007C] px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              {t("retreatExperience")}
            </span>

            <h1 className="mb-6 text-4xl font-bold leading-[1.2] text-white md:text-6xl lg:text-7xl">
              {retreatTitle}
            </h1>

            <div className="flex flex-wrap gap-8 text-lg font-medium text-white/90">
              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">▸</span>
                {retreatDate}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">▸</span>
                {retreatLocation}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <div className="container mx-auto px-4 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="space-y-16 lg:col-span-2">
            {/* Description */}

            <section>
              {retreat.subtitle && (
                <h2 className="mb-8 text-2xl font-bold text-[#B9007C] md:text-3xl">
                  {tData(retreat.subtitle)}
                </h2>
              )}

              <div className="prose prose-lg max-w-none whitespace-pre-line leading-relaxed text-neutral-700">
                {retreatDescription}
              </div>
            </section>

            {/* Includes */}

            {retreat.includes.length > 0 && (
              <section className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-sm md:p-12">
                <h3 className="mb-10 text-2xl font-bold">
                  {t("includes")}
                </h3>

                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {retreat.includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B9007C] text-[10px] text-white">
                        ✓
                      </span>

                      <span className="leading-snug text-neutral-600">
                        {tData(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Partners */}

            {retreat.partners &&
              retreat.partners.length > 0 && (
                <section>
                  <h3 className="mb-8 text-2xl font-bold">
                    {t("partners")}
                  </h3>

                  <div className="grid gap-6">
                    {retreat.partners.map(
                      (partner, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border-l-4 border-[#B9007C] bg-white p-8 shadow-sm"
                        >
                          <h4 className="mb-3 text-xl font-bold text-neutral-900">
                            {partner.name}
                          </h4>

                          <p className="leading-relaxed text-neutral-600">
                            {tData(
                              partner.description
                            )}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </section>
              )}
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <aside className="space-y-8">
            {/* Instructors */}

            {retreat.instructors.length > 0 && (
              <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl">
                <h3 className="mb-8 text-2xl font-bold text-neutral-950">
                  {t("instructors")}
                </h3>

                <div className="flex flex-col gap-4">
                  {retreat.instructors.map(
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

                          <span className="text-neutral-800">
                            {instructorName}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}

            {/* Participation / Pricing */}

            <div className="rounded-[2.5rem] border border-black/5 bg-white p-10 shadow-2xl">
              <h3 className="mb-8 text-2xl font-bold text-neutral-950">
                {t("participation")}
              </h3>

              <div className="space-y-8">
                {/* Early Bird */}

                {retreat.pricing.earlyBird.endDate !==
                  "N/A" && (
                    <div className="rounded-3xl border border-[#B9007C]/10 bg-[#B9007C]/5 p-6">
                      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#B9007C]">
                        {t("earlyBirdUntil")}{" "}
                        {
                          retreat.pricing.earlyBird
                            .endDate
                        }
                      </p>

                      <div className="space-y-3 text-sm">
                        {retreat.pricing.earlyBird
                          .singleRoom &&
                          tData(
                            retreat.pricing.earlyBird
                              .singleRoom
                          ) !== "N/A" && (
                            <div className="flex justify-between gap-4">
                              <span>
                                {t("singleRoom")}:
                              </span>

                              <span className="font-light">
                                {tData(
                                  retreat.pricing
                                    .earlyBird
                                    .singleRoom
                                )}
                              </span>
                            </div>
                          )}

                        <div className="flex justify-between gap-4">
                          <span>
                            {t("doubleRoom")}:
                          </span>

                          <span className="font-light">
                            {tData(
                              retreat.pricing
                                .earlyBird
                                .doubleRoom
                            )}
                          </span>
                        </div>

                        <div className="flex justify-between gap-4">
                          <span>
                            {t("tripleRoom")}:
                          </span>

                          <span className="font-light">
                            {tData(
                              retreat.pricing
                                .earlyBird
                                .tripleRoom
                            )}
                          </span>
                        </div>

                        <div className="flex justify-between gap-4">
                          <span>
                            {t("quadRoom")}:
                          </span>

                          <span className="font-light">
                            {tData(
                              retreat.pricing
                                .earlyBird
                                .quadRoom
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                {/* Regular */}

                <div className="space-y-4 px-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                    {t("regularPrices")}
                  </p>

                  <div className="space-y-3 text-sm">
                    {retreat.pricing.regular
                      .singleRoom &&
                      tData(
                        retreat.pricing.regular
                          .singleRoom
                      ) !== "N/A" && (
                        <div className="flex justify-between gap-4">
                          <span>
                            {t("singleRoom")}:
                          </span>

                          <span className="font-light">
                            {tData(
                              retreat.pricing
                                .regular
                                .singleRoom
                            )}
                          </span>
                        </div>
                      )}

                    <div className="flex justify-between gap-4">
                      <span>
                        {t("doubleRoom")}:
                      </span>

                      <span className="font-light">
                        {tData(
                          retreat.pricing.regular
                            .doubleRoom
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span>
                        {t("tripleRoom")}:
                      </span>

                      <span className="font-light">
                        {tData(
                          retreat.pricing.regular
                            .tripleRoom
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span>
                        {t("quadRoom")}:
                      </span>

                      <span className="font-light">
                        {tData(
                          retreat.pricing.regular
                            .quadRoom
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-neutral-100 pt-6 text-center">
                    <p className="mb-1 text-xs text-neutral-500">
                      {t("deposit")}
                    </p>

                    <p className="text-2xl font-bold text-[#B9007C]">
                      {
                        retreat.pricing.regular
                          .deposit
                      }
                    </p>
                  </div>
                </div>

                {/* Booking */}

                {retreat.googleFormLink ? (
                  <NextLink
                    href={retreat.googleFormLink}
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
            </div>

            {/* Back */}

            <div className="pt-4">
              <Link
                href="/retreats"
                className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-50"
              >
                ← {t("backToRetreats")}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}