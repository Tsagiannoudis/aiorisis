import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { classes } from "@/data/ClassOfStudioData";
import { teachers } from "@/data/TeacherProfileData";

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const classLesson = classes.find(
    (classData) => classData.slug === slug
  );

  if (!classLesson) {
    return {
      title: "Class Not Found",
    };
  }

  const locale = (await getLocale()) as Locale;
  const tData = createTranslator(locale);

  const shortDescription = tData(
    classLesson.shortDescription
  );

  return {
    title: `${tData(classLesson.className)} | Aiorisis`,
    description:
      shortDescription.length > 155
        ? `${shortDescription.slice(0, 155)}...`
        : shortDescription,
  };
}

export default async function ClassDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const classLesson = classes.find(
    (classData) => classData.slug === slug
  );

  if (!classLesson) {
    notFound();
  }

  const locale = (await getLocale()) as Locale;

  const tData = createTranslator(locale);
  const t = await getTranslations("ClassDetail");

  const classTeachers = teachers.filter((teacher) =>
    teacher.specialties.includes(classLesson.id)
  );

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-black">
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[450px] w-full lg:h-[70vh]">
        {classLesson.image && (
          <Image
            src={classLesson.image}
            alt={tData(classLesson.className)}
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
              {t("details")}
            </span>

            <h1 className="mb-6 text-3xl font-bold leading-[1.2] text-white md:text-5xl lg:text-6xl">
              {tData(classLesson.className)}
            </h1>

            <div className="flex flex-wrap gap-8 text-lg font-medium text-black/90">
              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">
                  ⏱
                </span>

                {tData(classLesson.timeOfClass)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* LEFT */}
          <div className="space-y-16 lg:col-span-2">
            <section>
              <div
                className="
                  prose prose-lg max-w-none text-neutral-700 leading-relaxed
                  prose-headings:font-black prose-headings:text-neutral-900
                  prose-p:mb-6
                  prose-strong:font-bold prose-strong:text-[#B9007C]
                  prose-ul:list-none prose-ul:pl-0
                  prose-li:rounded-2xl
                  prose-li:border
                  prose-li:border-black/5
                  prose-li:bg-white
                  prose-li:p-6
                  prose-li:shadow-sm
                  prose-h3:mt-0
                  prose-h3:text-xl
                  prose-h3:text-[#B9007C]
                  prose-table:border-collapse
                  prose-td:p-4
                  prose-th:bg-[#B9007C]
                  prose-th:text-white
                "
                dangerouslySetInnerHTML={{
                  __html: tData(
                    classLesson.description
                  ),
                }}
              />
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-8">
            {/* Booking */}
            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-neutral-950">
                {t("booking")}
              </h3>

              <p className="mb-8 text-sm leading-relaxed text-neutral-600">
                {t("bookingText")}
              </p>

              <Link
                href="https://members.aiorisis.gr/"
                className="
                  block w-full rounded-full
                  bg-[#B9007C]
                  py-5
                  text-center
                  text-sm
                  font-bold
                  text-white
                  shadow-xl
                  shadow-[#B9007C]/20
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#9a0068]
                  active:scale-95
                "
              >
                {t("bookSpot")}
              </Link>
            </div>

            {/* Instructors */}
            {classTeachers.length > 0 && (
              <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
                <h3 className="mb-8 text-xl font-bold text-neutral-950">
                  {t("instructors")}
                </h3>

                <div className="flex flex-col gap-6">
                  {classTeachers.map((teacher) => (
                    <Link
                      href={`/our-team/${teacher.slug}`}
                      key={teacher.id}
                      className="group flex items-center gap-4"
                    >
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-neutral-100 transition-colors group-hover:border-[#B9007C]">
                        <Image
                          src={teacher.image}
                          alt={tData(teacher.fullName)}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-neutral-800">
                          {tData(teacher.fullName)}
                        </span>

                        <span className="text-xs text-[#B9007C]">
                          {tData(teacher.categoryType)}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {/* Back */}
            <div className="pt-4">
              <Link
                href="/classes"
                className="
                  flex items-center justify-center gap-2
                  rounded-full
                  border border-black/10
                  bg-white
                  px-6 py-3
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:bg-neutral-50
                "
              >
                ← {t("allClasses")}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}