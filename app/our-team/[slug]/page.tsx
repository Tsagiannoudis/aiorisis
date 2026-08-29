import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { teachers } from "@/data/TeacherProfileData";
import { classes } from "@/data/ClassOfStudioData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const teacher = teachers.find((t) => t.slug === slug);

  if (!teacher) return { title: "Teacher Not Found" };

  const cleanDescription = teacher.fullDescription
    .replace(/<[^>]*>/g, "")
    .slice(0, 155);

  return {
    title: `${teacher.fullName} | Αιώρησις`,
    description: teacher.shortDescription || cleanDescription,
  };
}

export default async function TeacherDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const teacher = teachers.find((t) => t.slug === slug);

  if (!teacher) notFound();

  // Βρίσκουμε ολόκληρα τα αντικείμενα των μαθημάτων για να έχουμε πρόσβαση σε slugs και ονόματα
  const teacherClasses = classes.filter((c) => teacher.specialties.includes(c.id));

  return (
    <main className="bg-[#F5F2EA] text-gray-900">
      {/* TOP SPACER */}
      <section className="pt-28 md:pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT STICKY PROFILE */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-[2rem] overflow-hidden bg-white shadow-sm border border-black/5">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={teacher.image}
                    alt={teacher.fullName}
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-7 md:p-8">
                  <p className="text-[#B9007C] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                    {teacher.categoryType}
                  </p>

                  <h1 className="text-3xl md:text-4xl font-black leading-tight mb-5">
                    {teacher.fullName}
                  </h1>

                  <div className="w-20 h-1 bg-[#B9007C] mb-6" />

                  {/* <div className="flex flex-wrap gap-2 mb-8">
                    {teacherClasses.map((cls) => (
                      <span
                        key={cls.id}
                        className="rounded-full bg-[#F5F2EA] px-4 py-2 text-xs font-semibold text-gray-700"
                      >
                        {cls.className}
                      </span>
                    ))}
                  </div> */}

                  {teacher.experience > 0 && (
                    <div className="pt-6">
                      <p className="text-4xl font-black text-[#B9007C]">
                        {teacher.experience}+
                      </p>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mt-1">
                        χρόνια εμπειρίας
                      </p>
                    </div>
                  )}

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
              <div className="mb-12">
                <p className="text-[#B9007C] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                  Profile
                </p>

                <h2 className="text-3xl md:text-5xl font-black leading-[0.95] mb-8">
                  Η διαδρομή <br />
                  και η προσέγγιση.
                </h2>

                {/* {teacher.shortDescription && (
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl whitespace-pre-line">
                    {teacher.shortDescription}
                  </p>
                )} */}
              </div>

              {/* Biography */}
              <div className="rounded-[2rem] bg-white p-8 md:p-12 shadow-sm border border-black/5 mb-10">
                <p className="text-[#B9007C] text-xs font-bold tracking-[0.25em] uppercase mb-6">
                  Biography
                </p>

                <div
                  className="
                    prose prose-lg max-w-none
                    prose-p:text-gray-600 prose-p:leading-relaxed
                    prose-p:mb-5
                    prose-span:text-gray-600
                    prose-strong:text-gray-900
                    prose-ul:text-gray-600
                    prose-li:marker:text-[#B9007C]
                  "
                  dangerouslySetInnerHTML={{ __html: teacher.fullDescription }}
                />
              </div>

              {/* Classses */}
              <div className="rounded-[2rem] bg-white text-[#1F1F1F] p-8 md:p-12">
                <p className="text-[#B9007C] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                  Classes
                </p>

                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  Μαθήματα που διδάσκει
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {teacherClasses.map((cls) => (
                    <Link
                      href={`/classes/${cls.slug}`}
                      key={cls.id}
                      className="rounded-2xl bg-white/10 px-5 py-4 text-sm font-semibold"
                    >
                      · {cls.className}
                    </Link>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Link
                    href="https://members.aiorisis.gr/"
                    className="inline-flex rounded-full bg-[#B9007C] px-7 py-3 text-sm font-bold text-white hover:bg-[#9d0069] transition-colors"
                  >
                    Κράτηση Θέσης
                  </Link>
                </div>
              </div>

              {/* Back button */}
              <div className="flex justify-end">
                <Link
                  href="/our-team#our-team"
                  className="inline-flex items-center text-sm font-bold text-[#B9007C] hover:underline mt-10 mb-10 pr-15"
                >
                  ← Πίσω στην ομάδα
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
