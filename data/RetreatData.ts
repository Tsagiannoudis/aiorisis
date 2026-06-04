export interface Retreat {
  id: number;
  slug: string;
  title: string;
  subtitle?: string; // Added for "Γιατί Yoga και Aerial yoga μαζί;"
  description: string;
  date: string;
  startDate: string; // Added for easier filtering of upcoming events (YYYY-MM-DD format)
  instructors: string[]; // Changed to array for multiple instructors
  location: string;
  image: string;
  imageHorizontal: string;
  includes: string[];
  googleFormLink?: string; // Added for retreats that have a Google Form for registration
  partners?: {
    name: string;
    description: string;
  }[];
  pricing: {
    earlyBird: {
      endDate: string;
      singleRoom?: string; // Added for single room option
      doubleRoom: string;
      tripleRoom: string;
      quadRoom: string;
    };
    regular: {
      deposit: string;
      singleRoom?: string; // Added for single room option
      doubleRoom: string;
      tripleRoom: string;
      quadRoom: string;
    };
  };
}

export const RetreatData: Retreat[] = [
  {
    id: 1,
    slug: "gei-kai-aeras-aerial-yoga-retreat",
    title: "Γη και Αέρας: Aerial & Yoga Retreat",
    subtitle: "Γιατί Yoga και Aerial yoga μαζί;",
    description:
      "Η διαλογιστική φύση της Yoga έρχεται να αγκαλιάσει την εναέρια πρακτική. Στις 6-9 Ιουνίου θα βρισκόμαστε στην όμορφη Εύβοια στο Eco Silence Suites Hotel για να απολαύσουμε τις πρακτικές μας με την υπέροχη θέα του Αιγαίου!",
    date: "6-9 Ιουνίου 2024",
    startDate: "2024-06-06",
    instructors: [
      "Εύη Πριόνα",
      "Ανθή Ροροπούλου",
      "Ραφαέλα Χατζηκώστα",
      "Νατάσα Πετρίδου",
    ],
    location: "Eco Silence Suites Hotel, Εύβοια",
    image: "/retreats/aerial-yoga-Retreat-6-me-9-6-24.webp",
    imageHorizontal:
      "/retreats/aerial-yoga-Retreat-6-me-9-6-24-horizontal.webp",
    includes: [
      "3 διανυκτερεύσεις",
      "2 γεύματα την ημέρα (πρωινό κ βραδινό)",
      "Καθημερινές πρακτικές Yoga και Aerial yoga",
      "Πρακτικές διαλογισμού (mindfulness meditation, aerial nidra)",
      "Aerial & Yin yoga",
      "Somatic work",
      "Hiking",
      "Στις πρακτικές που θα μοιραστούμε θα είναι μαζί μας οι OMONYMA και Salachi για να κάνουν την εμπειρία πιο ξεχωριστή🙏🏻",
    ],
    googleFormLink: "https://forms.gle/...",
    partners: [
      {
        name: "OMONYMA",
        description:
          "Η OMONYMA δημιουργήθηκε για να ενώνει ανθρώπους, να τους ωθεί να πραγματοποιούν τα όνειρα και τους στόχους τους. Το όραμα της εταιρείας είναι να δημιουργήσει από την αρχή προϊόντα εύχρηστα, απαραίτητα και πρακτικά, ώστε να συνοδεύουν τον άνθρωπο στο ταξίδι της αρμονίας και της ισορροπίας, προσφέροντας του ακριβώς αυτό που χρειάζεται. Δημιουργήθηκε για ανθρώπους που σέβονται το περιβάλλον , τα ζώα , όλη τη φύση και σκοπός της είναι να μεταφέρει το συναίσθημα της ολότητας και της σύνδεσης ανάμεσα σε όλα τα πλάσματa της Γης , με κάθε δυνατό τρόπo !",
      },
      {
        name: "Salachi",
        description:
          "Η Salachi παρείχε τον εξοπλισμό για το retreat και ένα giveaway για τους συμμετέχοντες, ενισχύοντας το ταξίδι της αρμονίας και της κίνησης.",
      },
    ],
    pricing: {
      earlyBird: {
        endDate: "31/3/24",
        singleRoom: "N/A", // Not specified for this retreat, or could be omitted
        doubleRoom: "430€/άτομο",
        tripleRoom: "400€/άτομο",
        quadRoom: "370€/άτομο",
      },
      regular: {
        deposit: "150€",
        singleRoom: "N/A", // Not specified for this retreat, or could be omitted
        doubleRoom: "480€/άτομο",
        tripleRoom: "450€/άτομο",
        quadRoom: "420€/άτομο",
      },
    },
  },
  {
    id: 2,
    slug: "aerial-yoga-retreat-nature",
    title: "Aerial Yoga Retreat μέσα στη φύση!",
    subtitle: "Σύνδεση με το σώμα και τον νου.",
    description:
      "Μετά από το υπέροχο retreat μας στην Εύβοια, επιστρέφουμε με ένα ακόμη μαγευτικό Aerial Yoga Retreat μέσα στη φύση! 🍃 Θα συνδυάσουμε την πρακτική της Yoga και της γείωσης με την εναέρια εμπειρία της Aerial Yoga, προσφέροντάς σας μια μοναδική εμπειρία σύνδεσης με το σώμα και τον νου. 🧘‍♀️✨",
    date: "7-9 Φεβρουαρίου 2025", // Assuming next year if current year's Feb has passed
    startDate: "2025-02-07",
    instructors: [
      "Εύη Πριόνα",
      "Ανθή Ροροπούλου",
      "Ραφαέλα Χατζηκώστα",
      "Νατάσα Πετρίδου",
    ],
    location: "Montanema Handmade Village",
    image: "/retreats/Aerial-Yoga-Retreat-Montanema-Village-7-9-2-2024.webp",
    imageHorizontal:
      "/retreats/Aerial-Yoga-Retreat-Montanema-7-9-2-2024-horizontal.webp",
    includes: [
      "2 διανυκτερεύσεις",
      "2 γεύματα την ημέρα (πρωινό κ βραδινό)",
      "Καθημερινές πρακτικές Yoga και Aerial yoga",
      "Πρακτικές διαλογισμού (mindfulness meditation, aerial nidra)",
      "Aerial & Yin yoga",
      "Somatic work",
      "Hiking",
      "Επίσκεψη στη φάρμα αν μας το επιτρέψει ο καιρός",
      "Στις πρακτικές που θα μοιραστούμε θα είναι μαζί μας οι OMONYMA και Salachi για να κάνουν την εμπειρία πιο ξεχωριστή 🙏🏻",
    ],
    googleFormLink: "https://forms.gle/...",
    partners: [
      {
        name: "OMONYMA",
        description:
          "Η OMONYMA δημιουργήθηκε για να ενώνει ανθρώπους, να τους ωθεί να πραγματοποιούν τα όνειρα και τους στόχους τους. Το όραμα της εταιρείας είναι να δημιουργήσει από την αρχή προϊόντα εύχρηστα, απαραίτητα και πρακτικά, ώστε να συνοδεύουν τον άνθρωπο στο ταξίδι της αρμονίας και της ισορροπίας, προσφέροντας του ακριβώς αυτό που χρειάζεται. Δημιουργήθηκε για ανθρώπους που σέβονται το περιβάλλον , τα ζώα , όλη τη φύση και σκοπός της είναι να μεταφέρει το συναίσθημα της ολότητας και της σύνδεσης ανάμεσα σε όλα τα πλάσματa της Γης , με κάθε δυνατό τρόπo !",
      },
      {
        name: "Salachi",
        description:
          "Η Salachi παρείχε τον εξοπλισμό για το retreat και ένα giveaway για τους συμμετέχοντες, ενισχύοντας το ταξίδι της αρμονίας και της κίνησης.",
      },
    ],
    pricing: {
      earlyBird: {
        endDate: "30/11/24",
        singleRoom: "460€/άτομο",
        doubleRoom: "430€/άτομο",
        tripleRoom: "400€/άτομο",
        quadRoom: "370€/άτομο",
      },
      regular: {
        deposit: "150€",
        singleRoom: "510€/άτομο",
        doubleRoom: "480€/άτομο",
        tripleRoom: "450€/άτομο",
        quadRoom: "420€/άτομο",
      },
    },
  },
  {
    id: 3,
    slug: "echoes-of-autumn-yoga-retreat",
    title: "Echoes of Autumn | Yoga Retreat",
    subtitle: "Μια εποχιακή ανάσα επιστροφής και γείωσης.",
    description:
      "Αυτό το φθινόπωρο, όταν η φύση θα αρχίσει να μαλακώνει και η γη θα ψιθυρίζει ρυθμούς πιο αργούς, σας προσκαλούμε σε ένα τριήμερο retreat αφιερωμένο στην επιστροφή... την σύνδεση με τον εαυτό μας. Μέσα από πρακτικές γιόγκα, διαλογισμό, χαλάρωση και σιωπή, θα δημιουργήσουμε χώρο για ανάπαυση, αποφόρτιση και εσωτερική σύνδεση.",
    date: "21-23 Νοεμβρίου 2025",
    startDate: "2025-11-21",
    instructors: [
      "Εύη Πριόνα",
      "Ανθή Ροροπούλου",
      "Ραφαέλα Χατζηκώστα",
      "Νατάσα Πετρίδου",
    ],
    location: "Loggas Hotel, Σιδηροχώρι Καστοριάς",
    image: "/retreats/Echoes-of-Autumn.webp",
    imageHorizontal: "/retreats/Echoes-of-Autumn-horizontal.webp",
    includes: [
      "2 διανυκτερεύσεις σε δωμάτια με πανοραμική θέα στη λίμνη Καστοριά",
      "Ημιδιατροφή (2 πρωινά & 2 χορταστικά χορτοφαγικά γεύματα)",
      "Καθημερινές πρακτικές Hatha, Vinyasa & Yin Yoga",
      "Ομαδικοί διαλογισμοί & τεχνικές αναπνοής",
      "Autumn hiking & ανακάλυψη της περιοχής",
      "Rituals σύνδεσης εμπνευσμένα από την εποχιακή μετάβαση",
      "Μια εμπειρία σχεδιασμένη με φροντίδα από τέσσερις δασκάλες με κοινό όραμα 🙏🏻",
    ],
    googleFormLink: "https://forms.gle/...",
    partners: [
      {
        name: "OMONYMA",
        description:
          "Η OMONYMA δημιουργήθηκε για να ενώνει ανθρώπους, να τους ωθεί να πραγματοποιούν τα όνειρα και τους στόχους τους. Το όραμα της εταιρείας είναι να δημιουργήσει από την αρχή προϊόντα εύχρηστα, απαραίτητα και πρακτικά, ώστε να συνοδεύουν τον άνθρωπο στο ταξίδι της αρμονίας και της ισορροπίας, προσφέροντας του ακριβώς αυτό που χρειάζεται. Δημιουργήθηκε για ανθρώπους που σέβονται το περιβάλλον , τα ζώα , όλη τη φύση και σκοπός της είναι να μεταφέρει το συναίσθημα της ολότητας και της σύνδεσης ανάμεσα σε όλα τα πλάσματa της Γης , με κάθε δυνατό τρόπo !",
      },
      {
        name: "Salachi",
        description:
          "Η Salachi παρείχε τον εξοπλισμό για το retreat και ένα giveaway για τους συμμετέχοντες, ενισχύοντας το ταξίδι της αρμονίας και της κίνησης.",
      },
    ],
    pricing: {
      earlyBird: {
        endDate: "N/A",
        doubleRoom: "260€/άτομο",
        tripleRoom: "240€/άτομο",
        quadRoom: "220€/άτομο",
      },
      regular: {
        deposit: "100€",
        doubleRoom: "260€/άτομο",
        tripleRoom: "240€/άτομο",
        quadRoom: "220€/άτομο",
      },
    },
  },
  {
    id: 4,
    slug: "flow-and-fly-retreat",
    title: "Flow & Fly Retreat ✨",
    subtitle: "Summer Escape: Flow & Fly Retreat",
    description:
      "Αυτό το καλοκαίρι σας προσκαλούμε σε μια εμπειρία βαθιάς σύνδεσης, κίνησης και ελευθερίας, εκεί όπου η γη συναντά τον αέρα και η πρακτική γίνεται ταξίδι. Το Summer Escape: Flow & Fly Retreat είναι ένα Yoga & Aerial Yoga retreat δίπλα στη θάλασσα, σχεδιασμένο για να επιβραδύνουμε, να αναπνεύσουμε και να επιστρέψουμε στο σώμα και στη φύση. Κάθε retreat μας είναι κάτι περισσότερο από μια απόδραση. Είναι ο χώρος που δημιουργούμε μαζί για να κινηθούμε, να αιωρηθούμε, να γελάσουμε, να ηρεμήσουμε και να συνδεθούμε, με τον εαυτό μας και μεταξύ μας. 🤍",
    date: "25–29 Ιουνίου 2026", // Assuming next year if current year's June has passed
    startDate: "2026-06-25",
    instructors: [
      "Εύη Πριόνα",
      "Ανθή Ροροπούλου",
      "Ραφαέλα Χατζηκώστα",
      "Νατάσα Πετρίδου",
    ],
    location: "Evia Silence Lighthouse, Εύβοια",
    image: "/retreats/Flow-&-Fly-Retreat-25-29-6-2026.webp",
    imageHorizontal:
      "/retreats/Flow-&-Fly-retreat-25-29-6-2026-horizontal.webp",
    includes: [
      "Πρακτικές Yoga & Aerial Yoga",
      "Διαλογισμό & τεχνικές αναπνοής",
      "Οινογνωσία & γευσιγνωσία",
      "Πεζοπορία & εξερεύνηση της φύσης",
      "Επίσκεψη σε καταρράκτες",
      "Χρόνο δίπλα στη θάλασσα, χώρο για ξεκούραση και απλότητα",
      "Δυνατότητα παρακολούθησης των 4 ημερών του retreat",
    ],
    googleFormLink: "https://docs.google.com/forms/d/e/1FAIpQLSeeF-2j9AZuFfv0IrB2KTOyYsYboiSKmHZU9nNCrG5GOmBxiw/viewform",
    partners: [
      {
        name: "OMONYMA",
        description:
          "Η OMONYMA δημιουργήθηκε για να ενώνει ανθρώπους, να τους ωθεί να πραγματοποιούν τα όνειρα και τους στόχους τους. Το όραμα της εταιρείας είναι να δημιουργήσει από την αρχή προϊόντα εύχρηστα, απαραίτητα και πρακτικά, ώστε να συνοδεύουν τον άνθρωπο στο ταξίδι της αρμονίας και της ισορροπίας, προσφέροντας του ακριβώς αυτό που χρειάζεται. Δημιουργήθηκε για ανθρώπους που σέβονται το περιβάλλον , τα ζώα , όλη τη φύση και σκοπός της είναι να μεταφέρει το συναίσθημα της ολότητας και της σύνδεσης ανάμεσα σε όλα τα πλάσματa της Γης , με κάθε δυνατό τρόπo !",
      },
      {
        name: "Salachi",
        description:
          "Η Salachi παρείχε τον εξοπλισμό για το retreat και ένα giveaway για τους συμμετέχοντες, ενισχύοντας το ταξίδι της αρμονίας και της κίνησης.",
      },
    ],
    pricing: {
      earlyBird: {
        endDate: "26/3/26",
        singleRoom: "Επικοινωνήστε μαζί μας",
        doubleRoom: "Επικοινωνήστε μαζί μας",
        tripleRoom: "Επικοινωνήστε μαζί μας",
        quadRoom: "Επικοινωνήστε μαζί μας",
      },
      regular: {
        deposit: "TBA",
        singleRoom: "Επικοινωνήστε μαζί μας",
        doubleRoom: "Επικοινωνήστε μαζί μας",
        tripleRoom: "Επικοινωνήστε μαζί μας",
        quadRoom: "Επικοινωνήστε μαζί μας",
      },
    },
  },
];
