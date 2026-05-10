"use client";
import Image from 'next/image';

const images = [
    '/homepage-photos/homePage.png',
];

const HeroSection2 = () => {

    return (
        <>
        <section className="bg-white text-gray-900 index-1">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Κείμενο Πάνω */}
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-[10rem] font-extrabold text-[#B9007C] tracking-tight">
                        Αιώρησις 
                    </h1>
                    <span className='text-5xl md:text-[8rem] text-black text-align-left'>
                        Studio
                    </span>
                </div>
            </div>
        </section>,
        <section className="relative min-h-[40vh] flex items-start overflow-hidden  text-white flex-col md:flex-row justify-between -mt-20">
            <div className="container mx-auto flex ">
                {/* Κείμενο Κέντρο */}
                <div className="max-w-xl backdrop-blur-md p-8 md:p-12 mt-30">
                    <p className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
                        Δώσε στο σώμα και στο νου,
                    </p>
                    <p className="text-lg md:text-2xl font-light text-gray-600 leading-relaxed">
                        τον χρόνο και τον τόπο να <span className="font-semibold italic text-[#B9007C]">αφεθεί</span> μέσω της "αιώρησις"
                    </p>
                </div>
                {/* Φωτογραφία Κάτω */}
                <div className="relative h-[350px] md:h-[600px] w-full overflow-hidden shadow-2xl border border-gray-100">
                    {images.map((src, index) => (
                        <Image
                            key={src}
                            src={src}
                            alt={`Hero Slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    </>
    );
};

export default HeroSection2;