import { RetreatData } from "@/data/RetreatData";
import Image from "next/image";
import Link from "next/link";


// Helper function to parse date string (e.g., "YYYY-MM-DD") and check if it's in the future
const isUpcoming = (dateString: string): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date to start of day
    const retreatDate = new Date(dateString);
    return retreatDate >= today;
};


const EventOfRetreats = () => {
    const upcomingRetreats = RetreatData.filter(retreat => isUpcoming(retreat.startDate));

    return (
        <section className="text-black bg-[#F6F1EB] py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Επόμενα Retreats</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
                Εξερευνήστε τα επόμενα retreats μας και ετοιμαστείτε για μια αξέχαστη εμπειρία σύνδεσης, χαλάρωσης και αναζωογόνησης. Κάθε retreat είναι σχεδιασμένο με φροντίδα για να προσφέρει μια μοναδική ευκαιρία να αποδράσετε από την καθημερινότητα και να συνδεθείτε με τον εαυτό σας και τη φύση.
            </p>
 
            {upcomingRetreats.length === 0 ? (
                <p className="text-center text-xl text-gray-600">Δεν υπάρχουν επερχόμενα retreats αυτή τη στιγμή. Επιστρέψτε σύντομα!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                    {upcomingRetreats.map((retreat) => (
                        <div key={retreat.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="relative h-128 w-full">
 
                         <Image
                            src={retreat.imageHorizontal}
                            alt={retreat.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                            className="rounded-t-xl object-cover"
                            priority={retreat.id === 1} // Prioritize loading for the first retreat
                       />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{retreat.title}</h3>
                            {retreat.subtitle && <p className="text-lg text-gray-600 mb-3">{retreat.subtitle}</p>}
                            
                            <p className="text-sm text-gray-500 mb-2 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-[#B9007C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                {retreat.date}
                            </p>
                            <p className="text-sm text-gray-500 mb-4 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-[#B9007C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                {retreat.location}
                            </p>
                            
                            <p className="text-gray-700 text-base leading-relaxed mb-4 flex-grow">{retreat.description}</p>

                            {/* Instructors */}
                            {retreat.instructors && retreat.instructors.length > 0 && (
                                <div className="mb-4">
                                    <p className="font-semibold text-gray-800 text-sm mb-1">Εκπαιδευτές:</p>
                                    <ul className="list-disc list-inside text-gray-700 text-sm pl-4">
                                        {retreat.instructors.map((instructor, index) => (
                                            <li key={index}>{instructor}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Includes */}
                            {retreat.includes && retreat.includes.length > 0 && (
                                <div className="mb-4">
                                    <p className="font-semibold text-gray-800 text-sm mb-1">Περιλαμβάνει:</p>
                                    <ul className="list-disc list-inside text-gray-700 text-sm pl-4">
                                        {retreat.includes.slice(0, 3).map((item, index) => ( // Show first 3 items
                                            <li key={index}>{item}</li>
                                        ))}
                                        {retreat.includes.length > 3 && (
                                            <li>...και άλλα πολλά!</li>
                                        )}
                                    </ul>
                                </div>
                            )}

                            {/* Pricing - Simplified for card view */}
                            <div className="mt-auto pt-4 border-t border-gray-200">
                                <p className="font-semibold text-gray-800 text-sm mb-2">Κόστος:</p>
                                {retreat.pricing.earlyBird && retreat.pricing.earlyBird.endDate !== "N/A" && (
                                    <div className="text-sm text-gray-700 mb-1">
                                        <span className="font-medium">Early Bird (έως {retreat.pricing.earlyBird.endDate}):</span>
                                        {retreat.pricing.earlyBird.doubleRoom && ` Δίκλινο: ${retreat.pricing.earlyBird.doubleRoom}`}
                                        {retreat.pricing.earlyBird.singleRoom && retreat.pricing.earlyBird.singleRoom !== "N/A" && ` Μονόκλινο: ${retreat.pricing.earlyBird.singleRoom}`}
                                    </div>
                                )}
                                <div className="text-sm text-gray-700">
                                    <span className="font-medium">Κανονική τιμή:</span>
                                    {retreat.pricing.regular.doubleRoom && ` Δίκλινο: ${retreat.pricing.regular.doubleRoom}`}
                                    {retreat.pricing.regular.singleRoom && retreat.pricing.regular.singleRoom !== "N/A" && ` Μονόκλινο: ${retreat.pricing.regular.singleRoom}`}
                                    {retreat.pricing.regular.deposit && retreat.pricing.regular.deposit !== "TBA" && ` (Προκαταβολή: ${retreat.pricing.regular.deposit})`}
                                </div>
                            </div>

                            {/* Call to Action - Link to a detailed page (assuming /retreats/[id] route) */}
                            <Link href={`/retreats/${retreat.id}`} className="mt-6 w-full bg-[#B9007C] text-white py-3 rounded-md hover:bg-[#9a0068] transition-colors font-semibold text-center">
                                Δείτε περισσότερα
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            )}
            </div>
        </section>
    );
};

export default EventOfRetreats;