'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import SquareBackground from '@/components/extraComponents/animations/SquareBackground';



const ExperienceOfAiorisis = () => {
  const t = useTranslations('ExperienceOfAiorisis');
  return (
    <section className="relative py-16 md:py-24 bg-[#85c9bb8d] overflow-hidden">

      {/* Διακοσμητικό Background Logo (Watermark) */}
      <div className="absolute -bottom-20 -right-20 opacity-40 pointer-events-none -rotate-12 hidden lg:block">
        <SquareBackground />
        {/* <Image 
          src="/lotus-white4.png" 
          alt='LOTUS DECOR' 
          width={600} 
          height={600} 
        /> */}
      </div>

      <div className="container relative mx-auto px-4 max-w-7xl z-10">
        <h2 className="text-3xl md:text-6xl font-bold text-center text-black mb-6 md:mb-8">
          {t('title')}
        </h2>
        <p className="text-gray-800 font-light leading-relaxed text-center max-w-3xl mx-auto ">
          {t('intro')}
        </p>

        <div className="flex justify-center mb-8">
          <Image
            src="/lotus-white4.png"
            alt='LOTUS ICON'
            width={100}
            height={100}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="border-l-4 border-[#B9007C] pl-4 md:pl-6">
              <h3 className="text-2xl font-bold mb-4 text-black">{t('safetyTitle')}</h3>
              <p className="text-gray-800 font-light leading-relaxed">
                {t('safetyText1')}
              </p>
              <p className="text-gray-800 font-light leading-relaxed">
                {t('safetyText2')}
              </p>
            </div>

            <div className="border-l-4 border-white pl-4 md:pl-6">
              <h3 className="text-2xl font-bold mb-4 text-black ">
                {t('careTitle')}
              </h3>
              <p className="text-gray-800 font-light leading-relaxed">
                {t('careText')}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 z-10" data-aos="fade-left" data-aos-delay="200">
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-6">
              {t('inviteText')}
            </p>
            <div className="flex items-center gap-4 text-[#B9007C] font-bold tracking-widest text-sm">
              <span className="h-px w-12 bg-[#B9007C]"></span>{t('team')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceOfAiorisis;
