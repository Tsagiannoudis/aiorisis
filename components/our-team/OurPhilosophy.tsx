const OurPhilosophy = () => {
  return (
    <section className="bg-gradient-to-b from-[#F6F1EB] to-white py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mx-auto px-4 max-w-7xl">
        <div className="text-left mb-16">
          <p className="text-[#B9007C] text-sm font-bold tracking-widest mb-4">
            Η φιλοσοφία μας
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Κίνηση. Έκφραση. Σύνδεση.</h2>
          <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
            Οι άνθρωποι πίσω από το Αιώρησις, αφοσιωμένοι στο να σας
            καθοδηγήσουν με ασφάλεια και πάθος στον κόσμο της κίνησης.
          </p>
        </div>
        <blockquote 
          className="relative border-l-4 border-[#B9007C] pl-8 py-4"
          data-aos="fade-left"
        >
          <p className="text-3xl md:text-5xl font-light italic text-gray-800 leading-tight">
            “Καλλιεργώ την <span className="text-[#B9007C] font-normal">ισορροπία</span> <br />
            ανάμεσα στην ομαδικότητα <br />
            και την ατομικότητα”
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default OurPhilosophy;
