import { RetreatData } from "@/data/RetreatData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const retreat = RetreatData.find((r) => r.slug === slug);
  if (!retreat) return { title: "Retreat Not Found" };

  const baseUrl = "https://www.aiorisis.gr"; // Βεβαιώσου ότι αυτό είναι το σωστό domain σου
  
  return {
    title: `${retreat.title} | Αιώρησις`,
    description: retreat.description.substring(0, 155) + "...",
    openGraph: {
      title: retreat.title,
      description: retreat.description.substring(0, 155) + "...",
      url: `${baseUrl}/retreats/${retreat.slug}`,
      siteName: "Αιώρησις",
      images: [
        {
          url: `${baseUrl}${retreat.imageHorizontal}`,
          width: 1200,
          height: 630,
          alt: retreat.title,
        },
      ],
      locale: "el_GR",
      type: "website",
    },
  };
}

export default async function RetreatDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const retreat = RetreatData.find((r) => r.slug === slug);

  if (!retreat) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F6F1EB] text-black">
      {/* Hero Section with Title Overlay */}
      <section className="relative h-[50vh] min-h-[450px] w-full lg:h-[70vh]">
        <Image
          src={retreat.imageHorizontal}
          alt={retreat.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F6F1EB]" />

        <div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-26 md:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-[#B9007C] px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              Retreat Experience
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-[1.2] text-white md:text-6xl lg:text-7xl">
              {retreat.title}
            </h1>
            <div className="flex flex-wrap gap-8 text-lg font-medium text-white/90">
              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">▸</span> {retreat.date}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#B9007C]">▸</span> {retreat.location}
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
              {retreat.subtitle && (
                <h2 className="mb-8 text-2xl font-bold text-[#B9007C] md:text-3xl">
                  {retreat.subtitle}
                </h2>
              )}
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed whitespace-pre-line">
                {retreat.description}
              </div>
            </section>

            <section className="rounded-[2.5rem] bg-white p-8 md:p-12 shadow-sm border border-black/5">
              <h3 className="mb-10 text-2xl font-bold">Τι περιλαμβάνεται</h3>
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {retreat.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B9007C] text-[10px] text-white">
                      ✓
                    </span>
                    <span className="text-neutral-600 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {retreat.partners && retreat.partners.length > 0 && (
              <section>
                <h3 className="mb-8 text-2xl font-bold">Συνεργάτες</h3>
                <div className="grid gap-6">
                  {retreat.partners.map((partner, idx) => (
                    <div key={idx} className="rounded-2xl border-l-4 border-[#B9007C] bg-white p-8 shadow-sm">
                      <h4 className="mb-3 text-xl font-bold text-neutral-900">{partner.name}</h4>
                      <p className="text-neutral-600 leading-relaxed">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Side: Info Panel Instructors */}
          <aside className="space-y-8">
            {/* Instructors Card */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-black/5">
              <h3 className="mb-8 text-2xl font-bold text-neutral-950">Εκπαιδευτές</h3>
              <div className="flex flex-col gap-4">
                {retreat.instructors.map((instructor) => (
                  <div key={instructor} className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-full bg-neutral-100 flex items-center justify-center text-[#B9007C] font-bold text-lg border border-neutral-200 transition-colors group-hover:bg-[#B9007C] group-hover:text-white">
                      {instructor[0]}
                    </div>
                    <span className="text-neutral-800">{instructor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Κόστος συμμετοχής */}
            <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl border border-black/5  lg:top-8">
              <h3 className="mb-8 text-2xl font-bold text-neutral-950">Συμμετοχή</h3>
              
              <div className="space-y-8">
                {retreat.pricing.earlyBird.endDate !== "N/A" && (
                  <div className="rounded-3xl bg-[#B9007C]/5 p-6 border border-[#B9007C]/10">
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#B9007C]">Early Bird έως {retreat.pricing.earlyBird.endDate}</p>
                    <div className="space-y-3 text-sm">
                      {retreat.pricing.earlyBird.singleRoom && retreat.pricing.earlyBird.singleRoom !== "N/A" && <div className="flex justify-between"><span>Μονόκλινο:</span> <span className="font-light">{retreat.pricing.earlyBird.singleRoom}</span></div>}
                      <div className="flex justify-between"><span>Δίκλινο:</span> <span className="font-light">{retreat.pricing.earlyBird.doubleRoom}</span></div>
                      <div className="flex justify-between"><span>Τρίκλινο:</span> <span className="font-light">{retreat.pricing.earlyBird.tripleRoom}</span></div>
                      <div className="flex justify-between"><span>Τετράκλινο:</span> <span className="font-light">{retreat.pricing.earlyBird.quadRoom}</span></div>
                    </div>
                  </div>
                )}

                <div className="space-y-4 px-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Κανονικές Τιμές</p>
                  <div className="space-y-3 text-sm">
                    {retreat.pricing.regular.singleRoom && retreat.pricing.regular.singleRoom !== "N/A" && <div className="flex justify-between"><span>Μονόκλινο:</span> <span className="font-light">{retreat.pricing.regular.singleRoom}</span></div>}
                    <div className="flex justify-between"><span>Δίκλινο:</span> <span className="font-light">{retreat.pricing.regular.doubleRoom}</span></div>
                    <div className="flex justify-between"><span>Τρίκλινο:</span> <span className="font-light">{retreat.pricing.regular.tripleRoom}</span></div>
                    <div className="flex justify-between"><span>Τετράκλινο:</span> <span className="font-light">{retreat.pricing.regular.quadRoom}</span></div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-neutral-100 text-center">
                    <p className="text-xs text-neutral-500 mb-1">Προκαταβολή</p>
                    <p className="text-2xl font-bold text-[#B9007C]">{retreat.pricing.regular.deposit}</p>
                  </div>
                </div>

                <Link
                  href={retreat.googleFormLink || "/contact"}
                  className="block w-full rounded-full bg-[#B9007C] py-5 text-center text-sm font-bold text-white shadow-xl shadow-[#B9007C]/20 transition-all hover:bg-[#9a0068] hover:-translate-y-1 active:scale-95"
                >
                  Κράτηση Θέσης
                </Link>
              </div>
            </div>

          <div className="relative mt-20">
            <Link
              href="/retreats"
              className="absolute flex items-center right-1 top-8 rounded-full bg-white/90 px-4 py-2 text-sm font-medium tracking-wide text-black backdrop-blur-md shadow-sm transition hover:bg-white/100"
            >
              ← Πίσω στα Retreats
            </Link>
          </div>

          </aside>

        </div>

      </div>
    </main>
  );
}