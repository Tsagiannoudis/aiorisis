import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { events } from "@/data/EventData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found" };
  
  return {
    title: `${event.title} | Αιώρησις`,
    description: event.description.substring(0, 155) + "...",
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-black">
      {/* Hero Section with Title Overlay */}
      <section className="relative h-[50vh] min-h-[450px] w-full lg:h-[70vh]">
        {event.image && (
          <Image
            src={event.image}
            alt={event.title}
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
              Event Details
            </span>
            <h1 className="mb-6 text-3xl font-bold leading-[1.2] text-white md:text-5xl lg:text-6xl">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-8 text-lg font-medium text-black/90">
              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">▸</span> {event.date}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">▸</span> {event.time}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-20 md:px-8">


        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Left Side: Story and Includes */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed whitespace-pre-line">
                {event.description}
              </div>
            </section>

            <section className="rounded-[2.5rem] bg-white p-8 md:p-12 shadow-sm border border-black/5">
              <h3 className="mb-10 text-2xl font-bold">Τι περιλαμβάνεται</h3>
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {event.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B9007C] text-[10px] text-white">
                      ✓
                    </span>
                    <span className="text-neutral-600 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Right Side: Info Panel Instructors */}
          <aside className="space-y-8">
            {/* Instructors Card */}
            {event.instructors.length > 0 && (
              <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-black/5">
              <h3 className="mb-8 text-2xl font-bold text-neutral-950">Εκπαιδευτές</h3>
              <div className="flex flex-col gap-4">
                {event.instructors.map((instructor) => (
                  <div key={instructor} className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center text-[#B9007C] font-bold text-lg border border-neutral-200 transition-colors group-hover:bg-[#B9007C] group-hover:text-white">
                      {instructor[0]}
                    </div>
                    <span className="font-medium text-neutral-800">{instructor}</span>
                  </div>
                ))}
              </div>
              {event.instructorDetails && (
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <p className="text-xs leading-relaxed text-neutral-600 whitespace-pre-line">
                    {event.instructorDetails}
                  </p>
                </div>
              )}
            </div>
            )}

            {/* Κόστος συμμετοχής */}
            <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl border border-black/5  lg:top-8">
              <h3 className="mb-8 text-2xl font-bold text-neutral-950">Συμμετοχή</h3>

                <Link
                  href={event.googleFormLink || "/contact"}
                  className="block w-full rounded-full bg-[#B9007C] py-5 text-center text-sm font-bold text-white shadow-xl shadow-[#B9007C]/20 transition-all hover:bg-[#9a0068] hover:-translate-y-1 active:scale-95"
                >
                  Κράτηση Θέσης
                </Link>
              </div>

          <div className="relative mt-20">
            <Link
              href="/events"
              className="absolute flex items-center right-1 top-8 rounded-full bg-white/90 px-4 py-2 text-sm font-medium tracking-wide text-black backdrop-blur-md shadow-sm transition hover:bg-white/100"
            >
              ← Πίσω στα Events
            </Link>
          </div>

          </aside>

        </div>

      </div>
    </main>
  );
}