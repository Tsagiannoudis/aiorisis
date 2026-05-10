const ExperienceOfAiorisis = () => {
  return (
    <section className="py-24 bg-[#fcfcfc]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900">
          Η Εμπειρία της Αιώρησης
        </h2>
        <p className="text-gray-600 font-light leading-relaxed mt-8 mb-12 ">
            Στο στούντιό μας, έχουμε δημιουργήσει έναν χώρο που συνδυάζει την ασφάλεια, την ποιότητα και την αισθητική, για να σας προσφέρουμε την καλύτερη δυνατή εμπειρία.  
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="border-l-4 border-[#B9007C] pl-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Ασφάλεια & Ποιότητα</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Με ύψος 6 μέτρα, ο χώρος μας είναι ιδανικός για να εκτελέσετε ακόμα και τις πιο απαιτητικές εναέριες ασκήσεις με απόλυτη άνεση. 
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Ο εξοπλισμός μας είναι πιστοποιημένος και καινούργιος, διασφαλίζοντας την υψηλότερη ποιότητα και ασφάλεια κατά τη διάρκεια της πρακτικής σας. Είτε πρόκειται για aerial yoga, aerial silks, aerial hoop, rope, straps, ή flying pole.
              </p>
            </div>

            <div className="border-l-4 border-gray-200 pl-6">
              <h3 className="text-2xl font-bold mb-4">
                Φροντίδα & Καθοδήγηση
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Δίνουμε έμφαση στην καθαριότητα και τη φροντίδα, προσφέροντας ένα ήρεμο περιβάλλον. Τα τμήματά μας είναι ολιγομελή, επιτρέποντας στους εκπαιδευτές μας να προσφέρουν εξατομικευμένη καθοδήγηση ανάλογα με τις δικές σας ανάγκες.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-6">
              Σας προσκαλούμε να εξερευνήσετε τις δυνατότητες που προσφέρει το στούντιό μας και να ανακαλύψετε τη χαρά και την ελευθερία που προσφέρουν οι εναέριες πρακτικές μας. Είτε είστε αρχάριος είτε προχωρημένος, είμαστε εδώ για να σας υποστηρίξουμε σε κάθε βήμα του ταξιδιού σας.
            </p>
            <div className="flex items-center gap-4 text-[#B9007C] font-bold tracking-widest text-sm">
              <span className="h-px w-12 bg-[#B9007C]"></span>Η ομάδα της
              Αιώρησης
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceOfAiorisis;
