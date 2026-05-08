import { classes } from "./ClassesOfStudio";


export interface Teacher {
  id: number;
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
  // 2 - Aerial Yoga Kids/Teens
  // 3 - Aerial Silks
  // 4 - Aerial Rope
  // 5 - Aerial Straps
  // 6 - Flying Pole
  // 7 - Aerial Hoop
  // 8 - Vinyasa Flow Yoga
};

// Εξαγωγή του πίνακα των δασκάλων ως const
export const teachers: Teacher[] = [
  {
    id: 1,
    firstName: "Εύη",
    lastName: "Πριόνα",
    fullName: "Πριόνα Εύη",
    experience: 13,
    categoryType: "Owner",
    specialties: [1, 2, 3, 9],
    shortDescription: `Ασχολείται με τον αθλητισμό από πολύ μικρή ηλικία. Έκανε τα πρώτα της βήματα στις εναέριες τέχνες (Aerial Silks) το 2015 και η αγάπη της γι'αυτές την οδήγησε να ασχοληθεί επαγγελματικά και να διδάσκει από το 2020. Είναι πιστοποιημένη δασκάλα της Aerial Yoga 150hrs, Aerial Yin Yoga 50hrs, Yoga 500 hrs και Prenatal/Postnatal Yoga 50hrs από την Yoga Alliance.`,
    fullDescription: `
    <div>
    <p>Από πολύ μικρή ηλικία ξεκίνησε να ασχολείται με τον αθλητισμό.</p>
    <p>
      Το 2015 έκανε τα πρώτα της βήματα στις εναέριες τέχνες (Aerial Silks), και η αγάπη της γι’ αυτές την οδήγησε να αφιερωθεί επαγγελματικά και να διδάσκει από το 2020.</p>
    <p>
      Έχει ολοκληρώσει εκπαιδεύσεις και έχει λάβει πιστοποιήσεις από τη Yoga Alliance στις εξής ειδικότητες:</p>
    <ul>
      <li>Aerial Yoga (150 ώρες),</li>
      <li>Aerial Yin Yoga (50 ώρες),</li>
      <li>Yoga (500 ώρες) και</li>
      <li>Prenatal/Postnatal Yoga (50 ώρες).</li>
    </ul>
    </div>
`,
    image: "",
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
    firstName: "Ραφαέλα",
    lastName: "Χατζηκώστα",
    fullName: "Χατζηκώστα Ραφαέλα",
    experience: 8,
    categoryType: "Instructor",
    specialties: [1, 2, 9],
    shortDescription: "",
    fullDescription: `
    <p>
      <span>
        Πιστοποιημένη yoga instructor (700hr RYT) από το 2019.
      </span>
    </p>
    <p>
      <span>
        Το 2021 εξειδικεύτηκε στην Aerial yoga και η αγάπη της για τα παιδιά την οδήγησε σε ένα ακόμα εκπαιδευτικό, αυτό της παιδικής Yoga.
        Επίσης, έχει εκπαιδευτεί στην Prenatal & Postnatal yoga, και έχει παρακολουθήσει διάφορα σεμινάρια και workshop διαλογισμού, breathworking, ψυχολογίας και πολλά άλλα.
      </span>
    </p>
`,
    image: "",
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
    firstName: "Νατάσα",
    lastName: "Πετρίδου",
    fullName: "Πετρίδου Νατάσα",
    experience: 7,
    categoryType: "Instructor",
    specialties: [1, 2, 9],
    shortDescription: "",
    fullDescription: `
    <p>
      <span>
        Πιστοποίημενη δασκάλα της Yoga και μέλος της Yoga Alliance USA E-RYT 300h.
      </span>
    </p>
    <p>
      <span>
        Το ταξίδι γύρω από την φιλοσοφία της Yoga ξεκινάει το 2011 .Το 2018 εκπαιδεύτηκε στην Yoga και ξεκίνησε να διδάσκει και τα πρώτα της μαθήματα. Η ευγνωμοσύνη προς τους μαθητές της, την οδήγησε σε σεμινάρια αυτοβελτίωσης και προσωπικής ανάπτυξης, καθώς ακολούθησαν και επιπλέον εκπαιδεύσεις στην Aerial, στη Yin Yoga, στην ανατομία και την σωστή ευθυγράμμιση των θέσεων.
      </span>
    </p>
`,
    image: "",
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
    firstName: "Μαριαλίνα",
    lastName: "Παπαδοπούλου",
    fullName: "Παπαδοπούλου Μαριαλίνα",
    experience: 6,
    categoryType: "Instructor",
    specialties: [7],
    shortDescription: "",
    fullDescription: `
    <p>
      <span>
        Δραστηριοποιείται στον χώρο του pole dance από το 2013. Τα τελευταία 6 χρόνια διδάσκει σε αθλητές όλως των επιπέδων (amateur, intermediate, advanced) αλλά και σε αγωνιστικό επίπεδο.
      </span>
    </p>
    <p>
      <span>
        Παράλληλα, από το 2017 μέχρι το 2022 έπαιρνε μέρος στον πανελλήνιο διαγωνισμό αθλημάτων επί στύλου στις κατηγορίες pole sport και artistic pole κατακτώντας δύο φορές την 4η θέση δύο φορές την 1η θέση μια την 6η και μία την 3η θέση.
      </span>
    </p>
`,
    image: "",
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
    firstName: "Ναταλία",
    lastName: "Μιχαήλ",
    fullName: "Μιχαήλ Ναταλία",
    experience: 4,
    categoryType: "Instructor",
    specialties: [8],
    shortDescription: "",
    fullDescription: `
    <p>
      <span>
        Ξεκίνησε να ασχολείται με το μπαλέτο από την ηλικια των 3 ετών, αλλά στην συνέχεια την κέρδισε ο σύγχρονος και ο εναέριος χορός (Aerial Hoop), τους οποίους και διδάσκει τα τελευταία 7 χρονια. 
      </span>
    </p>
    <p>
      <span>
        Είναι πιστοποιημένη καθηγήτρια από την I.S.T.D. στον σύγχρονο και μοντέρνο χορό, έχοντας τίτλους σπουδών όπως : DDE (Diploma in Dance Education), Advanced 2 in Modern Theatre και Intermediate Foundation in Contemporary, καθώς και πιστοποιήσεις παρακολούθησης σεμιναρίων στα παραπάνω είδη.
      </span>
    </p>
`,
    image: "",
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
    firstName: "Στέλλα",
    lastName: "Τζίρτη",
    fullName: "Τζίρτη Στέλλα",
    experience: 12,
    categoryType: "Instructor",
    specialties: [3, 5, 6],
    shortDescription: "",
    fullDescription: `
    <p>
      <span>
        Ασχολείται με τα εναέρια ακροβατικά τα τελευταία δέκα χρόνια.
      </span>
    </p>
    <p>
      <span>
        Από τότε και μέχρι σήμερα, παρακολουθεί σεμινάρια στην Ελλάδα και το εξωτερικό, από διεθνώς αναγνωρισμένους προπονητές, μαθαίνοντας έτσι διάφορες μεθόδους προσέγγισης της εναέριας τεχνικής και δημιουργώντας το δικό της στυλ, μέσα από τη συνεχή προσωπική προπόνηση.
      </span>
    </p>
    <p>
      <span>
        Ειδικεύεται στο ακροβατικό πανί και σχοινί, δίνοντας ιδιαίτερη έμφαση στην τεχνική και κατανόηση του element.
      </span>
    </p>
`,
    image: "",
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
