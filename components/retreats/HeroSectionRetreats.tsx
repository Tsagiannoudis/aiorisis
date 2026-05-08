import Image from "next/image";


const HeroSectionRetreats = () => {
  return (
        <section className="relative h-60 w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/blog60-scaled.jpg"
          alt="Retreats - Αιώρησις"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-30">
        <div className="inline-block bg-black/20 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/10 shadow-1xl">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            Re<span className="text-[#B9007C] text-border">treats</span>
          </h1>
        </div>
      </div>

    </section>
  );
};

export default HeroSectionRetreats;