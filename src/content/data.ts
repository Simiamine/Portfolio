export interface Project {
  slug: string;
  title: string;
  description: { fr: string; en: string };
  tagline: { fr: string; en: string };
  stack: string[];
  github?: string;
  url?: string;
  featured: boolean;
  icon: string;
  color: string;
  logo?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: { fr: string; en: string };
  location: string;
  period: string;
  description: { fr: string[]; en: string[] };
  icon: string;
  logo: string;
}

export interface Education {
  id: string;
  school: string;
  degree: { fr: string; en: string };
  period: string;
  details: { fr: string[]; en: string[] };
  icon: string;
  logo: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "portfolia",
    title: "PortfoliA",
    icon: "Target",
    color: "#FF8C42",
    logo: "/images/logos/portfolia.png",
    tagline: {
      fr: "Plateforme d'identite professionnelle",
      en: "Professional identity platform",
    },
    description: {
      fr: "Un profil unique qui alimente CV, portfolio web et recherche d'emploi. Import LinkedIn/GitHub, matching semantique, generation de lettres de motivation, scraping d'offres, gamification, module B2B. ~50 modules de routes backend. Projet EFREI en equipe de 5, role de Founding Technical Lead.",
      en: "A single profile that feeds your resume, web portfolio, and job search. LinkedIn/GitHub import, semantic matching, cover letter generation, job scraping, gamification, B2B module. ~50 backend route modules. EFREI team project (5 people), Founding Technical Lead role.",
    },
    stack: [
      "React/Vite",
      "FastAPI",
      "Gemini",
      "ChromaDB",
      "PostgreSQL",
      "Docker",
      "Cloudflare R2",
      "Sentry",
    ],
    url: "https://portfolia.fr",
    featured: true,
  },
  {
    slug: "deviscan",
    title: "Deviscan",
    icon: "FileSearch",
    color: "theme",
    logo: "/images/logos/deviscan.png",
    tagline: {
      fr: "Micro-SaaS d'extraction de devis par IA",
      en: "AI-powered quote extraction Micro-SaaS",
    },
    description: {
      fr: "Extraction automatique de donnees structurees depuis des PDF de devis fournisseurs. Cascade de modeles IA (Gemini, Claude), exports Excel/CSV/Factur-X, quotas par plan.",
      en: "Automatic extraction of structured data from supplier quote PDFs. AI model cascade (Gemini, Claude), Excel/CSV/Factur-X exports, plan-based quotas.",
    },
    stack: [
      "Next.js 16",
      "FastAPI",
      "Gemini",
      "Claude",
      "Factur-X",
      "Supabase",
      "Cloudflare R2",
      "LemonSqueezy",
    ],
    featured: true,
  },
  {
    slug: "rhania",
    title: "RhaniA",
    icon: "Bot",
    color: "#7A1B2E",
    logo: "/images/logos/rhania.svg",
    tagline: {
      fr: "Plateforme de recrutement intelligente",
      en: "Intelligent recruitment platform",
    },
    description: {
      fr: "Matching candidat/offre hybride : similarite vectorielle (pgvector) + scoring explicable multi-criteres. Parsing CV par vision IA, generation de questions d'entretien par LLM.",
      en: "Hybrid candidate/job matching: vector similarity (pgvector) + explainable multi-criteria scoring. AI vision CV parsing, LLM-generated interview questions.",
    },
    stack: [
      "Next.js",
      "FastAPI",
      "pgvector",
      "PyTorch",
      "Sentence-BERT",
      "Gemini Vision",
      "Docker",
    ],
    url: "https://rhania.fr",
    featured: true,
  },
];

export interface SmallProject {
  title: string;
  description: { fr: string; en: string };
  tech: string;
  github: string;
  icon: string;
}

