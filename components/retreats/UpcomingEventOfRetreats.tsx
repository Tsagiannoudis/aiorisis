import { RetreatData } from "@/data/RetreatData";
import Image from "next/image";
import Link from "next/link";
import ShareAction from "@/components/extraComponents/ShareAction";

const isUpcoming = (dateString: string): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const retreatDate = new Date(dateString);
  retreatDate.setHours(0, 0, 0, 0);

  return retreatDate >= today;
};

const EventOfRetreats = () => {
  const upcomingRetreats = RetreatData.filter((retreat) =>
    isUpcoming(retreat.startDate)
  );

  return (
    <section className="bg-[#F6F1EB] px-4 py-20 text-black md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.35em] text-[#B9007C]">
            Upcoming Retreat
          </span>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Επόμενα Retreats
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-neutral-600 md:text-base">
            Ανακάλυψε εμπειρίες σύνδεσης, χαλάρωσης και αναζωογόνησης,
            σχεδιασμένες για να σε φέρουν πιο κοντά στο σώμα, την αναπνοή και
            τη φύση.
          </p>
        </div>

        {upcomingRetreats.length === 0 ? (
          <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-medium text-neutral-700">
              Δεν υπάρχουν επερχόμενα retreats αυτή τη στιγμή.
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Επιστρέψτε σύντομα για νέες ημερομηνίες.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {upcomingRetreats.map((retreat, index) => (
              <article
                key={retreat.id}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl lg:grid lg:grid-cols-2"
              >
                <div className="relative h-[270px] overflow-hidden sm:h-[360px] lg:h-full">
                  <Image
                    src={retreat.image}
                    alt={retreat.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* <div className="absolute bottom-5 left-5 rounded-2xl bg-white/85 px-5 py-4 text-sm shadow-lg backdrop-blur-md">
                    <p className="font-semibold text-neutral-900">
                      {retreat.date}
                    </p>
                    <p className="mt-1 text-neutral-600">
                      {retreat.location}
                    </p>
                  </div> */}
                </div>

                <div className="flex flex-col p-7 md:p-10 lg:p-14">
                  <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B9007C]">
                    Featured Retreat
                  </span>

                  <h3 className="text-2xl font-bold leading-tight text-neutral-950 md:text-3xl">
                    {retreat.title}
                  </h3>

                  {retreat.subtitle && (
                    <p className="mt-3 text-base text-neutral-500">
                      {retreat.subtitle}
                    </p>
                  )}

                  <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-600 sm:flex-row sm:flex-wrap">
                    <p className="flex items-center gap-2">
                      <span className="text-[#B9007C]">▸</span>
                      {retreat.date}
                    </p>

                    <p className="flex items-center gap-2">
                      <span className="text-[#B9007C]">▸</span>
                      {retreat.location}
                    </p>
                  </div>

                  <p className="mt-6 line-clamp-3 text-sm leading-7 text-neutral-600 md:text-base">
                    {retreat.description}
                  </p>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {retreat.instructors &&
                      retreat.instructors.length > 0 && (
                        <div>
                          <h4 className="mb-3 text-sm font-bold text-neutral-900">
                            Εκπαιδευτές
                          </h4>

                          <ul className="space-y-2 text-sm text-neutral-600">
                            {retreat.instructors.map((instructor) => (
                              <li
                                key={instructor}
                                className="flex items-start gap-2"
                              >
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B9007C]" />
                                <span>{instructor}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {retreat.includes && retreat.includes.length > 0 && (
                      <div>
                        <h4 className="mb-3 text-sm font-bold text-neutral-900">
                          Περιλαμβάνει
                        </h4>

                        <ul className="space-y-2 text-sm text-neutral-600">
                          {retreat.includes.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#B9007C]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 border-t border-black/10 pt-6">
                    <h4 className="mb-3 text-sm font-bold text-neutral-900">
                      Κόστος
                    </h4>

                    {/* Early Bird tab */}
                    <div className="space-y-2 text-sm leading-6 text-neutral-600">
                      {retreat.pricing.earlyBird &&
                        retreat.pricing.earlyBird.endDate !== "N/A" && (
                          <div>
                            <p className="font-semibold text-[#B9007C]">
                              Early Bird έως{" "}
                              {retreat.pricing.earlyBird.endDate}
                            </p>

                            {retreat.pricing.earlyBird.quadRoom && (
                              <p>
                                Τετράκλινο:{" "}
                                {retreat.pricing.earlyBird.quadRoom}
                              </p>
                            )}

                            {retreat.pricing.earlyBird.tripleRoom && (
                              <p>
                                Τρίκλινο:{" "}
                                {retreat.pricing.earlyBird.tripleRoom}
                              </p>
                            )}

                            {retreat.pricing.earlyBird.doubleRoom && (
                              <p>
                                Δίκλινο:{" "}
                                {retreat.pricing.earlyBird.doubleRoom}
                              </p>
                            )}

                            {/* {retreat.pricing.earlyBird.singleRoom &&
                              retreat.pricing.earlyBird.singleRoom !==
                                "N/A" && (
                                <p>
                                  Μονόκλινο:{" "}
                                  {retreat.pricing.earlyBird.singleRoom}
                                </p>
                              )} */}
                          </div>
                        )}


                       {/* Normal Price tab */}
                      {/* <div>
                        <p className="font-semibold text-neutral-900">
                          Κανονική τιμή
                        </p>

                        {retreat.pricing.regular.quadRoom && (
                          <p>Τετράκλινο: {retreat.pricing.regular.quadRoom}</p>
                        )}

                        {retreat.pricing.regular.tripleRoom && (
                          <p>Τρίκλινο: {retreat.pricing.regular.tripleRoom}</p>
                        )}

                        {retreat.pricing.regular.doubleRoom && (
                          <p>Δίκλινο: {retreat.pricing.regular.doubleRoom}</p>
                        )}

                        {retreat.pricing.regular.singleRoom &&
                          retreat.pricing.regular.singleRoom !== "N/A" && (
                            <p>
                              Μονόκλινο:{" "}
                              {retreat.pricing.regular.singleRoom}
                            </p>
                          )}

                        {retreat.pricing.regular.deposit &&
                          retreat.pricing.regular.deposit !== "TBA" && (
                            <p>
                              Προκαταβολή:{" "}
                              {retreat.pricing.regular.deposit}
                            </p>
                          )}
                      </div> */}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      href={`/retreats/${retreat.slug}`}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#B9007C] px-8 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#950064] md:w-max"
                    >
                      Δείτε περισσότερα
                    </Link>
                    <ShareAction 
                        title={retreat.title}
                        text={`Δες το Retreat: ${retreat.title} τού Αιώρησις Studio!`}
                        path={`/retreats/${retreat.slug}`}
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

export default EventOfRetreats;