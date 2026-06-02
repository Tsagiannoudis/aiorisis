import React from 'react';

const PrivacyPolicy = () => {
  return (
    <main className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Πολιτική Απορρήτου</h1>
      <section className="prose prose-lg text-gray-700">
        <p className="mb-4">
          Στο <strong>Αιώρησις Studio</strong>, η προστασία των προσωπικών σας δεδομένων είναι προτεραιότητά μας. 
          Η παρούσα πολιτική εξηγεί πώς συλλέγουμε και επεξεργαζόμαστε τα δεδομένα σας σύμφωνα με τον GDPR.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Δεδομένα που συλλέγουμε</h2>
        <p>
          Συλλέγουμε δεδομένα μέσω των φορμών επικοινωνίας και των Google Forms για κρατήσεις σε events και retreats (όπως ονοματεπώνυμο, email, τηλέφωνο).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Σκοπός Επεξεργασίας</h2>
        <p>
          Τα δεδομένα χρησιμοποιούνται αποκλειστικά για τη διαχείριση των κρατήσεων σας και την ενημέρωσή σας για τις υπηρεσίες μας.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Τα δικαιώματά σας</h2>
        <p>
          Έχετε το δικαίωμα πρόσβασης, διόρθωσης ή διαγραφής των δεδομένων σας ανά πάσα στιγμή επικοινωνώντας μαζί μας στο info@aiorisis.gr.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Cookies</h2>
        <p>
          Χρησιμοποιούμε cookies για τη βελτίωση της εμπειρίας πλοήγησης και την ανάλυση της επισκεψιμότητας.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;