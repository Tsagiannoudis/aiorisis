import { LocalizedText } from "@/components/extraComponents/LocaleSwitchTranslate";
import { classes } from "./ClassOfStudioData";


export interface Teacher {
  id: number;
  slug: string;
  firstName: LocalizedText;
  lastName: LocalizedText;
  fullName: LocalizedText;
  experience: number;
  categoryType: LocalizedText;
  specialties: number[];
  shortDescription: LocalizedText;
  fullDescription: LocalizedText;
  image: string;
  mailAddress: string;
  phoneNumber: number;
  socialAccounts: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
}

//Class function
export const getSpecialtyNames = (teacherSpecialties: number[]) => {
  return teacherSpecialties.map(id =>
    classes.find(c => c.id === id)?.className
  );
  // 1 - Aerial Yoga
  // 2 - Aerial Yoga Kids
  // 3 - Aerial Yoga Teens
  // 4 - Aerial Silks
  // 5 - Aerial Rope
  // 6 - Aerial Straps
  // 7 - Flying Pole
  // 8 - Aerial Hoop
  // 9 - Vinyasa Flow Yoga
  // 10 - Flexibility
};

// Εξαγωγή του πίνακα των δασκάλων ως const
export const teachers: Teacher[] = [
  {
    id: 1,
    slug: "evi-priona",
    firstName: { el: "Εύη", en: "Evi" },
    lastName: { el: "Πριόνα", en: "Priona" },
    fullName: { el: "Εύη Πριόνα", en: "Evi Priona" },
    experience: 14,
    categoryType: { el: "Ιδιοκτήτρια", en: "Owner" },
    specialties: [1, 2, 3, 4, 9],
    shortDescription: {
      el: "Ασχολείται με τον αθλητισμό από πολύ μικρή ηλικία.\n Έκανε τα πρώτα της βήματα στις εναέριες τέχνες (Aerial Silks) το 2012 και η αγάπη της γι'αυτές την οδήγησε να ασχοληθεί επαγγελματικά και να διδάσκει από το 2020. \nΕίναι πιστοποιημένη δασκάλα της Aerial Yoga 150hrs, Aerial Yin Yoga 50hrs, Yoga 500 hrs και Prenatal/Postnatal Yoga 50hrs από την Yoga Alliance.",
      en: "She has been involved in sports since a very young age.\n She took her first steps in aerial arts (Aerial Silks) in 2012 and her love for them led her to pursue it professionally and teach since 2020. \nShe is a certified Aerial Yoga teacher 150hrs, Aerial Yin Yoga 50hrs, Yoga 500 hrs and Prenatal/Postnatal Yoga 50hrs by Yoga Alliance."
    },
    fullDescription: {
      el: `
    <div class="space-y-6">
    <p class="text-lg font-medium text-neutral-800 leading-relaxed">Από πολύ μικρή ηλικία ξεκίνησε να ασχολείται με τον αθλητισμό, χτίζοντας μια γερή βάση σωματικής επίγνωσης.</p>
    <p class="text-neutral-600">Το 2012 έκανε τα πρώτα της βήματα στις εναέριες τέχνες (Aerial Silks), και η αγάπη της γι’ αυτές την οδήγησε να αφιερωθεί επαγγελματικά και να διδάσκει από το 2020.</p>
    <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Πιστοποιήσεις Yoga Alliance:</p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
      <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga (150 ώρες)</li>
      <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yin Yoga (50 ώρες)</li>
      <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Yoga (500 ώρες)</li>
      <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Prenatal/Postnatal Yoga (50 ώρες)</li>
    </ul>
    </div>
`,
      en: `
    <div class="space-y-6">
    <p class="text-lg font-medium text-neutral-800 leading-relaxed">From a very young age she started to engage in sports, building a solid foundation of body awareness.</p>
    <p class="text-neutral-600">In 2012 she took her first steps in aerial arts (Aerial Silks), and her love for them led her to devote herself professionally and teach since 2020.</p>
    <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Yoga Alliance Certifications:</p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
      <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga (150 hours)</li>
      <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yin Yoga (50 hours)</li>
      <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Yoga (500 hours)</li>
      <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Prenatal/Postnatal Yoga (50 hours)</li>
    </ul>
    </div>
`
    },
    image: "/teacherProfiles/evi-priona.webp",
    mailAddress: "info@aiorisis.gr",
    phoneNumber: 6948577225,
    socialAccounts: {
      facebook: "https://www.facebook.com/evi.priona",
      instagram: "https://www.instagram.com/evi_priona/",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    id: 2,
    slug: "rafaela-xatzikosta",
    firstName: { el: "Ραφαέλα", en: "Rafaela" },
    lastName: { el: "Χατζηκώστα", en: "Hatzikosta" },
    fullName: { el: "Ραφαέλα Χατζηκώστα", en: "Rafaela Hatzikosta" },
    experience: 9,
    categoryType: { el: "Δασκάλα", en: "Instructor" },
    specialties: [1, 2, 3, 9],
    shortDescription: {
      el: "",
      en: ""
    },
    fullDescription: {
      el: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">Πιστοποιημένη yoga instructor (700hr RYT) από το 2019, με βαθιά προσήλωση στη θεραπευτική δύναμη της κίνησης.</p>
      <p class="text-neutral-600 leading-relaxed">Το 2021 εξειδικεύτηκε στην Aerial yoga και η αγάπη της για τα παιδιά την οδήγησε στην απόκτηση εξειδίκευσης στην Παιδική Yoga.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Εξειδικεύσεις & Επιμορφώσεις:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Prenatal & Postnatal Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Breathworking & Meditation</li>
      </ul>
    </div>
    `,
      en: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">Certified yoga instructor (700hr RYT) since 2019, with a deep commitment to the healing power of movement.</p>
      <p class="text-neutral-600 leading-relaxed">In 2021 she specialized in Aerial yoga and her love for children led her to obtain a specialization in Children’s Yoga.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Specializations & Trainings:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Prenatal & Postnatal Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Breathworking & Meditation</li>
      </ul>
    </div>
    `
    },
    image: "/teacherProfiles/rafaela-xatzikosta.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "https://www.facebook.com/raff.chatz",
      instagram: "https://www.instagram.com/thecomicyogi",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    id: 3,
    slug: "natasa-petridou",
    firstName: { el: "Νατάσα", en: "Natasa" },
    lastName: { el: "Πετρίδου", en: "Petridou" },
    fullName: { el: "Νατάσα Πετρίδου", en: "Natasa Petridou" },
    experience: 13,
    categoryType: { el: "Δασκάλα", en: "Instructor" },
    specialties: [1, 2, 3, 9],
    shortDescription: {
      el: "",
      en: ""
    },
    fullDescription: {
      el: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">Πιστοποιημένη δασκάλα της Yoga και μέλος της Yoga Alliance USA (E-RYT 300h).</p>
      <p class="text-neutral-600 leading-relaxed italic">"Το ταξίδι γύρω από την φιλοσοφία της Yoga ξεκινάει το 2011, μια αναζήτηση που έγινε τρόπος ζωής."</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Εκπαιδεύσεις & Σεμινάρια:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Yin Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Ανατομία & Ευθυγράμμιση</li>
      </ul>
    </div>
    `,
      en: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">Πιστοποιημένη δασκάλα της Yoga και μέλος της Yoga Alliance USA (E-RYT 300h).</p>
      <p class="text-neutral-600 leading-relaxed italic">"Το ταξίδι γύρω από την φιλοσοφία της Yoga ξεκινάει το 2011, μια αναζήτηση που έγινε τρόπος ζωής."</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Εκπαιδεύσεις & Σεμινάρια:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Yin Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Anatomy & Alignment</li>
      </ul>
    </div>
    `
    },
    image: "/teacherProfiles/natasa-petridou.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "https://www.facebook.com/luna.yorkie.18",
      instagram: "https://www.instagram.com/natasha_ptr/",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    id: 4,
    slug: "marialina-papadopoulou",
    firstName: { el: "Μαριαλίνα", en: "Marialina" },
    lastName: { el: "Παπαδοπούλου", en: "Papadopoulou" },
    fullName: { el: "Μαριαλίνα Παπαδοπούλου", en: "Marialina Papadopoulou" },
    experience: 13,
    categoryType: { el: "Δασκάλα", en: "Instructor" },
    specialties: [7],
    shortDescription: {
      el: "",
      en: ""
    },
    fullDescription: {
      el: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">Δραστηριοποιείται στον χώρο του pole dance από το 2013, διδάσκοντας σε όλα τα επίπεδα.</p>
      <p class="text-neutral-600 leading-relaxed">Τα τελευταία 6 χρόνια προετοιμάζει αθλητές για αγωνιστικό επίπεδο, δίνοντας έμφαση στην ακρίβεια της τεχνικής και την καλλιτεχνική έκφραση.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Διακρίσεις (2017 - 2022):</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· 1η Θέση - Πανελλήνιος Διαγωνισμός</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· 3η Θέση - Artistic Pole</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· 4η Θέση - Pole Sport</li>
      </ul>
    </div>
`,
      en: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">She has been involved in the world of pole dance since 2013, teaching all levels.</p>
      <p class="text-neutral-600 leading-relaxed">For the last 6 years, she has been preparing athletes for competition level, emphasizing technical precision and artistic expression.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Distinctions (2017 - 2022):</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· 1st Place - Panhellenic Competition</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· 3rd Place - Artistic Pole</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· 4th Place - Pole Sport</li>
      </ul>
    </div>
    `
    },
    image: "/teacherProfiles/marialina-papadopoulou.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "https://www.facebook.com/marialina.papadopoulou",
      instagram: "https://www.instagram.com/marialina_papadopoyloy/",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    id: 5,
    slug: "natalia-michail",
    firstName: { el: "Ναταλία", en: "Natalia" },
    lastName: { el: "Μιχαήλ", en: "Michail" },
    fullName: { el: "Ναταλία Μιχαήλ", en: "Natalia Michail" },
    experience: 10,
    categoryType: { el: "Δασκάλα", en: "Instructor" },
    specialties: [8, 10],
    shortDescription: {
      el: "",
      en: ""
    },
    fullDescription: {
      el: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">Με αφετηρία το μπαλέτο από την ηλικία των 3 ετών, η Ναταλία εξελίχθηκε στον σύγχρονο και εναέριο χορό.</p>
      <p class="text-neutral-600 leading-relaxed">Διδάσκει τα τελευταία 9 χρόνια, συνδυάζοντας την πειθαρχία του κλασικού χορού με την ελευθερία του Aerial Hoop.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Τίτλοι Σπουδών I.S.T.D.:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· DDE (Diploma in Dance Education)</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Advanced 2 in Modern Theatre</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Contemporary Foundation</li>
      </ul>
    </div>
`,
      en: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">With ballet as her starting point from the age of 3, Natalia evolved into contemporary and aerial dance.</p>
      <p class="text-neutral-600 leading-relaxed">She has been teaching for the last 9 years, combining the discipline of classical ballet with the freedom of the Aerial Hoop.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">I.S.T.D. Qualifications:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· DDE (Diploma in Dance Education)</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Advanced 2 in Modern Theatre</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Contemporary Foundation</li>
      </ul>
    </div>
`,
    },
    image: "/teacherProfiles/natalia-michail.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "https://www.facebook.com/natalitsa.mica",
      instagram: "https://www.instagram.com/natalia_mic/",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    id: 6,
    slug: "stella-tzirti",
    firstName: { el: "Στέλλα", en: "Stella" },
    lastName: { el: "Τζίρτη", en: "Tzirti" },
    fullName: { el: "Στέλλα Τζίρτη", en: "Stella Tzirti" },
    experience: 15,
    categoryType: { el: "Δασκάλα", en: "Instructor" },
    specialties: [4, 5, 6],
    shortDescription: {
      el: "",
      en: ""
    },
    fullDescription: {
      el: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">Ασχολείται με τα εναέρια ακροβατικά τα τελευταία δέκα χρόνια, αναζητώντας πάντα την τελειότητα στην κίνηση.</p>
      <p class="text-neutral-600 leading-relaxed">Μέσα από τη συνεχή προσωπική προπόνηση και σεμινάρια με διεθνείς προπονητές, έχει διαμορφώσει ένα μοναδικό στυλ προσέγγισης της εναέριας τεχνικής.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Κύρια Ειδίκευση:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Ακροβατικό Πανί (Silks)</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Ακροβατικό Σχοινί (Rope)</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Εναέρια Τεχνική & Element Understanding</li>
      </ul>
    </div>
    `,
      en: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">With ballet as her starting point from the age of 3, Natalia evolved into contemporary and aerial dance.</p>
      <p class="text-neutral-600 leading-relaxed">She has been teaching for the last 9 years, combining the discipline of classical ballet with the freedom of the Aerial Hoop.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">I.S.T.D. Qualifications:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· DDE (Diploma in Dance Education)</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Advanced 2 in Modern Theatre</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Contemporary Foundation</li>
      </ul>
    </div>
`,
    },
    image: "/teacherProfiles/stella-tzirti.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "https://www.facebook.com/stella.tzirti",
      instagram: "https://www.instagram.com/stella_tzirti/",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    id: 7,
    slug: "eleni-tsiakiri",
    firstName: { el: "Έλενη", en: "Eleni" },
    lastName: { el: "Τσιακίρη", en: "Tsiakiri" },
    fullName: { el: "Έλενη Τσιακίρη", en: "Eleni Tsiakiri" },
    experience: 6,
    categoryType: { el: "Δασκάλα", en: "Instructor" },
    specialties: [1, 2, 3, 9],
    shortDescription: {
      el: "",
      en: ""
    },
    fullDescription: {
      el: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">Εχω μεγαλώσει μέσα από τη κίνηση. Με πολυ αγάπη και σεβασμό στο σώμα, μου αρέσει μέσα από διαφορετικές τεχνικές να ανακαλύπτω που μπορεί να φτάσει το σώμα και πως μπορούν όλα τα είδη να συνδυαστούν.</p>
      <p class="text-neutral-600 leading-relaxed">Μέσα από το χορό μαθαίνω τη σύνδεση της κάθε κίνησης με την επόμενη και ανακαλύπτω καινούργιους τρόπους να τα συνδεω. Η γιόγκα είναι ένα είδος που με βοηθάει να ακούω το σώμα μου και να νιώθω την κάθε κίνηση. Μου αρέσουν οι ροές στα μαθήματα γιογκας και η βασική μου προτεραιότητα είναι να συνδέσουμε το νου μας με το σώμα μας αφήνοντας όλες τις σκέψεις έξω από την αίθουσα.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Κύρια Ειδίκευση:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga Kids</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga Teens</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Vinyasa Flow Yoga</li>
      </ul>
    </div>
    `,
      en: `
    <div class="space-y-6">
      <p class="text-lg font-medium text-neutral-800 leading-relaxed">I grew up through movement. With much love and respect for the body, I like through different techniques to discover where the body can reach and how all types can be combined.</p>
      <p class="text-neutral-600 leading-relaxed">Through dance I learn the connection of each movement with the next and I discover new ways to connect them. Yoga is a genre that helps me listen to my body and feel every movement. I like the flows in yoga classes and my main priority is to connect our mind with our body leaving all thoughts outside the room.</p>
      <p class="text-[#B9007C] font-bold uppercase tracking-wider text-sm">Main Specialization:</p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none !pl-0">
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga Kids</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Aerial Yoga Teens</li>
        <li class="bg-[#F6F1EB] p-3 rounded-xl border border-[#B9007C]/10 text-sm">· Vinyasa Flow Yoga</li>
      </ul>
    </div>
    `
    },
    image: "/teacherProfiles/eleni-tsiakiri01.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "https://www.facebook.com/eleni.tsiakiri.37",
      instagram: "https://www.instagram.com/elenitsiakiri/",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
];
