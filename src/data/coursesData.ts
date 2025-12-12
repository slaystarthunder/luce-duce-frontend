export type CourseId =
  | "los"
  | "ugl"
  | "ul"
  | "sdi"
  | "radical-collaboration"
  | "the-human-element";

export interface CourseContent {
  id: CourseId;
  title: string;
  subtitle: string; // short “what it is”
  duration: string; // e.g. "5 internatdagar"
  audience: string; // målgrupp (short)
  cardSummary: string; // for the card
  highlights: string[]; // 3 bullets for card/list
  detail: {
    intro: string;
    goals: string[];
    content: string[];
    format: string[];
    prerequisites?: string[];
  };
}

export const coursesData: CourseContent[] = [
  {
    id: "los",
    title: "Ledarskap och Självkännedom (LoS)",
    subtitle: "Personligt ledarskap med fokus på självkännedom och reflektion.",
    duration: "3 dagar + uppföljningsdag",
    audience: "Ledare och blivande ledare.",
    cardSummary:
      "Fördjupning i personligt ledarskap genom reflektion, teori och handledning.",
    highlights: [
      "Ökad insikt i dig själv som ledare",
      "Teori + reflektion + utvecklingsplan",
      "Uppföljning och fördjupning",
    ],
    detail: {
      intro:
        "En fördjupande utbildning i personligt ledarskap där du tränar självkännedom och utvecklar din egen ledarroll genom reflektion och handledning.",
      goals: [
        "Öka insikten i dig själv som person och ledare",
        "Knyta egna erfarenheter till etablerade modeller",
        "Skapa en personlig utvecklingsplan för ditt ledarskap",
      ],
      content: [
        "Handledda moment med certifierade handledare",
        "Individuell reflektion och strukturerade samtal (t.ex. i triader)",
        "Teorianknytning och praktisk bearbetning",
      ],
      format: [
        "3 dagar + 1 uppföljningsdag",
        "Arbete i tydliga faser, delvis utomhus",
      ],
      prerequisites: ["Inga formella krav (ledarerfarenhet är en fördel)."],
    },
  },

  {
    id: "ugl",
    title: "Utveckling av Grupp och Ledare (UGL)",
    subtitle: "Upplevelsebaserad träning i gruppdynamik, ledarskap och samarbete.",
    duration: "5 internatdagar",
    audience: "Personer som vill utveckla ledarskap/medarbetarskap i grupper.",
    cardSummary:
      "Klassisk utbildning i grupprocesser med upplevelsebaserad inlärning och handledning.",
    highlights: [
      "Förstå hur grupper utvecklas och fungerar",
      "Insikt i eget beteende i grupp",
      "Två certifierade handledare, 8–12 deltagare",
    ],
    detail: {
      intro:
        "UGL är en etablerad utbildning som fokuserar på gruppers utveckling och dynamik, samt hur ledarskap och medarbetarskap påverkar samarbetet.",
      goals: [
        "Förstå gruppers mognad och dynamik",
        "Öka självinsikt i gruppsammanhang",
        "Utveckla förmåga att anpassa ledarstil efter gruppens behov",
      ],
      content: [
        "Upplevelsebaserad inlärning (Kolbs modell)",
        "Praktiska övningar, reflektion och teorigenomgång",
        "Analys av grupprocesser under handledning",
      ],
      format: [
        "5 sammanhängande internatdagar",
        "8–12 deltagare",
        "Två certifierade handledare",
      ],
      prerequisites: ["Kursen är krävande – deltagaren bör ha balans i livssituationen."],
    },
  },

  {
    id: "ul",
    title: "Utvecklande Ledarskap (UL)",
    subtitle: "Ledarskapsutveckling med feedback, reflektion och utvecklingsplan.",
    duration: "Utbildning + uppföljning (2–3 månader)",
    audience: "Ledare inom privat, statlig eller kommunal verksamhet.",
    cardSummary:
      "Utveckla ditt ledarskap genom teori, praktiska moment och strukturerad feedback.",
    highlights: [
      "Teorimodellen Utvecklande Ledarskap",
      "360-graders ledarbedömning (ULL)",
      "Personlig utvecklingsplan och uppföljning",
    ],
    detail: {
      intro:
        "UL utvecklar ledarskap genom en tydlig modell, praktisk träning och strukturerad återkoppling. Du skapar en plan för fortsatt utveckling.",
      goals: [
        "Öka självinsikt som ledare",
        "Utveckla ett ledarskap som bygger på förebild, omtanke och motivation",
      ],
      content: [
        "Modellen Utvecklande Ledarskap",
        "360-graders bedömning (ULL)",
        "Utvecklingsplan med uppföljning",
      ],
      format: [
        "Teori + praktiska övningar",
        "Uppföljningsdag efter 2–3 månader",
      ],
    },
  },

  {
    id: "sdi",
    title: "Strength Deployment Inventory (SDI)",
    subtitle: "Motivation, beteenden och konflikter – verktyg för bättre samarbete.",
    duration: "Varierar (upplägg efter behov)",
    audience: "Individer och arbetsgrupper.",
    cardSummary:
      "Förstå drivkrafter och konflikter för att stärka relationer och samarbete.",
    highlights: [
      "Identifiera styrkor och motivationsmönster",
      "Förstå hur konflikter uppstår",
      "Bygg bättre samarbete i vardagen",
    ],
    detail: {
      intro:
        "SDI ger ett språk för motivation och beteenden – särskilt i pressade lägen – och stärker förmågan att samarbeta och hantera konflikter.",
      goals: [
        "Identifiera personliga styrkor och drivkrafter",
        "Öka förståelsen för konflikters uppkomst",
        "Förbättra samarbete och relationer",
      ],
      content: [
        "Övningar och reflektion kopplat till motivation och konflikt",
        "Fokus på individ och grupp i samspel",
        "Handlingsplan för fortsatt utveckling",
      ],
      format: ["Praktiska moment + reflektion", "Kan anpassas efter organisationens behov"],
    },
  },

  {
    id: "radical-collaboration",
    title: "Radical Collaboration – Förtroendefullt Samarbete",
    subtitle: "Förhandling, konfliktlösning och relationsbyggande i praktiken.",
    duration: "3 dagar",
    audience: "Roller där samarbete, förhandling och konflikter är centrala.",
    cardSummary:
      "Träna förhandling och konflikthantering för att bygga långsiktigt förtroende.",
    highlights: [
      "Harvardmetoden (Getting to Yes)",
      "Praktiska simuleringar och övningar",
      "FIRO-inspirerade metoder (The Human Element)",
    ],
    detail: {
      intro:
        "Ett program för att hantera intressemotsättningar och konflikter med verktyg som stödjer både resultat och relation.",
      goals: [
        "Förbättra förmågan att hantera intressemotsättningar",
        "Utveckla färdigheter i förhandling och konflikthantering",
        "Bygga hållbara och förtroendefulla relationer",
      ],
      content: [
        "Harvardmetoden – principbaserad förhandling",
        "FIRO-baserade perspektiv från The Human Element",
        "Simuleringar, övningar och reflektion",
      ],
      format: ["3 dagar", "Kombination av teori och praktik"],
    },
  },

  {
    id: "the-human-element",
    title: "The Human Element",
    subtitle: "Människan som grund för välfungerande organisationer och relationer.",
    duration: "Varierar (anpassas)",
    audience: "Organisationer, arbetsgrupper och ledare.",
    cardSummary:
      "Program för självkännedom, kommunikation och effektivare samarbete i organisationer.",
    highlights: [
      "FIRO-teori och relationsmedvetande",
      "Självskattning och dialog",
      "Praktiska verktyg för utveckling",
    ],
    detail: {
      intro:
        "The Human Element fokuserar på hur självkännedom och relationer påverkar kommunikation, ansvar och effektivitet i organisationer.",
      goals: [
        "Öka självkännedom och ansvarstagande",
        "Förbättra kommunikation och samarbete",
        "Stärka individers och gruppers effektivitet",
      ],
      content: [
        "FIRO-teori och relationsperspektiv",
        "Självskattning, reflektion och dialog",
        "Verktyg för personlig och organisatorisk utveckling",
      ],
      format: ["Individ- och gruppbaserat arbete", "Upplägg anpassas efter behov"],
    },
  },
];