export const SMALL_PROJECTS: SmallProject[] = [
  {
    title: "RLProject",
    icon: "Gamepad2",
    description: {
      fr: "Reinforcement Learning avec Highway-env (DQN, PPO)",
      en: "Reinforcement Learning with Highway-env (DQN, PPO)",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/RLProject",
  },
  {
    title: "Electric Bus ML",
    icon: "Zap",
    description: {
      fr: "Prediction de consommation de bus scolaires electriques",
      en: "Electric school bus consumption prediction",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/Electric_School_Bus_ML_Project",
  },
  {
    title: "Used Cars Pricing",
    icon: "Car",
    description: {
      fr: "Prediction de prix de voitures d'occasion",
      en: "Used car price prediction model",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/used-cars-price-prediction",
  },
  {
    title: "Diabetes ML",
    icon: "HeartPulse",
    description: {
      fr: "Classification du diabete (Logistic Reg, MLP, Grid Search)",
      en: "Diabetes classification (Logistic Reg, MLP, Grid Search)",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/Diabetes-Machine-Learning",
  },
  {
    title: "ProjetDataLakes",
    icon: "Database",
    description: {
      fr: "Architecture Data Lake avec ingestion et transformations",
      en: "Data Lake architecture with ingestion and transformations",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/ProjetDataLakes",
  },
  {
    title: "ProjetNoSQL",
    icon: "BarChart3",
    description: {
      fr: "Base de donnees NoSQL et requetes avancees",
      en: "NoSQL database and advanced queries",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/ProjetNoSQL",
  },
  {
    title: "LuxuryPropertyDB",
    icon: "Home",
    description: {
      fr: "Modelisation de proprietes de luxe en Neo4j (Cypher)",
      en: "Luxury property modeling in Neo4j (Cypher)",
    },
    tech: "Cypher",
    github: "https://github.com/Simiamine/LuxuryPropertyDB",
  },
  {
    title: "LHC Particle Data",
    icon: "Atom",
    description: {
      fr: "Analyse multivariee (PCA, CA, MCA, FAMD) sur donnees du LHC",
      en: "Multivariate analysis (PCA, CA, MCA, FAMD) on LHC data",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/LHC-Particle-Data--PCA--CA--MCA---FAMD",
  },
  {
    title: "Zelda (Java)",
    icon: "Sword",
    description: {
      fr: "Jeu d'action inspire de Zelda: A Link to the Past",
      en: "Action game inspired by Zelda: A Link to the Past",
    },
    tech: "Java",
    github: "https://github.com/Simiamine/Zelda",
  },
  {
    title: "Pokeshop",
    icon: "ShoppingCart",
    description: {
      fr: "E-commerce PHP avec API, panier et admin",
      en: "PHP e-commerce with API, cart and admin",
    },
    tech: "PHP",
    github: "https://github.com/Simiamine/Pokeshop-API-Version",
  },
  {
    title: "Editeur d'automates",
    icon: "Cog",
    description: {
      fr: "Manipulation d'automates d'etats finis",
      en: "Finite state automata manipulation",
    },
    tech: "C",
    github: "https://github.com/Simiamine/ProjetCAutomate",
  },
  {
    title: "Motus",
    icon: "Type",
    description: {
      fr: "Jeu de mots inspire de Motus / Wordle",
      en: "Word game inspired by Motus / Wordle",
    },
    tech: "FreePascal",
    github: "https://github.com/Simiamine/BoucheCousue",
  },
];

export const SKILLS = {
  data_engineering: [
    "Python",
    "SQL",
    "dbt",
    "Snowflake",
    "Kafka",
    "PySpark",
    "Airflow",
    "AWS Lambda",
    "AWS S3",
    "AWS SQS",
    "AWS Glue",
  ],
  ml_ai: [
    "XGBoost",
    "SHAP",
    "scikit-learn",
    "NLP (SBERT)",
    "Gemini",
    "Embeddings",
    "ChromaDB",
  ],
  backend: [
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "pgvector",
    "Django",
  ],
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite"],
  infra: [
    "Terraform",
    "Docker",
    "GitHub Actions",
    "SonarCloud",
    "Vercel",
    "AWS EKS",
  ],
};

export const LANGUAGES = [
  { name: { fr: "Francais", en: "French" }, level: { fr: "Maternel", en: "Native" } },
  { name: { fr: "Anglais", en: "English" }, level: { fr: "C1 / Bilingue", en: "C1 / Bilingual" } },
  { name: { fr: "Arabe", en: "Arabic" }, level: { fr: "Courant", en: "Fluent" } },
  { name: { fr: "Espagnol", en: "Spanish" }, level: { fr: "Basique", en: "Basic" } },
];

export const CERTIFICATIONS = [
  "Azure AI-900 — AI Fundamentals",
  "TOEIC — 960/990",
];

export const EXPERIENCES: Experience[] = [
  {
    id: "sanofi",
    company: "Sanofi",
    icon: "Pill",
    logo: "/images/logos/sanofi.png",
    role: { fr: "Data & ML Engineer (Alternance)", en: "Data & ML Engineer (Work-Study)" },
    location: "Lyon",
    period: "Oct. 2025 — Present",
    description: {
      fr: [
        "Pipeline d'ingestion serverless (S3 -> SQS -> Lambda -> Parquet -> Snowflake)",
        "Modelisation dbt sur Snowflake, parsers GARAMP multi-format",
        "ML gap assessment (XGBoost, SHAP) pour le transfert technologique",
        "Infrastructure Terraform, CI/CD GitHub Actions + SonarCloud",
        "Contexte reglemente FDA/EMA — industrie pharmaceutique",
      ],
      en: [
        "Serverless ingestion pipeline (S3 -> SQS -> Lambda -> Parquet -> Snowflake)",
        "dbt modeling on Snowflake, multi-format GARAMP parsers",
        "ML gap assessment (XGBoost, SHAP) for technology transfer",
        "Terraform infrastructure, CI/CD with GitHub Actions + SonarCloud",
        "FDA/EMA regulated context — pharmaceutical industry",
      ],
    },
  },
  {
    id: "ratp-auto",
    company: "RATP",
    icon: "Bus",
    logo: "/images/logos/ratp.png",
    role: {
      fr: "Lead Data Engineer — Vehicules autonomes (Alternance)",
      en: "Lead Data Engineer — Autonomous Vehicles (Work-Study)",
    },
    location: "Paris",
    period: "Aout 2024 — Sept. 2025",
    description: {
      fr: [
        "Conception et implementation d'une plateforme Data complete sur AWS (seul lead technique)",
        "Pipelines ETL avec AWS Glue et PySpark pour donnees temps reel",
        "Dashboards Amazon QuickSight pour le suivi de flotte",
        "Developpement d'interfaces de visualisation en React (Vite)",
        "Infrastructure as Code : Terraform (EKS, S3, Glue, IAM)",
      ],
      en: [
        "Design and implementation of a full Data platform on AWS (solo tech lead)",
        "ETL pipelines with AWS Glue and PySpark for real-time data",
        "Amazon QuickSight dashboards for fleet monitoring",
        "Visualization interfaces built with React (Vite)",
        "Infrastructure as Code: Terraform (EKS, S3, Glue, IAM)",
      ],
    },
  },
  {
    id: "ratp-drh",
    company: "RATP",
    icon: "Train",
    logo: "/images/logos/ratp.png",
    role: { fr: "Data Analyst — DRH (Apprentissage)", en: "Data Analyst — HR (Apprenticeship)" },
    location: "Paris",
    period: "Sept. 2023 — Aout 2024",
    description: {
      fr: [
        "Automatisation du reporting RH via VBA et SQL",
        "Creation de tableaux de bord dynamiques pour la direction",
        "Integration de solutions IA pour optimiser le tri des candidatures",
        "Conseil en strategie IA pour le departement RH",
      ],
      en: [
        "HR reporting automation via VBA and SQL",
        "Dynamic dashboards for management",
        "AI integration to optimize candidate screening",
        "AI strategy consulting for the HR department",
      ],
    },
  },
  {
    id: "ambroise-pare",
    company: "Groupe Ambroise Pare",
    icon: "Hospital",
    logo: "/images/logos/ambroise-pare.png",
    role: { fr: "Logisticien (Stage)", en: "Logistics Officer (Internship)" },
    location: "Clichy-sous-Bois",
    period: "Juil. — Aout 2022",
    description: {
      fr: [
        "Optimisation des flux d'inventaire medical",
        "Gestion de l'approvisionnement et des dotations",
        "Suivi et mise a jour des stocks en temps reel",
      ],
      en: [
        "Medical inventory flow optimization",
        "Supply and allocation management",
        "Real-time stock tracking and updates",
      ],
    },
  },
];

export const EDUCATION: Education[] = [
  {
    id: "efrei",
    school: "EFREI Paris",
    icon: "GraduationCap",
    logo: "/images/logos/efrei.png",
    degree: {
      fr: "Diplome d'Ingenieur — Big Data & Machine Learning",
      en: "Engineering Degree — Big Data & Machine Learning",
    },
    period: "2024 — 2026",
    details: {
      fr: [
        "Machine Learning, Deep Learning, Reinforcement Learning",
        "Data Engineering, Data Lakes, ETL/ELT",
        "DevOps & MLOps (Docker, CI/CD, Terraform)",
        "Programmation fonctionnelle (Scala)",
        "Cloud (AWS / Azure) — certifie Azure AI-900",
        "Projet PortfoliA : Founding Technical Lead (equipe de 5)",
      ],
      en: [
        "Machine Learning, Deep Learning, Reinforcement Learning",
        "Data Engineering, Data Lakes, ETL/ELT",
        "DevOps & MLOps (Docker, CI/CD, Terraform)",
        "Functional programming (Scala)",
        "Cloud (AWS / Azure) — Azure AI-900 certified",
        "PortfoliA project: Founding Technical Lead (team of 5)",
      ],
    },
  },
  {
    id: "ukm",
    school: "UKM (Universiti Kebangsaan Malaysia)",
    icon: "Globe",
    logo: "/images/logos/ukm.png",
    degree: {
      fr: "Stage Recherche en IA — Projet AL-Warisan",
      en: "AI Research Internship — AL-Warisan Project",
    },
    period: "Juin — Sept. 2025",
    details: {
      fr: [
        "Laboratoire de recherche en Intelligence Artificielle",
        "Publication ICONI 2025 (conference au Japon)",
        "Testing et evaluation de modeles NLP en langue malaise",
        "Projet gouvernemental malaisien (AL-Warisan)",
        "Sous la direction du Pr. Zukefli bin Mansour",
      ],
      en: [
        "Artificial Intelligence research laboratory",
        "ICONI 2025 publication (conference in Japan)",
        "Testing and evaluation of Malay-language NLP models",
        "Malaysian government project (AL-Warisan)",
        "Under supervision of Prof. Zukefli bin Mansour",
      ],
    },
  },
  {
    id: "cytech",
    school: "CY Tech",
    icon: "Monitor",
    logo: "/images/logos/cytech.png",
    degree: {
      fr: "Ingenierie Informatique",
      en: "Computer Engineering",
    },
    period: "2023 — 2024",
    details: {
      fr: [
        "Algorithmes & programmation avancee",
        "Bases de donnees relationnelles, Systemes d'exploitation",
        "Optimisation lineaire et combinatoire",
        "Programmation Web (HTML/CSS/JS, PHP)",
      ],
      en: [
        "Algorithms & advanced programming",
        "Relational databases, Operating systems",
        "Linear and combinatorial optimization",
        "Web programming (HTML/CSS/JS, PHP)",
      ],
    },
  },
  {
    id: "insa",
    school: "INSA Rouen",
    icon: "BookOpen",
    logo: "/images/logos/insa.png",
    degree: {
      fr: "Cycle preparatoire — Sciences de l'Ingenieur",
      en: "Preparatory cycle — Engineering Sciences",
    },
    period: "2021 — 2023",
    details: {
      fr: [
        "Informatique (algorithmique, introduction IA, data)",
        "Mathematiques appliquees et statistiques",
        "Physique et sciences de l'ingenieur",
        "Projets d'equipe pluridisciplinaires",
      ],
      en: [
        "Computer Science (algorithms, intro to AI, data)",
        "Applied mathematics and statistics",
        "Physics and engineering sciences",
        "Multidisciplinary team projects",
      ],
    },
  },
];
