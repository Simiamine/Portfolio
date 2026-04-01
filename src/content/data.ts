export interface Project {
  slug: string;
  title: string;
  description: { fr: string; en: string };
  tagline: { fr: string; en: string };
  stack: string[];
  github?: string;
  url?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: { fr: string; en: string };
  location: string;
  period: string;
  description: { fr: string[]; en: string[] };
}

export interface Education {
  school: string;
  degree: { fr: string; en: string };
  period: string;
  details: { fr: string[]; en: string[] };
}

export const PROJECTS: Project[] = [
  {
    slug: "deviscan",
    title: "Deviscan",
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
  {
    slug: "portfolia",
    title: "PortfoliA",
    tagline: {
      fr: "Plateforme d'identité professionnelle",
      en: "Professional identity platform",
    },
    description: {
      fr: "Un profil unique qui alimente CV, portfolio web et recherche d'emploi. Import LinkedIn/GitHub, matching sémantique, génération de lettres de motivation. Projet EFREI en équipe de 5.",
      en: "A single profile that feeds your resume, web portfolio, and job search. LinkedIn/GitHub import, semantic matching, cover letter generation. EFREI team project (5 people).",
    },
    stack: [
      "React/Vite",
      "FastAPI",
      "Gemini",
      "ChromaDB",
      "PostgreSQL",
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
}

export const SMALL_PROJECTS: SmallProject[] = [
  {
    title: "AirportProject",
    description: {
      fr: "Application de gestion d'aéroports avec fuzzy matching",
      en: "Airport management app with fuzzy matching",
    },
    tech: "Scala",
    github: "https://github.com/Simiamine",
  },
  {
    title: "Diabetes ML",
    description: {
      fr: "Classification du diabète (Logistic Reg, MLP, Grid Search)",
      en: "Diabetes classification (Logistic Reg, MLP, Grid Search)",
    },
    tech: "Python",
    github: "https://github.com/Simiamine",
  },
  {
    title: "E-commerce",
    description: {
      fr: "Sites e-commerce avec gestion utilisateurs et paiement",
      en: "E-commerce sites with user management and payment",
    },
    tech: "PHP / Django",
    github: "https://github.com/Simiamine",
  },
  {
    title: "Jeu Zelda-like",
    description: {
      fr: "Jeu d'action en vue du dessus inspiré de Zelda",
      en: "Top-down action game inspired by Zelda",
    },
    tech: "Java",
    github: "https://github.com/Simiamine",
  },
  {
    title: "Éditeur d'automates",
    description: {
      fr: "Manipulation d'automates d'états finis",
      en: "Finite state automata manipulation",
    },
    tech: "C",
    github: "https://github.com/Simiamine",
  },
  {
    title: "Motus",
    description: {
      fr: "Jeu de mots inspiré de Motus / Wordle",
      en: "Word game inspired by Motus / Wordle",
    },
    tech: "FreePascal",
    github: "https://github.com/Simiamine",
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
    company: "Sanofi",
    role: { fr: "Data & ML Engineer", en: "Data & ML Engineer" },
    location: "Lyon",
    period: "Oct. 2025 — Present",
    description: {
      fr: [
        "Pipeline d'ingestion serverless (S3 → SQS → Lambda → Snowflake)",
        "Modélisation dbt sur Snowflake, parsers GARAMP",
        "ML gap assessment (XGBoost, SHAP)",
        "Infrastructure Terraform, CI/CD GitHub Actions",
      ],
      en: [
        "Serverless ingestion pipeline (S3 → SQS → Lambda → Snowflake)",
        "dbt modeling on Snowflake, GARAMP parsers",
        "ML gap assessment (XGBoost, SHAP)",
        "Terraform infrastructure, CI/CD with GitHub Actions",
      ],
    },
  },
  {
    company: "UKM",
    role: {
      fr: "Stage Recherche IA",
      en: "AI Research Internship",
    },
    location: "Malaisie",
    period: "Juin — Sept. 2025",
    description: {
      fr: [
        "Publication ICONI 2025 (Japon)",
        "Testing et évaluation de l'IA AL-Warisan (NLP malais)",
        "Sous la direction du Pr. Zukefli bin Mansour",
      ],
      en: [
        "ICONI 2025 publication (Japan)",
        "Testing and evaluation of AL-Warisan AI (Malay NLP)",
        "Under supervision of Prof. Zukefli bin Mansour",
      ],
    },
  },
  {
    company: "RATP",
    role: {
      fr: "Lead Data Engineer — Véhicules autonomes",
      en: "Lead Data Engineer — Autonomous Vehicles",
    },
    location: "Paris",
    period: "Août 2024 — Sept. 2025",
    description: {
      fr: [
        "Conception d'une plateforme Data sur AWS",
        "Pipelines ETL avec AWS Glue (PySpark)",
        "Dashboards QuickSight, interfaces React",
        "Infrastructure Terraform (EKS, S3, Glue)",
      ],
      en: [
        "Design of a Data platform on AWS",
        "ETL pipelines with AWS Glue (PySpark)",
        "QuickSight dashboards, React interfaces",
        "Terraform infrastructure (EKS, S3, Glue)",
      ],
    },
  },
  {
    company: "RATP",
    role: { fr: "Data Analyst — DRH", en: "Data Analyst — HR" },
    location: "Paris",
    period: "Sept. 2023 — Août 2024",
    description: {
      fr: [
        "Automatisation du reporting RH via VBA",
        "Tableaux de bord dynamiques",
        "Intégration IA pour optimiser le tri des candidatures",
      ],
      en: [
        "HR reporting automation via VBA",
        "Dynamic dashboards",
        "AI integration to optimize candidate screening",
      ],
    },
  },
  {
    company: "Groupe Ambroise Paré",
    role: { fr: "Logisticien", en: "Logistics Officer" },
    location: "Clichy-sous-Bois",
    period: "Juil. — Août 2022",
    description: {
      fr: [
        "Optimisation des flux d'inventaire médical",
        "Gestion de l'approvisionnement",
      ],
      en: [
        "Medical inventory flow optimization",
        "Supply management",
      ],
    },
  },
];

export const EDUCATION: Education[] = [
  {
    school: "EFREI Paris",
    degree: {
      fr: "Master Big Data & Machine Learning",
      en: "Master's in Big Data & Machine Learning",
    },
    period: "2024 — 2026",
    details: {
      fr: [
        "Machine Learning, Deep Learning",
        "Data Engineering, Data Lakes",
        "DevOps & MLOps",
        "Programmation fonctionnelle (Scala)",
        "Cloud (AWS / Azure)",
      ],
      en: [
        "Machine Learning, Deep Learning",
        "Data Engineering, Data Lakes",
        "DevOps & MLOps",
        "Functional programming (Scala)",
        "Cloud (AWS / Azure)",
      ],
    },
  },
  {
    school: "CY Tech",
    degree: {
      fr: "Ingénierie Informatique",
      en: "Computer Engineering",
    },
    period: "2023 — 2024",
    details: {
      fr: [
        "Algorithmes & programmation",
        "Bases de données, OS",
        "Optimisation linéaire",
      ],
      en: [
        "Algorithms & programming",
        "Databases, OS",
        "Linear optimization",
      ],
    },
  },
  {
    school: "INSA Rouen",
    degree: {
      fr: "Cycle préparatoire — Sciences de l'Ingénieur",
      en: "Preparatory cycle — Engineering Sciences",
    },
    period: "2021 — 2023",
    details: {
      fr: [
        "Informatique (algo, IA, data)",
        "Mathématiques appliquées",
        "Physique",
      ],
      en: [
        "Computer Science (algorithms, AI, data)",
        "Applied mathematics",
        "Physics",
      ],
    },
  },
];
