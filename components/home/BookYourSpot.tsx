import Image from "next/image";
import Link from "next/link";

const BookYourSpot = () => {
  return (
    <section className="relative py-10 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 p-4 md:p-12">
          {/* Text Content */}
          <div
            className="lg:w-1/2 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
              Κλείσε τη θέση σου τώρα!
            </h2>
            <p className="text-gray-800 font-light leading-relaxed mb-8 max-w-lg lg:mx-0 mx-auto">
              Εξασφάλισε τη συμμετοχή σου στα μαθήματα και τα workshops μας.
              Περιορισμένες θέσεις!
            </p>
            <Link
              href="https://members.aiorisis.gr/"
              className="inline-block bg-[#B9007C] hover:bg-[#9a0068] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#B9007C]/30 active:scale-[0.98]"
            >
              Κράτηση θέσης
            </Link>
          </div>

          {/* Image */}
          <div
            className="lg:w-1/2 flex justify-center lg:justify-end"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative w-full max-w-[320px] h-[320px] sm:max-w-md sm:h-[500px] md:h-[600px] rounded-t-full overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src="/studio/classRoom1.webp"
                alt="Εσωτερικός χώρος στούντιο με εναέριο εξοπλισμό"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookYourSpot;
