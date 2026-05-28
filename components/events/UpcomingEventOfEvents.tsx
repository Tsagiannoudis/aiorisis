import { events } from "@/data/EventData";
import Image from "next/image";
import Link from "next/link";

const isUpcoming = (dateString: string): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(dateString);
  eventDate.setHours(0, 0, 0, 0);

  return eventDate >= today;
};

const EventOfEvents= () => {
  const upcomingEvents = events.filter((event) =>
    isUpcoming(event.startDate)
  );

  return (
    <section className="bg-[#F6F1EB] px-4 py-12 md:py-20 text-black md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.35em] text-[#B9007C]">
            Upcoming Event
          </span>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Επόμενα Events
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-neutral-600 md:text-base">
            Ανακάλυψε εμπειρίες σύνδεσης, χαλάρωσης και αναζωογόνησης,
            σχεδιασμένες για να σε φέρουν πιο κοντά στο σώμα, την αναπνοή και
            τη φύση.
          </p>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-medium text-neutral-700">
              Δεν υπάρχουν επερχόμενα events αυτή τη στιγμή.
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Επιστρέψτε σύντομα για νέες ημερομηνίες.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2"> {/* Αλλαγή σε grid για να εμφανίζονται τα events δίπλα-δίπλα */}
            {upcomingEvents.map((event, index) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl" /* Αφαίρεση lg:grid lg:grid-cols-2 από την κάρτα του event */
              >
                <div className="relative h-[240px] sm:h-[360px] overflow-hidden"> {/* Αφαίρεση lg:h-full, χρήση σταθερού ύψους */}
                  <Image
                    src={event.image || "/placeholder.webp"}
                    alt={event.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-fit object-center transition-transform duration-700 group-hover:scale-105"
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

                <div className="flex flex-col p-6 sm:p-10 lg:p-14">
                  <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B9007C]">
                    Featured Event
                  </span>

                  <h3 className="text-2xl font-bold leading-tight text-neutral-950 md:text-3xl">
                    {event.title}
                  </h3>

                  <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-600 sm:flex-row sm:flex-wrap">
                    <p className="flex items-center gap-2">
                      <span className="text-[#B9007C]">▸</span>
                      {event.date}
                    </p>

                    <p className="flex items-center gap-2">
                      <span className="text-[#B9007C]">▸</span>
                      {event.location}
                    </p>
                  </div>

                  <p className="mt-6 line-clamp-3 text-sm leading-7 text-neutral-600 md:text-base">
                    {event.description}
                  </p>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {event.instructors &&
                      event.instructors.length > 0 && (
                        <div>
                          <h4 className="mb-3 text-sm font-bold text-neutral-900">
                            Εκπαιδευτές
                          </h4>

                          <ul className="space-y-2 text-sm text-neutral-600">
                            {event.instructors.map((instructor) => (
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

                    {event.includes && event.includes.length > 0 && (
                      <div>
                        <h4 className="mb-3 text-sm font-bold text-neutral-900">
                          Περιλαμβάνει
                        </h4>

                        <ul className="space-y-2 text-sm text-neutral-600">
                          {event.includes.slice(0, 4).map((item) => (
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
                      {event.pricing?.earlyBird &&
                        event.pricing?.earlyBird.endDate !== "N/A" && (
                          <div>
   
                          </div>
                        )}


                       {/* Normal Price tab */}
                      {/* <div>

                          )}
                      </div> */}
                    </div>
                  </div>

                  <Link
                    href={`/events/${event.slug}`}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#B9007C] px-8 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#950064] md:w-max"
                  >
                    Δείτε περισσότερα
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

export default EventOfEvents;