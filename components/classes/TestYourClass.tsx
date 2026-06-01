import Image from "next/image";
import Link from "next/link";


const TestYourClass = () => {
  return (
    <section className="py-20 bg-[#F7F4EF]">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-8 py-16 md:py-24 shadow-2xl">
          {/* Background Image */}
          <Image
            src="/classOne.webp"
            alt="aiorisis"
            fill
            className="object-cover opacity-50"
            priority
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start text-left max-w-md md:ml-20 h-auto md:h-[300px]">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-10 leading-tight">
              Κάνε κράτηση με το μάθημα που σου ταιριάζει!
            </h2>
            <Link href="https://members.aiorisis.gr/" className="bg-[#B9007C] text-white hover:bg-white hover:text-[#B9007C] px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105 active:scale-95">
              Κράτηση Θέσης
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestYourClass;