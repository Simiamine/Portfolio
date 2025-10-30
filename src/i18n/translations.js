/**
 * Système de traduction pour le portfolio
 * Gestion des langues FR et EN
 */

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'Moi',
      journey: 'Parcours',
      projects: 'Projets',
      skills: 'Compétences',
      education: 'Formation',
      experience: 'Expérience'
    },
    hero: {
      greeting: 'Bonjour !',
      name: 'Je suis Amine M\'ZALI',
      title: 'Étudiant en ingénierie à l\'Efrei Paris',
      specialization: 'Big Data & Machine Learning'
    },
    about: {
      title: 'À propos...',
      subtitle: 'Qui suis-je ?',
      p1: 'Actuellement en quatrième année à <strong>l\'Efrei Paris</strong>, je me spécialise en <strong>Big Data et Machine Learning</strong>. Je recherche une <strong>alternance d\'un an</strong> à partir de <strong>septembre 2025</strong> pour ma dernière année d\'études. Passionné par l\'innovation et la résolution de problèmes, j\'explore des domaines comme <strong>l\'aéronautique</strong>, le <strong>jeu vidéo</strong> et la <strong>data science appliquée</strong>.',
      p2: 'Curieux et adaptable, j\'évolue aisément dans des environnements collaboratifs et j\'espère contribuer à des <strong>projets de pointe</strong> grâce à ma double compétence en <strong>informatique</strong> et <strong>analyse de données</strong>.',
      p3: 'En dehors de l\'informatique, j\'aime lire (romans fantastiques, mangas) et pratiquer divers sports collectifs (basket, handball, volley). J\'ai également fondé la <em>"Onizuka Foundation"</em> pour accompagner des jeunes en difficulté.'
    },
    journey: {
      title: 'Mon Parcours',
      efrei: {
        title: 'EFREI Paris',
        date: 'Août 2024 - Aujourd\'hui',
        description: 'Master en Big Data & Machine Learning.'
      },
      ratp_expert: {
        title: 'RATP Data Expert',
        date: 'Août 2024 - Aujourd\'hui',
        description: 'Développement d\'une plateforme data sur AWS pour véhicules autonomes.'
      },
      cy: {
        title: 'CY Tech',
        date: 'Sept 2023 - Juin 2024',
        description: 'Ingénierie en Informatique.'
      },
      ratp_analyst: {
        title: 'RATP Data Analyst',
        date: 'Sept 2023 - Août 2024',
        description: 'Décisions data-driven à la RATP.'
      },
      insa: {
        title: 'INSA Rouen',
        date: 'Sept 2021 - Juin 2023',
        description: 'Cycle préparatoire en Ingénieurie.'
      },
      logistic: {
        title: 'Logisticien',
        date: 'Juillet 2022 - Août 2022',
        description: 'Optimisation des flux d\'inventaire dans le domaine médical.'
      }
    },
    projects: {
      title: 'Mes Projets',
      airport: {
        title: 'AirportProject (Scala)',
        subtitle: 'Application de gestion d\'aéroports',
        description: 'Application Scala qui <strong>analyse</strong> trois fichiers CSV (pays, aéroports, pistes) et propose une <strong>recherche</strong> par code ou nom approximatif, ainsi que de la <strong>génération de rapports</strong>.',
        features: [
          '<strong>Parsing CSV</strong> personnalisé (pas de lib externe)',
          '<strong>Fuzzy matching</strong> via <code>me.xdrop.fuzzywuzzy</code>',
          'Rapports (Top 10 pays avec plus/moins d\'aéroports, etc.)',
          '<strong>Interface JavaFX</strong> et un <strong>mode CLI</strong>',
          '<strong>Futures Scala</strong> pour le traitement parallèle'
        ],
        note: 'Se lance avec <code>sbt clean compile run</code> (GUI par défaut) ou en modifiant <em>mainClass</em> pour le mode CLI. Contient des <strong>tests</strong> via <code>sbt test</code>.',
        github: 'Dépôt GitHub'
      },
      diabetes: {
        title: 'Diabetes Machine Learning',
        subtitle: 'Classification du diabète avec scikit-learn',
        description: 'Projet réalisé à <strong>EFREI</strong> pour prédire l\'apparition du diabète avec le dataset <em>Pima Indians Diabetes</em>. J\'ai fait une <strong>analyse exploratoire (EDA)</strong>, un <strong>prétraitement</strong> (valeurs manquantes, standardisation) et implémenté divers <strong>modèles de classification</strong> :',
        features: [
          'Régression Logistique',
          'Arbre de Décision',
          'Réseau de Neurones (MLP)'
        ],
        note: 'J\'ai ensuite optimisé les hyperparamètres (Grid Search) et comparé <strong>accuracy</strong>, <strong>precision</strong>, <strong>recall</strong>, <strong>F1-score</strong> et <strong>matrices de confusion</strong>. Le <strong>Réseau de Neurones optimisé</strong> a obtenu les meilleurs résultats pour détecter les patients diabétiques.',
        github: 'Dépôt GitHub'
      },
      ecommerce: {
        title: 'E-commerce',
        subtitle: 'Stack : PHP / Django',
        description: 'J\'ai développé plusieurs sites e-commerce avec <strong>PHP</strong> (et une maquette Django) incluant la gestion des utilisateurs, un panier, un catalogue et des modules de paiement sécurisé.',
        features: [
          'Rôles (admin/client)',
          'Suivi de commandes en temps réel',
          'Dashboard d\'administration pour le stock',
          'Intégration d\'API (paiement, auth, etc.)'
        ],
        github: 'Dépôt GitHub'
      },
      zelda: {
        title: 'Jeu Java (Zelda-like)',
        subtitle: 'Jeu d\'action en vue du dessus',
        description: 'Un projet Java inspiré de Zelda : A Link to the Past. Il inclut plusieurs fonctionnalités :',
        features: [
          'Déplacements et combats avec perte de vie',
          'Interactions variées avec des objets',
          'Transitions intérieur/extérieur (maisons, zones)',
          'Système d\'inventaire et de monnaie',
          'Dialogue et marchandage avec PNJ'
        ],
        github: 'Dépôt GitHub'
      },
      automata: {
        title: 'Éditeur d\'Automates',
        subtitle: 'C / Algorithmique',
        description: 'Projet en langage C manipulant des automates d\'états finis :',
        features: [
          'Création, modification, import/export d\'un automate',
          'Test de reconnaissance de mots',
          'Vérification de complétude/déterminisme + conversions',
          'Concaténation et produit d\'automates'
        ],
        github: 'Dépôt GitHub'
      },
      motus: {
        title: 'Motus (Bouche Cousue)',
        subtitle: 'FreePascal',
        description: 'Un jeu inspiré du "Motus" français et de Wordle : devinez le mot mystère en 6 tentatives, avec des indications sur les lettres correctes ou non.',
        github: 'Dépôt GitHub'
      },
      more: 'Retrouvez plus de projets sur mon'
    },
    skills: {
      title: 'Compétences Techniques',
      technical: 'Langages, Big Data & DevOps',
      languages: 'Langues',
      certifications: 'Certifications',
      french: 'Français : Maternelle',
      english: 'Anglais : Bilingue',
      arabic: 'Arabe : Courant',
      spanish: 'Espagnol : Basique'
    },
    education: {
      title: 'Formation',
      efrei: {
        title: 'EFREI Paris',
        subtitle: 'Master en Big Data & ML (2024-2026)',
        description: 'Grande École, Ingénieur Informatique (Apprentissage)',
        features: [
          'Machine Learning, Deep Learning',
          'Data Engineering, Data Lakes',
          'DevOps & MLOps',
          'Programmation fonctionnelle (Scala)',
          'Cloud (certifications AWS / Azure)'
        ]
      },
      cy: {
        title: 'CY Cergy',
        subtitle: 'Ingénierie Informatique (2023-2024)',
        description: 'Grande École, Informatique (Apprentissage)',
        features: [
          'Algorithmes & programmation (Python, Java, C)',
          'Bases de données, OS (Linux, Windows)',
          'Optimisation linéaire, Probabilités',
          'Programmation Web'
        ]
      },
      insa: {
        title: 'INSA Rouen',
        subtitle: 'Cycle Préparatoire (2021-2023)',
        description: 'Sciences et Techniques de l\'Ingénieur',
        features: [
          'Informatique (algorithmique, IA, data)',
          'Mathématiques (algèbre, analyse, statistiques)',
          'Physique (mécanique, thermodynamique, électromagnétisme)',
          'Projets d\'équipe (Motus, etc.)'
        ]
      }
    },
    experience: {
      title: 'Expérience Professionnelle',
      ratp_expert: {
        title: 'Data Expert (Alternance)',
        company: 'RATP · Paris',
        date: 'Août 2024 — Aujourd\'hui',
        features: [
          '<strong>Conception d\'une plateforme Data sur AWS</strong> dédiée à la supervision des véhicules autonomes (1 message/seconde).',
          '<strong>Développement de pipelines ETL</strong> avec AWS Glue (Spark) pour le nettoyage et la normalisation de données massives issues de capteurs.',
          '<strong>Création de dashboards interactifs</strong> sous Amazon QuickSight et <strong>développement d\'interfaces personnalisées en React (Vite)</strong> pour une supervision temps réel plus réactive.'
        ]
      },
      ratp_analyst: {
        title: 'Data Analyst (Apprentissage)',
        company: 'RATP',
        date: 'Sept 2023 à Juil 2024, Paris',
        features: [
          'Automatisation du reporting RH via VBA, réduisant considérablement la charge manuelle.',
          'Création de tableaux de bord dynamiques pour le suivi en temps réel des recrutements.',
          'Intégration de solutions IA pour optimiser le tri des candidatures et améliorer l\'exactitude des données.'
        ]
      },
      logistic: {
        title: 'Stage en Logistique',
        company: 'Groupe Ambroise Paré',
        date: '2022, Clichy-sous-Bois',
        features: [
          'Optimisation des flux d\'inventaire et collaboration avec des équipes pluridisciplinaires pour fluidifier la logistique.',
          'Gestion de l\'approvisionnement et stockage automatisé du matériel médical.',
          'Création et mise à jour des dotations pour différents services cliniques.'
        ]
      }
    },
    contact: {
      title: 'Me Contacter',
      name: 'Votre nom',
      namePlaceholder: 'Jean Dupont',
      email: 'Votre e-mail',
      emailPlaceholder: 'jean.dupont@example.com',
      message: 'Message',
      messagePlaceholder: 'Bonjour Amine, je souhaiterais...',
      send: 'Envoyer le message',
      success: 'Message envoyé avec succès !',
      error: 'Erreur lors de l\'envoi. Réessayez.'
    },
    cv: {
      title: 'Mon CV'
    },
    theme: {
      toggle: 'Changer le thème'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      journey: 'My Journey',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      experience: 'Work'
    },
    hero: {
      greeting: 'Hello!',
      name: 'I am Amine M\'ZALI',
      title: 'Engineering Student at Efrei Paris',
      specialization: 'Big Data & Machine Learning'
    },
    about: {
      title: 'About me...',
      subtitle: 'Who am I?',
      p1: 'I\'m currently in my fourth year at <strong>Efrei Paris</strong>, specialising in <strong>Big Data and Machine Learning</strong>. I\'m seeking a <strong>1-year apprenticeship</strong> starting <strong>September 2025</strong> for my final year. Passionate about innovation and problem-solving, I explore fields such as <strong>aeronautics</strong>, <strong>video games</strong> and <strong>applied data science</strong>.',
      p2: 'Curious and adaptable, I thrive in collaborative environments and hope to contribute to <strong>cutting-edge projects</strong> with my dual expertise in <strong>computer science</strong> and <strong>data analysis</strong>.',
      p3: 'Beyond tech, I enjoy reading (fantasy novels, manga) and playing team sports (basketball, handball, volleyball). I also founded the <em>"Onizuka Foundation"</em> to mentor underprivileged youth.'
    },
    journey: {
      title: 'My Journey',
      efrei: {
        title: 'EFREI Paris',
        date: 'Aug 2024 - Present',
        description: 'Master\'s in Big Data & Machine Learning.'
      },
      ratp_expert: {
        title: 'RATP Data Expert',
        date: 'Aug 2024 - Present',
        description: 'Developing AWS-based data platform for autonomous vehicles.'
      },
      cy: {
        title: 'CY Tech',
        date: 'Sept 2023 - June 2024',
        description: 'Engineering in Computer Science.'
      },
      ratp_analyst: {
        title: 'RATP Data Analyst',
        date: 'Sept 2023 - Aug 2024',
        description: 'Data-driven decision making at RATP.'
      },
      insa: {
        title: 'INSA Rouen',
        date: 'Sept 2021 - June 2023',
        description: 'Preparatory cycle in Engineering.'
      },
      logistic: {
        title: 'Logistician',
        date: 'July 2022 - Aug 2022',
        description: 'Optimized inventory flows in the medical field.'
      }
    },
    projects: {
      title: 'My Projects',
      airport: {
        title: 'AirportProject (Scala)',
        subtitle: 'Airport Management Application',
        description: 'Scala application that <strong>parses</strong> three CSV files (countries, airports, runways) and provides <strong>search</strong> by code or fuzzy name, as well as <strong>report generation</strong>.',
        features: [
          '<strong>Custom CSV Parsing</strong> (no external lib)',
          '<strong>Fuzzy matching</strong> (partial name) via <code>me.xdrop.fuzzywuzzy</code>',
          'Reporting capabilities (Top 10 countries with most/fewest airports, etc.)',
          '<strong>JavaFX GUI</strong> and a <strong>CLI mode</strong>',
          '<strong>Scala Futures</strong> for parallel data processing'
        ],
        note: 'Run with <code>sbt clean compile run</code> (GUI by default) or adjust <em>mainClass</em> for the CLI version. Includes <strong>test suites</strong> via <code>sbt test</code>.',
        github: 'GitHub Repository'
      },
      diabetes: {
        title: 'Diabetes Machine Learning',
        subtitle: 'Diabetes Classification with scikit-learn',
        description: 'A project carried out at <strong>EFREI</strong> to predict diabetes onset using the <em>Pima Indians Diabetes</em> dataset. I performed an <strong>exploratory analysis (EDA)</strong>, <strong>data preprocessing</strong> (missing values, standardization), and implemented various <strong>classification models</strong>:',
        features: [
          'Logistic Regression',
          'Decision Tree',
          'Neural Network (MLP)'
        ],
        note: 'I then tuned hyperparameters (Grid Search) and compared <strong>accuracy</strong>, <strong>precision</strong>, <strong>recall</strong>, <strong>F1-score</strong>, and <strong>confusion matrices</strong>. The <strong>optimized Neural Network</strong> showed the best performance for detecting diabetic patients.',
        github: 'GitHub Repository'
      },
      ecommerce: {
        title: 'E-commerce',
        subtitle: 'Stack: PHP / Django',
        description: 'I developed multiple e-commerce websites using <strong>PHP</strong> (plus a Django backend mockup) featuring user management, a cart, a product catalog, and secure payment modules.',
        features: [
          'User roles (admin/customer)',
          'Real-time order tracking',
          'Admin dashboard for stock management',
          'API integration (payment, authentication, etc.)'
        ],
        github: 'GitHub Repository'
      },
      zelda: {
        title: 'Java Game (Zelda-like)',
        subtitle: 'Top-down Action Game',
        description: 'A Java project inspired by Zelda: A Link to the Past. It includes multiple features:',
        features: [
          'Movement and combat with health reduction',
          'Various item interactions',
          'Indoor/outdoor transitions (houses, zones)',
          'Inventory and currency system',
          'NPC dialog and trading'
        ],
        github: 'GitHub Repository'
      },
      automata: {
        title: 'Automata Editor',
        subtitle: 'C / Algorithmics',
        description: 'A C-language project manipulating finite automata (AEF):',
        features: [
          'Create, edit, import/export an automaton',
          'Check if a string is recognized',
          'Completeness/determinism checks & conversions',
          'Concatenation and product of automata'
        ],
        github: 'GitHub Repository'
      },
      motus: {
        title: 'Motus (Bouche Cousue)',
        subtitle: 'FreePascal',
        description: 'A game inspired by the French "Motus" and Wordle: guess the secret word in 6 tries, with feedback on correct/incorrect letters.',
        github: 'GitHub Repository'
      },
      more: 'Explore more projects on my'
    },
    skills: {
      title: 'Technical Skills',
      technical: 'Languages, Big Data & DevOps',
      languages: 'Languages',
      certifications: 'Certifications',
      french: 'French: Native',
      english: 'English: Bilingual',
      arabic: 'Arabic: Fluent',
      spanish: 'Spanish: Basic'
    },
    education: {
      title: 'Education',
      efrei: {
        title: 'EFREI Paris',
        subtitle: 'Master\'s in Big Data & ML (2024-2026)',
        description: 'Grande École, Computer Engineering (Apprenticeship)',
        features: [
          'Machine Learning, Deep Learning',
          'Data Engineering, Data Lakes',
          'DevOps & MLOps',
          'Functional programming (Scala)',
          'Cloud (AWS / Azure certifications)'
        ]
      },
      cy: {
        title: 'CY Cergy',
        subtitle: 'Computer Engineering (2023-2024)',
        description: 'Grande École, Computer Science (Apprenticeship)',
        features: [
          'Algorithms & programming (Python, Java, C)',
          'Databases, OS (Linux, Windows)',
          'Linear optimization, Probability',
          'Web programming'
        ]
      },
      insa: {
        title: 'INSA Rouen',
        subtitle: 'Preparatory Cycle (2021-2023)',
        description: 'Sciences and Engineering Techniques',
        features: [
          'Computer Science (algorithms, AI, data)',
          'Mathematics (algebra, analysis, statistics)',
          'Physics (mechanics, thermodynamics, electromagnetism)',
          'Team projects (Motus, etc.)'
        ]
      }
    },
    experience: {
      title: 'Work Experience',
      ratp_expert: {
        title: 'Data Expert (Apprenticeship)',
        company: 'RATP · Paris',
        date: 'August 2024 — Present',
        features: [
          'Set up a data platform on AWS to ingest and process real-time autonomous vehicle data (1 message/sec).',
          'Designed ingestion pipelines (Spark via AWS Glue) to clean and normalize large volumes of sensor/telemetry data.',
          'Built interactive dashboards with Amazon QuickSight and custom real-time monitoring interfaces using <strong>React (Vite)</strong>.'
        ]
      },
      ratp_analyst: {
        title: 'Data Analyst (Apprenticeship)',
        company: 'RATP',
        date: 'Sept 2023 to July 2024, Paris',
        features: [
          'Automated HR reporting with VBA, significantly reducing manual work.',
          'Created dynamic dashboards to track recruitment metrics in real time.',
          'Advised on integrating AI-driven solutions to streamline applicant screening and improve data accuracy.'
        ]
      },
      logistic: {
        title: 'Logistics Intern',
        company: 'Ambroise Paré Group',
        date: '2022, Clichy-sous-Bois',
        features: [
          'Optimized inventory flows and worked with cross-functional teams to ensure seamless logistics operations.',
          'Managed supply and automated warehouse storage for medical equipment.',
          'Created and updated supply lists for various clinical departments.'
        ]
      }
    },
    contact: {
      title: 'Contact Me',
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      email: 'Your Email',
      emailPlaceholder: 'johndoe@example.com',
      message: 'Message',
      messagePlaceholder: 'Hello Amine, I would like to...',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Error sending message. Try again.'
    },
    cv: {
      title: 'My CV'
    },
    theme: {
      toggle: 'Toggle theme'
    }
  }
};

/**
 * Instance de gestion de l'i18n
 */
export class I18n {
  constructor() {
    this.currentLang = this.detectLanguage();
    this.translations = translations;
  }

  /**
   * Détecte la langue du navigateur
   */
  detectLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      return savedLang;
    }
    
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  }

  /**
   * Change la langue
   */
  setLanguage(lang) {
    if (lang !== 'fr' && lang !== 'en') return;
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.updateDOM();
  }

  /**
   * Récupère une traduction par clé
   */
  t(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }

  /**
   * Met à jour le DOM avec les traductions
   */
  updateDOM() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.t(key);
      
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.innerHTML = translation;
      }
    });

    // Mise à jour de l'attribut lang
    document.documentElement.lang = this.currentLang;
  }

  /**
   * Obtient la langue actuelle
   */
  getCurrentLanguage() {
    return this.currentLang;
  }
}

export default new I18n();

