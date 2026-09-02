import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import { getLocale, getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { teachers } from "@/data/TeacherProfileData";
import { classes } from "@/data/ClassOfStudioData";

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

  const teacher = teachers.find((t) => t.slug === slug);

  if (!teacher) {
    return {
      title: "Teacher Not Found",
    };
  }

  const locale = (await getLocale()) as Locale;
  const tData = createTranslator(locale);

  const localizedFullDescription = tData(
    teacher.fullDescription
  );

  const cleanDescription = localizedFullDescription
    .replace(/<[^>]*>/g, "")
    .slice(0, 155);

  const shortDescription = tData(
    teacher.shortDescription
  );

  return {
    title: `${tData(teacher.fullName)} | Aiorisis`,
    description:
      shortDescription || cleanDescription,
  };
}

export default async function TeacherDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const teacher = teachers.find(
    (t) => t.slug === slug
  );

  if (!teacher) {
    notFound();
  }

  const locale = (await getLocale()) as Locale;

  const tData = createTranslator(locale);
  const t = await getTranslations("TeacherDetail");

  const teacherClasses = classes.filter(
    (classData) =>
      teacher.specialties.includes(classData.id)
  );

  return (
    <main className="bg-[#F5F2EA] text-gray-900">
      <section className="pt-28 md:pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT PROFILE */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-[2rem] overflow-hidden bg-white shadow-sm border border-black/5">
                {/* Teacher Image */}
                <div className="relative aspect-[4/5]">
                  <Image
                    src={teacher.image}
                    alt={tData(teacher.fullName)}
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-7 md:p-8">
                  {/* Category */}
                  <p className="text-[#B9007C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                    {tData(teacher.categoryType)}
                  </p>

                  {/* Name */}
                  <h1 className="text-3xl md:text-4xl font-black leading-tight mb-5">
                    {tData(teacher.fullName)}
                  </h1>

                  <div className="w-20 h-1 bg-[#B9007C] mb-6" />

                  {/* Experience */}
                  {teacher.experience > 0 && (
                    <div className="pt-6">
                      <p className="text-4xl font-black text-[#B9007C]">
                        {teacher.experience}+
                      </p>

                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mt-1">
                        {t("yearsExperience")}
                      </p>
                    </div>
                  )}

                  {/* Social Accounts */}
                  <div className="flex flex-wrap items-center gap-6 mt-10 mb-6">
                    {teacher.socialAccounts.facebook && (
                      <Link
                        href={teacher.socialAccounts.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#B9007C] hover:text-[#9d0069] transition-colors"
                      >
                        <FaFacebook className="w-5 h-5" />
                        <span>Facebook</span>
                      </Link>
                    )}

                    {teacher.socialAccounts.instagram && (
                      <Link
                        href={teacher.socialAccounts.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#B9007C] hover:text-[#9d0069] transition-colors"
                      >
                        <FaInstagram className="w-5 h-5" />
                        <span>Instagram</span>
                      </Link>
                    )}

                    {teacher.socialAccounts.youtube && (
                      <Link
                        href={teacher.socialAccounts.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#B9007C] hover:text-[#9d0069] transition-colors"
                      >
                        <FaYoutube className="w-5 h-5" />
                        <span>YouTube</span>
                      </Link>
                    )}

                    {teacher.socialAccounts.linkedin && (
                      <Link
                        href={teacher.socialAccounts.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#B9007C] hover:text-[#9d0069] transition-colors"
                      >
                        <FaLinkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <article className="lg:col-span-7">
              {/* Intro */}
              <div className="mb-12">
                <p className="text-[#B9007C] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                  {t("profile")}
                </p>

                <h2 className="text-3xl md:text-5xl font-black leading-[0.95] mb-8">
                  {t("journeyTitle")}
                  <br />
                  {t("journeySubtitle")}
                </h2>
              </div>

              {/* Biography */}
              <div className="rounded-[2rem] bg-white p-8 md:p-12 shadow-sm border border-black/5 mb-10">
                <p className="text-[#B9007C] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                  {t("biography")}
                </p>

                <div
                  className="
                    prose prose-lg max-w-none
                    prose-p:text-gray-600
                    prose-p:leading-relaxed
                    prose-p:mb-5
                    prose-span:text-gray-600
                    prose-strong:text-gray-900
                    prose-ul:text-gray-600
                    prose-li:marker:text-[#B9007C]
                  "
                  dangerouslySetInnerHTML={{
                    __html: tData(
                      teacher.fullDescription
                    ),
                  }}
                />
              </div>

              {/* Classes */}
              <div className="rounded-[2rem] bg-white text-[#1F1F1F] p-8 md:p-12">
                <p className="text-[#B9007C] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                  {t("classes")}
                </p>

                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  {t("classesTitle")}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {teacherClasses.map((classData) => (
                    <Link
                      href={`/classes/${classData.slug}`}
                      key={classData.id}
                      className="rounded-2xl bg-white/10 px-5 py-4 text-sm font-semibold"
                    >
                      · {tData(classData.className)}
                    </Link>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Link
                    href="https://members.aiorisis.gr/"
                    className="inline-flex rounded-full bg-[#B9007C] px-7 py-3 text-sm font-bold text-white hover:bg-[#9d0069] transition-colors"
                  >
                    {t("bookSpot")}
                  </Link>
                </div>
              </div>

              {/* Back */}
              <div className="flex justify-end">
                <Link
                  href="/our-team#our-team"
                  className="inline-flex items-center text-sm font-bold text-[#B9007C] hover:underline mt-10 mb-10 pr-15"
                >
                  ← {t("backToTeam")}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}