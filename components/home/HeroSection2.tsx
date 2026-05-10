"use client";
import Image from 'next/image';

const images = [
    '/homepage-photos/homePage.webp',
];

const HeroSection2 = () => {

    return (
        <>
        <section className="bg-white text-gray-900">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Κείμενο Πάνω */}
                <div className="max-w-6xl mx-auto mt-4 font-[family-name:var(--font-eb-garamond)]">
                    <h1 className="text-7xl md:text-[12rem] tracking-tighter leading-none">
                        Αιώρησις 
                    </h1>
                    <div className='text-6xl md:text-[8rem] text-[#B9007C] text-left mt-[-2rem] md:mt-[-2rem]'>
                        Studio
                    </div>
                </div>
            </div>
        </section>

        <section className="relative min-h-[65vh] flex flex-col items-start overflow-hidden text-gray-800 -mt-10 md:-mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* Κείμενο Κέντρο */}
                <div className="max-w-xl py-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Δώσε στο σώμα και στο νου,
                    </h2>
                    <p className="text-lg md:text-2xl font-light text-gray-500 leading-relaxed">
                        τον χρόνο και τον τόπο να <span className="font-semibold italic text-[#B9007C]">αφεθεί</span> μέσω της "αιώρησις"
                    </p>
                </div>

                {/* Φωτογραφία Κάτω */}
                <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                    <Image
                        src={images[0]}
                        alt="Aiorisis Studio"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
        </>
    );
};

export default HeroSection2;