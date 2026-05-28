export interface Class {
  id: number;
  slug: string;
  className: string;
  icon: string;
  image: string;
  shortDescription: string;
  description: string;
  timeOfClass: string;
  color?: string;
}

export const classes: Class[] = [
  {
    id: 1,
    slug: "aerial-yoga",
    className: "Aerial Yoga",
    icon: "/icons/aerial-yoga.png",
    image: "/classes/class-aerial-yoga.webp", // Αφήστε το κενό ή βάλτε ένα σωστό path π.χ. "/classes/aerial-yoga.webp"
    shortDescription: "Η Aerial Yoga είναι μία μοναδική πρακτική που συνδυάζει παραδοσιακές στάσεις της Yoga και ακροβατικές στάσεις εμπνευσμένες από τις εναέριες τέχνες.",
    description: `
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
    timeOfClass: "60 λεπτά",
    color: "#B07BAC",
  },
  {
    id: 2,
    slug: "aerial-yoga-kids",
    className: "Aerial Yoga Kids",
    icon: "/icons/aerial-yoga-kid.png",
    image: "/classes/class-aerial-yoga-kids.webp",
    shortDescription: "Τα παιδιά (Ηλικίες από 5 και άνω) διασκεδάζουν μέσω της αιώρας ενώ ταυτόχρονα βελτιώνεται η φυσική τους κατάσταση, η σωματική τους δύναμη, η ευλυγισία, η ισορροπία, ο κινητικός συντονισμός και ψυχοσωματική τους ανάπτυξη.",
    description: `
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
    timeOfClass: "60 λεπτά",
    color: "#fffdd0",
  },
  {
    id: 3,
    slug: "aerial-yoga-teens",
    className: "Aerial Yoga Teens",
    icon: "/icons/aerial-yoga-teen.png",
    image: "/classes/class-aerial-yoga-teens.webp",
    shortDescription: "Οι έφηβοι (Ηλικίες από 9 και άνω) καλλιεργούν την αυτοπεποίθησή τους και ανακαλύπτουν τις δυνατότητες του σώματός τους μέσα από τη ροή και την αιώρηση.",
    description: `
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
    timeOfClass: "60 λεπτά",
    color: "#e4d5c3",
  },
  {
    id: 4,
    slug: "aerial-silks",
    className: "Aerial Silks",
    icon: "/icons/aerial-silks.png",
    image: "/classes/class-aerial-silks.webp",
    shortDescription: "Είναι ένα μάθημα εμπνευσμένο κατευθείαν από το τσίρκο. Ασκήσεις ενδυνάμωσης και ευλυγισίας πάνω σε πανί, οι οποίες βοηθούν στην εκτέλεση μιας σειράς κινήσεων με χάρη και αρμονία.",
    description: `
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
    timeOfClass: "90 λεπτά",
    color: "#EDBFC6",
  },
  {
    id: 5,
    slug: "aerial-rope",
    className: "Aerial Rope",
    icon: "/icons/aerial-rope.png",
    image: "/classes/class-aerial-rope.webp",
    shortDescription: "Το εναέριο σχοινί είναι μια από τις πλέον εντυπωσιακές τέχνες του τσίρκο. Είναι ειδικά κατασκευασμένο για ακροβατική χρήση συνδυάζοντας ανεβάσματα, κόλπα κ πτώσεις , έχοντας πολλά κοινά με τα εναέρια πανιά , τεχνικά όμως διαφέρει, λόγω της σταθερότητας του.",
    description: `
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
    timeOfClass: "90 λεπτά",
     color: "#D3C2CE",
  },
  {
    id: 6,
    slug: "aerial-straps",
    className: "Aerial Straps",
    icon: "/icons/aerial-straps.png",
    image: "/classes/class-aerial-straps.webp",
    shortDescription: "Οι εναέριοι ιμάντες ανήκουν κι αυτοί στην κατηγορία του τσίρκου και τα ακροβατικά εκτελούνται έχοντας τα χέρια ασφαλισμένα σε αυτούς.",
    description: `
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
    timeOfClass: "90 λεπτά",
    color: "#A8A294",
  },
  {
    id: 7,
    slug: "flying-pole",
    className: "Flying Pole",
    icon: "/icons/flying-pole.png",
    image: "/classes/class-flying-pole.webp",
    shortDescription: "Χρησιμοποιείται στύλος ο οποίος δεν έχει βάση στο έδαφος παρά μόνο κρέμεται από το ταβάνι δίνοντας σου ακόμα μεγαλύτερη αίσθηση πως πετάς.",
    description: `
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
    timeOfClass: "90 λεπτά",
    color: "#C9B18C",
  },
  {
    id: 8,
    slug: "aerial-hoop",
    className: "Aerial Hoop",
    icon: "/icons/aerial-hoop.png",
    image: "/classes/class-aerial-hoop.webp",
    shortDescription: "To aerial hoop(εναέριο στεφάνι) είναι ένα μάθημα εμπευσμένο από την κουλτούρα του τσίρκου.",
    description: `
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
    timeOfClass: "90 λεπτά",
    color: "#5F7367",
    //9F9CF0
  },
  {
    id: 9,
    slug: "vinyasa-flow-yoga",
    className: "Vinyasa Flow Yoga",
    icon: "/icons/vinyasa-yoga.png",
    image: "/classes/class-vinyasa-f-yoga.webp",
    shortDescription: "Είναι ένα πιο δυναμικό είδος yoga. Αποτελείται από ασκήσεις(asanas) που εκτελούνται με συνεχόμενη ροή σε συνδυασμό με την αναπνοή.",
    description: `
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
    timeOfClass: "75 λεπτά",
    color: "#ccbbdb",
    // ad5e86  
  },
  {
    id: 10,
    slug: "flexibility",
    className: "Flexibility",
    icon: "/icons/flexibility.png",
    image: "/classes/class-flexibility.webp",
    shortDescription: "Τα Flexibility εστιάζει στη βελτίωση του εύρους κίνησης, της ευλυγισίας και της κινητικότητας μέσω στατικών/δυναμικών διατάσεων και τεχνικών contortioning. Στοχεύει στην πρόληψη τραυματισμών, τη σωστή στάση σώματος και την ενδυνάμωση",
    description: `
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
    timeOfClass: "60 λεπτά",
    color: "#a3b18a",
  },
];
