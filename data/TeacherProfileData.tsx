import { classes } from "./ClassOfStudioData";


export interface Teacher {
  id: number;
  slug: string;
  firstName: string;
  lastName: string;
  fullName: string;
  experience: number;
  categoryType: string;
  specialties: number[];
  shortDescription: string;
  fullDescription: string;
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
    firstName: "Εύη",
    lastName: "Πριόνα",
    fullName: "Εύη Πριόνα",
    experience: 14,
    categoryType: "Owner",
    specialties: [1, 2, 3, 4, 9],
    shortDescription: "Ασχολείται με τον αθλητισμό από πολύ μικρή ηλικία.\n Έκανε τα πρώτα της βήματα στις εναέριες τέχνες (Aerial Silks) το 2012 και η αγάπη της γι'αυτές την οδήγησε να ασχοληθεί επαγγελματικά και να διδάσκει από το 2020. \nΕίναι πιστοποιημένη δασκάλα της Aerial Yoga 150hrs, Aerial Yin Yoga 50hrs, Yoga 500 hrs και Prenatal/Postnatal Yoga 50hrs από την Yoga Alliance.",
    fullDescription: `
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
    image: "/teacherProfiles/evi-priona.webp",
    mailAddress: "info@aiorisis.gr",
    phoneNumber: 6948577225,
    socialAccounts: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    id: 2,
    slug: "rafaela-xatzikosta",
    firstName: "Ραφαέλα",
    lastName: "Χατζηκώστα",
    fullName: "Ραφαέλα Χατζηκώστα",
    experience: 9,
    categoryType: "Instructor",
    specialties: [1, 2, 3, 9],
    shortDescription: "",
    fullDescription: `
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
    image: "/teacherProfiles/rafaela-xatzikosta.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
    {
    id: 3,
    slug: "natasa-petridou",
    firstName: "Νατάσα",
    lastName: "Πετρίδου",
    fullName: "Νατάσα Πετρίδου",
    experience: 13,
    categoryType: "Instructor",
    specialties: [1, 2, 3, 9],
    shortDescription: "",
    fullDescription: `
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
    image: "/teacherProfiles/natasa-petridou.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
    {
    id: 4,
    slug: "marialina-papadopoulou",
    firstName: "Μαριαλίνα",
    lastName: "Παπαδοπούλου",
    fullName: "Μαριαλίνα Παπαδοπούλου",
    experience: 13,
    categoryType: "Instructor",
    specialties: [7],
    shortDescription: "",
    fullDescription: `
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
    image: "/teacherProfiles/marialina-papadopoulou.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
    {
    id: 5,
    slug: "natalia-michail",
    firstName: "Ναταλία",
    lastName: "Μιχαήλ",
    fullName: "Ναταλία Μιχαήλ",
    experience: 10,
    categoryType: "Instructor",
    specialties: [8],
    shortDescription: "",
    fullDescription: `
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
    image: "/teacherProfiles/natalia-michail.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
    {
    id: 6,
    slug: "stella-tzirta",
    firstName: "Στέλλα",
    lastName: "Τζίρτη",
    fullName: "Στέλλα Τζίρτη",
    experience: 15,
    categoryType: "Instructor",
    specialties: [4, 5, 6],
    shortDescription: "",
    fullDescription: `
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
    image: "/teacherProfiles/stella-tzirti.webp",
    mailAddress: "",
    phoneNumber: 0,
    socialAccounts: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      linkedin: "",
    },
  },
];
