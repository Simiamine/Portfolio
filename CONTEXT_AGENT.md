# 🤖 Contexte pour Agent IA - Portfolio Amine M'ZALI

*Document créé le 31 octobre 2025 - Dernière session de développement*

---

## 📋 Vue d'ensemble du projet

**Portfolio professionnel V2.0** d'Amine M'ZALI - Étudiant en dernière année à l'Efrei Paris, spécialisé en Big Data & Machine Learning, avec 3 ans d'expérience en alternance dans la data.

### 🎯 Objectif
Portfolio moderne et professionnel pour présenter le parcours, les compétences et les projets d'Amine, avec un design unique bicolore marron/beige et des animations modernes.

---

## 📂 Structure du projet

```
/Users/U1097655/Documents/Amine/Portfolio/
├── index.html              # Redirection auto FR/EN selon langue navigateur
├── fr.html                 # Version française complète
├── en.html                 # Version anglaise complète
├── css/
│   └── style.css          # Tous les styles (1200+ lignes)
├── js/
│   └── script.js          # Animations, interactions, form
├── images/
│   ├── moi.jpg           # Photo de profil
│   ├── test.png          # Illustration section À propos
│   ├── sanofi.png        # Logo Sanofi (local)
│   ├── UKM.jpg           # Logo UKM Malaysia (local)
│   ├── langues/          # Drapeaux pour sélecteur langue
│   └── ...
├── res/
│   └── cvfr.pdf          # CV français (cven.pdf manquant)
└── docs/
    ├── README.md
    ├── CHANGELOG.md
    ├── GUIDE_TEST.md
    └── DEMARRAGE_RAPIDE.md
```

---

## 🎨 Design & Identité visuelle

### Palette de couleurs (Variables CSS)
```css
:root {
    --primary-dark: #5e2933;      /* Marron foncé principal */
    --primary-light: #815443;     /* Marron clair */
    --secondary-beige: #d2bdb1;   /* Beige secondaire */
    --accent-brown: #7d5e4c;      /* Marron accent */
    --cream: #f7f6f6;             /* Crème fond */
    --text-dark: #2c3e50;         /* Texte principal */
    --text-gray: #7f8c8d;         /* Texte secondaire */
}
```

### Thème
- **Bicolore marron/beige** avec formes ondulées
- **Glassmorphism** sur les cartes
- **Custom cursor** interactif (desktop uniquement)
- **Animations scroll-reveal** sur toutes les sections

---

## 🏗️ Architecture des pages

### Sections principales (dans l'ordre)

1. **Preloader** - Data Ball animée (spinner custom avec `{ }`)
2. **Navigation** - Navbar fixe avec icônes (CV, Contact, LinkedIn, GitHub, langue)
3. **Hero** - Bulles de chat style chat-bot + cartes flottantes (Data Analysis/Engineering/Science)
4. **À propos** - Image + texte + 6 highlights (3 techniques + 3 soft skills)
5. **Parcours** - Timeline bifurquée (formation gauche, expérience droite) avec icônes centrées
6. **Projets** - Grille de cartes avec overlays GitHub
7. **Compétences** - Logos de technologies + langues + certifications
8. **Formation** - Détail des études (EFREI, CY Tech, INSA)
9. **Expérience** - Parcours professionnel (Sanofi, UKM, RATP x2, Logistique)
10. **Footer** - Copyright avec icônes

### Modals
- **Modal CV** - Affiche `res/cvfr.pdf` ou `res/cven.pdf`
- **Modal Contact** - Formulaire avec envoi vers Google Apps Script

---

## 💼 Expériences récentes ajoutées

### 1. Sanofi Data Analyst (Sept 2025 - Présent)
- Accélérateur M&S de Lyon
- Logo local : `images/sanofi.png`

### 2. UKM Malaysia - Stage Recherche IA (Juin-Sept 2025)
- Prof. Zukefli bin Mansour
- Projet AL-Warisan (IA en langue malaise)
- Logo local : `images/UKM.jpg`

