import { LocalizedText } from "@/components/extraComponents/LocaleSwitchTranslate";
export interface Event {
  id: number;
  slug: string;
  title: LocalizedText;
  startDate: string;
  date: LocalizedText;
  time: LocalizedText;
  description: LocalizedText;
  includes: LocalizedText[];
  instructors: LocalizedText[];
  instructorDetails?: LocalizedText;
  pricing?: {
    earlyBird: {
      endDate: string;
      oneDay: string;
      secondDay: string;
      thirdDay: string;
      forthDay: string;
    };
    regular: {
      endDate: string;
      oneDay: string;
      secondDay: string;
      thirdDay: string;
      forthDay: string;
    };
  };
  location: LocalizedText;
  image?: string;
  googleFormLink: string;
}

export const events: Event[] = [
  {
    id: 1,
    slug: "workshop-aerial-yoga-duo",
    title: {

      el: `Workshop Aerial Yoga Duo`,

      en: `Workshop Aerial Yoga Duo`,

    },
    startDate: "2022-11-01",
    date: {

      el: `Σάββατο 01/11/2022`,

      en: `Saturday 01/11/2022`,

    },
    time: {

      el: `Ώρα: 12:00 - 14:00`,

      en: `Time: 12:00 - 14:00`,

    },
    description: {

      el: `Ένα δίωρο εργαστήριο εναέριων ακροβατικών σε ζευγάρια με την χρήση αιώρας. Ελάτε να εξερευνήσουμε ακροβατικές θέσεις σε συνεργασία με τον παρτενέρ σας!\n\nΣτο εργαστήριο θα μάθουμε να συντονίζουμε τις κινήσεις μας με εκείνες με του φίλου μας. Θα αποκτήσουμε εμπιστοσύνη ώστε να μάθουμε να συνεργαζόμαστε!\n\nΘα ξεκινήσουμε ζέσταμα, ακροβατικά, stretching, χαλάρωση και φυσικά όλα αυτά με τον φίλο μας!\n\nΤο εργαστήριο απευθύνεται σε μαθητές που έχουν εμπειρία σε βασικές θέσεις της aerial yoga και σε δασκάλους που θέλουν να γνωρίσουν την aerial yoga duo!\n\nΤοποθεσία: @aiorisis\nΔιδάσκουν: Εύη Πριόνα & Σταλίτσα Laut`,

      en: `A two-hour workshop of aerial acrobatics in pairs using a hammock. Come and explore acrobatic positions in collaboration with your partner!\n\nIn the workshop we will learn to coordinate our movements with those of our friend. We will gain confidence so that we can learn to collaborate!\n\nWe will start with warming up, acrobatics, stretching, relaxation and of course all this with our friend!\n\nThe workshop is aimed at students who have experience in basic aerial yoga positions and at teachers who want to get to know the aerial yoga duo!\n\nLocation: @aiorisis\nTeaching: Evi Priona & Stalitsa Laut`,

    },
    includes: [

      {

        el: `Ένα δίωρο εργαστήριο εναέριων ακροβατικών σε ζευγάρια`,

        en: `A two-hour aerial acrobatics workshop for couples`

      },

      {

        el: `Χρήση αιώρας`,

        en: `Use of hammock`

      },

      {

        el: `Εξερεύνηση ακροβατικών θέσεων σε συνεργασία με τον παρτενέρ σας`,

        en: `Exploring acrobatic positions in collaboration with your partner`

      }

    ],
    instructors: [

      {

        el: `Εύη Πριόνα`,

        en: `Evi Priona`

      },

      {

        el: `Σταλίτσα Laut`,

        en: `Stalitsa Laut`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/Aerial-Yoga-Duo-1-11-2022.webp",
    googleFormLink: "https://forms.gle/...",
  },
  {
    id: 2,
    slug: "christmas-decoration-aiorisis-2022",
    title: {

      el: `Christmas Decoration στο Αιώρησις!`,

      en: `Christmas Decoration at Aiorisis!`,

    },
    startDate: "2022-11-20",
    date: {

      el: `Κυριακή 27/11/2022`,

      en: `Sunday 27/11/2022`,

    },
    time: {

      el: `Ώρα: 17:00`,

      en: `Time: 17:00`,

    },
    description: {

      el: `Την Κυριακή 27/11 στις 17:00 σας προσκαλούμε να στολίσουμε παρέα το Αιώρησις Studio.\n\nΕλάτε να μοιραστούμε την εορταστική ατμόσφαιρα με άκρως χριστουγεννιάτικη διάθεση.\n\nΘα χαρούμε να σας έχουμε κοντά μας.`,

      en: `On Sunday 27/11 at 17:00 we invite you to decorate Aiorisis Studio together.\n\nCome and share the festive atmosphere with a Christmas mood.\n\nWe will be happy to have you with us.`,

    },
    includes: [

      {

        el: `Στολισμός του Αιώρησις Studio`,

        en: `Decoration by Aiorisis Studio`

      },

      {

        el: `Εορταστική ατμόσφαιρα`,

        en: `Festive atmosphere`

      },

      {

        el: `Χριστουγεννιάτικη διάθεση`,

        en: `Christmas mood`

      }

    ],
    instructors: [

      {

        el: `Το Αιώρησις Team`,

        en: `The Aiorisis Team`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/decoration-christmas-20-11-2022.webp",
    googleFormLink: "",
  },
  {
    id: 3,
    slug: "get-into-handstands",
    title: {

      el: `Get into handstands`,

      en: `Get into handstands`,

    },
    startDate: "2023-02-04",
    date: {

      el: `Σάββατο 04/02/2023`,

      en: `Saturday 04/02/2023`,

    },
    time: {

      el: `Ώρα: 12:00`,

      en: `Time: 12:00`,

    },
    description: {

      el: `Σε αυτό το εργαστήριο θα προσεγγίσουμε τα αρχικά στάδια θέσεων που αφορούν στηρίξεις στα χέρια και ανεστραμμένες θέσεις, δίνοντας έμφαση στην ασφαλή προετοιμασία του σώματος, στην κατανόηση, τεχνική/ευθυγράμμιση αυτών και τέλος στο κατευνασμό του σώματος και στην διατήρηση του εύρους των αρθρώσεων.\n\nΟ Νίκος Σταφυλίδης είναι απόφοιτος ιδιωτικής σχολής φυσικοθεραπείας στη Θεσσαλονίκη όπου τα τελευταία 6 χρόνια ασχολείται με την yoga και την ακροβατική έχοντας ακολουθήσει τα προηγούμενα χρόνια το δρόμο των πολεμικών τεχνών και extreme sports.\n\nΠτυχιούχος 200hr ashtanga/iyengar yoga από το 2019 και αυτοδίδακτος στην ακροβατική δίνοντας έμφαση στην ενεργοποίηση και ευθυγράμμιση του σώματος με την αντίσταση της βαρύτητας και το βάρος του σώματος.\n\nΑπευθύνεται σε: Ασκούμενους yoga (beginners, intermediate level), pilates, γυμναστές και ενδιαφερόμενους ακροβατικής.\n\nΤόπος: @aiorisis`,

      en: `In this workshop we will approach the initial stages of positions involving handstands and inverted positions, emphasizing safe preparation of the body, understanding, technique/alignment of these and finally calming the body and maintaining joint range.\n\nNikos Stafylidis is a graduate of a private physiotherapy school in Thessaloniki where for the last 6 years he has been involved in yoga and acrobatics, having followed the path of martial arts and extreme sports in previous years.\n\n200hr ashtanga/iyengar yoga graduate since 2019 and self-taught in acrobatics, emphasizing the activation and alignment of the body with the resistance of gravity and the weight of the body.\n\nAimed at: Yoga practitioners (beginners, intermediate level), pilates, gymnasts and those interested in acrobatics.\n\nLocation: @aiorisis`,

    },
    includes: [

      {

        el: `Ασφαλής προετοιμασία του σώματος`,

        en: `Safe body preparation`

      },

      {

        el: `Τεχνική και ευθυγράμμιση στηρίξεων`,

        en: `Support technique and alignment`

      },

      {

        el: `Ανεστραμμένες θέσεις`,

        en: `Inverted positions`

      },

      {

        el: `Διατήρηση εύρους αρθρώσεων`,

        en: `Maintenance of joint range`

      },

      {

        el: `Κατευνασμός σώματος`,

        en: `Body calming`

      }

    ],
    instructors: [

      {

        el: `Νίκος Σταφυλίδης`,

        en: `Nikos Stafylidis`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/get-into-handstands-18-01-2023.webp",
    googleFormLink: "",
  },
  {
    id: 4,
    slug: "acroyoga-transitions-and-flows",
    title: {

      el: `Acroyoga Transitions and Flows`,

      en: `Acroyoga Transitions and Flows`,

    },
    startDate: "2023-04-01",
    date: {

      el: `Σάββατο 01/04/2023`,

      en: `Saturday 01/04/2023`,

    },
    time: {

      el: `Ώρα: 12:00-15:00 & 17:00-20:00`,

      en: `Time: 12:00-15:00 & 17:00-20:00`,

    },
    description: {

      el: `Το Σάββατο 1 Απριλίου, στη Θεσσαλονίκη, στον υπέροχο χώρο του @aiorisis, βρίσκουμε τον ρυθμό μας στον αέρα με μεταβάσεις σε δυναμική ροή και κύκλους ή αλλιώς “πλυντήρια”, σε ένα workshop για παλιούς και νέους AcroYogis!\n\nΚαθοδηγεί ο John Karvelis (Αθήνα) πιστοποιημένος δάσκαλος Level 2 της AcroYoga International.\n\nΛίγα λόγια για τον εισηγητή:\nΟ Γιάννης Καρβέλης είναι πιστοποιημένος δάσκαλος Acroyoga.org Level 2 και Immersion teacher, πιστοποιημένος δάσκαλος yoga (Hatha και Vinyasa Krama) και θεραπευτής Thai Yoga massage από το Sunshine network. Του αρέσει να συνδυάζει τα δυνατά στοιχεία της ακροβατικής, τις θεραπευτικές τέχνες και την επικοινωνία των ανθρώπων σε ομάδες με την καλύτερη ποιότητα επαφής στο σώμα και το μυαλό.`,

      en: `On Saturday, April 1, in Thessaloniki, at the wonderful venue of @aiorisis, we find our rhythm in the air with transitions to dynamic flow and circles or “laundries”, in a workshop for old and new AcroYogis!\n\nLead by John Karvelis (Athens) certified Level 2 teacher of AcroYoga International.\n\nA few words about the speaker:\nYannis Karvelis is a certified Acroyoga.org Level 2 and Immersion teacher, a certified yoga teacher (Hatha and Vinyasa Krama) and a Thai Yoga massage therapist from the Sunshine network. He likes to combine the powerful elements of acrobatics, healing arts and human communication in groups with the best quality of contact in the body and mind.`,

    },
    includes: [

      {

        el: `Solar Asana Sequence`,

        en: `Solar Asana Sequence`

      },

      {

        el: `Partner Inversions & handstands`,

        en: `Partner Inversions & handstands`

      },

      {

        el: `Τεχνικές δύναμης, ευθυγράμμισης, συντονισμού και συνεργασίας`,

        en: `Techniques of strength, alignment, coordination and cooperation`

      },

      {

        el: `Μεταβάσεις σε ροή (Flows)`,

        en: `Transition to flow (Flows)`

      },

      {

        el: `Πλυντήρια (Washing Machines)`,

        en: `Washing Machines`

      },

      {

        el: `Αποθεραπεία & Thai Massage`,

        en: `Cool-down & Thai Massage`

      }

    ],
    instructors: [

      {

        el: `John Karvelis`,

        en: `John Karvelis`

      }

    ],
    instructorDetails: {

      el: `Λίγα λόγια για τον εισηγητή:\nΟ Γιάννης Καρβέλης είναι πιστοποιημένος δάσκαλος Acroyoga.org Level 2 και Immersion teacher, πιστοποιημένος δάσκαλος yoga (Hatha και Vinyasa Krama) και θεραπευτής Thai Yoga massage από το Sunshine network. Του αρέσει να συνδυάζει τα δυνατά στοιχεία της ακροβατικής, τις θεραπευτικές τέχνες και την επικοινωνία των ανθρώπων σε ομάδες με την καλύτερη ποιότητα επαφής στο σώμα και το μυαλό.`,

      en: `A few words about the speaker:\nYiannis Karvelis is a certified Acroyoga.org Level 2 and Immersion teacher, a certified yoga teacher (Hatha and Vinyasa Krama) and a Thai Yoga massage therapist from the Sunshine network. He loves to combine the strengths of acrobatics, healing arts and human communication in groups with the best quality of contact in the body and mind.`,

    },
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/ACROYOGA_transitions_and_flows_john_karvelis_1_04_23.webp",
    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfBSV3evL7_FqAEzZNoepymhHhl7Vbi6vi6GQwV8n1RScfdfA/viewform?usp=sf_link",
  },
  {
    id: 5,
    slug: "silks-rope-workshops-stella-tzirti",
    title: {

      el: `Silks & Rope Workshops`,

      en: `Silks & Rope Workshops`,

    },
    startDate: "2023-05-07",
    date: {

      el: `Κυριακή 07/05/2023`,

      en: `Sunday 07/05/2023`,

    },
    time: {

      el: `Ώρα: 12:00-14:00 & 15:00-17:00`,

      en: `Time: 12:00-14:00 & 15:00-17:00`,

    },
    description: {

      el: `▫️Group 1: Εφαρμογή δυναμικών τεχνικών (δηλαδή αιωρήσεων) για να “βρεθούμε” από τη μία θέση στην άλλη, να συνδέσουμε, να συνδυάσουμε, να “μπούμε”, να “βγούμε” και να δώσουμε ροή στην κίνησή μας!!\n\n▫️Group 2: Advanced beats, roll ups και meathooks ή συνδυασμός και των τριών..!! Ένα σεμινάριο με advanced υλικό για σχοινί ή πανί, με τόνους τεχνικής!!\n\nΛίγα λόγια για την εισηγήτρια:\nΗ Στέλλα Τζίρτη ειδικεύεται στο ακροβατικό πανί και σχοινί, δίνοντας ιδιαίτερη έμφαση στην τεχνική και κατανόηση του element. Το 2018 κέρδισε την πρώτη θέση στην κατηγορία Advanced Silks στον διαγωνισμό International Pole and Aerial Tournaments στο Ηνωμένο Βασίλειο. Συνεργάζεται με την ομάδα KIRKO, παραδίδοντας σεμινάρια σε θέματα που αφορούν τη δυναμική τεχνική, τα ρολαρίσματα και τη δημιουργική χορογραφία.`,

      en: `▫️Group 1: Application of dynamic techniques (ie aerials) to “find” each other from one position to another, to connect, to combine, to “enter”, to “exit” and to give flow to our movement!!\n\n▫️Group 2: Advanced beats, roll ups and meathooks or a combination of all three..!! A seminar with advanced material for rope or silks, with emphasis on technique!!\n\nA few words about the speaker:\nStella Tzirti specializes in acrobatic silks and rope, with particular emphasis on the technique and understanding of the element. In 2018, she won first place in the Advanced Silks category at the International Pole and Aerial Tournaments competition in the United Kingdom. She collaborates with the KIRKO team, delivering seminars on topics related to dynamic technique, rolling and creative choreography.`,

    },
    includes: [

      {

        el: `Dynamic Transitions & Flows`,

        en: `Dynamic Transitions & Flows`

      },

      {

        el: `Advanced Beats & Roll ups`,

        en: `Advanced Beats & Roll ups`

      },

      {

        el: `Meathooks techniques`,

        en: `Meathooks techniques`

      },

      {

        el: `Τεχνική και κατανόηση του element`,

        en: `Technique and understanding of the element`

      },

      {

        el: `Δυναμική τεχνική σε πανί και σχοινί`,

        en: `Dynamic technique on cloth and rope`

      },

      {

        el: `Προαπαιτούμενα Group 1: Αναστροφές (βάτραχοι) με τεντωμένα πόδια`,

        en: `Prerequisites for Group 1: Inversions (frogs) with straight legs`

      },

      {

        el: `Προαπαιτούμενα Group 2: Καλή γνώση βασικών αιωρήσεων & meathooks`,

        en: `Group 2 Prerequisites: Good knowledge of basic swings & meathooks`

      }

    ],
    instructors: [

      {

        el: `Στέλλα Τζίρτη`,

        en: `Stella Tzirti`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/Silks-Rope-Workshops-07-05-2023.webp",
    googleFormLink: "",
  },
  {
    id: 6,
    slug: "get-into-handstands-alignment-and-technique",
    title: {

      el: `Get Into Handstands(alignment and technique)`,

      en: `Get Into Handstands(alignment and technique)`,

    },
    startDate: "2023-06-10",
    date: {

      el: `Σάββατο 10/06/2023`,

      en: `Saturday 10/06/2023`,

    },
    time: {

      el: `Ώρα: 12:00`,

      en: `Time: 12:00`,

    },
    description: {

      el: `Όλοι μας απολαύσαμε το πρώτο εργαστήριο Get into handstands! Σε αυτό θα δούμε πιο συγκεκριμένα τις κατακόρυφες-ανεστραμμένες θέσεις κ την τεχνική ευθυγράμμισης αυτών, περισσότερο μέσα από ισομετρικές και στατικές θέσεις.\n\nΑπευθύνεται σε: Ασκούμενους yoga (beginners, intermediate level), pilates, γυμναστές και ενδιαφερόμενους ακροβατικής.`,

      en: `We all enjoyed the first workshop Get into handstands! In this one we will look more specifically at vertical-inverted positions and the technique of aligning them, more through isometric and static positions.\n\nAimed at: Yoga practitioners (beginners, intermediate level), pilates, gymnasts and those interested in acrobatics.`,

    },
    includes: [

      {

        el: `Τεχνική ευθυγράμμισης κατακόρυφων θέσεων`,

        en: `Vertical position alignment technique`

      },

      {

        el: `Ισομετρικές και στατικές θέσεις`,

        en: `Isometric and static positions`

      },

      {

        el: `Προσεκτική προετοιμασία σώματος`,

        en: `Careful body preparation`

      },

      {

        el: `Ασφαλής προσέγγιση ανεστραμμένων θέσεων`,

        en: `Safe approach to inverted positions`

      }

    ],
    instructors: [

      {

        el: `Νίκος Σταφυλίδης`,

        en: `Nikos Stafylidis`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/Get-Into-Handstandsalignment-and-technique_10_6_23.webp",
    googleFormLink: "",
  },
  {
    id: 7,
    slug: "backbends-on-arm-balances",
    title: {

      el: `Backbends on arm balances`,

      en: `Backbends on arm balances`,

    },
    startDate: "2023-06-11",
    date: {

      el: `Κυριακή 11/06/2023`,

      en: `Sunday 11/06/2023`,

    },
    time: {

      el: `Ώρα: 12:00`,

      en: `Time: 12:00`,

    },
    description: {

      el: `Στο εργαστήριο αυτό θα εμβαθύνουμε τις ανεστραμμένες θέσεις σε συνδυασμό με τα backbends με σκοπό να επιτύχουμε σταθερότητα σε συνδυασμό με την ασφάλεια του σώματος και την σωστή προετοιμασία αυτού.\n\nΑπευθύνεται σε: Ασκούμενους yoga (intermediate and advanced level), pilates, γυμναστές και ενδιαφερόμενους ακροβατικής.`,

      en: `In this workshop we will deepen the inverted positions in combination with backbends in order to achieve stability combined with the safety of the body and its proper preparation.\n\nAimed at: Yoga practitioners (intermediate and advanced level), pilates, gymnasts and those interested in acrobatics.`,

    },
    includes: [

      {

        el: `Εμβάθυνση σε ανεστραμμένες θέσεις`,

        en: `Deepening in inverted positions`

      },

      {

        el: `Συνδυασμός με backbends`,

        en: `Combination with backbends`

      },

      {

        el: `Τεχνικές σταθερότητας`,

        en: `Stability techniques`

      },

      {

        el: `Ασφαλής προετοιμασία σώματος`,

        en: `Safe body preparation`

      }

    ],
    instructors: [

      {

        el: `Νίκος Σταφυλίδης`,

        en: `Nikos Stafylidis`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/Backbends_on_arm_balances_11_06_23.webp",
    googleFormLink: "",
  },
  {
    id: 8,
    slug: "creative-flow",
    title: {

      el: `Creative Flow Workshop: Getting out of the ordinary`,

      en: `Creative Flow Workshop: Getting out of the ordinary`,

    },
    startDate: "2023-10-21",
    date: {

      el: `Σάββατο 21/10/2023`,

      en: `Saturday 21/10/2023`,

    },
    time: {

      el: `Ώρα: 12:30-14:30`,

      en: `Time: 12:30-14:30`,

    },
    description: {

      el: `Ξεκινάμε την νέα μας σεζόν με το πρώτο workshop!🤩\n\nCreative flow workshop “getting out of the ordinary”\n\nΈνα workshop βασισμένο στην Vinyasa Flow Yoga, με στοιχεια improvisation και βασικές neurodynamics ασκήσεις.\n\nΣε αυτό το σεμινάριο θα εξερευνήσουμε την αναπνοή και το σώμα, το εύρος κίνησης κάθε θέσης, αλλά και ξεχωριστούς συνδυασμούς θέσεων που θα μας βγάλουν από το comfort zone μας και θα μας βάλουν στην δημιουργική ροή.\n\nΘα αφεθούμε στην ροή, αφυπνίζοντας το σώμα, ενθαρρύνοντας το παιχνίδι και την διασκέδαση, με κύρια συστατικά την ενδυνάμωση, την επίγνωση των σωματικών δυνατοτήτων, την κίνηση έξω από τα τετριμμένα και την σύνδεση κίνησης, αναπνοής και ενέργειας.\n\nΑν θέλεις να εξερευνήσει την ροή της κίνησης πέρα από τα όρια του νου, αυτό το workshop είναι για εσένα! Σε περιμένω να το ανακαλύψουμε παρέα!\n\nΗ Ανθή Ροροπούλου είναι πιστοποιημένη δασκάλα γιόγκα από την Yoga Alliance International (700H RYT), με πολυετή εμπειρία και εκπαιδεύσεις στο Ensemble Physical Theatre.\nΣτόχος της είναι, μέσα από τις διδασκαλίες της, να εμπνεύσει τον κόσμο να έρθει σε επαφή με τον αυθεντικό εαυτό, την ευχαρίστηση και την πηγαία ζωτική ενέργεια!`,

      en: `We are starting our new season with the first workshop!🤩\n\nCreative flow workshop “getting out of the ordinary”\n\nA workshop based on Vinyasa Flow Yoga, with elements of improvisation and basic neurodynamics exercises.\n\nIn this seminar we will explore breathing and the body, the range of motion of each position, as well as unique combinations of positions that will take us out of our comfort zone and put us in the creative flow.\n\nWe will abandon ourselves to the flow, awakening the body, encouraging play and fun, with the main ingredients being empowerment, awareness of physical capabilities, movement outside the ordinary and the connection of movement, breath and energy.\n\nIf you want to explore the flow of movement beyond the limits of the mind, this workshop is for you! I'm waiting for you to discover it together!\n\nAnthi Roropoulou is a certified yoga teacher from Yoga Alliance International (700H RYT), with many years of experience and training at Ensemble Physical Theatre.\nHer goal is, through her teachings, to inspire people to get in touch with their authentic self, pleasure and source of vital energy!`,

    },
    includes: [

      {

        el: `Vinyasa Flow Yoga`,

        en: `Vinyasa Flow Yoga`

      },

      {

        el: `Στοιχεία improvisation`,

        en: `Elements of improvisation`

      },

      {

        el: `Neurodynamics ασκήσεις`,

        en: `Neurodynamic exercises`

      },

      {

        el: `Εξερεύνηση αναπνοής και σώματος`,

        en: `Breath and body exploration`

      },

      {

        el: `Σύνδεση κίνησης, αναπνοής και ενέργειας`,

        en: `Connecting movement, breath and energy`

      }

    ],
    instructors: [

      {

        el: `Ανθή Ροροπούλου`,

        en: `Anthi Roropoulou`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/creative-flow-workshop_21_10_23.webp",
    googleFormLink: "",
  },
  {
    id: 9,
    slug: "christmas-decoration-aiorisis-2023",
    title: {

      el: `Christmas Decoration 2023`,

      en: `Christmas Decoration 2023`,

    },
    startDate: "2023-11-26",
    date: {

      el: `Κυριακή 26/11/2023`,

      en: `Sunday 26/11/2023`,

    },
    time: {

      el: `Ώρα: 17:00`,

      en: `Time: 17:00`,

    },
    description: {

      el: `Την Κυριακή 26/11 στις 17:00 σας προσκαλούμε να στολίσουμε παρέα το Αιώρησις Studio.\n\nΕλάτε να μοιραστούμε την εορταστική ατμόσφαιρα με άκρως χριστουγεννιάτικη διάθεση.\n\nΘα χαρούμε να σας έχουμε κοντά μας.`,

      en: `On Sunday 26/11 at 17:00 we invite you to decorate Aiorisis Studio together.\n\nCome and share the festive atmosphere with a very Christmas mood.\n\nWe will be happy to have you with us.`,

    },
    includes: [

      {

        el: `Στολισμός του Αιώρησις Studio`,

        en: `Decoration by Aiorisis Studio`

      },

      {

        el: `Εορταστική ατμόσφαιρα`,

        en: `Festive atmosphere`

      },

      {

        el: `Χριστουγεννιάτικη διάθεση`,

        en: `Christmas mood`

      }

    ],
    instructors: [

      {

        el: `Το Αιώρησις Team`,

        en: `The Aiorisis Team`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/Christmas-Decoration-26_11_23.webp",
    googleFormLink: "",
  },
  {
    id: 10,
    slug: "the-circus-that-came-to-life-at-christmas",
    title: {

      el: `Το τσίρκο που ζωντάνεψε τα Χριστούγεννα`,

      en: `The circus that brought Christmas to life`,

    },
    startDate: "2023-12-17",
    date: {

      el: `Κυριακή 17/12/2023`,

      en: `Sunday 17/12/2023`,

    },
    time: {

      el: `Ώρα: 18:00`,

      en: `Time: 18:00`,

    },
    description: {

      el: `Χριστουγεννιάτικη παράσταση🎄\n\nΤην Κυριακή 17/12 στις 18:00 θα γίνει η Χριστουγεννιάτικη παράστασή μας βασισμένη σε μια ιστορία που θα μαγέψει μικρούς κ μεγάλους. Οι μαθητές της σχολής μας θα συμμετέχουν με χορογραφίες aerial silks, aerial yoga & yoga dance.\n\nΛόγω του περιορισμού του χώρου θα μπορέσετε να μας παρακολουθήσετε live μέσω Instagram & YouTube ♥️💚\n\nΤόπος: @aiorisis`,

      en: `Christmas performance🎄\n\nOn Sunday 17/12 at 18:00 our Christmas performance will take place based on a story that will enchant young and old. Our school students will participate with aerial silks, aerial yoga & yoga dance choreographies.\n\nDue to space limitations, you will be able to watch us live via Instagram & YouTube ♥️💚\n\nLocation: @aiorisis`,

    },
    includes: [

      {

        el: `Χορογραφίες Aerial Silks`,

        en: `Aerial Silks choreographies`

      },

      {

        el: `Χορογραφίες Aerial Yoga`,

        en: `Aerial Yoga choreographies`

      },

      {

        el: `Χορογραφίες Yoga Dance`,

        en: `Yoga Dance choreographies`

      },

      {

        el: `Live streaming (Instagram & YouTube)`,

        en: `Live streaming (Instagram & YouTube)`

      }

    ],
    instructors: [

      {

        el: `Οι μαθητές του Αιώρησις`,

        en: `Students of Aiorisis`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/christmas-circus-performance-2023.webp",
    googleFormLink: "",
  },
  {
    id: 11,
    slug: "straps-beats-workshop",
    title: {

      el: `Straps beats – αιωρήσεις στα straps`,

      en: `Straps beats - Suspensions in straps`,

    },
    startDate: "2024-09-29",
    date: {

      el: `Κυριακή 29/09/2024`,

      en: `Sunday 29/09/2024`,

    },
    time: {

      el: `Ώρα: 12:00 - 14:30`,

      en: `Time: 12:00 - 14:30`,

    },
    description: {

      el: `Επίπεδο strong intermediate - advanced (σε straps ή άλλο εναέριο εξοπλισμό).\n\nΠροαπαιτούμενα:\nΟι συμμετέχοντες θα πρέπει:\n– να μπορούν να αναποδογυρίζουν με άνεση σε κάποιο εναέριο εξοπλισμό\n– να μπορούν να κάνουν έλξεις (χωρίς ή με ελάχιστη βοήθεια)\n– να έχουν εμπειρία σε straps ή σε άλλο εναέριο element (σχοινί, πανί, trapeze, hoop) σε επίπεδο strong intermediate – advanced`,

      en: `Strong intermediate - advanced level (on straps or other aerial equipment).\n\nPrerequisites:\nParticipants should:\n– be able to flip comfortably on some aerial equipment\n– be able to do pull-ups (without or with minimal assistance)\n– have experience on straps or another aerial element (rope, sail, trapeze, hoop) at strong intermediate – advanced level`,

    },
    includes: [

      {

        el: `Τεχνική αιωρήσεων (beats) στα straps`,

        en: `Beats technique in straps`

      },

      {

        el: `Ενδυνάμωση και ειδικές λαβές (grips)`,

        en: `Strength and special grips`

      },

      {

        el: `Roll ups και δυναμικές μεταβάσεις`,

        en: `Roll ups and dynamic transitions`

      },

      {

        el: `Ασκησιολόγιο για προχωρημένο επίπεδο`,

        en: `Workout for advanced level`

      }

    ],
    instructors: [

      {

        el: `Στέλλα Τζίρτη`,

        en: `Stella Tzirti`

      }

    ],
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/workshop-stella-tzirti-straps-beats.webp",
    googleFormLink: "",
  },
  {
    id: 12,
    slug: "arm-balances-workshop-theodoros-famelis",
    title: {

      el: `Challenge your balance`,

      en: `Challenge your balance`,

    },
    startDate: "2024-10-13",
    date: {

      el: `Κυριακή 13/10/2024`,

      en: `Sunday 13/10/2024`,

    },
    time: {

      el: `Ώρα: 12:00 - 14:30`,

      en: `Time: 12:00 - 14:30`,

    },
    description: {

      el: `Αυτοπεποίθηση, πίστη, θάρρος, εμπιστοσύνη! Τελικά χρειάζεται μόνο δύναμη για να «πάρεις» το βάρος στα χέρι σου? Τι είναι αυτό που τελικά μας δυσκολεύει περισσότερο στις στηρίξεις στα χέρια?\n\nΈλα μαζί μας στο σεμινάριο arm balances για να ανακαλύψουμε, να πειραματιστούμε και να παίξουμε με τις στηρίξεις στα χέρια.\n\nΈνα μάθημα ροής που στόχο θα έχει να προετοιμάσει και να οδηγήσει το σώμα και τον νου στην καλύτερη δυνατή προσέγγιση σε αυτή την ομάδα δυναμικών θέσεων της γιόγκα. Κατάλληλο για όλα τα επίπεδα ασκουμένων.\n\n`,

      en: `Confidence, faith, courage, trust! After all, you only need strength to "take" the weight in your hands? What is it that ultimately gives us the most difficulty in handstands?\n\nJoin us at the arm balances workshop to discover, experiment and play with handstands.\n\nA flow class that will aim to prepare and guide the body and mind into the best possible approach to this dynamic group of yoga poses. Suitable for all levels of practitioners.\n\n`,

    },
    includes: [

      {

        el: `Προετοιμασία σώματος και νου για στηρίξεις`,

        en: `Body and mind preparation for handstands`

      },

      {

        el: `Πειραματισμός και παιχνίδι με arm balances`,

        en: `Experimentation and play with arm balances`

      },

      {

        el: `Δυναμικό μάθημα ροής (Flow)`,

        en: `Dynamic flow class (Flow)`

      },

      {

        el: `Προσέγγιση κατάλληλη για όλα τα επίπεδα`,

        en: `Approach suitable for all levels`

      }

    ],
    instructors: [

      {

        el: `Θεόδωρος Φαμέλης`,

        en: `Theodoros Famelis`

      }

    ],
    instructorDetails: {

      el: `Λίγα λόγια για τον εισηγητή:\nΟ Θεόδωρος Φαμέλης ενημερώνεται διαρκώς, παρακολουθώντας σεμινάρια και workshops. Το 2013 έκανε το πρώτο Teacher Training 200hrs στο Ghyta Yoga School, ενώ το 2014 ολοκλήρωσε και το Advanced Sadhana Training 300hrs στον ίδιο χώρο. Το 2018 ολοκλήρωσε το YogaWorks YTT 200h ενώ το 2022 τις 300 ώρες στο ίδιο σύστημα. Συμμετέχει ως εκπαιδευτής σε εκπαιδεύσεις δασκάλων γιόγκα και το μονοπάτι του συνεχίζεται με σκοπό την πνευματική γαλήνη.`,

      en: `A few words about the speaker:\nTheodoros Famelis is constantly updated, attending seminars and workshops. In 2013 he did the first Teacher Training 200hrs at Ghyta Yoga School, while in 2014 he completed the Advanced Sadhana Training 300hrs at the same place. In 2018 he completed the YogaWorks YTT 200h while in 2022 the 300 hours in the same system. He participates as an instructor in yoga teacher trainings and his path continues with the aim of spiritual peace.`,

    },
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/arm-balances-workshop-theodoros-famelis-13-10-2024.webp",
    googleFormLink: "",
  },
  {
    id: 13,
    slug: "acroyoga-inversions-on-humans-karvelis",
    title: {

      el: `Acroyoga Inversions on Humans`,

      en: `Acroyoga Inversions on Humans`,

    },
    startDate: "2024-12-14",
    date: {

      el: `Σάββατο 14/12/2024`,

      en: `Saturday 14/12/2024`,

    },
    time: {

      el: `Ώρα: 17:00 - 20:00`,

      en: `Time: 17:00 - 20:00`,

    },
    description: {

      el: `Το επίπεδο του εργαστηρίου είναι ανοιχτό για όλους. Δεν απαιτείται κάποια προηγούμενη εμπειρία. Δεν χρειάζεται επίσης να φέρετε κάποιον μαζί σας, τα ζευγάρια και οι τριάδες δημιουργούνται εκεί.\n\nΣτο πρώτο κομμάτι του εργαστηρίου θα εμβαθύνουμε σε τεχνικές στηρίξεων/ κατακόρυφα, τρόπους και ασκήσεις (drills) που κάνουν τις στηρίξεις στα χέρια προσιτές και για όλους. Στο δεύτερο κομμάτι θα δουλέψουμε σε ομάδες (ζευγάρια και τριάδες) κάνοντας εφαρμογή των στηρίξεων στο ακροβατικό μας ζευγάρι.\n\nΙδανικό εργαστήριο για ακροβάτες, δασκάλους yoga, performers, χορευτές και γενικότερα για όσους ενδιαφέρονται να ανακαλύψουν διαφορετικούς τρόπους κίνησης. Φέρτε την καλή σας διάθεση, όρεξη για συνεργασία και ελάτε να πετάξουμε παρέα!\n\n`,

      en: `The workshop level is open to everyone. No previous experience is required. You also don't need to bring anyone with you, the pairs and trios are created there.\n\nIn the first part of the workshop we will delve into support/vertical techniques, ways and drills that make handstands accessible to everyone. In the second part we will work in groups (pairs and trios) applying the supports to our acrobatic couple.\n\nIdeal workshop for acrobats, yoga teachers, performers, dancers and in general for those interested in discovering different ways of movement. Bring your good mood, appetite for collaboration and come and fly together!\n\n`,

    },
    includes: [

      {

        el: `Warm up για κατακόρυφα & Δυναμική ευλυγισία`,

        en: `Warm up for verticals & Dynamic flexibility`

      },

      {

        el: `Acrobatics vocabulary & Είσοδοι σε κατακόρυφα`,

        en: `Acrobatics vocabulary & Entering verticals`

      },

      {

        el: `Ασκήσεις ισορροπίας & εμπιστοσύνης`,

        en: `Balance and confidence exercises`

      },

      {

        el: `Spotting drills & Acroyoga calibrations`,

        en: `Spotting drills & Acroyoga calibrations`

      },

      {

        el: `Assisted inversions`,

        en: `Assisted inversions`

      }

    ],
    instructors: [

      {

        el: `Γιάννης Καρβέλης`,

        en: `John Karvelis`

      }

    ],
    instructorDetails: {

      el: `Λίγα λόγια για τον εισηγητή:\nΟ Γιάννης Καρβέλης είναι πιστοποιημένος δάσκαλος Acroyoga.org Level 2 και Immersion teacher, πιστοποιημένος δάσκαλος yoga (Hatha και Vinyasa Krama) και θεραπευτής Thai Yoga massage από το Sunshine network. Του αρέσει να συνδυάζει τα δυνατά στοιχεία της ακροβατικής, τις θεραπευτικές τέχνες και την επικοινωνία των ανθρώπων σε ομάδες με την καλύτερη ποιότητα επαφής στο σώμα και το μυαλό.`,

      en: `A few words about the speaker:\nYiannis Karvelis is a certified Acroyoga.org Level 2 and Immersion teacher, a certified yoga teacher (Hatha and Vinyasa Krama) and a Thai Yoga massage therapist from the Sunshine network. He loves to combine the strengths of acrobatics, healing arts and human communication in groups with the best quality of contact in the body and mind.`,

    },
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/acroyoga-inversions-on-human-14-12-2024.webp",
    googleFormLink: "",
  },
  {
    id: 14,
    slug: "echoes-of-cities",
    title: {

      el: `Echoes of Cities – Θεατρική παράσταση μαθητών`,

      en: `Echoes of Cities – Student Theater Performance`,

    },
    startDate: "2025-06-14",
    date: {

      el: `Σάββατο 14/06/2025`,

      en: `Saturday 14/06/2025`,

    },
    time: {

      el: `Ώρα: 18:30`,

      en: `Time: 18:30`,

    },
    description: {

      el: `Η παράσταση της χρονιάς πλησιάζει! Με ενθουσιασμό σας παρουσιάζουμε το “Echoes of cities” μια παράσταση φτιαγμένη με πολύ μεράκι και ενθουσιασμό!\n\nΣας περιμένουμε στις 14 Ιουνίου στο @theatro_avlaia για να ταξιδέψουμε μαζί μέσα από την κίνηση και τον χορό, στον χρόνο και στις πόλεις του κόσμου!\n\nΚείμενο: Εύη Πριόνα\nΕπιμέλεια παράστασης : Εύη Πριόνα & Έλλη Καρυάτη\nΧορογραφική σύνθεση : Εύη Πριόνα, Νατάσα Πετρίδου, Ραφαέλα Χατζηκώστα, Ναταλία Μιχαήλ, Στέλλα Τζίρτη, Μαριαλίνα Παπαδοπούλου & Ελένη Τσιακίρη\nΒίντεο/φωτογραφία: Γιάννης Μιτσοκάπας, Ευγενία\n\n`,

      en: `The show of the year is approaching! We are excited to present “Echoes of cities”, a show made with great passion and enthusiasm!\n\nWe are waiting for you on June 14 at @theatro_avlaia to travel together through movement and dance, through time and through the cities of the world!\n\nText: Evi Priona\nPerformance editing: Evi Priona & Elli Karyati\nChoreographic composition: Evi Priona, Natasa Petridou, Rafaela Hatzikosta, Natalia Michael, Stella Tzirti, Marialina Papadopoulou & Eleni Tsiakiri\nVideo/photography: Yiannis Mitsokapas, Eugenia\n\n`,

    },
    includes: [

      {

        el: `Πρωτότυπη χορογραφική σύνθεση`,

        en: `Original choreographic composition`

      },

      {

        el: `Συμμετοχή όλων των τμημάτων της σχολής`,

        en: `Participation of all departments of the school`

      },

      {

        el: `Θεματικό ταξίδι στις πόλεις του κόσμου`,

        en: `Thematic journey to the cities of the world`

      },

      {

        el: `Συνδυασμός κίνησης, χορού και εναέριων τεχνών`,

        en: `Combination of movement, dance and aerial arts`

      },

      {

        el: `Κείμενα και καλλιτεχνική επιμέλεια`,

        en: `Texts and artistic direction`

      }

    ],
    instructors: [

      {

        el: `Το Αιώρησις Team`,

        en: `The Aiorisis Team`

      }

    ],
    instructorDetails: {

      el: ``,

      en: ``,

    },
    location: {

      el: `Θέατρο Αυλαία`,

      en: `Avlaia Theatre`,

    },
    image: "/events/echoes-of-cities-10-06-2025.webp",
    googleFormLink: "",
  },
  {
    id: 15,
    slug: "aerial-yoga-duo",
    title: {

      el: `Aerial Yoga duo workshop with Εύη Πριόνα & Στέλλα Ζούπου`,

      en: `Aerial Yoga duo workshop with Evi Priona & Stella Zoupou`,

    },
    startDate: "2025-10-12",
    date: {

      el: `Κυριακή 12/10/2025`,

      en: `Sunday 12/10/2025`,

    },
    time: {

      el: `Ώρα: 18:30`,

      en: `Time: 18:30`,

    },
    description: {

      el: `Ένα εξειδικευμένο workshop Aerial Yoga για ζευγάρια (duo). Εξερευνούμε τη συνεργασία, την εμπιστοσύνη και την κοινή ροή στον αέρα χρησιμοποιώντας την αιώρα. Το μάθημα εστιάζει στον συντονισμό και την αλληλοϋποστήριξη των ασκουμένων.`,

      en: `A specialized Aerial Yoga workshop for couples (duo). We explore collaboration, trust and shared flow in the air using the hammock. The class focuses on coordination and mutual support of the practitioners.`,

    },
    includes: [

      {

        el: `Τεχνικές Aerial Duo`,

        en: `Aerial Duo Techniques`

      },

      {

        el: `Ασκήσεις εμπιστοσύνης`,

        en: `Trust Exercises`

      },

      {

        el: `Συγχρονισμένη κίνηση στην αιώρα`,

        en: `Synchronized movement in the hammock`

      }

    ],
    instructors: [

      {

        el: `Εύη Πριόνα`,

        en: `Evi Priona`

      },

      {

        el: `Στέλλα Ζούπου`,

        en: `Stella Zoupou`

      }

    ],
    instructorDetails: {

      el: ``,

      en: ``,

    },
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/aerial-yoga-duo-workshop12-10-2025.webp",
    googleFormLink: "",
  },
  {
    id: 16,
    slug: "assists-in-inversions-handstands",
    title: {

      el: `Assists in inversions & handstands`,

      en: `Assists in inversions & handstands`,

    },
    startDate: "2025-11-08",
    date: {

      el: `Σάββατο 08/11/2025`,

      en: `Saturday 08/11/2025`,

    },
    time: {

      el: `Ώρα: 18:00 - 20:30`,

      en: `Time: 18:00 - 20:30`,

    },
    description: {

      el: `Το σεμινάριο διοργανώνεται από το @verticalproject_trainings σε συνεργασία με το Aiorisis.\n\n Σε αυτό το εργαστήριο ξεκινάμε με μια δομημένη Vinyasa (Solar Asana Sequence), που βήμα προς βήμα θα μας οδηγήσει σε αναστροφές, εξειδικευμένες κινήσεις και αλληλουχίες που εκπαιδεύουν το φυσικό σώμα και “ελέγχουν” τον συναισθηματικό νου. Στη συνέχεια, έξυπνες ασκήσεις -drills- των στηρίξεων στα χέρια, δίνουν το σχήμα σε αυτές πριν ακόμα την τελική τους εκτέλεση! \n\nΣυμπληρωματικά, η κατάλληλη υποστήριξη από τους φίλους μας (assists) – και ΟΧΙ από τους τοίχους! – καθώς και πολλά ακόμα μικρά βήματα, θα μας οδηγήσουν σε αμέτρητες μικρές “νίκες” που θα καταλήξουν εν τέλει στο στόχο ενός σταθερού κατακορύφου! Το εργαστήριο απευθύνεται σε: Ασκούμενους με μερική εμπειρία στη yoga, χωρίς σοβαρούς τραυματισμούς, Δασκάλους Yoga, Pilates, χορευτές και performers, γυμναστές και γενικότερα όσους ασχολούνται με το φυσικό σώμα. acroyoga και yoga, και να συνδεθεί με διαφορετικές κοινότητες.\n\n Με μεγάλη δραστηριότητα σε πολλές χώρες ανά τον κόσμο, σε AcroYoga, ακροβατικά ζευγάρια, Yoga και Thai Massage, ο Γιάννης θα μας καθοδηγήσει σε ένα εργαστήριο που περιλαμβάνει:\n\n`,

      en: `The seminar is organized by @verticalproject_trainings in collaboration with Aiorisis.\n\n In this workshop we start with a structured Vinyasa (Solar Asana Sequence), which step by step will lead us to inversions, specialized movements and sequences that train the physical body and “control” the emotional mind. Then, smart exercises -drills- of the supports on the hands, give shape to them even before their final execution! \n\nIn addition, the appropriate support from our friends (assists) - and NOT from the walls! - as well as many more small steps, will lead us to countless small “victories” that will ultimately lead to the goal of a stable vertical! The workshop is aimed at: Practitioners with partial experience in yoga, without serious injuries, Yoga, Pilates Teachers, dancers and performers, trainers and in general those who deal with the physical body. acroyoga and yoga, and to connect with different communities.\n\n With great activity in many countries around the world, in AcroYoga, acrobatic couples, Yoga and Thai Massage, Giannis will guide us in a workshop that includes:\n\n`,

    },
    includes: [

      {

        el: `Solar Asana Sequence (Vinyasa leading to Handstand) `,

        en: `Solar Asana Sequence (Vinyasa leading to Handstand) `

      },

      {

        el: `ATB (Alignment-Tightness-Balance) drills in Inversions`,

        en: `ATB (Alignment-Tightness-Balance) drills in Inversions`

      },

      {

        el: `Assisted Inversions & Range of motion drills `,

        en: `Assisted Inversions & Range of motion drills `

      },

      {

        el: `Thai massage for shoulders and lower back release`,

        en: `Thai massage for shoulders and lower back release`

      }

    ],
    instructors: [

      {

        el: `Γιάννης Καρβέλης`,

        en: `John Karvelis`

      }

    ],
    instructorDetails: {

      el: `Λίγα λόγια για τον εισηγητή:\nΟ Γιάννης Καρβέλης είναι πιστοποιημένος δάσκαλος Acroyoga.org Level 2 και Immersion teacher, πιστοποιημένος δάσκαλος yoga (Hatha και Vinyasa Krama) και θεραπευτής Thai Yoga massage από το Sunshine network. Του αρέσει να συνδυάζει τα δυνατά στοιχεία της ακροβατικής, τις θεραπευτικές τέχνες και την επικοινωνία των ανθρώπων σε ομάδες με την καλύτερη ποιότητα επαφής στο σώμα και το μυαλό.`,

      en: `A few words about the speaker:\nYiannis Karvelis is a certified Acroyoga.org Level 2 and Immersion teacher, a certified yoga teacher (Hatha and Vinyasa Krama) and a Thai Yoga massage therapist from the Sunshine network. He loves to combine the strengths of acrobatics, healing arts and human communication in groups with the best quality of contact in the body and mind.`,

    },
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/assists-in-inversions-&-handstands.webp",
    googleFormLink: "",
  },
  {
    id: 17,
    slug: "backbends-workshop-by-famelis",
    title: {

      el: `Backbends workshop`,

      en: `Backbends workshop`,

    },
    startDate: "2025-11-29",
    date: {

      el: `Σάββατο 29/11/2025`,

      en: `Saturday 29/11/2025`,

    },
    time: {

      el: `Ώρα: 18:00 - 20:00`,

      en: `Time: 18:00 - 20:00`,

    },
    description: {

      el: `Πόσες φορές ακούμε backbends και αυτόματα μας «τραβάει» η μέση; Μήπως δεν θα έπρεπε; Στο πρώτο μας σεμινάριο θα εξερευνήσουμε τις υπερεκτάσεις μέσα από μια δυναμική ροή.\n\nΘα προθερμάνουμε το σώμα, θα ξεμπλοκάρουμε τα σημεία-κλειδιά για ασφαλείς οπίσθιες κάμψεις και θα μάθουμε πώς να τις προσεγγίζουμε με δύναμη, επίγνωση και άνεση. \n\n`,

      en: `How many times do we hear backbends and our lower back automatically tightens? Shouldn't it? In our first seminar, we will explore hyperextensions through a dynamic flow.\n\nWe will warm up the body, unblock the key points for safe backbends, and learn how to approach them with strength, awareness, and comfort. \n\n`,

    },
    includes: [

      {

        el: `Εξερεύνηση υπερεκτάσεων (Backbends) μέσω δυναμικής ροής`,

        en: `Exploration of hyperextensions (Backbends) through dynamic flow`

      },

      {

        el: `Προθέρμανση και στοχευμένο 'ξεμπλοκάρισμα' σημείων-κλειδιών`,

        en: `Warm-up and targeted 'unblocking' of key points`

      },

      {

        el: `Τεχνικές για ασφαλείς οπίσθιες κάμψεις χωρίς επιβάρυνση στη μέση`,

        en: `Techniques for safe backbends without burdening the lower back`

      },

      {

        el: `Ανάπτυξη δύναμης και σωματικής επίγνωσης`,

        en: `Strength development and body awareness`

      },

      {

        el: `Προσέγγιση των οπίσθιων κάμψεων με άνεση`,

        en: `Approaching backbends with comfort`

      }

    ],
    instructors: [

      {

        el: `Θεόδωρος Φαμέλης`,

        en: `Theodoros Famelis`

      }

    ],
    instructorDetails: {

      el: `Λίγα λόγια για τον εισηγητή:\nΟ Θεόδωρος Φαμέλης ενημερώνεται διαρκώς, παρακολουθώντας σεμινάρια και workshops. Το 2013 έκανε το πρώτο Teacher Training 200hrs στο Ghyta Yoga School, ενώ το 2014 ολοκλήρωσε και το Advanced Sadhana Training 300hrs στον ίδιο χώρο. Το 2018 ολοκλήρωσε το YogaWorks YTT 200h ενώ το 2022 τις 300 ώρες στο ίδιο σύστημα. Συμμετέχει ως εκπαιδευτής σε εκπαιδεύσεις δασκάλων γιόγκα και το μονοπάτι του συνεχίζεται με σκοπό την πνευματική γαλήνη.`,

      en: `A few words about the speaker:\nTheodoros Famelis is constantly updated, attending seminars and workshops. In 2013 he did the first Teacher Training 200hrs at Ghyta Yoga School, while in 2014 he completed the Advanced Sadhana Training 300hrs at the same place. In 2018 he completed the YogaWorks YTT 200h while in 2022 the 300 hours in the same system. He participates as an instructor in yoga teacher trainings and his path continues with the aim of spiritual peace.`,

    },
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/backbends-workshop-by-famelis.webp",
    googleFormLink: "",
  },
  {
    id: 18,
    slug: "upside-down-workshop-by-famelis",
    title: {

      el: `Upside down workshop`,

      en: `Upside down workshop`,

    },
    startDate: "2025-11-30",
    date: {

      el: `Κυριακή 30/11/2025`,

      en: `Sunday 30/11/2025`,

    },
    time: {

      el: `Ώρα: 11:00 - 13:00`,

      en: `Time: 11:00 - 13:00`,

    },
    description: {

      el: `Σε αυτό το workshop εστιάζουμε στις ανεστραμμένες θέσεις (Inversions). Θα δουλέψουμε την τεχνική για το κατακόρυφο, την ισορροπία στα χέρια και την ασφαλή είσοδο και έξοδο από τις θέσεις upside-down.`,

      en: `In this workshop we focus on inversions. We will work on vertical technique, hand balance, and safe entry and exit from upside-down positions.`,

    },
    includes: [

      {

        el: `Τεχνική Inversions`,

        en: `Inversion technique`

      },

      {

        el: `Ενδυνάμωση κορμού και ώμων`,

        en: `Core and shoulder strengthening`

      },

      {

        el: `Εξάσκηση στη σταθερότητα`,

        en: `Balance drills`

      },

      {

        el: `Ασφαλής προσέγγιση κατακόρυφου`,

        en: `Safe approach to handstands`

      }

    ],
    instructors: [

      {

        el: `Θεόδωρος Φαμέλης`,

        en: `Theodoros Famelis`

      }

    ],
    instructorDetails: {

      el: `Λίγα λόγια για τον εισηγητή:\nΟ Θεόδωρος Φαμέλης ενημερώνεται διαρκώς, παρακολουθώντας σεμινάρια και workshops. Το 2013 έκανε το πρώτο Teacher Training 200hrs στο Ghyta Yoga School, ενώ το 2014 ολοκλήρωσε και το Advanced Sadhana Training 300hrs στον ίδιο χώρο. Το 2018 ολοκλήρωσε το YogaWorks YTT 200h ενώ το 2022 τις 300 ώρες στο ίδιο σύστημα. Συμμετέχει ως εκπαιδευτής σε εκπαιδεύσεις δασκάλων γιόγκα και το μονοπάτι του συνεχίζεται με σκοπό την πνευματική γαλήνη.`,

      en: `A few words about the speaker:\nTheodoros Famelis is constantly updated, attending seminars and workshops. In 2013 he did the first Teacher Training 200hrs at Ghyta Yoga School, while in 2014 he completed the Advanced Sadhana Training 300hrs at the same place. In 2018 he completed the YogaWorks YTT 200h while in 2022 the 300 hours in the same system. He participates as an instructor in yoga teacher trainings and his path continues with the aim of spiritual peace.`,

    },
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/upside-down-workshop-by-famelis.webp",
    googleFormLink: "",
  },
  {
    id: 19,
    slug: "workshop-creative-flow-with-anthi-roro",
    title: {

      el: `Workshop Creative Flow with Anthi Roropoulou`,

      en: `Workshop Creative Flow with Anthi Roropoulou`,

    },
    startDate: "2025-12-07",
    date: {

      el: `Κυριακή 07/12/2025`,

      en: `Sunday 07/12/2025`,

    },
    time: {

      el: `Ώρα: 18:30`,

      en: `Time: 18:30`,

    },
    description: {

      el: `Ένα δίωρο ταξίδι ελεύθερης ροής, κίνησης και αυθεντικής έκφρασης. Μέσα από τη σύνδεση σώματος, αναπνοής και δημιουργικότητας, θα εξερευνήσουμε πώς η πρακτική μπορεί να γίνει ένας χώρος ελευθερίας και εσωτερικής έμπνευσης. Έλα να αφεθείς στη ροή, να ξεφύγεις από το comfort zone σου και να ανακαλύψεις νέους τρόπους να συνδέεσαι με τον εαυτό σου..\n\nΗ ενέργεια, η προσπάθεια, τα χαμόγελα - όλα όσα κάνουν αυτό το workshop κάτι μοναδικό.\n\nΠετάξαμε, γελάσαμε, κουραστήκαμε, αλλά πάνω απ’ όλα… συνδεθήκαμε. 💫\n\n`,

      en: `A two-hour journey of free flow, movement and authentic expression. Through the connection of body, breath and creativity, we will explore how practice can become a space of freedom and inner inspiration. Come let yourself go with the flow, escape your comfort zone and discover new ways to connect with yourself..\n\nThe energy, the effort, the smiles - everything that makes this workshop unique.\n\nWe flew, we laughed, we got tired, but above all… we connected. 💫\n\n`,

    },
    includes: [

      {

        el: `Vinyasa Flow πρακτική`,

        en: `Vinyasa Flow Practice`

      },

      {

        el: `Κίνηση και Αυτοέκφραση`,

        en: `Creative Movement`

      },

      {

        el: `Τεχνικές αναπνοής και εστίασης`,

        en: `Breathing and focusing techniques`

      }

    ],
    instructors: [

      {

        el: `Ανθή Ροροπούλου`,

        en: `Anthi Roropoulou`

      }

    ],
    instructorDetails: {

      el: `Η Ανθή Ροροπούλου διδάσκει yoga τα τελευταία 8 χρόνια με στόχο της να υποστηρίξει το μονοπάτι των μαθητών/τριών της στην πρακτική, να εμπνεύσει, να βοηθήσει και να εξελίξει τις δυνατότητες τους. Μέσα από την συνεχή εξέλιξη της και εκπαίδευση της θέλει να μοιραστεί την γνώση και την μαγεία αυτής της πρακτικής και να δημιουργήσει μια ολοκληρωμένη εμπειρία για τους συμμετέχοντες.\nΠιστοποιημένη από την Yoga Alliance India - Master yoga teacher 700h`,

      en: `Anthi Roropoulou has been teaching yoga for the last 8 years with the aim of supporting her students' path in practice, inspiring, helping and developing their potential. Through her continuous evolution and training, she wants to share the knowledge and magic of this practice and create a complete experience for the participants.\nCertified by Yoga Alliance India - Master yoga teacher 700h`,

    },
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/workshop-creative-flow-with-anthi-roro.webp",
    googleFormLink: "",
  },
  {
    id: 20,
    slug: "flow-to-the-sound",
    title: {

      el: `Flow to the sound`,

      en: `Flow to the sound`,

    },
    startDate: "2026-01-17",
    date: {

      el: `Σάββατο 17/01/2026`,

      en: `Saturday 17/01/2026`,

    },
    time: {

      el: `Ώρα: 18:00 - 19:30`,

      en: `Time: 18:00 - 19:30`,

    },
    description: {

      el: `Τι συμβαίνει όταν σταματάς να σκέφτεσαι την ροή αλλά αρχίζεις να την ακούς;\n\nΌταν η πρακτική δεν ακολουθείται μόνο από την κίνηση αλλά από τον ήχο, την αναπνοή και τον ρυθμό.🎶`,

      en: `What happens when you stop thinking about flow and start listening to it?\n\nWhen practice is not only followed by movement but also by sound, breath and rhythm.🎶`,

    },
    includes: [

      {

        el: `Πρακτική Vinyasa Flow σε πλήρη αρμονία με τον ήχο`,

        en: `Vinyasa Flow practice in complete harmony with sound`

      },

      {

        el: `Συντονισμός αναπνοής (Pranayama) με ηχητικά τοπία (Soundscapes)`,

        en: `Breathing coordination (Pranayama) with soundscapes`

      },

      {

        el: `Εξερεύνηση της κίνησης μέσα από τον ρυθμό και την εσωτερική ακρόαση`,

        en: `Exploration of movement through rhythm and inner listening`

      },

      {

        el: `Εμπειρία βαθιάς χαλάρωσης (Savasana) με θεραπευτικούς ήχους`,

        en: `Deep relaxation experience (Savasana) with therapeutic sounds`

      },

      {

        el: `Σύνδεση κίνησης, ήχου και ενέργειας`,

        en: `Connection of movement, sound and energy`

      }

    ],
    instructors: [

      {

        el: `Γιάννης Μιτσοκάπας`,

        en: `Giannis Mitsokapas`

      }

    ],
    instructorDetails: {

      el: ``,

      en: ``,

    },
    location: {

      el: ``,

      en: ``,

    },
    image: "/events/flow-to-the-sound-masterclass-17-01-2026.webp",
    googleFormLink: "",
  },
  {
    id: 21,
    slug: "ocean-of-emotions",
    title: {

      el: `Ocean of Emotions`,

      en: `Ocean of Emotions`,

    },
    startDate: "2026-06-06",
    date: {

      el: `Σάββατο 06/06/2026`,

      en: `Saturday 06/06/2026`,

    },
    time: {

      el: `Ώρα: 18:30`,

      en: `Time: 18:30`,

    },
    description: {

      el: `Υπάρχουν συναισθήματα που δεν λέγονται.\nΜόνο κινούνται. Αναπνέουν. Αιωρούνται.\n\nΣώματα στον αέρα γίνονται κύματα, άλλοτε ήρεμα, άλλοτε ορμητικά.\nΗ ένταση συναντά τον ρυθμό, η ευαισθησία μπλέκεται με τη δύναμη, και κάθε κίνηση αφηγείται μια ιστορία.\n\nΑφέσου. Νιώσε. Βυθίσου.\n\nΜια παράσταση εναέριων ακροβατικών που κινείται ανάμεσα στην αγάπη, τη μοναξιά, τη σύγκρουση και την αρμονία.`,

      en: `There are feelings that are not said.\nThey only move. They breathe. They float.\n\nBodies in the air become waves, sometimes calm, sometimes impetuous.\nIntensity meets rhythm, sensitivity is intertwined with strength, and every movement tells a story.\n\nLet go. Feel. Immerse yourself.\n\nA performance of aerial acrobatics that moves between love, loneliness, conflict and harmony.`,

    },
    includes: [

      {

        el: `Πρωτότυπη παράσταση εναέριων ακροβατικών & χορού`,

        en: `Original performance of aerial acrobatics & dance`

      },

      {

        el: `Θεματική προσέγγιση συναισθημάτων (Αγάπη, Μοναξιά, Σύγκρουση, Αρμονία)`,

        en: `Thematic approach to emotions (Love, Loneliness, Conflict, Harmony)`

      },

      {

        el: `Αφήγηση και πρωτότυπα κείμενα`,

        en: `Narration and original texts`

      },

      {

        el: `Συνδυασμός εναέριων τεχνών (Silks, Hoop, Aerial Yoga, Straps, Flying Pole & Rope) και σύγχρονης κίνησης`,

        en: `Combination of aerial arts (Silks, Hoop, Aerial Yoga, Straps, Flying Pole & Rope) and contemporary movement`

      },

      {

        el: `Συμμετοχή των σπουδαστών και δασκάλων της σχολής`,

        en: `Participation of students and teachers of the school`

      }

    ],
    instructors: [

      {

        el: `Εύη Πριόνα`,

        en: `Evi Priona`

      },

      {

        el: `Νατάσα Πετρίδου`,

        en: `Natasa Petridou`

      },

      {

        el: `Ραφαέλα Χατζηκώστα`,

        en: `Rafaela Chatzikosta`

      },

      {

        el: `Στέλλα Τζίρτη`,

        en: `Stella Tzirti`

      },

      {

        el: `Ναταλία Μιχαήλ`,

        en: `Natalia Michail`

      },

      {

        el: `Μαριαλίνα Παπαδοπούλου`,

        en: `Marialina Papadopoulou`

      }

    ],
    instructorDetails: {

      el: `Κείμενο: Εύη Πριόνα | Αφήγηση: Γιάννης Μιτσοκάπας | Χορογραφίες: Εύη Πριόνα, Ραφαέλα Χατζηκώστα, Νατάσα Πετρίδου, Στέλλα Τζίρτη, Ναταλία Μιχαήλ, Μαριαλίνα Παπαδοπούλου`,

      en: `Text: Evi Priona | Narration: Giannis Mitsokapas | Choreographies: Evi Priona, Rafaela Chatzikosta, Natasa Petridou, Stella Tzirti, Natalia Michail, Marialina Papadopoulou`,

    },
    location: {

      el: `Thessaloniki Concert Hall`,

      en: `Thessaloniki Concert Hall`,

    },
    image: "/events/ocean-of-emotions.webp",
    googleFormLink: "https://www.more.com/gr-el/tickets/music/aiorisis-ocean-of-emotions/",
  },
];
