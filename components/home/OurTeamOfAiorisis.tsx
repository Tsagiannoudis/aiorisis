import Image from 'next/image';
import { teachers, getSpecialtyNames } from '@/data/TeacherProfileData'; // Διόρθωση: Named import

const OurTeamOfAiorisis = () => {
  return (
    <section className="relative py-24 bg-[#85c9bb8d] overflow-hidden">
      {/* Διακοσμητικό Background Logo (Watermark) */}
      <div className="absolute -bottom-20 -left-20 opacity-20 pointer-events-none -rotate-12 hidden lg:block">
        <Image 
          src="/lotus-white2.png" 
          alt='LOTUS DECOR' 
          width={600} 
          height={600} 
        />
      </div>

      <div className="container relative mx-auto px-4 max-w-6xl z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-black mb-8">
          Η ομάδας μας
        </h2>
        <p className="text-grey font-light leading-relaxed text-center max-w-3xl mx-auto ">
            Η ομάδα της Αιώρησις αποτελείται από έμπειρους και παθιασμένους εκπαιδευτές, που είναι αφοσιωμένοι στο να σας βοηθήσουν να εξερευνήσετε τις δυνατότητες του σώματός σας και να ανακαλύψετε τη χαρά της κίνησης στον αέρα. 
        </p>

        <div className="flex justify-center mb-8">
          <Image 
            src="/lotus-white4.png" 
            alt='LOTUS ICON' 
            width={100} 
            height={100} 
          />
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start"> 
            {teachers.map((teacher, index) => ( 
                <div
                key={teacher.id}
                className="flex flex-col items-center group"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="relative mb-6 overflow-hidden rounded-full border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[#B9007C]/20">
                  <Image
                    src={teacher.image}
                    alt={teacher.fullName}
                    width={220}
                    height={220}
                    className="object-cover aspect-square"
                  />
                </div>

                <div className="text-center">  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.fullName}</h3> 
                  <p className="text-[#B9007C] text-sm font-semibold tracking-widest">
                    {teacher.categoryType}
                  </p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {getSpecialtyNames(teacher.specialties).map((specialty, idx, arr) => (
                      <span key={idx}>
                        {specialty}
                        {idx < arr.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default OurTeamOfAiorisis;
