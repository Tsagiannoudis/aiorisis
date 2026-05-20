'use client';
import Image from 'next/image';
import SquareBackground from '@/components/animations/SquareBackground';



const ExperienceOfAiorisis = () => {
  return (
    <section className="relative py-24 bg-[#85c9bb8d] overflow-hidden">
    
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

      <div className="container relative mx-auto px-4 max-w-6xl z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-black mb-8">
          Η Εμπειρία της Αιώρησις
        </h2>
        <p className="text-gray-800 font-light leading-relaxed text-center max-w-3xl mx-auto ">
            Στο στούντιό μας, έχουμε δημιουργήσει έναν χώρο που συνδυάζει την ασφάλεια, την ποιότητα και την αισθητική, για να σας προσφέρουμε την καλύτερη δυνατή εμπειρία.  
        </p>

        <div className="flex justify-center mb-8">
          <Image 
            src="/lotus-white4.png" 
            alt='LOTUS ICON' 
            width={100} 
            height={100} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="border-l-4 border-[#B9007C] pl-6">
              <h3 className="text-2xl font-bold mb-4 text-black">Ασφάλεια & Ποιότητα</h3>
              <p className="text-gray-800 font-light leading-relaxed">
                Με ύψος 6 μέτρα, ο χώρος μας είναι ιδανικός για να εκτελέσετε ακόμα και τις πιο απαιτητικές εναέριες ασκήσεις με απόλυτη άνεση. 
              </p>
              <p className="text-gray-800 font-light leading-relaxed">
                Ο εξοπλισμός μας είναι πιστοποιημένος και καινούργιος, διασφαλίζοντας την υψηλότερη ποιότητα και ασφάλεια κατά τη διάρκεια της πρακτικής σας. Είτε πρόκειται για aerial yoga, aerial silks, aerial hoop, rope, straps, ή flying pole.
              </p>
            </div>

            <div className="border-l-4 border-white pl-6">
              <h3 className="text-2xl font-bold mb-4 text-black ">
                Φροντίδα & Καθοδήγηση
              </h3>
              <p className="text-gray-800 font-light leading-relaxed">
                Δίνουμε έμφαση στην καθαριότητα και τη φροντίδα, προσφέροντας ένα ήρεμο περιβάλλον. Τα τμήματά μας είναι ολιγομελή, επιτρέποντας στους εκπαιδευτές μας να προσφέρουν εξατομικευμένη καθοδήγηση ανάλογα με τις δικές σας ανάγκες.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 z-10" data-aos="fade-left" data-aos-delay="200">
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-6">
              Σας προσκαλούμε να εξερευνήσετε τις δυνατότητες που προσφέρει το στούντιό μας και να ανακαλύψετε τη χαρά και την ελευθερία που προσφέρουν οι εναέριες πρακτικές μας. Είτε είστε αρχάριος είτε προχωρημένος, είμαστε εδώ για να σας υποστηρίξουμε σε κάθε βήμα του ταξιδιού σας.
            </p>
            <div className="flex items-center gap-4 text-[#B9007C] font-bold tracking-widest text-sm">
              <span className="h-px w-12 bg-[#B9007C]"></span>Η ομάδα της
              Αιώρησις
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceOfAiorisis;
