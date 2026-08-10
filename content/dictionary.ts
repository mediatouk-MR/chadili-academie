export type Lang = "ar" | "fr" | "en";

export const LANGS: { code: Lang; label: string; short: string; dir: "rtl" | "ltr" }[] = [
  { code: "ar", label: "العربية", short: "ع", dir: "rtl" },
  { code: "fr", label: "Français", short: "FR", dir: "ltr" },
  { code: "en", label: "English", short: "EN", dir: "ltr" },
];

export type Course = {
  key: string;
  title: string;
  desc: string;
  modules: string[];
  modes: ("presentiel" | "distance")[];
  icon: string;
  video: string;
  poster: string;
};

export type Feature = { title: string; desc: string; icon: string };
export type Testimonial = { name: string; role: string; quote: string; image: string };
export type Stat = { value: string; label: string };

type Dict = {
  meta: { title: string; description: string };
  nav: { home: string; chef: string; courses: string; gallery: string; contact: string; cta: string };
  hero: {
    kicker: string;
    titleLines: string[];
    highlight: string;
    tagline: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badgePresentiel: string;
    badgeDistance: string;
    scroll: string;
    location: string;
  };
  marquee: string[];
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    signature: string;
    role: string;
    stats: Stat[];
  };
  courses: {
    eyebrow: string;
    title: string;
    subtitle: string;
    modePresentiel: string;
    modeDistance: string;
    modulesLabel: string;
    cta: string;
    items: Course[];
  };
  features: { eyebrow: string; title: string; subtitle: string; items: Feature[] };
  showcase: { eyebrow: string; title: string; subtitle: string; hint: string };
  gallery: { eyebrow: string; title: string; subtitle: string; drag: string; featured: string };
  testimonials: { eyebrow: string; title: string; subtitle: string; items: Testimonial[] };
  register: {
    eyebrow: string;
    title: string;
    subtitle: string;
    name: string;
    namePh: string;
    course: string;
    coursePh: string;
    mode: string;
    modePresentiel: string;
    modeDistance: string;
    city: string;
    cityPh: string;
    submit: string;
    whatsappNote: string;
    or: string;
    callNow: string;
    instagram: string;
    required: string;
  };
  contact: { title: string; phone: string; phone2: string; locationLabel: string; location: string; hours: string; hoursValue: string };
  footer: { tagline: string; nav: string; contact: string; follow: string; rights: string; made: string };
};

