export interface Project {
  slug: string;
  title: string;
  description: { fr: string; en: string };
  tagline: { fr: string; en: string };
  stack: string[];
  github?: string;
  url?: string;
  featured: boolean;
  emoji: string;
  color: string;
}

export interface Experience {
  id: string;
  company: string;
  role: { fr: string; en: string };
  location: string;
  period: string;
  description: { fr: string[]; en: string[] };
  emoji: string;
}

export interface Education {
  id: string;
  school: string;
  degree: { fr: string; en: string };
  period: string;
  details: { fr: string[]; en: string[] };
  emoji: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "portfolia",
    title: "PortfoliA",
    emoji: "🎯",
    color: "#6366f1",
    tagline: {
      fr: "Plateforme d'identité professionnelle",
      en: "Professional identity platform",
    },
    description: {
      fr: "Un profil unique qui alimente CV, portfolio web et recherche d'emploi. Import LinkedIn/GitHub, matching sémantique, génération de lettres de motivation, scraping d'offres, gamification, module B2B. ~50 modules de routes backend. Projet EFREI en équipe de 5, rôle de Founding Technical Lead.",
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
    featured: true,
  },
  {
    slug: "deviscan",
    title: "Deviscan",
    emoji: "📄",
    color: "#f59e0b",
    tagline: {
      fr: "Micro-SaaS d'extraction de devis par IA",
      en: "AI-powered quote extraction Micro-SaaS",
    },
    description: {
      fr: "Extraction automatique de données structurées depuis des PDF de devis fournisseurs. Cascade de modèles IA (Gemini, Claude), exports Excel/CSV/Factur-X, quotas par plan.",
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
    emoji: "🤖",
    color: "#10b981",
    tagline: {
      fr: "Plateforme de recrutement intelligente",
      en: "Intelligent recruitment platform",
    },
    description: {
      fr: "Matching candidat/offre hybride : similarité vectorielle (pgvector) + scoring explicable multi-critères. Parsing CV par vision IA, génération de questions d'entretien par LLM.",
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
    featured: true,
  },
];

export interface SmallProject {
  title: string;
  description: { fr: string; en: string };
  tech: string;
  github: string;
  emoji: string;
}

export const SMALL_PROJECTS: SmallProject[] = [
  {
    title: "RLProject",
    emoji: "🏎️",
    description: {
      fr: "Reinforcement Learning avec Highway-env (DQN, PPO)",
      en: "Reinforcement Learning with Highway-env (DQN, PPO)",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/RLProject",
  },
  {
    title: "Electric Bus ML",
    emoji: "🔋",
    description: {
      fr: "Prédiction de consommation de bus scolaires électriques",
      en: "Electric school bus consumption prediction",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/Electric_School_Bus_ML_Project",
  },
  {
    title: "Used Cars Pricing",
    emoji: "🚗",
    description: {
      fr: "Prédiction de prix de voitures d'occasion",
      en: "Used car price prediction model",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/used-cars-price-prediction",
  },
  {
    title: "Diabetes ML",
    emoji: "🩺",
    description: {
      fr: "Classification du diabète (Logistic Reg, MLP, Grid Search)",
      en: "Diabetes classification (Logistic Reg, MLP, Grid Search)",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/Diabetes-Machine-Learning",
  },
  {
    title: "ProjetDataLakes",
    emoji: "🗄️",
    description: {
      fr: "Architecture Data Lake avec ingestion et transformations",
      en: "Data Lake architecture with ingestion and transformations",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/ProjetDataLakes",
  },
  {
    title: "ProjetNoSQL",
    emoji: "📊",
    description: {
      fr: "Base de données NoSQL et requêtes avancées",
      en: "NoSQL database and advanced queries",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/ProjetNoSQL",
  },
  {
    title: "LuxuryPropertyDB",
    emoji: "🏠",
    description: {
      fr: "Modélisation de propriétés de luxe en Neo4j (Cypher)",
      en: "Luxury property modeling in Neo4j (Cypher)",
    },
    tech: "Cypher",
    github: "https://github.com/Simiamine/LuxuryPropertyDB",
  },
  {
    title: "LHC Particle Data",
    emoji: "⚛️",
    description: {
      fr: "Analyse multivariée (PCA, CA, MCA, FAMD) sur données du LHC",
      en: "Multivariate analysis (PCA, CA, MCA, FAMD) on LHC data",
    },
    tech: "Python",
    github: "https://github.com/Simiamine/LHC-Particle-Data--PCA--CA--MCA---FAMD",
  },
  {
    title: "Zelda (Java)",
    emoji: "🗡️",
    description: {
      fr: "Jeu d'action inspiré de Zelda: A Link to the Past",
      en: "Action game inspired by Zelda: A Link to the Past",
    },
    tech: "Java",
    github: "https://github.com/Simiamine/Zelda",
  },
  {
    title: "Pokeshop",
    emoji: "🛒",
    description: {
      fr: "E-commerce PHP avec API, panier et admin",
      en: "PHP e-commerce with API, cart and admin",
    },
    tech: "PHP",
    github: "https://github.com/Simiamine/Pokeshop-API-Version",
  },
  {
    title: "Éditeur d'automates",
    emoji: "⚙️",
    description: {
      fr: "Manipulation d'automates d'états finis",
      en: "Finite state automata manipulation",
    },
    tech: "C",
    github: "https://github.com/Simiamine/ProjetCAutomate",
  },
  {
    title: "Motus",
    emoji: "🔤",
    description: {
      fr: "Jeu de mots inspiré de Motus / Wordle",
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
  { name: { fr: "Français", en: "French" }, level: { fr: "Maternel", en: "Native" } },
  { name: { fr: "Anglais", en: "English" }, level: { fr: "C1 / Bilingue", en: "C1 / Bilingual" } },
  { name: { fr: "Arabe", en: "Arabic" }, level: { fr: "Courant", en: "Fluent" } },
  { name: { fr: "Espagnol", en: "Spanish" }, level: { fr: "Basique", en: "Basic" } },
];

export const CERTIFICATIONS = [
  "Azure DP-100 — Data Scientist",
  "Azure AI-900 — AI Fundamentals",
];

export const EXPERIENCES: Experience[] = [
  {
    id: "sanofi",
    company: "Sanofi",
    emoji: "💊",
    role: { fr: "Data & ML Engineer (Alternance)", en: "Data & ML Engineer (Work-Study)" },
    location: "Lyon",
    period: "Oct. 2025 — Present",
    description: {
      fr: [
        "Pipeline d'ingestion serverless (S3 → SQS → Lambda → Parquet → Snowflake)",
        "Modélisation dbt sur Snowflake, parsers GARAMP multi-format",
        "ML gap assessment (XGBoost, SHAP) pour le transfert technologique",
        "Infrastructure Terraform, CI/CD GitHub Actions + SonarCloud",
        "Contexte réglementé FDA/EMA — industrie pharmaceutique",
      ],
      en: [
        "Serverless ingestion pipeline (S3 → SQS → Lambda → Parquet → Snowflake)",
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
    emoji: "🚍",
    role: {
      fr: "Lead Data Engineer — Véhicules autonomes (Alternance)",
      en: "Lead Data Engineer — Autonomous Vehicles (Work-Study)",
    },
    location: "Paris",
    period: "Août 2024 — Sept. 2025",
    description: {
      fr: [
        "Conception et implémentation d'une plateforme Data complète sur AWS (seul lead technique)",
        "Pipelines ETL avec AWS Glue et PySpark pour données temps réel",
        "Dashboards Amazon QuickSight pour le suivi de flotte",
        "Développement d'interfaces de visualisation en React (Vite)",
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
    emoji: "🚇",
    role: { fr: "Data Analyst — DRH (Apprentissage)", en: "Data Analyst — HR (Apprenticeship)" },
    location: "Paris",
    period: "Sept. 2023 — Août 2024",
    description: {
      fr: [
        "Automatisation du reporting RH via VBA et SQL",
        "Création de tableaux de bord dynamiques pour la direction",
        "Intégration de solutions IA pour optimiser le tri des candidatures",
        "Conseil en stratégie IA pour le département RH",
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
    company: "Groupe Ambroise Paré",
    emoji: "🏥",
    role: { fr: "Logisticien (Stage)", en: "Logistics Officer (Internship)" },
    location: "Clichy-sous-Bois",
    period: "Juil. — Août 2022",
    description: {
      fr: [
        "Optimisation des flux d'inventaire médical",
        "Gestion de l'approvisionnement et des dotations",
        "Suivi et mise à jour des stocks en temps réel",
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
    emoji: "🎓",
    degree: {
      fr: "Diplôme d'Ingénieur — Big Data & Machine Learning",
      en: "Engineering Degree — Big Data & Machine Learning",
    },
    period: "2024 — 2026",
    details: {
      fr: [
        "Machine Learning, Deep Learning, Reinforcement Learning",
        "Data Engineering, Data Lakes, ETL/ELT",
        "DevOps & MLOps (Docker, CI/CD, Terraform)",
        "Programmation fonctionnelle (Scala)",
        "Cloud (AWS / Azure) — certifié Azure DP-100 et AI-900",
        "Projet PortfoliA : Founding Technical Lead (équipe de 5)",
      ],
      en: [
        "Machine Learning, Deep Learning, Reinforcement Learning",
        "Data Engineering, Data Lakes, ETL/ELT",
        "DevOps & MLOps (Docker, CI/CD, Terraform)",
        "Functional programming (Scala)",
        "Cloud (AWS / Azure) — Azure DP-100 and AI-900 certified",
        "PortfoliA project: Founding Technical Lead (team of 5)",
      ],
    },
  },
  {
    id: "ukm",
    school: "UKM (Universiti Kebangsaan Malaysia)",
    emoji: "🇲🇾",
    degree: {
      fr: "Stage Recherche en IA — Projet AL-Warisan",
      en: "AI Research Internship — AL-Warisan Project",
    },
    period: "Juin — Sept. 2025",
    details: {
      fr: [
        "Laboratoire de recherche en Intelligence Artificielle",
        "Publication ICONI 2025 (conférence au Japon)",
        "Testing et évaluation de modèles NLP en langue malaise",
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
    emoji: "💻",
    degree: {
      fr: "Ingénierie Informatique",
      en: "Computer Engineering",
    },
    period: "2023 — 2024",
    details: {
      fr: [
        "Algorithmes & programmation avancée",
        "Bases de données relationnelles, Systèmes d'exploitation",
        "Optimisation linéaire et combinatoire",
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
    emoji: "📐",
    degree: {
      fr: "Cycle préparatoire — Sciences de l'Ingénieur",
      en: "Preparatory cycle — Engineering Sciences",
    },
    period: "2021 — 2023",
    details: {
      fr: [
        "Informatique (algorithmique, introduction IA, data)",
        "Mathématiques appliquées et statistiques",
        "Physique et sciences de l'ingénieur",
        "Projets d'équipe pluridisciplinaires",
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
