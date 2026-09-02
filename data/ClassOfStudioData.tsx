import type { LocalizedText } from "@/components/extraComponents/LocaleSwitchTranslate";

export interface Class {
  id: number;
  slug: string;
  className: LocalizedText;
  icon: string;
  image: string;
  shortDescription: LocalizedText;
  description: LocalizedText;
  timeOfClass: LocalizedText;
  color?: string;
}

export const classes: Class[] = [
  {
    id: 1,
    slug: "aerial-yoga",
    className: {
      el: "Aerial Yoga",
      en: "Aerial Yoga",
    },
    icon: "/icons/aerial-yoga.webp",
    image: "/classes/class-aerial-yoga.webp",
    shortDescription: {
      el: "Η Aerial Yoga είναι μία μοναδική πρακτική που συνδυάζει παραδοσιακές στάσεις της Yoga και ακροβατικές στάσεις εμπνευσμένες από τις εναέριες τέχνες.",
      en: "Aerial Yoga is a unique practice that combines traditional Yoga poses with acrobatic poses inspired by aerial arts.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Η Aerial Yoga είναι μία μοναδική πρακτική που συνδυάζει παραδοσιακές στάσεις της Yoga και ακροβατικές στάσεις εμπνευσμένες από τις εναέριες τέχνες.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Ποια είναι τα οφέλη που προσφέρει η Aerial Yoga;</p>
        <p class="mb-8">Η Aerial Yoga δεν είναι απλώς εντυπωσιακή – προσφέρει <strong>ολιστικά οφέλη</strong> σε σώμα και πνεύμα:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Εκγύμναση όλου του σώματος</h3>
                <p>Δουλεύει εντατικά τον κορμό, τα χέρια, την πλάτη και τα πόδια, προσφέροντας πλήρη ενεργοποίηση.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ενίσχυση δύναμης & ευλυγισίας</h3>
                <p>Οι ασκήσεις στο ύψος απαιτούν σωματικό έλεγχο, βοηθώντας στη μυϊκή ενδυνάμωση και στη βελτίωση της ελαστικότητας.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ισορροπία & σωστή στάση σώματος</h3>
                <p>Η αιώρηση αναγκάζει το σώμα να σταθεροποιείται συνεχώς, διορθώνοντας την κακή στάση και ενισχύοντας τη σωματική επίγνωση.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Βελτίωση μνήμης & συγκέντρωσης</h3>
                <p>Ο συντονισμός αναπνοής, κίνησης και προσοχής ενισχύει την πνευματική διαύγεια και την εστίαση.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ενίσχυση της διάθεσης & της ψυχολογικής ευεξίας</h3>
                <p>Η εναέρια κίνηση δημιουργεί αίσθημα ελευθερίας, απελευθερώνει ενδορφίνες και καταπολεμά το άγχος.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ανακούφιση από μυοσκελετικούς πόνους</h3>
                <p>Η αποσυμπίεση της σπονδυλικής στήλης μειώνει την πίεση σε αυχένα, μέση και πλάτη.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Συμβολή στην καρδιαγγειακή υγεία & τη μακροζωία</h3>
                <p>Η τακτική πρακτική ενεργοποιεί την κυκλοφορία, υποστηρίζει την πέψη και βελτιώνει τη λειτουργία του νευρικού συστήματος.</p>
            </li>
        </ul>
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Aerial Yoga is a unique practice that combines traditional Yoga poses and acrobatic poses inspired by aerial arts.</p>

        <p class="mb-4 text-[#B9007C] font-bold">What are the benefits of Aerial Yoga?</p>
        <p class="mb-8">Aerial Yoga is not just impressive – it offers <strong>holistic benefits</strong> to body and mind:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Full body workout</h3>
                <p>It works intensely on the core, arms, back, and legs, offering full activation.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Strength & flexibility enhancement</h3>
                <p>Exercises at height require body control, helping in muscle strengthening and improving elasticity.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Balance & correct posture</h3>
                <p>Swinging forces the body to constantly stabilize, correcting bad posture and enhancing body awareness.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Improvement of memory & concentration</h3>
                <p>The coordination of breath, movement, and attention enhances mental clarity and focus.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Mood & psychological well-being enhancement</h3>
                <p>Aerial movement creates a feeling of freedom, releases endorphins, and fights stress.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Relief from musculoskeletal pain</h3>
                <p>Decompression of the spine reduces pressure on the neck, lower back, and back.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Contribution to cardiovascular health & longevity</h3>
                <p>Regular practice activates circulation, supports digestion, and improves nervous system function.</p>
            </li>
        </ul>
        `,
    },
    timeOfClass: {
      el: "60 λεπτά",
      en: "60 minutes",
    },
    color: "#B07BAC",
  },
  {
    id: 2,
    slug: "aerial-yoga-kids",
    className: {
      el: "Aerial Yoga Kids",
      en: "Aerial Yoga Kids",
    },
    icon: "/icons/aerial-yoga-kid.webp",
    image: "/classes/class-aerial-yoga-kids.webp",
    shortDescription: {
      el: "Τα παιδιά (Ηλικίες από 5 και άνω) διασκεδάζουν μέσω της αιώρας ενώ ταυτόχρονα βελτιώνεται η φυσική τους κατάσταση, η σωματική τους δύναμη, η ευλυγισία, η ισορροπία, ο κινητικός συντονισμός και ψυχοσωματική τους ανάπτυξη.",
      en: "Children (ages 5 and up) have fun through the hammock while at the same time improving their physical condition, physical strength, flexibility, balance, motor coordination and psychosomatic development.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Η Aerial Yoga Kids είναι μια διασκεδαστική και δημιουργική πρακτική που βοηθά τα παιδιά να ανακαλύψουν το σώμα τους με έναν ασφαλή και παιχνιδιάρικο τρόπο. Μέσα από την εναέρια αιώρα, η άσκηση μετατρέπεται σε περιπέτεια.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Tα παιδιά διασκεδάζουν μέσω της αιώρας ενώ ταυτόχρονα:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Φυσική Κατάσταση</h3>
                <p>Ενισχύουν το σώμα τους με τρόπο ευχάριστο, χτίζοντας γερές βάσεις για την υγεία τους.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Δύναμη & Έλεγχος</h3>
                <p>Αναπτύσσουν μυϊκή δύναμη, καθώς ο κορμός και τα χέρια υποστηρίζουν το σώμα στον αέρα.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ευλυγισία</h3>
                <p>Καλλιεργούν την ελαστικότητα των μυών και βελτιώνουν τη στάση του σώματός τους.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Κινητικός Συντονισμός</h3>
                <p>Εξασκούν την ισορροπία τους μέσα από εναέριες μεταβάσεις και δημιουργικά παιχνίδια.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Έκφραση</h3>
                <p>Εκφράζονται δημιουργικά μέσα από χορευτικές κινήσεις και εναέριες στάσεις.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Αποφόρτιση</h3>
                <p>Λειτουργεί ως ένας εξαιρετικός τρόπος χαλάρωσης και απομάκρυνσης από την πίεση της ημέρας.</p>
            </li>
        </ul>
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Aerial Yoga Kids is a fun and creative practice that helps children discover their bodies in a safe and playful way. Through the aerial hammock, exercise turns into an adventure.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Children have fun in the hammock while at the same time:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Physical Condition</h3>
                <p>They strengthen their bodies in a pleasant way, building a solid foundation for their health.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Strength & Control</h3>
                <p>They develop muscle strength as the core and arms support the body in the air.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Flexibility</h3>
                <p>They cultivate muscle elasticity and improve their posture.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Motor Coordination</h3>
                <p>They practice their balance through aerial transitions and creative games.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Expression</h3>
                <p>They express themselves creatively through dance movements and aerial poses.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Decompression</h3>
                <p>It functions as an excellent way to relax and get away from the pressure of the day.</p>
            </li>
        </ul>
        `,
    },
    timeOfClass: {
      el: "60 λεπτά",
      en: "60 minutes",
    },
    color: "#fffdd0",
  },
  {
    id: 3,
    slug: "aerial-yoga-teens",
    className: {
      el: "Aerial Yoga Teens",
      en: "Aerial Yoga Teens",
    },
    icon: "/icons/aerial-yoga-teen.webp",
    image: "/classes/class-aerial-yoga-teens.webp",
    shortDescription: {
      el: "Οι έφηβοι (Ηλικίες από 9 και άνω) καλλιεργούν την αυτοπεποίθησή τους και ανακαλύπτουν τις δυνατότητες του σώματός τους μέσα από τη ροή και την αιώρηση.",
      en: "Teenagers (ages 9 and up) cultivate their self-confidence and discover their body's potential through flow and suspension.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Η Aerial Yoga Teens προσφέρει στους εφήβους έναν χώρο ελευθερίας και πρόκλησης. Σε μια ηλικία μεγάλων αλλαγών, η αιώρηση γίνεται το μέσο για να χτίσουν ένα δυνατό σώμα και έναν ήρεμο νου.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Μέσα από το μάθημα, οι έφηβοι:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0 mb-8">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ενδυνάμωση</h3>
                <p>Εστιάζουν στον έλεγχο του κορμού και στη βελτίωση της στάσης του σώματος.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Αποφόρτιση</h3>
                <p>Αποβάλουν το άγχος του σχολείου μέσω της συνειδητής αναπνοής και της ροής.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Αυτοπεποίθηση</h3>
                <p>Νιώθουν δυνατοί κατακτώντας απαιτητικές εναέριες στάσεις και ακροβατικές ροές.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Συγκέντρωση</h3>
                <p>Βελτιώνουν την εστίαση και τον συντονισμό τους, δεξιότητες χρήσιμες στην καθημερινότητα.</p>
            </li>
        </ul>
        
        <p class="text-neutral-700 leading-relaxed italic border-l-4 border-[#B9007C] pl-6">Το μάθημα συνδυάζει την πειθαρχία της Yoga με την εντυπωσιακή φύση των εναέριων τεχνών, δίνοντας στους εφήβους τα εφόδια να νιώσουν ισορροπημένοι και ελεύθεροι.</p>
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Aerial Yoga Teens offers teenagers a space of freedom and challenge. At an age of great changes, the aerial hammock becomes the means to build a strong body and a calm mind.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Through the class, teenagers:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0 mb-8">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Strength</h3>
                <p>They focus on core control and improving their posture.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Decompression</h3>
                <p>They release school stress through conscious breathing and flow.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Self-confidence</h3>
                <p>They feel strong by mastering demanding aerial poses and acrobatic flows.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Concentration</h3>
                <p>They improve their focus and coordination, skills useful in everyday life.</p>
            </li>
        </ul>
        
        <p class="text-neutral-700 leading-relaxed italic border-l-4 border-[#B9007C] pl-6">The class combines the discipline of Yoga with the impressive nature of aerial arts, giving teenagers the tools to feel balanced and free.</p>
        `,
    },
    timeOfClass: {
      el: "60 λεπτά",
      en: "60 minutes",
    },
    color: "#e4d5c3",
  },
  {
    id: 4,
    slug: "aerial-silks",
    className: {
      el: "Aerial Silks",
      en: "Aerial Silks",
    },
    icon: "/icons/aerial-silks.webp",
    image: "/classes/class-aerial-silks.webp",
    shortDescription: {
      el: "Είναι ένα μάθημα εμπνευσμένο κατευθείαν από το τσίρκο. Ασκήσεις ενδυνάμωσης και ευλυγισίας πάνω σε πανί, οι οποίες βοηθούν στην εκτέλεση μιας σειράς κινήσεων με χάρη και αρμονία.",
      en: "It is a class inspired directly by the circus. Strength and flexibility exercises on fabric, which help in performing a series of movements with grace and harmony.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Τα Aerial Silks είναι μια εντυπωσιακή μορφή εναέριας κίνησης, εμπνευσμένη από το σύγχρονο τσίρκο. Ακροβατικά που εκτελούνται ενώ αιωρείστε σε ειδικά υφάσματα με ελεγχόμενη χάρη.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Τι προσφέρει το μάθημα;</p>
        <p class="mb-8 text-neutral-700">Είναι μια δυναμική εμπειρία που συνδυάζει ενδυνάμωση, ευλυγισία και ροή. Μαθαίνεις σταδιακά πώς να σκαρφαλώνεις, να τυλίγεσαι και να εκφράζεσαι μέσα από την κίνηση στον αέρα.</p>

        <p class="mb-6 text-[#B9007C] font-bold uppercase tracking-wider">Προαπαιτούμενα ανά επίπεδο</p>
        <div class="overflow-x-auto rounded-2xl border border-neutral-200 mb-8">
        <table class="min-w-full divide-y divide-neutral-200 border-collapse">
          <thead class="bg-neutral-50 text-wrap">
            <tr class="text-left text-xs font-bold uppercase tracking-wider text-neutral-500">
              <th scope="col" class="px-6 py-4">Level 2 - 3 Aerial Silks</th>
              <th scope="col" class="px-6 py-4">Advanced</th>
            </tr>
          </thead>
          <tbody class="">
            <tr>
              <td class="pl-2 pr-2">Καθαρό ψαλίδι</td>
              <td class="pl-2 pr-2">Αναστροφές με τεντωμένα χέρια και πόδια</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">Καθαρές αναστροφές (3 στη σειρά)</td>
              <td class="pl-2 pr-2">Άνεση στα spin (σε βάτραχο ή meathook)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">skin the cat</td>
              <td class="pl-2 pr-2">Άνεση σε meathook με ένα χέρι</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Εξοικείωση με flag (δύο χέρια)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Καθαρά, αργά και ελεγχόμενα roll downs από διπλό moulan</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Εξοικείωση με roll ups</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Βασικό λεξιλόγιο θέσεων και μεταβάσεις (χωρίς λύσιμο): s – wrap, z- wrap, δεξί σε αριστερό ψαλίδι, inside και outside seatbelt</td>
            </tr>
          </tbody>
        </table>
        </div>
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Aerial Silks is an impressive form of aerial movement, inspired by modern circus. Acrobatics performed while suspended in special fabrics with controlled grace.</p>

        <p class="mb-4 text-[#B9007C] font-bold">What does the class offer?</p>
        <p class="mb-8 text-neutral-700">It is a dynamic experience that combines strength, flexibility, and flow. You gradually learn how to climb, wrap, and express yourself through movement in the air.</p>

        <p class="mb-6 text-[#B9007C] font-bold uppercase tracking-wider">Prerequisites by level</p>
        <div class="overflow-x-auto rounded-2xl border border-neutral-200 mb-8">
        <table class="min-w-full divide-y divide-neutral-200 border-collapse">
          <thead class="bg-neutral-50 text-wrap">
            <tr class="text-left text-xs font-bold uppercase tracking-wider text-neutral-500">
              <th scope="col" class="px-6 py-4">Level 2 - 3 Aerial Silks</th>
              <th scope="col" class="px-6 py-4">Advanced</th>
            </tr>
          </thead>
          <tbody class="">
            <tr>
              <td class="pl-2 pr-2">Clear scissors</td>
              <td class="pl-2 pr-2">Inversions with straight arms and legs</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">Clean inversions (3 in a row)</td>
              <td class="pl-2 pr-2">Comfort in spins (in frog or meathook)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">skin the cat</td>
              <td class="pl-2 pr-2">Comfort in meathook with one hand</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Familiarity with flag (two hands)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Clean, slow and controlled roll downs from double moulan</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Familiarity with roll ups</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Basic vocabulary of poses and transitions (without untying): s – wrap, z- wrap, right to left scissors, inside and outside seatbelt</td>
            </tr>
          </tbody>
        </table>
        </div>
        `,
    },
    timeOfClass: {
      el: "90 λεπτά",
      en: "90 minutes",
    },
    color: "#EDBFC6",
  },
  {
    id: 5,
    slug: "aerial-rope",
    className: {
      el: "Aerial Rope",
      en: "Aerial Rope",
    },
    icon: "/icons/aerial-rope.webp",
    image: "/classes/class-aerial-rope.webp",
    shortDescription: {
      el: "Το εναέριο σχοινί είναι μια από τις πλέον εντυπωσιακές τέχνες του τσίρκο. Είναι ειδικά κατασκευασμένο για ακροβατική χρήση συνδυάζοντας ανεβάσματα, κόλπα κ πτώσεις, έχοντας πολλά κοινά με τα εναέρια πανιά, τεχνικά όμως διαφέρει, λόγω της σταθερότητας του.",
      en: "It is one of the most impressive circus arts. It is specially made for acrobatic use, combining climbs, tricks, and drops, having many things in common with aerial silks, but technically it differs due to its stability.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Το Aerial Rope βασίζεται σε ένα κατακόρυφο σχοινί, απόλυτα σταθερό, προσφέροντας μια δυναμική εναέρια εμπειρία. Με εργαλεία τη δύναμη και την τεχνική, εξερευνάτε την κάθετη διάσταση της κίνησης.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Κατά τη διάρκεια του μαθήματος:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0 mb-10">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Τεχνική Αναρρίχησης</h3>
                <p>Μαθαίνουμε βασικούς τρόπους ανόδου και ασφαλούς συγκράτησης στο σχοινί.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Δυναμικά Περάσματα</h3>
                <p>Δουλεύουμε τυλίγματα, πτώσεις και αναστροφές με απόλυτο έλεγχο.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ενδυνάμωση Κορμού</h3>
                <p>Εστιάζουμε στη σταθερότητα και τη δύναμη που απαιτείται για τις εναέριες κινήσεις.</p>
            </li>
        </ul>
  
        <p class="mb-4 text-[#B9007C] font-bold">Προαπαιτούμενα</p>
        <div class="overflow-x-auto rounded-2xl border border-neutral-200">
        <table class="min-w-full divide-y divide-neutral-200 border-collapse">
          <thead class="bg-neutral-50 text-wrap">
            <tr class="text-left text-xs font-bold uppercase tracking-wider text-neutral-500">
              <th scope="col" class="px-6 py-4">Level 2 - 3 Aerial Silks</th>
              <th scope="col" class="px-6 py-4">Advanced</th>
            </tr>
          </thead>
          <tbody class="">
            <tr>
              <td class="pl-2 pr-2">Καθαρό ψαλίδι</td>
              <td class="pl-2 pr-2">Αναστροφές με τεντωμένα χέρια και πόδια</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">Καθαρές αναστροφές (3 στη σειρά)</td>
              <td class="pl-2 pr-2">Άνεση στα spin (σε βάτραχο ή meathook)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">skin the cat</td>
              <td class="pl-2 pr-2">Άνεση σε meathook με ένα χέρι</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Εξοικείωση με flag (δύο χέρια)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Καθαρά, αργά και ελεγχόμενα roll downs από διπλό moulan</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Εξοικείωση με roll ups</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Βασικό λεξιλόγιο θέσεων και μεταβάσεις (χωρίς λύσιμο): s – wrap, z- wrap, δεξί σε αριστερό ψαλίδι, inside και outside seatbelt</td>
            </tr>
          </tbody>
        </table>
        </div>
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Aerial Rope is based on a vertical rope, completely stable, offering a dynamic aerial experience. Using strength and technique, you explore the vertical dimension of movement.</p>

        <p class="mb-4 text-[#B9007C] font-bold">During the class:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0 mb-10">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Climbing Technique</h3>
                <p>We learn basic ways of ascending and securely holding onto the rope.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Dynamic Transitions</h3>
                <p>We work on wraps, drops, and inversions with complete control.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Core Strength</h3>
                <p>We focus on the stability and strength required for aerial movements.</p>
            </li>
        </ul>
  
        <p class="mb-4 text-[#B9007C] font-bold">Prerequisites</p>
        <div class="overflow-x-auto rounded-2xl border border-neutral-200">
        <table class="min-w-full divide-y divide-neutral-200 border-collapse">
          <thead class="bg-neutral-50 text-wrap">
            <tr class="text-left text-xs font-bold uppercase tracking-wider text-neutral-500">
              <th scope="col" class="px-6 py-4">Level 2 - 3 Aerial Silks</th>
              <th scope="col" class="px-6 py-4">Advanced</th>
            </tr>
          </thead>
          <tbody class="">
            <tr>
              <td class="pl-2 pr-2">Clean scissors</td>
              <td class="pl-2 pr-2">Inversions with extended arms and legs</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">Clean inversions (3 in a row)</td>
              <td class="pl-2 pr-2">Comfort in spins (in frog or meathook)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">skin the cat</td>
              <td class="pl-2 pr-2">Comfort in meathook with one hand</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Familiarity with flag (two hands)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Clean, slow and controlled roll downs from double moulan</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Familiarity with roll ups</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Basic vocabulary of poses and transitions (without untying): s – wrap, z- wrap, right to left scissors, inside and outside seatbelt</td>
            </tr>
          </tbody>
        </table>
        </div>
        `,
    },
    timeOfClass: {
      el: "90 λεπτά",
      en: "90 minutes",
    },
    color: "#D3C2CE",
  },
  {
    id: 6,
    slug: "aerial-straps",
    className: {
      el: "Aerial Straps",
      en: "Aerial Straps",
    },
    icon: "/icons/aerial-straps.webp",
    image: "/classes/class-aerial-straps.webp",
    shortDescription: {
      el: "Οι εναέριοι ιμάντες ανήκουν κι αυτοί στην κατηγορία του τσίρκου και τα ακροβατικά εκτελούνται έχοντας τα χέρια ασφαλισμένα σε αυτούς.",
      en: "Aerial Straps also belongs to the circus category and acrobatics are performed with the hands secured in them.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Το Aerial Straps χρησιμοποιεί δύο μακριούς ιμάντες για την εκτέλεση απαιτητικών ακροβατικών. Καλλιεργεί έντονη μυϊκή δύναμη και τεχνική ακρίβεια μέσα από περιστροφές και αναστροφές.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Κατά τη διάρκεια του μαθήματος:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0 mb-10">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ενδυνάμωση Straps</h3>
                <p>Δουλεύουμε ειδικές ασκήσεις για την ενίσχυση των μυών που απαιτούνται στους ιμάντες.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Στατικές Θέσεις</h3>
                <p>Μαθαίνουμε "holds" και δυναμικά περάσματα με έμφαση στην ευθυγράμμιση.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Grip Strength</h3>
                <p>Ενισχύουμε τη δύναμη της λαβής και τη σύνδεση κορμού-άκρων.</p>
            </li>
        </ul>
  
        <p class="mb-4 text-[#B9007C] font-bold">Προαπαιτούμενα</p>
        <div class="overflow-x-auto rounded-2xl border border-neutral-200">
        <table class="min-w-full divide-y divide-neutral-200 border-collapse">
          <thead class="bg-neutral-50 text-wrap">
            <tr class="text-left text-xs font-bold uppercase tracking-wider text-neutral-500">
              <th scope="col" class="px-6 py-4">Level 2 - 3 Aerial Silks</th>
              <th scope="col" class="px-6 py-4">Advanced</th>
            </tr>
          </thead>
          <tbody class="">
            <tr>
              <td class="pl-2 pr-2">Καθαρό ψαλίδι</td>
              <td class="pl-2 pr-2">Αναστροφές με τεντωμένα χέρια και πόδια</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">Καθαρές αναστροφές (3 στη σειρά)</td>
              <td class="pl-2 pr-2">Άνεση στα spin (σε βάτραχο ή meathook)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">skin the cat</td>
              <td class="pl-2 pr-2">Άνεση σε meathook με ένα χέρι</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Εξοικείωση με flag (δύο χέρια)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Καθαρά, αργά και ελεγχόμενα roll downs από διπλό moulan</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Εξοικείωση με roll ups</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Βασικό λεξιλόγιο θέσεων και μεταβάσεις (χωρίς λύσιμο): s – wrap, z- wrap, δεξί σε αριστερό ψαλίδι, inside και outside seatbelt</td>
            </tr>
          </tbody>
        </table>
        </div>
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Aerial Straps uses two long straps to perform demanding acrobatics. It develops intense muscular strength and technical precision through rotations and inversions.</p>

        <p class="mb-4 text-[#B9007C] font-bold">During the class:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0 mb-10">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Straps Strength</h3>
                <p>We work on specific exercises to strengthen the muscles required for the straps.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Static Poses</h3>
                <p>We learn "holds" and dynamic transitions with emphasis on alignment.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Grip Strength</h3>
                <p>We strengthen the grip strength and the connection of the trunk-limbs.</p>
            </li>
        </ul>
  
        <p class="mb-4 text-[#B9007C] font-bold">Prerequisites</p>
        <div class="overflow-x-auto rounded-2xl border border-neutral-200">
        <table class="min-w-full divide-y divide-neutral-200 border-collapse">
          <thead class="bg-neutral-50 text-wrap">
            <tr class="text-left text-xs font-bold uppercase tracking-wider text-neutral-500">
              <th scope="col" class="px-6 py-4">Level 2 - 3 Aerial Silks</th>
              <th scope="col" class="px-6 py-4">Advanced</th>
            </tr>
          </thead>
          <tbody class="">
            <tr>
              <td class="pl-2 pr-2">Clean scissors</td>
              <td class="pl-2 pr-2">Inversions with extended arms and legs</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">Clean inversions (3 in a row)</td>
              <td class="pl-2 pr-2">Comfort in spins (in frog or meathook)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2">skin the cat</td>
              <td class="pl-2 pr-2">Comfort in meathook with one hand</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Familiarity with flag (two hands)</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Clean, slow and controlled roll downs from double moulan</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Familiarity with roll ups</td>
            </tr>
            <tr>
              <td class="pl-2 pr-2"> </td>
              <td class="pl-2 pr-2">Basic vocabulary of poses and transitions (without untying): s – wrap, z- wrap, right to left scissors, inside and outside seatbelt</td>
            </tr>
          </tbody>
        </table>
        </div>
        `,
    },
    timeOfClass: {
      el: "90 λεπτά",
      en: "90 minutes",
    },
    color: "#A8A294",
  },
  {
    id: 7,
    slug: "flying-pole",
    className: {
      el: "Flying Pole",
      en: "Flying Pole",
    },
    icon: "/icons/flying-pole.webp",
    image: "/classes/class-flying-pole.webp",
    shortDescription: {
      el: "Χρησιμοποιείται στύλος ο οποίος δεν έχει βάση στο έδαφος παρά μόνο κρέμεται από το ταβάνι δίνοντας σου ακόμα μεγαλύτερη αίσθηση πως πετάς.",
      en: "A pole is used that has no base on the ground but rather hangs from the ceiling, giving you an even greater feeling of flying.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Το Flying Pole είναι μια νέα μορφή ακροβατικής τέχνης που συνδυάζει pole dance και εναέρια ακροβατικά. Ο στύλος κρέμεται από το ταβάνι, δίνοντάς σας την αίσθηση ότι πετάτε.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Κύρια χαρακτηριστικά:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0 mb-8">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ελεύθερη Αιώρηση</h3>
                <p>Ο στύλος κινείται ελεύθερα, επιτρέποντας δυναμικές περιστροφές και άλματα.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Σωματική Πρόκληση</h3>
                <p>Απαιτεί έντονη δύναμη στον κορμό και ανεπτυγμένο αίσθημα ισορροπίας.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Pole vs Flying</h3>
                <p>Σε αντίθεση με τον σταθερό στύλο, εδώ ολόκληρος ο εξοπλισμός ακολουθεί την κίνησή σας.</p>
            </li>
        </ul>
  
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Flying Pole is a new form of acrobatic art that combines pole dancing and aerial acrobatics. The pole is suspended from the ceiling, giving you the feeling of flying.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Main characteristics:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0 mb-8">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Free Suspension</h3>
                <p>The pole moves freely, allowing for dynamic rotations and jumps.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Physical Challenge</h3>
                <p>It requires intense core strength and developed sense of balance.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Pole vs Flying</h3>
                <p>Unlike the fixed pole, here the entire equipment follows your movement.</p>
            </li>
        </ul>
  
        `,
    },
    timeOfClass: {
      el: "90 λεπτά",
      en: "90 minutes",
    },
    color: "#C9B18C",
  },
  {
    id: 8,
    slug: "aerial-hoop",
    className: {
      el: "Aerial Hoop",
      en: "Aerial Hoop",
    },
    icon: "/icons/aerial-hoop.webp",
    image: "/classes/class-aerial-hoop.webp",
    shortDescription: {
      el: "To aerial hoop(εναέριο στεφάνι) είναι ένα μάθημα εμπευσμένο από την κουλτούρα του τσίρκου.",
      en: "Aerial hoop is a lesson inspired by the culture of the circus.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Το Aerial Hoop προσφέρει μια βιωματική και καλλιτεχνική προσέγγιση στην κίνηση. Στηρίζεστε σε ένα μεταλλικό στεφάνι που αιωρείται, συνδυάζοντας δύναμη και χάρη.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Γιατί να το επιλέξετε;</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Ολική Ενδυνάμωση</h3>
                <p>Ενεργοποιείτε όλες τις μεγάλες μυϊκές ομάδες, χτίζοντας ένα δυνατό και ευλύγιστο σώμα.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Δημιουργικότητα</h3>
                <p>Η άσκηση αποκτά χαρακτήρα τέχνης, επιτρέποντάς σας να εκφραστείτε μέσα από τη ροή.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Σταθερότητα</h3>
                <p>Βελτιώνετε την ισορροπία σας και αποκτάτε απόλυτη επίγνωση του σώματός σας στον αέρα.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Αυτοπεποίθηση</h3>
                <p>Κάθε νέα στάση που κατακτάτε ενισχύει την πίστη στις σωματικές σας δυνατότητες.</p>
            </li>
        </ul>
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Aerial Hoop offers an experiential and artistic approach to movement. You rely on a metal hoop that floats, combining strength and grace.</p>

        <p class="mb-4 text-[#B9007C] font-bold">Why choose it?</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Total Strengthening</h3>
                <p>You activate all major muscle groups, building a strong and flexible body.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Creativity</h3>
                <p>Exercise takes on the character of art, allowing you to express yourself through flow.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Stability</h3>
                <p>You improve your balance and gain complete body awareness in the air.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Self-Confidence</h3>
                <p>Each new position you conquer strengthens your belief in your physical abilities.</p>
            </li>
        </ul>
        `,
    },
    timeOfClass: {
      el: "90 λεπτά",
      en: "90 minutes",
    },
    color: "#5F7367",
    //9F9CF0
  },
  {
    id: 9,
    slug: "vinyasa-flow-yoga",
    className: {
      el: "Vinyasa Flow Yoga",
      en: "Vinyasa Flow Yoga",
    },
    icon: "/icons/vinyasa-yoga.webp",
    image: "/classes/class-vinyasa-f-yoga.webp",
    shortDescription: {
      el: "Είναι ένα πιο δυναμικό είδος yoga. Αποτελείται από ασκήσεις(asanas) που εκτελούνται με συνεχόμενη ροή σε συνδυασμό με την αναπνοή.",
      en: "It is a more dynamic type of yoga. It consists of exercises(asanas) performed in a continuous flow in combination with breathing.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Η Vinyasa Flow Yoga είναι μια δυναμική πρακτική με συνεχή ροή κινήσεων (asanas) που συγχρονίζονται απόλυτα με την αναπνοή.</p>
        
        <p class="mb-4 text-[#B9007C] font-bold">Σημαντικά Οφέλη:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Αντοχή & Ισορροπία</h3>
                <p>Βελτιώνει τη φυσική κατάσταση και τη σταθερότητα του σώματος.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Αποτοξίνωση</h3>
                <p>Η αύξηση της θερμοκρασίας του σώματος βοηθά στην αποβολή των τοξινών.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Καρδιαγγειακή Υγεία</h3>
                <p>Προάγει την καλή κυκλοφορία του αίματος και την υγεία της καρδιάς.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Πνευματική Διαύγεια</h3>
                <p>Αυξάνει τα επίπεδα συγκέντρωσης και απελευθερώνει την εσωτερική ένταση.</p>
            </li>
        </ul>
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Vinyasa Flow Yoga is a dynamic practice with continuous flow of movements (asanas) synchronized perfectly with breathing.</p>
        
        <p class="mb-4 text-[#B9007C] font-bold">Important Benefits:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Endurance & Balance</h3>
                <p>Improves physical condition and body stability.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Detoxification</h3>
                <p>The increase in body temperature helps remove toxins.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Cardiovascular Health</h3>
                <p>Promotes good blood circulation and heart health.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Mental Clarity</h3>
                <p>Increases concentration levels and releases internal tension.</p>
            </li>
        </ul>
        `,
    },
    timeOfClass: {
      el: "75 λεπτά",
      en: "75 minutes",
    },
    color: "#ccbbdb",
    // ad5e86  
  },
  {
    id: 10,
    slug: "flexibility",
    className: {
      el: "Flexibility",
      en: "Flexibility",
    },
    icon: "/icons/flexibility.webp",
    image: "/classes/class-flexibility.webp",
    shortDescription: {
      el: "Τα Flexibility εστιάζει στη βελτίωση του εύρους κίνησης, της ευλυγισίας και της κινητικότητας μέσω στατικών/δυναμικών διατάσεων και τεχνικών contortioning. Στοχεύει στην πρόληψη τραυματισμών, τη σωστή στάση σώματος και την ενδυνάμωση.",
      en: "Flexibility focuses on improving range of motion, flexibility and mobility through static/dynamic stretching and contortioning techniques. It aims at injury prevention, correct posture and strengthening.",
    },
    description: {
      el: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Το Flexibility εστιάζει στη βελτίωση του εύρους κίνησης και της κινητικότητας μέσω στοχευμένων διατάσεων και τεχνικών contortioning.</p>
        
        <p class="mb-4 text-[#B9007C] font-bold">Στόχοι και Οφέλη:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Πρόληψη Τραυματισμών</h3>
                <p>Προετοιμάζει τις αρθρώσεις και τους μύες για μεγαλύτερη καταπόνηση με ασφάλεια.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Κινητικότητα</h3>
                <p>Αυξάνει το εύρος κίνησης, κάνοντας τις καθημερινές και αθλητικές δραστηριότητες πιο εύκολες.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Στάση Σώματος</h3>
                <p>Διορθώνει ανισορροπίες και βοηθά στη σωστή ευθυγράμμιση της σπονδυλικής στήλης.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Μυϊκή Ανάκαμψη</h3>
                <p>Βοηθά στην ταχύτερη αποθεραπεία των μυών μετά από έντονη προπόνηση.</p>
            </li>
        </ul>
        `,
      en: `
        <p class="mb-6 text-lg font-medium text-neutral-800">Flexibility focuses on improving range of motion, flexibility and mobility through static/dynamic stretching and contortioning techniques.</p>
        
        <p class="mb-4 text-[#B9007C] font-bold">Goals and Benefits:</p>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 list-none !pl-0">
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Injury Prevention</h3>
                <p>Prepares joints and muscles for greater strain safely.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Mobility</h3>
                <p>Increases range of motion, making daily and sports activities easier.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Posture</h3>
                <p>Corrects imbalances and helps with proper spinal alignment.</p>
            </li>
            <li>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Muscle Recovery</h3>
                <p>Helps with faster muscle recovery after intense training.</p>
            </li>
        </ul>
        `,
    },
    timeOfClass: {
      el: "60 λεπτά",
      en: "60 minutes",
    },
    color: "#a3b18a",
  },
];