const ar: Dict = {
  meta: {
    title: "أكاديمية الشاذلي | فنون الحلويات وتصميم الكيك",
    description:
      "أكاديمية الشاذلي مع الشيف عواطف الشاذلي — دورات تدريبية راقية في تصميم الكيك، الحلويات الفرنسية والطبخ، حضورياً وعن بُعد. سجّل الآن.",
  },
  nav: { home: "الرئيسية", chef: "الشيف", courses: "الدورات", gallery: "المعرض", contact: "التسجيل", cta: "سجّل الآن" },
  hero: {
    kicker: "أكاديمية الشاذلي · المغرب",
    titleLines: ["فنّ الحلويات", "يبدأ من"],
    highlight: "بين يديكِ",
    tagline: "شادلي أكاديمي · الرائدة في تصميم الأطباق المغربية",
    subtitle:
      "تعلّمي تصميم الكيك والحلويات الفرنسية والطبخ مع الشيف عواطف الشاذلي — تدريب احترافي حضوري وعن بُعد، بشهادة إتمام.",
    ctaPrimary: "سجّل في دورة",
    ctaSecondary: "اكتشف الدورات",
    badgePresentiel: "تدريب حضوري",
    badgeDistance: "تدريب عن بُعد",
    scroll: "مرّر للأسفل",
    location: "المغرب",
  },
  marquee: ["تصميم الكيك", "الحلويات الفرنسية", "الشوكولاتة", "المعجنات", "الطبخ المغربي", "فن التقديم"],
  about: {
    eyebrow: "الشيف المؤسِّسة",
    title: "الشيف عواطف الشاذلي",
    lead: "مدرّبة معتمدة ومصمّمة كيك، شغفها أن تُحوّل الشغف إلى حرفة.",
    body: [
      "من قلب المغرب، أسّست الشيف عواطف الشاذلي أكاديمية تجمع بين دقّة الحلويات الفرنسية ودفء المطبخ المغربي، لتمنح كل متدرّبة أساساً متيناً وذوقاً رفيعاً.",
      "تُقدّم الأكاديمية تدريباً عملياً مكثّفاً، حضورياً وعن بُعد، مع متابعة شخصية خطوة بخطوة حتى إتقان كل تفصيل — من الأساسيات إلى أرقى تصاميم الكيك.",
    ],
    signature: "عواطف الشاذلي",
    role: "مدرّبة · مصمّمة كيك · حلويات ومطبخ",
    stats: [
      { value: "13.1k+", label: "متابع" },
      { value: "2762", label: "منشور" },
      { value: "500+", label: "متدرّبة" },
      { value: "100%", label: "عملي" },
    ],
  },
  courses: {
    eyebrow: "شعب التكوين",
    title: "شعبنا التكوينية الثلاث",
    subtitle: "اختاري شعبتك — كل شعبة متاحة حضورياً وعن بُعد، مع متابعة شخصية وشهادة إتمام.",
    modePresentiel: "حضوري",
    modeDistance: "عن بُعد",
    modulesLabel: "المحاور الأساسية",
    cta: "سجّل في هذه الشعبة",
    items: [
      {
        key: "maroc",
        title: "شعبة الحلويات المغربية",
        desc: "من الأساسيات إلى حلويات الأعراس — أتقني فن الحلويات المغربية الأصيلة بلمسة احترافية.",
        modules: [
          "مدخل إلى فن الحلويات المغربية",
          "المواد الأولية وخصائصها",
          "العجائن والتقنيات الأساسية",
          "الحشوات والخلطات الاحترافية",
          "تقنيات التشكيل والتزيين",
          "الحلويات التقليدية والعصرية",
          "إنتاج حلويات المناسبات والأعراس",
          "مراقبة الجودة ومعايير السلامة الغذائية",
          "حساب تكلفة الإنتاج والتسعير",
          "التغليف، العرض، والتسويق",
          "التطبيق العملي والمشروع النهائي",
        ],
        modes: ["presentiel", "distance"],
        icon: "BirthdayCake",
        video: "/videos/course-maroc.mp4",
        poster: "/videos/course-maroc-poster.jpg",
      },
      {
        key: "francaise",
        title: "شعبة الحلويات الفرنسية",
        desc: "الماكارون، التارت، الموس والشوكولاتة — تكوين كامل في الباتيسري الفرنسية الراقية.",
        modules: [
          "أسس وتقنيات الباتيسري الفرنسية",
          "المواد الأولية ووظائفها",
          "العجائن الأساسية والاحترافية",
          "الكريمات، الموس، والحشوات",
          "الشوكولاتة وتقنيات التبلور (Tempering)",
          "الجلاصي، الغلاصاج، والتشطيب الاحترافي",
          "الميني باتيسري والحلويات الحديثة",
          "الماكارون، الإكلير، والتارت",
          "ضبط الجودة وحفظ المنتجات",
          "حساب تكلفة الإنتاج والتسعير",
          "المشروع التطبيقي النهائي",
        ],
        modes: ["presentiel", "distance"],
        icon: "Cookie",
        video: "/videos/course-francaise.mp4",
        poster: "/videos/course-francaise-poster.jpg",
      },
      {
        key: "cuisine",
        title: "شعبة الطبخ المغربي والعالمي",
        desc: "من المطبخ المغربي التقليدي إلى العالمي وفن التقديم — تكوين طهي احترافي متكامل.",
        modules: [
          "مبادئ فنون الطهي الاحترافية",
          "النظافة، السلامة الغذائية، وتنظيم المطبخ",
          "التعرف على المواد الأولية وتقنيات استعمالها",
          "مهارات التقطيع والتحضير",
          "المرق والصلصات الأساسية",
          "المطبخ المغربي التقليدي والحديث",
          "المطبخ العالمي وتقنياته",
          "المقبلات، السلطات، والأطباق الرئيسية",
          "تقنيات الطهي المختلفة",
          "فن تقديم الأطباق (Food Plating)",
          "حساب تكلفة الأطباق وإدارة الإنتاج",
          "التواصل والعمل داخل المطبخ الاحترافي",
          "التطبيق العملي والمشروع النهائي",
        ],
        modes: ["presentiel", "distance"],
        icon: "CookingPot",
        video: "/videos/course-cuisine.mp4",
        poster: "/videos/course-cuisine-poster.jpg",
      },
    ],
  },
  features: {
    eyebrow: "لماذا الشاذلي",
    title: "تجربة تكوين استثنائية",
    subtitle: "كل تفصيل مصمّم ليمنحك الثقة والإتقان.",
    items: [
      { title: "مدرّبة معتمدة", desc: "خبرة احترافية وشهادة إتمام معتمدة لكل دورة.", icon: "SealCheck" },
      { title: "حضوري وعن بُعد", desc: "تعلّمي في الأكاديمية أو من منزلك أينما كنتِ.", icon: "Broadcast" },
      { title: "تدريب عملي 100%", desc: "تطبيق مباشر خطوة بخطوة، لا مجرّد نظريات.", icon: "HandHeart" },
      { title: "متابعة شخصية", desc: "دعم فردي حتى إتقانك لكل تقنية بثقة.", icon: "UsersThree" },
    ],
  },
  showcase: {
    eyebrow: "تجربة ثلاثية الأبعاد",
    title: "كيك ديزاين بتوقيع الشاذلي",
    subtitle: "استكشفي فنّ تصميم الكيك بأدقّ تفاصيله — اسحبي لتدوير المجسّم ثلاثي الأبعاد الذي يحمل شعار الأكاديمية.",
    hint: "اسحبي للتدوير",
  },
  gallery: { eyebrow: "من الأكاديمية", title: "إبداعات تُروى بالتفاصيل", subtitle: "لمحة من أعمال وتصاميم الشيف عواطف ومتدرّباتها.", drag: "اسحب للاستكشاف", featured: "شاهدي الإبداع يتشكّل" },
  testimonials: {
    eyebrow: "آراء المتدرّبات",
    title: "قصص نجاح حقيقية",
    subtitle: "ثقة مئات المتدرّبات هي أغلى إنجازاتنا.",
    items: [
      { name: "سلمى ب.", role: "متدرّبة تصميم الكيك", quote: "تعلّمت أكثر مما تخيّلت. الشيف عواطف تشرح بصبر وحبّ حتى تتقني كل تفصيل.", image: "/images/student-1.jpg" },
      { name: "إيمان ك.", role: "دورة عن بُعد", quote: "التدريب عن بُعد كان احترافياً بالكامل، وكأنني في الأكاديمية تماماً.", image: "/images/student-2.jpg" },
      { name: "نادية م.", role: "أطلقت مشروعها", quote: "بفضل الأكاديمية بدأت مشروعي الخاص في الحلويات. تجربة غيّرت حياتي.", image: "/images/student-3.jpg" },
    ],
  },
  register: {
    eyebrow: "ابدئي الآن",
    title: "احجزي مقعدك في الدورة",
    subtitle: "املئي النموذج وسنتواصل معك عبر واتساب لتأكيد تسجيلك.",
    name: "الاسم الكامل",
    namePh: "مثال: سارة أمين",
    course: "الدورة المطلوبة",
    coursePh: "اختاري دورة",
    mode: "نوع التدريب",
    modePresentiel: "حضوري",
    modeDistance: "عن بُعد",
    city: "المدينة",
    cityPh: "مثال: الدار البيضاء",
    submit: "أرسل عبر واتساب",
    whatsappNote: "سيتم فتح واتساب برسالة جاهزة للإرسال.",
    or: "أو تواصلي مباشرة",
    callNow: "اتصل الآن",
    instagram: "تابعينا على إنستغرام",
    required: "هذا الحقل مطلوب",
  },
  contact: {
    title: "تواصلي معنا",
    phone: "0678613983",
    phone2: "0701123030",
    locationLabel: "الموقع",
    location: "المغرب",
    hours: "أوقات العمل",
    hoursValue: "كل أيام الأسبوع · 9:00 – 20:00",
  },
  footer: {
    tagline: "أكاديمية راقية لفنون الحلويات وتصميم الكيك مع الشيف عواطف الشاذلي.",
    nav: "روابط",
    contact: "تواصل",
    follow: "تابعينا",
    rights: "جميع الحقوق محفوظة.",
    made: "أكاديمية الشاذلي · المغرب",
  },
};

