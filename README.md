# 🚀 Portfolio Amine M'ZALI - Fusion Edition

Portfolio professionnel moderne avec un design unique : 
- 🎨 **Design bicolore marron/beige** avec formes ondulées
- ✨ **Animations modernes** et effets glassmorphism
- 🌐 **Support multilingue** FR/EN avec détection automatique
- 📱 **Responsive** mobile, tablette, desktop

## 🎯 Fonctionnalités

### ✨ Design & UX
- **Thème bicolore** : #5e2933 (marron foncé) et #815443 (marron clair)
- **Formes ondulées animées** en arrière-plan
- **Bulles de dialogue** style chat dans le hero
- **Glassmorphism** sur les cartes flottantes
- **Custom cursor** interactif (desktop uniquement)
- **Scroll progress indicator** en haut de page
- **Bouton scroll to top** animé

### 🎭 Animations
- **Typing effect** sur les bulles de texte du hero
- **Parallax** sur les cartes flottantes
- **Scroll reveal** sur toutes les sections
- **Tilt effect** sur les cartes de projets au hover
- **Stagger animation** sur la timeline
- **Fade-in progressif** sur les logos de technologies

### 📋 Sections
1. **Hero** - Introduction avec bulles de chat et cartes flottantes
2. **À propos** - Présentation avec highlights
3. **Parcours** - Timeline bifurquée (formation à gauche, expérience à droite)
4. **Projets** - Cartes modernes avec overlay GitHub
5. **Compétences** - Logos de technologies + langues + certifications
6. **Formation** - Détail des études
7. **Expérience** - Parcours professionnel détaillé

### 🎯 Modals
- **Modal CV** - Affichage du CV PDF
- **Modal Contact** - Formulaire de contact avec validation

### 🌐 Multilingue
- Détection automatique de la langue du navigateur
- Redirection vers `fr.html` ou `en.html`
- Sélecteur de langue dans la navigation

## 📁 Structure du projet

```
portfolio_fusion/
├── index.html          # Page de redirection automatique
├── fr.html             # Version française
├── en.html             # Version anglaise (à créer)
├── css/
│   └── style.css       # Styles fusionnés
├── js/
│   └── script.js       # JavaScript avec animations
├── images/             # Images du portfolio
└── res/
    ├── cvfr.pdf        # CV français
    └── cven.pdf        # CV anglais
```

## 🚀 Déploiement

### Option 1 : GitHub Pages

1. **Créer un repository GitHub**
```bash
cd portfolio_fusion
git init
git add .
git commit -m "Initial commit - Portfolio fusionné"
git branch -M main
git remote add origin https://github.com/Simiamine/Portfolio.git
git push -u origin main
```

2. **Activer GitHub Pages**
   - Aller dans Settings > Pages
   - Source : `main` branch
   - Le site sera disponible sur : `https://simiamine.github.io/Portfolio/`

### Option 2 : Netlify

1. **Drag & Drop**
   - Aller sur [netlify.com](https://netlify.com)
   - Glisser-déposer le dossier `portfolio_fusion`
   - Le site est en ligne instantanément !

2. **Configuration du domaine personnalisé** (optionnel)
   - Ajouter un fichier `_redirects` :
   ```
   /* /index.html 200
   ```

### Option 3 : Vercel

```bash
npm install -g vercel
cd portfolio_fusion
vercel
```

## 🎨 Personnalisation

### Changer les couleurs

Dans `css/style.css`, modifier les variables CSS :

```css
:root {
    --primary-dark: #5e2933;    /* Marron foncé */
    --primary-light: #815443;   /* Marron clair */
    --secondary-beige: #d2bdb1; /* Beige */
    /* ... */
}
```

### Modifier les informations

Éditer les fichiers `fr.html` et `en.html` :
- **Nom** : Chercher "Amine M'ZALI"
- **Titre** : "Big Data & Machine Learning"
- **Projets** : Section `.projects-grid`
- **Compétences** : Section `.skills`

### Ajouter des projets

Dans la section `<div class="projects-grid">` :

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-overlay">
            <a href="LIEN_GITHUB" target="_blank" class="project-link">
                <i class="fab fa-github"></i>
            </a>
        </div>
        <div class="project-placeholder">
            <i class="fas fa-ICONE"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Nom du projet</h3>
        <h4>Description courte</h4>
        <p>Description détaillée...</p>
        <ul>
            <li>Fonctionnalité 1</li>
            <li>Fonctionnalité 2</li>
        </ul>
        <a href="LIEN_GITHUB" target="_blank" class="custom-btn custom-border-btn">
            <i class="fab fa-github"></i> Dépôt GitHub
        </a>
    </div>
</div>
```

### Configurer le formulaire de contact

Dans `js/script.js`, remplacer l'URL Google Apps Script :

```javascript
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

**Pour créer un Google Apps Script :**
1. Créer un Google Sheet
2. Extensions > Apps Script
3. Copier le code de collecte de formulaire
4. Déployer > New deployment > Web app
5. Copier l'URL de déploiement

## 📝 Checklist avant déploiement

- [ ] Remplacer toutes les images dans `/images`
- [ ] Ajouter les CV PDF dans `/res`
- [ ] Mettre à jour les liens GitHub/LinkedIn
- [ ] Configurer le formulaire de contact
- [ ] Créer la version anglaise (`en.html`)
- [ ] Tester sur mobile/tablette
- [ ] Vérifier tous les liens externes
- [ ] Optimiser les images (compression)
- [ ] Ajouter un favicon
- [ ] Tester les performances (Lighthouse)

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Variables CSS, Grid, Flexbox, Animations
- **JavaScript ES6+** - Vanilla JS, Intersection Observer API
- **Font Awesome 6** - Icônes
- **Google Fonts** - DM Sans & Poppins

## 📱 Responsive

Le portfolio est optimisé pour :
- 📱 Mobile : < 600px
- 📱 Tablette : 600px - 968px
- 💻 Desktop : > 968px

## ⚡ Performance

- Lazy loading des images
- Preloader élégant
- Animations optimisées (GPU accelerated)
- Fichiers CSS/JS minifiés en production
- Custom cursor désactivé sur mobile

## 🎨 Crédits

Portfolio créé avec l'aide de l'IA Claude (Anthropic) en appliquant les meilleures pratiques UX/UI modernes.

## 📄 Licence

Ce portfolio est à usage personnel. N'hésitez pas à vous en inspirer !

---

**Développé avec ❤️ et ☕**

Pour toute question : [LinkedIn](https://www.linkedin.com/in/mzaliamine/) | [GitHub](https://github.com/Simiamine)


