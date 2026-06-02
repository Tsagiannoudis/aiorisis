"use client";
import React, { useState } from "react";
import { 
  HiOutlineServerStack, 
  HiOutlineShieldCheck, 
  HiOutlineEnvelope,
    HiOutlineCog6Tooth
} from "react-icons/hi2";
import { MdOutlineCookie } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";

const PolicySection = ({
  id,
  title,
  children,
  isActive,
  icon: Icon,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  icon: React.ElementType;
}) => (
  <section id={id} className={`scroll-mt-40 transition-all duration-700 p-8 rounded-[2rem] border-l-8 ${isActive ? "border-[#B9007C] bg-white shadow-2xl shadow-[#B9007C]/5 translate-x-2 opacity-100" : "border-transparent opacity-40 grayscale-[0.5]"}`}>
    <div className="flex items-start gap-6">
      {/* Icon Wrapper */}
      <div className={`p-3 rounded-2xl flex-shrink-0 transition-colors duration-300 ${isActive ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/20" : "bg-gray-100 text-[#B9007C]"}`}>
        <Icon size={48} />
      </div>
      
      {/* Text Content */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-black">
          {title}
        </h3>
        <div className="text-gray-700 leading-relaxed text-base font-light">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState("who");

  return (
    <main className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="lg:w-2/6 lg:sticky lg:top-32 h-fit">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/5 overflow-hidden">
            <h3 className="text-sm uppercase tracking-[0.25em] text-[#B9007C] font-bold mb-6">
              Περιεχόμενα
            </h3>

            <nav className="flex flex-col space-y-3">
              <a 
                href="#who" 
                onClick={() => setActiveSection("who")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "who" ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold" : "text-gray-500 hover:bg-gray-100"}`}
              >
                <RiTeamLine size={18} />
                Ποιοι είμαστε
              </a>

              <a 
                href="#data" 
                onClick={() => setActiveSection("data")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "data" ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold" : "text-gray-500 hover:bg-gray-100"}`}
              >
                <HiOutlineServerStack size={18} />
                Ποια δεδομένα συλλέγουμε
              </a>

              <a 
                href="#processing" 
                onClick={() => setActiveSection("processing")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "processing" ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold" : "text-gray-500 hover:bg-gray-100"}`}
              >
                <TbTargetArrow size={18} />
                Σκοποί επεξεργασίας
              </a>

              <a 
                href="#rights" 
                onClick={() => setActiveSection("rights")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "rights" ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold" : "text-gray-500 hover:bg-gray-100"}`}
              >
                <HiOutlineShieldCheck size={18} />
                Τα δικαιώματά σας
              </a>

              <a 
                href="#contact" 
                onClick={() => setActiveSection("contact")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "contact" ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold" : "text-gray-500 hover:bg-gray-100"}`}
              >
                <HiOutlineEnvelope size={18} />
                Επικοινωνία
              </a>

              <a 
                href="#cookies" 
                onClick={() => setActiveSection("cookies")}
                className={`flex items-center gap-3 py-3 px-6 transition-all duration-300 rounded-xl text-sm tracking-wide ${activeSection === "cookies" ? "bg-[#B9007C] text-white shadow-lg shadow-[#B9007C]/30 scale-105 font-bold" : "text-gray-500 hover:bg-gray-100"}`}
              >
                <MdOutlineCookie size={18} />
                Cookies
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:w-4/6 space-y-4">
          <PolicySection
            id="who"
            title="Ποιοι είμαστε"
            isActive={activeSection === "who"}
            icon={RiTeamLine}
          >
            Το Αιώρησις είναι ένα studio Aerial Arts και Yoga με έδρα τη Θεσσαλονίκη, στην οδό Αρτέμιδος 42.
          </PolicySection>

          <PolicySection
            id="data"
            title="Ποια δεδομένα συλλέγουμε"
            isActive={activeSection === "data"}
            icon={HiOutlineServerStack}
          >
            Συλλέγουμε μόνο τα απολύτως απαραίτητα προσωπικά δεδομένα (όνομα, email, τηλέφωνο) που μας παρέχετε οικειοθελώς μέσω των φορμών επικοινωνίας ή κατά την εγγραφή σας στα μαθήματα.
          </PolicySection>

          <PolicySection
            id="processing"
            title="Σκοποί επεξεργασίας"
            isActive={activeSection === "processing"}
            icon={TbTargetArrow}
          >
            Χρησιμοποιούμε τα προσωπικά σας δεδομένα αποκλειστικά για την επικοινωνία μαζί σας, την παροχή πληροφοριών σχετικά με τα μαθήματα και τις δράσεις μας, καθώς και για τη βελτίωση των υπηρεσιών μας.
          </PolicySection>

          <PolicySection
            id="rights"
            title="Τα δικαιώματά σας"
            isActive={activeSection === "rights"}
            icon={HiOutlineShieldCheck}
          >
            Σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR), έχετε δικαίωμα πρόσβασης, διόρθωσης, περιορισμού, φορητότητας και διαγραφής των προσωπικών σας δεδομένων.
          </PolicySection>

          <PolicySection
            id="contact"
            title="Επικοινωνία"
            isActive={activeSection === "contact"}
            icon={HiOutlineEnvelope}
          >
            Για οποιοδήποτε θέμα σχετικό με τα προσωπικά δεδομένα μπορείτε να
            επικοινωνήσετε μαζί μας στο{" "}
            <a href="mailto:info@aiorisis.gr" className="text-[#B9007C] underline">info@aiorisis.gr</a>.
          </PolicySection>

          <PolicySection
            id="cookies"
            title="Cookies"
            isActive={activeSection === "cookies"}
            icon={MdOutlineCookie}
          >
            Χρησιμοποιούμε cookies για τη βελτίωση της εμπειρίας χρήσης του ιστοτόπου μας και για την ανάλυση της επισκεψιμότητας. Μπορείτε να διαχειριστείτε τις προτιμήσεις σας οποιαδήποτε στιγμή.
          </PolicySection>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