const fr: Dict = {
  meta: {
    title: "Chadili Académie | Art de la Pâtisserie & Cake Design",
    description:
      "Chadili Académie avec Chef Awatif Chadili — formations premium en cake design, pâtisserie française et cuisine, en présentiel et à distance. Inscrivez-vous.",
  },
  nav: { home: "Accueil", chef: "La Chef", courses: "Formations", gallery: "Galerie", contact: "Inscription", cta: "S'inscrire" },
  hero: {
    kicker: "Chadili Académie · Maroc",
    titleLines: ["L'art de la", "pâtisserie"],
    highlight: "entre vos mains",
    tagline: "Chadili Académie · leader du design culinaire marocain",
    subtitle:
      "Maîtrisez le cake design, la pâtisserie française et la cuisine avec Chef Awatif Chadili — formation professionnelle, en présentiel et à distance, avec certificat.",
    ctaPrimary: "S'inscrire à une formation",
    ctaSecondary: "Découvrir les formations",
    badgePresentiel: "En présentiel",
    badgeDistance: "À distance",
    scroll: "Défiler",
    location: "Maroc",
  },
  marquee: ["Cake Design", "Pâtisserie Française", "Chocolaterie", "Viennoiserie", "Cuisine Marocaine", "Art du Dressage"],
  about: {
    eyebrow: "La Chef Fondatrice",
    title: "Chef Awatif Chadili",
    lead: "Formatrice certifiée et cake designer, elle transforme la passion en véritable métier.",
    body: [
      "Au cœur du Maroc, Chef Awatif Chadili a fondé une académie qui allie la précision de la pâtisserie française à la chaleur de la cuisine marocaine, offrant à chaque élève des bases solides et un goût raffiné.",
      "L'académie propose une formation pratique intensive, en présentiel et à distance, avec un suivi personnalisé, étape par étape — des fondamentaux aux créations de cake design les plus élégantes.",
    ],
    signature: "Awatif Chadili",
    role: "Formatrice · Cake Designer · Pâtisserie & Cuisine",
    stats: [
      { value: "13,1k+", label: "Abonnés" },
      { value: "2762", label: "Publications" },
      { value: "500+", label: "Élèves" },
      { value: "100%", label: "Pratique" },
    ],
  },
  courses: {
    eyebrow: "Nos Filières",
    title: "Nos trois filières de formation",
    subtitle: "Choisissez votre filière — chacune est disponible en présentiel et à distance, avec suivi personnalisé et certificat.",
    modePresentiel: "Présentiel",
    modeDistance: "À distance",
    modulesLabel: "Modules principaux",
    cta: "S'inscrire à cette filière",
    items: [
      {
        key: "maroc",
        title: "Filière Pâtisserie Marocaine",
        desc: "Des fondamentaux aux pâtisseries de mariage — maîtrisez l'art de la pâtisserie marocaine authentique.",
        modules: [
          "Introduction à l'art de la pâtisserie marocaine",
          "Les matières premières et leurs propriétés",
          "Les pâtes et techniques de base",
          "Les farces et mélanges professionnels",
          "Techniques de façonnage et de décoration",
          "Pâtisseries traditionnelles et modernes",
          "Production de pâtisseries pour fêtes et mariages",
          "Contrôle qualité et normes d'hygiène alimentaire",
          "Calcul du coût de production et tarification",
          "Emballage, présentation et marketing",
          "Pratique et projet final",
        ],
        modes: ["presentiel", "distance"],
        icon: "BirthdayCake",
        video: "/videos/course-maroc.mp4",
        poster: "/videos/course-maroc-poster.jpg",
      },
      {
        key: "francaise",
        title: "Filière Pâtisserie Française",
        desc: "Macarons, tartes, mousses et chocolat — une formation complète en pâtisserie française raffinée.",
        modules: [
          "Fondements et techniques de la pâtisserie française",
          "Les matières premières et leurs fonctions",
          "Pâtes de base et professionnelles",
          "Crèmes, mousses et garnitures",
          "Le chocolat et le tempérage (Tempering)",
          "Glaçage, nappage et finitions professionnelles",
          "Mini-pâtisserie et desserts modernes",
          "Macarons, éclairs et tartes",
          "Contrôle qualité et conservation des produits",
          "Calcul du coût de production et tarification",
          "Projet pratique final",
        ],
        modes: ["presentiel", "distance"],
        icon: "Cookie",
        video: "/videos/course-francaise.mp4",
        poster: "/videos/course-francaise-poster.jpg",
      },
      {
        key: "cuisine",
        title: "Filière Cuisine Marocaine & Internationale",
        desc: "De la cuisine marocaine traditionnelle à l'internationale et l'art du dressage — une formation culinaire complète.",
        modules: [
          "Principes des arts culinaires professionnels",
          "Hygiène, sécurité alimentaire et organisation de la cuisine",
          "Connaissance des matières premières et techniques d'utilisation",
          "Compétences de découpe et de préparation",
          "Bouillons et sauces de base",
          "Cuisine marocaine traditionnelle et moderne",
          "Cuisine internationale et ses techniques",
          "Entrées, salades et plats principaux",
          "Différentes techniques de cuisson",
          "L'art du dressage (Food Plating)",
          "Calcul du coût des plats et gestion de la production",
          "Communication et travail en cuisine professionnelle",
          "Projet pratique final",
        ],
        modes: ["presentiel", "distance"],
        icon: "CookingPot",
        video: "/videos/course-cuisine.mp4",
        poster: "/videos/course-cuisine-poster.jpg",
      },
    ],
  },
  features: {
    eyebrow: "Pourquoi Chadili",
    title: "Une expérience de formation d'exception",
    subtitle: "Chaque détail est pensé pour votre confiance et votre maîtrise.",
    items: [
      { title: "Formatrice certifiée", desc: "Expertise professionnelle et certificat pour chaque formation.", icon: "SealCheck" },
      { title: "Présentiel & à distance", desc: "Apprenez à l'académie ou depuis chez vous, où que vous soyez.", icon: "Broadcast" },
      { title: "100% pratique", desc: "Application directe, étape par étape — pas seulement de la théorie.", icon: "HandHeart" },
      { title: "Suivi personnalisé", desc: "Un accompagnement individuel jusqu'à la maîtrise de chaque technique.", icon: "UsersThree" },
    ],
  },
  showcase: {
    eyebrow: "Expérience 3D",
    title: "Le cake design, signature Chadili",
    subtitle: "Explorez l'art du cake design dans ses moindres détails — glissez pour faire pivoter le modèle 3D orné du logo de l'académie.",
    hint: "Glissez pour pivoter",
  },
  gallery: { eyebrow: "L'Académie", title: "Des créations qui racontent le détail", subtitle: "Un aperçu des créations de Chef Awatif et de ses élèves.", drag: "Glissez pour explorer", featured: "La création en mouvement" },
  testimonials: {
    eyebrow: "Témoignages",
    title: "De vraies réussites",
    subtitle: "La confiance de centaines d'élèves est notre plus belle réussite.",
    items: [
      { name: "Salma B.", role: "Élève Cake Design", quote: "J'ai appris bien plus que ce que j'imaginais. Chef Awatif explique avec patience et passion.", image: "/images/student-1.jpg" },
      { name: "Imane K.", role: "Formation à distance", quote: "La formation à distance était totalement professionnelle, comme si j'étais à l'académie.", image: "/images/student-2.jpg" },
      { name: "Nadia M.", role: "A lancé son projet", quote: "Grâce à l'académie, j'ai lancé ma propre pâtisserie. Une expérience qui a changé ma vie.", image: "/images/student-3.jpg" },
    ],
  },
  register: {
    eyebrow: "Commencez",
    title: "Réservez votre place",
    subtitle: "Remplissez le formulaire, nous vous contacterons sur WhatsApp pour confirmer votre inscription.",
    name: "Nom complet",
    namePh: "Ex : Sara Amine",
    course: "Formation souhaitée",
    coursePh: "Choisissez une formation",
    mode: "Type de formation",
    modePresentiel: "Présentiel",
    modeDistance: "À distance",
    city: "Ville",
    cityPh: "Ex : Casablanca",
    submit: "Envoyer via WhatsApp",
    whatsappNote: "WhatsApp s'ouvrira avec un message prêt à envoyer.",
    or: "Ou contactez directement",
    callNow: "Appeler",
    instagram: "Suivez-nous sur Instagram",
    required: "Ce champ est requis",
  },
  contact: {
    title: "Contactez-nous",
    phone: "0678613983",
    phone2: "0701123030",
    locationLabel: "Localisation",
    location: "Maroc",
    hours: "Horaires",
    hoursValue: "Tous les jours · 9h00 – 20h00",
  },
  footer: {
    tagline: "Une académie raffinée dédiée à l'art de la pâtisserie et du cake design avec Chef Awatif Chadili.",
    nav: "Navigation",
    contact: "Contact",
    follow: "Suivez-nous",
    rights: "Tous droits réservés.",
    made: "Chadili Académie · Maroc",
  },
};

