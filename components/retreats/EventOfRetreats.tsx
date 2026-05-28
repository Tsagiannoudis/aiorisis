import { RetreatData } from "@/data/RetreatData";
import Image from "next/image";
import Link from "next/link";

// Helper function to parse date string (e.g., "YYYY-MM-DD") and check if it's in the future
const outUpcoming = (dateString: string): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to start of day
    const retreatDate = new Date(dateString);
    return retreatDate <= today;
};


const EventOfRetreats = () => {
    const outComing = RetreatData.filter(retreat => outUpcoming(retreat.startDate));

  return (
    <section className="relative overflow-hidden bg-[#fff] py-12 md:py-20 px-4 md:px-8 lg:px-16 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 text-xs uppercase tracking-[0.35em] text-[#B9007C]">
            All Retreats
          </span>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Τα Retreats μας
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
            Ανακάλυψε μοναδικές εμπειρίες σύνδεσης, χαλάρωσης και αναζωογόνησης,
            σχεδιασμένες για να σε φέρουν πιο κοντά στο σώμα, την αναπνοή και τη
            φύση.
          </p>
        </div>
        {outComing.length === 0 ? (
                <p className="text-center text-xl text-gray-600">Δεν υπάρχουν παλαιότερα retreats αυτή τη στιγμή. Επιστρέψτε σύντομα!</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outComing.map((retreat) => (
            <article
              key={retreat.id}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-[280px] sm:h-[360px] overflow-hidden">
                <Image
                  src={retreat.image}
                  alt={retreat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-medium tracking-wide text-black backdrop-blur-md">
                  {retreat.date}
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-semibold leading-tight">
                    {retreat.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="line-clamp-3 text-sm leading-7 text-neutral-600">
                  {retreat.description}
                </p>

                <Link
                  href={`/retreats/${retreat.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#B9007C] transition hover:gap-4"
                >
                  Δες περισσότερα
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        )}
      </div>
    </section>
  );
};

export default EventOfRetreats;
