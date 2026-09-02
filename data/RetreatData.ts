import { LocalizedText } from "@/components/extraComponents/LocaleSwitchTranslate";

export interface Retreat {
  id: number;
  slug: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  description: LocalizedText;
  date: LocalizedText;
  startDate: string;

  instructors: LocalizedText[];
  location: LocalizedText;

  image: string;
  imageHorizontal: string;

  includes: LocalizedText[];

  googleFormLink?: string;

  partners?: {
    name: string;
    description: LocalizedText;
  }[];

  pricing: {
    earlyBird: {
      endDate: string;
      singleRoom?: LocalizedText;
      doubleRoom: LocalizedText;
      tripleRoom: LocalizedText;
      quadRoom: LocalizedText;
    };

    regular: {
      deposit: string;
      singleRoom?: LocalizedText;
      doubleRoom: LocalizedText;
      tripleRoom: LocalizedText;
      quadRoom: LocalizedText;
    };
  };
}

export const RetreatData: Retreat[] = [
  /* =========================================================
     1. ΓΗ ΚΑΙ ΑΕΡΑΣ
  ========================================================= */

  {
    id: 1,
    slug: "gei-kai-aeras-aerial-yoga-retreat",

    title: {
      el: "Γη και Αέρας: Aerial & Yoga Retreat",
      en: "Earth & Air: Aerial & Yoga Retreat",
    },

    subtitle: {
      el: "Γιατί Yoga και Aerial Yoga μαζί;",
      en: "Why combine Yoga and Aerial Yoga?",
    },

    description: {
      el: "Η διαλογιστική φύση της Yoga έρχεται να αγκαλιάσει την εναέρια πρακτική. Στις 6-9 Ιουνίου θα βρισκόμαστε στην όμορφη Εύβοια στο Eco Silence Suites Hotel για να απολαύσουμε τις πρακτικές μας με την υπέροχη θέα του Αιγαίου!",
      en: "The meditative nature of Yoga meets aerial practice. From June 6 to 9, we will be in beautiful Evia at Eco Silence Suites Hotel, enjoying our practices with a wonderful view of the Aegean Sea!",
    },

    date: {
      el: "6-9 Ιουνίου 2024",
      en: "6-9 June 2024",
    },

    startDate: "2024-06-06",

    instructors: [
      {
        el: "Εύη Πριόνα",
        en: "Evi Priona",
      },
      {
        el: "Ανθή Ροροπούλου",
        en: "Anthi Roropoulou",
      },
      {
        el: "Ραφαέλα Χατζηκώστα",
        en: "Rafaela Hatzikosta",
      },
      {
        el: "Νατάσα Πετρίδου",
        en: "Natasa Petridou",
      },
    ],

    location: {
      el: "Eco Silence Suites Hotel, Εύβοια",
      en: "Eco Silence Suites Hotel, Evia",
    },

    image: "/retreats/aerial-yoga-Retreat-6-me-9-6-24.webp",

    imageHorizontal:
      "/retreats/aerial-yoga-Retreat-6-me-9-6-24-horizontal.webp",

    includes: [
      {
        el: "3 διανυκτερεύσεις",
        en: "3 nights",
      },
      {
        el: "2 γεύματα την ημέρα (πρωινό κ βραδινό)",
        en: "2 meals per day (breakfast and dinner)",
      },
      {
        el: "Καθημερινές πρακτικές Yoga και Aerial Yoga",
        en: "Daily Yoga and Aerial Yoga practices",
      },
      {
        el: "Πρακτικές διαλογισμού (mindfulness meditation, aerial nidra)",
        en: "Meditation practices (mindfulness meditation, aerial nidra)",
      },
      {
        el: "Aerial & Yin Yoga",
        en: "Aerial & Yin Yoga",
      },
      {
        el: "Somatic work",
        en: "Somatic work",
      },
      {
        el: "Hiking",
        en: "Hiking",
      },
      {
        el: "Στις πρακτικές που θα μοιραστούμε θα είναι μαζί μας οι OMONYMA και Salachi για να κάνουν την εμπειρία πιο ξεχωριστή 🙏🏻",
        en: "OMONYMA and Salachi will join us during our practices to make the experience even more special 🙏🏻",
      },
    ],

    googleFormLink: "https://forms.gle/...",

    partners: [
      {
        name: "OMONYMA",

        description: {
          el: "Η OMONYMA δημιουργήθηκε για να ενώνει ανθρώπους, να τους ωθεί να πραγματοποιούν τα όνειρα και τους στόχους τους. Το όραμα της εταιρείας είναι να δημιουργήσει από την αρχή προϊόντα εύχρηστα, απαραίτητα και πρακτικά, ώστε να συνοδεύουν τον άνθρωπο στο ταξίδι της αρμονίας και της ισορροπίας, προσφέροντάς του ακριβώς αυτό που χρειάζεται. Δημιουργήθηκε για ανθρώπους που σέβονται το περιβάλλον, τα ζώα και όλη τη φύση, με σκοπό να μεταφέρει το συναίσθημα της ολότητας και της σύνδεσης ανάμεσα σε όλα τα πλάσματα της Γης.",
          en: "OMONYMA was created to bring people together and encourage them to pursue their dreams and goals. Its vision is to create practical, useful and easy-to-use products that accompany people on their journey toward harmony and balance. It was created for people who respect the environment, animals and nature, with the aim of promoting a sense of wholeness and connection between all living beings.",
        },
      },

      {
        name: "Salachi",

        description: {
          el: "Η Salachi παρείχε τον εξοπλισμό για το retreat και ένα giveaway για τους συμμετέχοντες, ενισχύοντας το ταξίδι της αρμονίας και της κίνησης.",
          en: "Salachi provided equipment for the retreat as well as a giveaway for the participants, enhancing the experience of movement and connection.",
        },
      },
    ],

    pricing: {
      earlyBird: {
        endDate: "31/3/24",

        singleRoom: {
          el: "N/A",
          en: "N/A",
        },

        doubleRoom: {
          el: "430€/άτομο",
          en: "€430/person",
        },

        tripleRoom: {
          el: "400€/άτομο",
          en: "€400/person",
        },

        quadRoom: {
          el: "370€/άτομο",
          en: "€370/person",
        },
      },

      regular: {
        deposit: "150€",

        singleRoom: {
          el: "N/A",
          en: "N/A",
        },

        doubleRoom: {
          el: "480€/άτομο",
          en: "€480/person",
        },

        tripleRoom: {
          el: "450€/άτομο",
          en: "€450/person",
        },

        quadRoom: {
          el: "420€/άτομο",
          en: "€420/person",
        },
      },
    },
  },

  /* =========================================================
     2. MONTANEMA
  ========================================================= */

  {
    id: 2,
    slug: "aerial-yoga-retreat-nature",

    title: {
      el: "Aerial Yoga Retreat μέσα στη φύση!",
      en: "Aerial Yoga Retreat in Nature!",
    },

    subtitle: {
      el: "Σύνδεση με το σώμα και τον νου.",
      en: "Reconnect with body and mind.",
    },

    description: {
      el: "Μετά από το υπέροχο retreat μας στην Εύβοια, επιστρέφουμε με ένα ακόμη μαγευτικό Aerial Yoga Retreat μέσα στη φύση! 🍃 Θα συνδυάσουμε την πρακτική της Yoga και της γείωσης με την εναέρια εμπειρία της Aerial Yoga, προσφέροντάς σας μια μοναδική εμπειρία σύνδεσης με το σώμα και τον νου. 🧘‍♀️✨",
      en: "After our wonderful retreat in Evia, we return with another magical Aerial Yoga Retreat surrounded by nature! 🍃 We will combine the grounding practice of Yoga with the aerial experience of Aerial Yoga, creating a unique opportunity to reconnect with body and mind. 🧘‍♀️✨",
    },

    date: {
      el: "7-9 Φεβρουαρίου 2025",
      en: "7-9 February 2025",
    },

    startDate: "2025-02-07",

    instructors: [
      {
        el: "Εύη Πριόνα",
        en: "Evi Priona",
      },
      {
        el: "Ανθή Ροροπούλου",
        en: "Anthi Roropoulou",
      },
      {
        el: "Ραφαέλα Χατζηκώστα",
        en: "Rafaela Hatzikosta",
      },
      {
        el: "Νατάσα Πετρίδου",
        en: "Natasa Petridou",
      },
    ],

    location: {
      el: "Montanema Handmade Village",
      en: "Montanema Handmade Village",
    },

    image:
      "/retreats/Aerial-Yoga-Retreat-Montanema-Village-7-9-2-2024.webp",

    imageHorizontal:
      "/retreats/Aerial-Yoga-Retreat-Montanema-7-9-2-2024-horizontal.webp",

    includes: [
      {
        el: "2 διανυκτερεύσεις",
        en: "2 nights",
      },
      {
        el: "2 γεύματα την ημέρα (πρωινό κ βραδινό)",
        en: "2 meals per day (breakfast and dinner)",
      },
      {
        el: "Καθημερινές πρακτικές Yoga και Aerial Yoga",
        en: "Daily Yoga and Aerial Yoga practices",
      },
      {
        el: "Πρακτικές διαλογισμού (mindfulness meditation, aerial nidra)",
        en: "Meditation practices (mindfulness meditation, aerial nidra)",
      },
      {
        el: "Aerial & Yin Yoga",
        en: "Aerial & Yin Yoga",
      },
      {
        el: "Somatic work",
        en: "Somatic work",
      },
      {
        el: "Hiking",
        en: "Hiking",
      },
      {
        el: "Επίσκεψη στη φάρμα αν μας το επιτρέψει ο καιρός",
        en: "Visit to the farm, weather permitting",
      },
      {
        el: "Στις πρακτικές που θα μοιραστούμε θα είναι μαζί μας οι OMONYMA και Salachi για να κάνουν την εμπειρία πιο ξεχωριστή 🙏🏻",
        en: "OMONYMA and Salachi will join us during our practices to make the experience even more special 🙏🏻",
      },
    ],

    googleFormLink: "https://forms.gle/...",

    partners: [
      {
        name: "OMONYMA",

        description: {
          el: "Η OMONYMA δημιουργήθηκε για να ενώνει ανθρώπους, να τους ωθεί να πραγματοποιούν τα όνειρα και τους στόχους τους. Το όραμα της εταιρείας είναι να δημιουργήσει από την αρχή προϊόντα εύχρηστα, απαραίτητα και πρακτικά, ώστε να συνοδεύουν τον άνθρωπο στο ταξίδι της αρμονίας και της ισορροπίας, προσφέροντάς του ακριβώς αυτό που χρειάζεται.",
          en: "OMONYMA was created to bring people together and encourage them to pursue their dreams and goals. Its vision is to create practical and useful products designed to accompany people on their journey toward harmony and balance.",
        },
      },

      {
        name: "Salachi",

        description: {
          el: "Η Salachi παρείχε τον εξοπλισμό για το retreat και ένα giveaway για τους συμμετέχοντες, ενισχύοντας το ταξίδι της αρμονίας και της κίνησης.",
          en: "Salachi provided equipment for the retreat as well as a giveaway for the participants, enhancing the experience of movement and connection.",
        },
      },
    ],

    pricing: {
      earlyBird: {
        endDate: "30/11/24",

        singleRoom: {
          el: "460€/άτομο",
          en: "€460/person",
        },

        doubleRoom: {
          el: "430€/άτομο",
          en: "€430/person",
        },

        tripleRoom: {
          el: "400€/άτομο",
          en: "€400/person",
        },

        quadRoom: {
          el: "370€/άτομο",
          en: "€370/person",
        },
      },

      regular: {
        deposit: "150€",

        singleRoom: {
          el: "510€/άτομο",
          en: "€510/person",
        },

        doubleRoom: {
          el: "480€/άτομο",
          en: "€480/person",
        },

        tripleRoom: {
          el: "450€/άτομο",
          en: "€450/person",
        },

        quadRoom: {
          el: "420€/άτομο",
          en: "€420/person",
        },
      },
    },
  },

  /* =========================================================
     3. ECHOES OF AUTUMN
  ========================================================= */

  {
    id: 3,
    slug: "echoes-of-autumn-yoga-retreat",

    title: {
      el: "Echoes of Autumn | Yoga Retreat",
      en: "Echoes of Autumn | Yoga Retreat",
    },

    subtitle: {
      el: "Μια εποχιακή ανάσα επιστροφής και γείωσης.",
      en: "A seasonal invitation to slow down and reconnect.",
    },

    description: {
      el: "Αυτό το φθινόπωρο, όταν η φύση θα αρχίσει να μαλακώνει και η γη θα ψιθυρίζει ρυθμούς πιο αργούς, σας προσκαλούμε σε ένα τριήμερο retreat αφιερωμένο στην επιστροφή... τη σύνδεση με τον εαυτό μας. Μέσα από πρακτικές γιόγκα, διαλογισμό, χαλάρωση και σιωπή, θα δημιουργήσουμε χώρο για ανάπαυση, αποφόρτιση και εσωτερική σύνδεση.",
      en: "This autumn, as nature begins to soften and the earth moves at a slower rhythm, we invite you to a three-day retreat dedicated to returning inward and reconnecting with yourself. Through Yoga practices, meditation, relaxation and moments of silence, we will create space for rest, release and inner connection.",
    },

    date: {
      el: "21-23 Νοεμβρίου 2025",
      en: "21-23 November 2025",
    },

    startDate: "2025-11-21",

    instructors: [
      {
        el: "Εύη Πριόνα",
        en: "Evi Priona",
      },
      {
        el: "Ανθή Ροροπούλου",
        en: "Anthi Roropoulou",
      },
      {
        el: "Ραφαέλα Χατζηκώστα",
        en: "Rafaela Hatzikosta",
      },
      {
        el: "Νατάσα Πετρίδου",
        en: "Natasa Petridou",
      },
    ],

    location: {
      el: "Loggas Hotel, Σιδηροχώρι Καστοριάς",
      en: "Loggas Hotel, Sidirochori, Kastoria",
    },

    image: "/retreats/Echoes-of-Autumn.webp",

    imageHorizontal:
      "/retreats/Echoes-of-Autumn-horizontal.webp",

    includes: [
      {
        el: "2 διανυκτερεύσεις σε δωμάτια με πανοραμική θέα στη λίμνη Καστοριά",
        en: "2 nights in rooms with panoramic views of Lake Kastoria",
      },
      {
        el: "Ημιδιατροφή (2 πρωινά & 2 χορταστικά χορτοφαγικά γεύματα)",
        en: "Half board (2 breakfasts and 2 generous vegetarian meals)",
      },
      {
        el: "Καθημερινές πρακτικές Hatha, Vinyasa & Yin Yoga",
        en: "Daily Hatha, Vinyasa & Yin Yoga practices",
      },
      {
        el: "Ομαδικοί διαλογισμοί & τεχνικές αναπνοής",
        en: "Group meditation & breathing techniques",
      },
      {
        el: "Autumn hiking & ανακάλυψη της περιοχής",
        en: "Autumn hiking & exploration of the surrounding area",
      },
      {
        el: "Rituals σύνδεσης εμπνευσμένα από την εποχιακή μετάβαση",
        en: "Connection rituals inspired by the seasonal transition",
      },
      {
        el: "Μια εμπειρία σχεδιασμένη με φροντίδα από τέσσερις δασκάλες με κοινό όραμα 🙏🏻",
        en: "An experience thoughtfully designed by four teachers sharing a common vision 🙏🏻",
      },
    ],

    googleFormLink: "https://forms.gle/...",

    partners: [
      {
        name: "OMONYMA",

        description: {
          el: "Η OMONYMA δημιουργήθηκε για να ενώνει ανθρώπους, να τους ωθεί να πραγματοποιούν τα όνειρα και τους στόχους τους. Το όραμα της εταιρείας είναι να δημιουργήσει από την αρχή προϊόντα εύχρηστα, απαραίτητα και πρακτικά, ώστε να συνοδεύουν τον άνθρωπο στο ταξίδι της αρμονίας και της ισορροπίας.",
          en: "OMONYMA was created to bring people together and encourage them to pursue their dreams and goals. Its vision is to create practical products that support people on their journey toward harmony and balance.",
        },
      },

      {
        name: "Salachi",

        description: {
          el: "Η Salachi παρείχε τον εξοπλισμό για το retreat και ένα giveaway για τους συμμετέχοντες, ενισχύοντας το ταξίδι της αρμονίας και της κίνησης.",
          en: "Salachi provided equipment for the retreat as well as a giveaway for the participants.",
        },
      },
    ],

    pricing: {
      earlyBird: {
        endDate: "N/A",

        doubleRoom: {
          el: "260€/άτομο",
          en: "€260/person",
        },

        tripleRoom: {
          el: "240€/άτομο",
          en: "€240/person",
        },

        quadRoom: {
          el: "220€/άτομο",
          en: "€220/person",
        },
      },

      regular: {
        deposit: "100€",

        doubleRoom: {
          el: "260€/άτομο",
          en: "€260/person",
        },

        tripleRoom: {
          el: "240€/άτομο",
          en: "€240/person",
        },

        quadRoom: {
          el: "220€/άτομο",
          en: "€220/person",
        },
      },
    },
  },

  /* =========================================================
     4. FLOW & FLY
  ========================================================= */

  {
    id: 4,
    slug: "flow-and-fly-retreat",

    title: {
      el: "Flow & Fly Retreat ✨",
      en: "Flow & Fly Retreat ✨",
    },

    subtitle: {
      el: "Summer Escape: Flow & Fly Retreat",
      en: "Summer Escape: Flow & Fly Retreat",
    },

    description: {
      el: "Αυτό το καλοκαίρι σας προσκαλούμε σε μια εμπειρία βαθιάς σύνδεσης, κίνησης και ελευθερίας, εκεί όπου η γη συναντά τον αέρα και η πρακτική γίνεται ταξίδι. Το Summer Escape: Flow & Fly Retreat είναι ένα Yoga & Aerial Yoga retreat δίπλα στη θάλασσα, σχεδιασμένο για να επιβραδύνουμε, να αναπνεύσουμε και να επιστρέψουμε στο σώμα και στη φύση. Κάθε retreat μας είναι κάτι περισσότερο από μια απόδραση. Είναι ο χώρος που δημιουργούμε μαζί για να κινηθούμε, να αιωρηθούμε, να γελάσουμε, να ηρεμήσουμε και να συνδεθούμε, με τον εαυτό μας και μεταξύ μας. 🤍",
      en: "This summer, we invite you to an experience of movement, freedom and deep connection, where earth meets air and practice becomes a journey. Summer Escape: Flow & Fly Retreat is a Yoga & Aerial Yoga retreat by the sea, designed to help us slow down, breathe and reconnect with the body and nature. Every retreat is more than simply a getaway. It is a space we create together to move, fly, laugh, rest and reconnect with ourselves and one another. 🤍",
    },

    date: {
      el: "25–29 Ιουνίου 2026",
      en: "25–29 June 2026",
    },

    startDate: "2026-06-25",

    instructors: [
      {
        el: "Εύη Πριόνα",
        en: "Evi Priona",
      },
      {
        el: "Ανθή Ροροπούλου",
        en: "Anthi Roropoulou",
      },
      {
        el: "Ραφαέλα Χατζηκώστα",
        en: "Rafaela Hatzikosta",
      },
      {
        el: "Νατάσα Πετρίδου",
        en: "Natasa Petridou",
      },
    ],

    location: {
      el: "Evia Silence Lighthouse, Εύβοια",
      en: "Evia Silence Lighthouse, Evia",
    },

    image:
      "/retreats/Flow-&-Fly-Retreat-25-29-6-2026.webp",

    imageHorizontal:
      "/retreats/Flow-&-Fly-retreat-25-29-6-2026-horizontal.webp",

    includes: [
      {
        el: "Πρακτικές Yoga & Aerial Yoga",
        en: "Yoga & Aerial Yoga practices",
      },
      {
        el: "Διαλογισμό & τεχνικές αναπνοής",
        en: "Meditation & breathing techniques",
      },
      {
        el: "Οινογνωσία & γευσιγνωσία",
        en: "Wine tasting & local tasting experience",
      },
      {
        el: "Πεζοπορία & εξερεύνηση της φύσης",
        en: "Hiking & nature exploration",
      },
      {
        el: "Επίσκεψη σε καταρράκτες",
        en: "Visit to waterfalls",
      },
      {
        el: "Χρόνο δίπλα στη θάλασσα, χώρο για ξεκούραση και απλότητα",
        en: "Time by the sea, with space for rest and simplicity",
      },
      {
        el: "Δυνατότητα παρακολούθησης των 4 ημερών του retreat",
        en: "Option to attend four days of the retreat",
      },
    ],

    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeeF-2j9AZuFfv0IrB2KTOyYsYboiSKmHZU9nNCrG5GOmBxiw/viewform",

    partners: [
      {
        name: "OMONYMA",

        description: {
          el: "Η OMONYMA δημιουργήθηκε για να ενώνει ανθρώπους, να τους ωθεί να πραγματοποιούν τα όνειρα και τους στόχους τους. Το όραμα της εταιρείας είναι να δημιουργήσει από την αρχή προϊόντα εύχρηστα, απαραίτητα και πρακτικά, ώστε να συνοδεύουν τον άνθρωπο στο ταξίδι της αρμονίας και της ισορροπίας.",
          en: "OMONYMA was created to bring people together and encourage them to pursue their dreams and goals. Its vision is to create practical products that support people on their journey toward harmony and balance.",
        },
      },

      {
        name: "Salachi",

        description: {
          el: "Η Salachi παρείχε τον εξοπλισμό για το retreat και ένα giveaway για τους συμμετέχοντες, ενισχύοντας το ταξίδι της αρμονίας και της κίνησης.",
          en: "Salachi provided equipment for the retreat as well as a giveaway for the participants.",
        },
      },
    ],

    pricing: {
      earlyBird: {
        endDate: "26/3/26",

        singleRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },

        doubleRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },

        tripleRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },

        quadRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },
      },

      regular: {
        deposit: "TBA",

        singleRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },

        doubleRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },

        tripleRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },

        quadRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },
      },
    },
  },

  /* =========================================================
     5. THE AUTUMN PAUSE
  ========================================================= */

  {
    id: 5,
    slug: "the-autumn-pause",

    title: {
      el: "The Autumn Pause",
      en: "The Autumn Pause",
    },

    subtitle: {
      el: "Autumn Escape: Yoga Retreat",
      en: "Autumn Escape: Yoga Retreat",
    },

    description: {
      el: `🍂 Αυτό το φθινόπωρο, όταν η φύση ντύνεται στα πιο ζεστά της χρώματα, σας προσκαλούμε σε ένα τριήμερο retreat στο Πήλιο, όπου η κίνηση, η φύση και η σιωπή συναντιούνται. Μια μικρή παύση από την ένταση της καθημερινότητας. Μια ευκαιρία να απομακρυνθούμε για λίγο από τα «πρέπει», από τον θόρυβο και τη βιασύνη.

🧘🏻‍♀️ Μέσα από πρακτικές Vinyasa & Yin Yoga, διαλογισμό, τεχνικές αναπνοής και στιγμές σιωπής, θα δημιουργήσουμε χώρο για χαλάρωση, αποφόρτιση και εσωτερική σύνδεση.

🌿 Και θα αφήσουμε τη φύση να γίνει μέρος της πρακτικής μας. Θα περπατήσουμε στο Μονοπάτι των Κενταύρων, ανάμεσα στα δέντρα και τα νερά του Πηλίου, αφήνοντας το σώμα να κινηθεί και το μυαλό να ησυχάσει.

✨ Ένα φθινοπωρινό pause. Μια επιστροφή στο σώμα. Μια συνάντηση με τον εαυτό μας.`,

      en: `🍂 This autumn, as nature dresses itself in its warmest colours, we invite you to a three-day retreat in Pelion, where movement, nature and stillness meet. A short pause from the intensity of everyday life. An opportunity to step away for a while from obligations, noise and constant rushing.

🧘🏻‍♀️ Through Vinyasa & Yin Yoga practices, meditation, breathing techniques and moments of silence, we will create space for relaxation, release and inner connection.

🌿 Nature will become part of our practice. We will walk along the Centaurs' Path, surrounded by the trees and flowing waters of Pelion, allowing the body to move and the mind to become quieter.

✨ An autumn pause. A return to the body. A meeting with ourselves.`,
    },

    date: {
      el: "13-15 Νοεμβρίου 2026",
      en: "13-15 November 2026",
    },

    startDate: "2026-11-13",

    instructors: [
      {
        el: "Εύη Πριόνα",
        en: "Evi Priona",
      },
      {
        el: "Νατάσα Πετρίδου",
        en: "Natasa Petridou",
      },
    ],

    location: {
      el: "Valeni Boutique Hotel & Spa, Πήλιο",
      en: "Valeni Boutique Hotel & Spa, Pelion",
    },

    image:
      "/retreats/the-autumn-pause-13-me-15-11-26.webp",

    imageHorizontal:
      "/retreats/the-autumn-pause-13-me-15-11-26-horizontal.webp",

    includes: [
      {
        el: "Πρακτικές Vinyasa Yoga",
        en: "Vinyasa Yoga practices",
      },
      {
        el: "Διαλογισμό & τεχνικές αναπνοής",
        en: "Meditation & breathing techniques",
      },
      {
        el: "Πεζοπορία & εξερεύνηση της φύσης",
        en: "Hiking & nature exploration",
      },
    ],

    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeu0Ruu2FumyIomR1PzU1O183sDFUB0AM2blS4PVehlT27oZg/viewform?usp=dialog",

    partners: [
      {
        name: "OMONYMA",

        description: {
          el: "Η OMONYMA δημιουργήθηκε για να ενώνει ανθρώπους, να τους ωθεί να πραγματοποιούν τα όνειρα και τους στόχους τους. Το όραμα της εταιρείας είναι να δημιουργήσει από την αρχή προϊόντα εύχρηστα, απαραίτητα και πρακτικά, ώστε να συνοδεύουν τον άνθρωπο στο ταξίδι της αρμονίας και της ισορροπίας.",
          en: "OMONYMA was created to bring people together and encourage them to pursue their dreams and goals. Its vision is to create practical products that support people on their journey toward harmony and balance.",
        },
      },
    ],

    pricing: {
      earlyBird: {
        endDate: "11/10/26",

        singleRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },

        doubleRoom: {
          el: "290€/άτομο",
          en: "€290/person",
        },

        tripleRoom: {
          el: "260€/άτομο",
          en: "€260/person",
        },

        quadRoom: {
          el: "250€/άτομο",
          en: "€250/person",
        },
      },

      regular: {
        deposit: "100€",

        singleRoom: {
          el: "Επικοινωνήστε μαζί μας",
          en: "Contact us",
        },

        doubleRoom: {
          el: "340€/άτομο",
          en: "€340/person",
        },

        tripleRoom: {
          el: "310€/άτομο",
          en: "€310/person",
        },

        quadRoom: {
          el: "300€/άτομο",
          en: "€300/person",
        },
      },
    },
  },
];