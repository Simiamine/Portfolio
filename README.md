# 🎨 Portfolio Amine M'ZALI - Version 2.0

Portfolio professionnel moderne d'Amine M'ZALI, étudiant en ingénierie Big Data & Machine Learning à l'Efrei Paris.

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/Simiamine)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

## ✨ Fonctionnalités

### 🎯 Principales
- **Multi-langues** (FR/EN) avec système i18n modulaire
- **Mode sombre/clair** avec persistance et détection système
- **PWA** (Progressive Web App) - Installable et utilisable hors-ligne
- **Animations fluides** avec GSAP
- **Lazy loading** des images pour performances optimales
- **Responsive** - Compatible tous appareils
- **Accessibilité WCAG 2.1** niveau AA
- **SEO optimisé** avec meta tags, schema.org et sitemap

### 🚀 Technologies

#### Frontend
- **Vite 5** - Build tool moderne et rapide
- **Vanilla JavaScript ES6+** - Pas de framework lourd
- **CSS Modules** - Architecture modulaire avec variables CSS
- **GSAP** - Animations performantes
- **Bootstrap 5** - Grid system uniquement

#### Outils
- **ESLint** - Qualité du code
- **Vite PWA** - Service Worker et manifest
- **Git** - Versionnage

## 📁 Structure du Projet

```
Portfolio-main/
├── src/                      # Code source
│   ├── css/                  # Styles modulaires
│   │   ├── variables.css     # Variables CSS (thèmes)
│   │   ├── base.css          # Styles de base & reset
│   │   ├── components.css    # Composants réutilisables
│   │   ├── layout.css        # Layout et sections
│   │   ├── vendor-overrides.css # Overrides Bootstrap
│   │   └── main.css          # Point d'entrée CSS
│   │
│   ├── js/                   # Modules JavaScript
│   │   ├── main.js           # Point d'entrée
│   │   ├── theme.js          # Gestion du thème
│   │   ├── navigation.js     # Navigation et scroll
│   │   ├── animations.js     # Animations GSAP
│   │   ├── lazyload.js       # Lazy loading images
│   │   ├── contact.js        # Formulaire de contact
│   │   └── utils.js          # Fonctions utilitaires
│   │
│   ├── i18n/                 # Traductions
│   │   └── translations.js   # FR/EN
│   │
│   └── index.html            # HTML unique
│
├── public/                   # Fichiers publics
│   ├── images/               # Images du site
│   ├── res/                  # CV PDF
│   ├── manifest.json         # Manifest PWA
│   ├── robots.txt            # SEO
│   └── sitemap.xml           # SEO
│
├── dist/                     # Build de production (généré)
├── node_modules/             # Dépendances (généré)
│
├── vite.config.js            # Configuration Vite
├── package.json              # Dépendances
├── .eslintrc.json            # Configuration ESLint
├── .gitignore                # Git ignore
└── README.md                 # Ce fichier
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ et npm 9+
- Git

### Installation

```bash
# 1. Cloner le repository
git clone https://github.com/Simiamine/Portfolio-main.git
cd Portfolio-main

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:3000
```

### Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement avec hot reload

# Production
npm run build        # Build optimisé pour la production
npm run preview      # Prévisualise le build de production

# Qualité
npm run lint         # Vérifie la qualité du code avec ESLint
```

## 🎨 Personnalisation

### Thème et Couleurs

Les couleurs sont définies dans `src/css/variables.css` :

```css
:root {
  --color-primary: #815443;      /* Couleur principale */
  --color-secondary: #5e2933;    /* Couleur secondaire */
  --color-accent: #e94225;       /* Couleur d'accent */
  /* ... */
}

/* Mode sombre */
[data-theme="dark"] {
  --color-bg: #0f0f0f;
  --color-surface: #1e1e1e;
  /* ... */
}
```

### Traductions

Ajoutez ou modifiez les traductions dans `src/i18n/translations.js` :

```javascript
export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'Moi',
      // ...
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      // ...
    }
  }
};
```

### Contenu

Modifiez le contenu dans `src/index.html` en utilisant les attributs `data-i18n` :

```html
<h1 data-i18n="hero.greeting">Bonjour !</h1>
```

## 🎯 Fonctionnalités Avancées

### Mode Sombre

Le thème est automatiquement détecté selon les préférences système et peut être changé manuellement. Il persiste dans `localStorage`.

```javascript
// Changer le thème programmatiquement
import themeManager from './js/theme.js';
themeManager.toggle();
```

### Lazy Loading

Les images sont chargées automatiquement lors du scroll pour optimiser les performances.

```html
<!-- Ajouter loading="lazy" aux images -->
<img src="image.jpg" loading="lazy" alt="Description">
```

### Animations

Les animations sont gérées par GSAP et Intersection Observer pour des performances optimales.

```javascript
// Ajouter une animation personnalisée
import { gsap } from 'gsap';

gsap.from('.mon-element', {
  y: 50,
  opacity: 0,
  duration: 0.8
});
```

## 🔧 Optimisations

### Performance

- ✅ Lazy loading des images
- ✅ Code splitting automatique (Vite)
- ✅ Minification CSS/JS
- ✅ Service Worker pour le cache
- ✅ Préchargement des ressources critiques
- ✅ Compression des assets

### SEO

- ✅ Meta tags optimisés
- ✅ Structured data (Schema.org)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ URLs canoniques

### Accessibilité

- ✅ Navigation au clavier
- ✅ Skip links
- ✅ ARIA labels
- ✅ Contrastes WCAG AA
- ✅ Alt text sur images
- ✅ Focus visible

## 📱 PWA

Le site est installable comme application :

1. Visitez le site sur mobile
2. Cliquez sur "Ajouter à l'écran d'accueil"
3. L'application s'ouvre en plein écran
4. Fonctionne hors-ligne après la première visite

## 🌐 Déploiement

### GitHub Pages

```bash
# 1. Build
npm run build

# 2. Le dossier dist/ contient le site prêt à déployer
# 3. Commitez et pushez sur la branche gh-pages
```

### Vercel / Netlify

Connectez simplement votre repository GitHub, ces plateformes détectent automatiquement Vite.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Forker le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commiter vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pusher la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**Amine M'ZALI**

- LinkedIn: [@mzaliamine](https://www.linkedin.com/in/mzaliamine/)
- GitHub: [@Simiamine](https://github.com/Simiamine)
- Email: contact@amine-mzali.com

## 🙏 Remerciements

- [Vite](https://vitejs.dev/) - Build tool incroyable
- [GSAP](https://greensock.com/gsap/) - Animations professionnelles
- [Bootstrap](https://getbootstrap.com/) - Grid system
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Icônes
- [Google Fonts](https://fonts.google.com/) - Typographies

---

⭐️ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile sur GitHub !

**Version:** 2.0.0 | **Dernière mise à jour:** Octobre 2025

