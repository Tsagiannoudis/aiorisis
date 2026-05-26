"use client";
import Image from "next/image";
import Link from "next/link";

const BookYourSpot = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden isolate bg-white">
      {/* Διακοσμητικό Background Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#B9007C]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div
            className="lg:w-2/5 text-center lg:text-left order-2 lg:order-1"
            data-aos="fade-up"
          >
            {/* <div className="inline-block px-4 py-1 rounded-full bg-[#B9007C]/10 text-[#B9007C] text-sm font-bold tracking-widest mb-6">
              JOIN US
            </div> */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]">
              Κλείσε τη θέση σου τώρα!
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-10 max-w-lg lg:mx-0 mx-auto">
              Εξασφάλισε τη συμμετοχή σου στα μαθήματα μας.
              <span className="block mt-2 font-semibold text-gray-900">Περιορισμένες διαθέσιμες θέσεις!</span>
            </p>
            <Link
              href="https://members.aiorisis.gr/"
              className="inline-flex items-center justify-center bg-[#B9007C] hover:bg-[#9a0068] text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-[#B9007C]/40 active:scale-[0.98] text-lg"
            >
              Κράτηση θέσης
            </Link>
          </div>

          {/* Image Composition */}
          <div className="lg:w-3/5 relative order-1 lg:order-2 flex justify-center lg:justify-end items-center h-[450px] md:h-[600px] w-full">
            
            {/* Πίσω εικόνα (Αριστερά) */}
            <div 
              className="relative w-40 h-64 md:w-56 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white -mr-8 z-10 transition-transform duration-700 hover:scale-105"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Image
                src="/studio/classRoom1-1.webp"
                alt="Aiorisis Studio View 1"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Κεντρική εικόνα (Μεγάλη) */}
            <div 
              className="relative w-48 h-80 md:w-72 md:h-[500px] rounded-full overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-4 border-white z-20 transition-transform duration-700 hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src="/studio/classRoom1-2.webp"
                alt="Aiorisis Studio View 2"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Πίσω εικόνα (Δεξιά) */}
            <div 
              className="relative w-40 h-64 md:w-56 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white -ml-8 z-10 transition-transform duration-700 hover:scale-105"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <Image
                src="/studio/classRoom2.webp"
                alt="Aiorisis Studio View 3"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default BookYourSpot;
