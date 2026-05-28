import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { classes } from "@/data/ClassOfStudioData";
import { teachers } from "@/data/TeacherProfileData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const classLesson = classes.find((c) => c.slug === slug);
  if (!classLesson) return { title: "Class Not Found" };

  return {
    title: `${classLesson.className} | Αιώρησις`,
    description: classLesson.shortDescription.substring(0, 155) + "...",
  };
}

export default async function ClassDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const classLesson = classes.find((c) => c.slug === slug);

  if (!classLesson) {
    notFound();
  }

  // Find teachers that specialize in this class
  const classTeachers = teachers.filter((t) => t.specialties.includes(classLesson.id));

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-black">
      <section className="relative h-[50vh] min-h-[450px] w-full lg:h-[70vh]">
        {classLesson.image && (
          <Image
            src={classLesson.image}
            alt={classLesson.className}
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
              Class Details
            </span>
            <h1 className="mb-6 text-3xl font-bold leading-[1.2] text-white md:text-5xl lg:text-6xl">
              {classLesson.className}
            </h1>
            <div className="flex flex-wrap gap-8 text-lg font-medium text-black/90">
              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">⏱</span> {classLesson.timeOfClass}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Left Side: Description */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              {/* Χρησιμοποιούμε dangerouslySetInnerHTML επειδή το description περιέχει HTML tags (p, ul, li) */}
              <div 
                className="prose prose-lg max-w-none text-neutral-700 leading-relaxed 
                           prose-headings:text-neutral-900 prose-headings:font-black
                           prose-p:mb-6 
                           prose-strong:text-[#B9007C] prose-strong:font-bold
                           prose-ul:list-none prose-ul:pl-0
                           prose-li:bg-white prose-li:p-6 prose-li:rounded-2xl prose-li:shadow-sm prose-li:border prose-li:border-black/5
                           prose-h3:text-xl prose-h3:mt-0 prose-h3:text-[#B9007C]
                           prose-table:border-collapse prose-td:p-4 prose-th:bg-[#B9007C] prose-th:text-white"
                dangerouslySetInnerHTML={{ __html: classLesson.description }}
              />
            </section>
          </div>

          {/* Right Side: Sidebar */}
          <aside className="space-y-8">
            {/* Booking Card */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-black/5">
              <h3 className="mb-6 text-2xl font-bold text-neutral-950">Κράτηση</h3>
              <p className="mb-8 text-neutral-600 text-sm leading-relaxed">
                Είσαι έτοιμος να ξεκινήσεις το ταξίδι σου στην αιώρηση; Κλείσε τη θέση σου για το επόμενο μάθημα!
              </p>
              <Link
                href="https://members.aiorisis.gr/"
                className="block w-full rounded-full bg-[#B9007C] py-5 text-center text-sm font-bold text-white shadow-xl shadow-[#B9007C]/20 transition-all hover:bg-[#9a0068] hover:-translate-y-1 active:scale-95"
              >
                Κράτηση Θέσης
              </Link>
            </div>

            {/* Instructors Card */}
            {classTeachers.length > 0 && (
              <div className="rounded-[2rem] bg-white p-8 shadow-sm border border-black/5">
                <h3 className="mb-8 text-xl font-bold text-neutral-950">Εκπαιδευτές</h3>
                <div className="flex flex-col gap-6">
                  {classTeachers.map((teacher) => (
                    <Link href={`/our-team/${teacher.slug}`} key={teacher.id} className="flex items-center gap-4 group">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-neutral-100 transition-colors group-hover:border-[#B9007C]">
                        <Image
                          src={teacher.image}
                          alt={teacher.fullName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-neutral-800 text-sm">{teacher.fullName}</span>
                        <span className="text-xs text-[#B9007C]">{teacher.categoryType}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4">
              <Link
                href="/classes"
                className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-50"
              >
                ← Όλα τα Μαθήματα
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