const en: Dict = {
  meta: {
    title: "Chadili Académie | Pastry Art & Cake Design",
    description:
      "Chadili Académie with Chef Awatif Chadili — premium training in cake design, French pastry and cuisine, in-person and online. Enroll now.",
  },
  nav: { home: "Home", chef: "The Chef", courses: "Courses", gallery: "Gallery", contact: "Enroll", cta: "Enroll Now" },
  hero: {
    kicker: "Chadili Académie · Morocco",
    titleLines: ["The art of", "pastry"],
    highlight: "in your hands",
    tagline: "Chadili Académie · the leader in Moroccan culinary design",
    subtitle:
      "Master cake design, French pastry and cuisine with Chef Awatif Chadili — professional training, in-person and online, with certification.",
    ctaPrimary: "Enroll in a course",
    ctaSecondary: "Explore courses",
    badgePresentiel: "In-person",
    badgeDistance: "Online",
    scroll: "Scroll",
    location: "Morocco",
  },
  marquee: ["Cake Design", "French Pastry", "Chocolate Art", "Viennoiserie", "Moroccan Cuisine", "Plating Art"],
  about: {
    eyebrow: "The Founding Chef",
    title: "Chef Awatif Chadili",
    lead: "Certified instructor and cake designer, turning passion into a true craft.",
    body: [
      "From the heart of Morocco, Chef Awatif Chadili founded an academy blending the precision of French pastry with the warmth of Moroccan cuisine, giving every student solid foundations and refined taste.",
      "The academy offers intensive hands-on training, in-person and online, with personal step-by-step guidance — from the fundamentals to the most elegant cake design creations.",
    ],
    signature: "Awatif Chadili",
    role: "Instructor · Cake Designer · Pastry & Cuisine",
    stats: [
      { value: "13.1k+", label: "Followers" },
      { value: "2762", label: "Posts" },
      { value: "500+", label: "Students" },
      { value: "100%", label: "Hands-on" },
    ],
  },
  courses: {
    eyebrow: "Our Tracks",
    title: "Our three training tracks",
    subtitle: "Choose your track — each is available in-person and online, with personal guidance and a certificate.",
    modePresentiel: "In-person",
    modeDistance: "Online",
    modulesLabel: "Core modules",
    cta: "Enroll in this track",
    items: [
      {
        key: "maroc",
        title: "Moroccan Pastry Track",
        desc: "From the fundamentals to wedding sweets — master the art of authentic Moroccan pastry.",
        modules: [
          "Introduction to the art of Moroccan pastry",
          "Raw materials and their properties",
          "Basic doughs and techniques",
          "Professional fillings and blends",
          "Shaping and decoration techniques",
          "Traditional and modern sweets",
          "Producing sweets for events and weddings",
          "Quality control and food-safety standards",
          "Production cost calculation and pricing",
          "Packaging, presentation and marketing",
          "Hands-on practice and final project",
        ],
        modes: ["presentiel", "distance"],
        icon: "BirthdayCake",
        video: "/videos/course-maroc.mp4",
        poster: "/videos/course-maroc-poster.jpg",
      },
      {
        key: "francaise",
        title: "French Pastry Track",
        desc: "Macarons, tarts, mousses and chocolate — a complete refined French pâtisserie training.",
        modules: [
          "Foundations and techniques of French pâtisserie",
          "Raw materials and their functions",
          "Basic and professional doughs",
          "Creams, mousses and fillings",
          "Chocolate and tempering techniques",
          "Glazing, coating and professional finishing",
          "Mini-pastry and modern desserts",
          "Macarons, éclairs and tarts",
          "Quality control and product preservation",
          "Production cost calculation and pricing",
          "Final practical project",
        ],
        modes: ["presentiel", "distance"],
        icon: "Cookie",
        video: "/videos/course-francaise.mp4",
        poster: "/videos/course-francaise-poster.jpg",
      },
      {
        key: "cuisine",
        title: "Moroccan & International Cuisine Track",
        desc: "From traditional Moroccan to international cuisine and the art of plating — a complete culinary training.",
        modules: [
          "Principles of professional culinary arts",
          "Hygiene, food safety and kitchen organization",
          "Understanding raw materials and how to use them",
          "Cutting and preparation skills",
          "Basic stocks and sauces",
          "Traditional and modern Moroccan cuisine",
          "International cuisine and its techniques",
          "Starters, salads and main dishes",
          "Various cooking techniques",
          "The art of food plating",
          "Dish costing and production management",
          "Communication and work in a professional kitchen",
          "Final practical project",
        ],
        modes: ["presentiel", "distance"],
        icon: "CookingPot",
        video: "/videos/course-cuisine.mp4",
        poster: "/videos/course-cuisine-poster.jpg",
      },
    ],
  },
  features: {
    eyebrow: "Why Chadili",
    title: "An exceptional learning experience",
    subtitle: "Every detail is crafted for your confidence and mastery.",
    items: [
      { title: "Certified instructor", desc: "Professional expertise and a certificate for every course.", icon: "SealCheck" },
      { title: "In-person & online", desc: "Learn at the academy or from home, wherever you are.", icon: "Broadcast" },
      { title: "100% hands-on", desc: "Direct, step-by-step practice — not just theory.", icon: "HandHeart" },
      { title: "Personal guidance", desc: "Individual support until you master every technique with confidence.", icon: "UsersThree" },
    ],
  },
  showcase: {
    eyebrow: "3D Experience",
    title: "Cake design, the Chadili signature",
    subtitle: "Explore the art of cake design in every detail — drag to rotate the 3D model bearing the academy's logo.",
    hint: "Drag to rotate",
  },
  gallery: { eyebrow: "From the Academy", title: "Creations told through detail", subtitle: "A glimpse of Chef Awatif's and her students' creations.", drag: "Drag to explore", featured: "The craft in motion" },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Real success stories",
    subtitle: "The trust of hundreds of students is our greatest achievement.",
    items: [
      { name: "Salma B.", role: "Cake Design student", quote: "I learned far more than I imagined. Chef Awatif teaches with patience and love.", image: "/images/student-1.jpg" },
      { name: "Imane K.", role: "Online course", quote: "The online training was fully professional — it felt just like being at the academy.", image: "/images/student-2.jpg" },
      { name: "Nadia M.", role: "Launched her business", quote: "Thanks to the academy I launched my own pastry business. A life-changing experience.", image: "/images/student-3.jpg" },
    ],
  },
  register: {
    eyebrow: "Get started",
    title: "Reserve your seat",
    subtitle: "Fill in the form and we'll reach out on WhatsApp to confirm your enrollment.",
    name: "Full name",
    namePh: "e.g. Sara Amine",
    course: "Desired course",
    coursePh: "Choose a course",
    mode: "Training type",
    modePresentiel: "In-person",
    modeDistance: "Online",
    city: "City",
    cityPh: "e.g. Casablanca",
    submit: "Send via WhatsApp",
    whatsappNote: "WhatsApp will open with a ready-to-send message.",
    or: "Or reach us directly",
    callNow: "Call now",
    instagram: "Follow us on Instagram",
    required: "This field is required",
  },
  contact: {
    title: "Contact us",
    phone: "0678613983",
    phone2: "0701123030",
    locationLabel: "Location",
    location: "Morocco",
    hours: "Hours",
    hoursValue: "Every day · 9:00 – 20:00",
  },
  footer: {
    tagline: "A refined academy dedicated to the art of pastry and cake design with Chef Awatif Chadili.",
    nav: "Navigation",
    contact: "Contact",
    follow: "Follow us",
    rights: "All rights reserved.",
    made: "Chadili Académie · Morocco",
  },
};

// Courses use real photos (.jpg). Testimonial avatars remain branded SVG placeholders.
[ar, fr, en].forEach((d) => {
  d.testimonials.items.forEach((t) => (t.image = t.image.replace(/\.jpg$/, ".svg")));
});

export const DICT: Record<Lang, Dict> = { ar, fr, en };
export type Dictionary = Dict;

export const CONTACT = {
  whatsapp: "212678613983",
  phone1: "0678613983",
  phone1Intl: "212678613983",
  phone2: "0701123030",
  phone2Intl: "212701123030",
  instagram: "https://www.instagram.com/chadili_academie",
  instagramHandle: "chadili_academie",
};