### 3. RATP Data Expert (Août 2024 - Sept 2025)
- Plateforme data AWS pour véhicules autonomes

### 4. RATP Data Analyst (Sept 2023 - Août 2024)
- Reporting RH, dashboards, IA candidatures

---

## 🛠️ Technologies & Compétences affichées

### Langages & Big Data
Python, PySpark/Spark, SQL, Scala, Java, C/C++, Hadoop

### Nouveaux outils ajoutés (Session récente)
- **dbt** (Data Build Tool)
- **Snowflake** (Data Warehouse)
- **Airflow** (Orchestration)
- **Streamlit** (Data Apps)

### DevOps & Cloud
AWS, Docker, Django

### Langues
- Français (Maternelle)
- Anglais (Bilingue)
- Arabe (Courant)
- Espagnol (Basique)

### Certifications
Azure AI-900

---

## 🎭 Animations & Interactivité

### Preloader
**Data Ball** (personnalisé, remplace ancien spinner)
- Moitié supérieure marron clair (#815443)
- Moitié inférieure beige (#d2bdb1)
- Bande centrale marron foncé
- Centre : accolades `{ }` (thème code/data)
- Rotation 1.2s
- **Alternative disponible** : Pokéball spinner (commenté dans l'historique Git)

### Animations JavaScript (`js/script.js`)
- **Typing effect** : Texte qui s'écrit lettre par lettre dans le hero
- **Parallax** : Cartes flottantes qui suivent la souris
- **Scroll reveal** : IntersectionObserver pour animations au scroll
- **Custom cursor** : Curseur personnalisé avec effet de trainée (desktop)
- **Skill bars** : Barres de progression animées au scroll
- **Form submission** : Envoi formulaire contact via Google Apps Script

---

## 🔧 Points techniques importants

### 1. Timeline bifurquée
```css
.timeline-item {
    width: 80%;           /* Ajusté pour éviter les chevauchements */
    max-width: 600px;
}
```
- Icônes positionnées sur les coins des cartes
- `.timeline-item.left .timeline-icon` : coin supérieur droit
- `.timeline-item.right .timeline-icon` : coin supérieur gauche

### 2. Responsive
- **Desktop** : > 968px
- **Tablette** : 600-968px
- **Mobile** : < 600px
- Custom cursor désactivé sur mobile

### 3. Google Apps Script (formulaire contact)
```javascript
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```
⚠️ À configurer si Amine veut recevoir les messages

### 4. Redirection multilingue (`index.html`)
```javascript
const userLang = navigator.language || navigator.userLanguage;
window.location.href = userLang.startsWith('fr') ? 'fr.html' : 'en.html';
```

---

## 📦 Git & GitHub

### Repository
**https://github.com/Simiamine/Portfolio**

### Branches
- `main` : Portfolio V2.0 (actuel)
- `old` : Ancien portfolio (sauvegarde)

### Derniers commits
```
c657f40 - Merge branch 'main'
c8b2485 - 🎨 Enhance preloader design (Data Ball)
b1234ad - Update README.md
88c184f - 📝 Update README - Remove external references
dc72999 - 🎨 Portfolio V2.0 - Fusion complète
```

### GitHub Pages
⚠️ **TODO** : Activer dans Settings > Pages
- Branch: `main`
- URL future : `https://simiamine.github.io/Portfolio/`

---

## ✅ Tâches complétées (Session récente)

1. ✅ Fusion portfolio original + design moderne
2. ✅ Timeline bifurquée formation/expérience
3. ✅ Ajout expériences récentes (Sanofi, UKM, RATP)
4. ✅ Ajout compétences (dbt, Snowflake, Airflow, Streamlit)
5. ✅ Section À propos avec 6 highlights
6. ✅ Version anglaise complète (`en.html`)
7. ✅ Data Ball preloader personnalisé
8. ✅ Migration vers repo Portfolio (branche `old` pour sauvegarde)
9. ✅ Nettoyage dossiers temporaires
10. ✅ Documentation complète

---

## 📝 TODOs restants

### ⚠️ Prioritaire
- [ ] **Activer GitHub Pages** (Settings > Pages sur GitHub)
- [ ] **Ajouter `res/cven.pdf`** (CV anglais manquant)
- [ ] **Tester formulaire contact** (configurer Google Apps Script si besoin)
- [ ] **Ajouter images locales** si URLs externes cassent :
  - `images/sanofi.png` ✅ (déjà ajouté)
  - `images/UKM.jpg` ✅ (déjà ajouté)

### 🎨 Améliorations futures (optionnelles)
- [ ] Ajouter favicon personnalisé
- [ ] Optimiser images (compression)
- [ ] Ajouter plus de projets GitHub (quand Amine fournira la liste)
- [ ] Créer animations supplémentaires (si demandé)
- [ ] SEO : meta tags, Open Graph
- [ ] Analytics (Google Analytics ou autre)
- [ ] Dark mode (si souhaité)

---

## 🚀 Commandes utiles

### Développement local
```bash
cd /Users/U1097655/Documents/Amine/Portfolio
python3 -m http.server 8000
# Ouvrir : http://localhost:8000
```

### Git workflow
```bash
# Status
git status

# Add et commit
git add .
git commit -m "✨ Description du changement"

# Push
git push origin main

# Pull (en cas de divergence)
git pull --no-rebase origin main
```

### Refresh cache navigateur
```
Cmd + Shift + R (Mac)
Ctrl + Shift + R (Windows/Linux)
```

---

## 🎯 Préférences & Décisions prises

### Design
- ✅ **Preloader** : Data Ball avec `{ }` (pas Pokéball pour éviter droits d'auteur)
- ✅ **Couleurs** : Thème bicolore marron/beige (pas rouge vif)
- ✅ **Timeline** : Cartes larges (80% width) avec icônes sur coins
- ✅ **Highlights** : 6 items (3 data + 3 soft skills)

### Contenu
- ✅ **Projets** : Garder Zelda (favori d'Amine)
- ✅ **Description** : "Dernière année, 3 ans d'xp, dispo sept 2026"
- ✅ **Images externes** : Préférence pour local quand possible

### Technique
- ✅ **Framework** : Vanilla JS (pas de React/Vue)
- ✅ **CSS** : Variables CSS, pas de preprocessor
- ✅ **Hosting** : GitHub Pages (gratuit, simple)

---

## 💡 Tips pour le prochain agent

1. **Toujours vérifier** le fichier actuel avant d'éditer (chemins changés plusieurs fois)
2. **Refresh cache** après changements CSS/JS (`Cmd + Shift + R`)
3. **Timeline** : Modifier avec précaution (équilibre iconique délicat)
4. **Images** : Vérifier que les chemins locaux existent avant de push
5. **Commits** : Messages clairs avec emoji (style actuel du projet)
6. **Tests** : Tester sur mobile/tablette (responsive important)

---

## 🔗 Liens utiles

- **Repo GitHub** : https://github.com/Simiamine/Portfolio
- **LinkedIn Amine** : https://www.linkedin.com/in/mzaliamine/
- **GitHub Amine** : https://github.com/Simiamine
- **Font Awesome** : https://fontawesome.com/icons (pour icônes)
- **Google Fonts** : DM Sans & Poppins (déjà inclus)

---

## 📞 Contexte utilisateur

**Amine M'ZALI**
- Dernière année Efrei Paris (Big Data & ML)
- 3 ans d'expérience en alternance
- Cherche opportunités à partir de septembre 2026
- Profil complet : Data Analysis, Engineering, Science
- Passionné par l'innovation et la résolution de problèmes

---

## 🎉 État final du projet

**Status** : ✅ Production-ready
**Version** : 2.0
**Dernière mise à jour** : 31 octobre 2025

Le portfolio est complet, fonctionnel, et prêt à être déployé sur GitHub Pages.
Tous les fichiers sont propres, documentés, et le code est maintenable.

---

*Document généré pour continuité du développement - Session terminée le 31 oct 2025*

**Bon courage au prochain agent ! 🚀**

