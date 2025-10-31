# 🧪 Guide de Test - Portfolio Fusionné

## ✅ Checklist de Test

### 1. Navigation
- [ ] Le menu est fixe en haut lors du scroll
- [ ] Les liens de navigation scrollent vers les bonnes sections
- [ ] Le menu mobile (hamburger) fonctionne sur mobile
- [ ] Le menu se ferme quand on clique sur un lien (mobile)
- [ ] Les liens actifs sont bien surlignés selon la section visible

### 2. Hero Section
- [ ] Les formes ondulées sont visibles et animées
- [ ] Les bulles de dialogue apparaissent avec effet typing
- [ ] L'avatar est affiché correctement
- [ ] Les cartes flottantes bougent au survol de la souris (desktop)
- [ ] L'indicateur de scroll (souris) est visible

### 3. Section À propos
- [ ] L'image est affichée correctement
- [ ] Les 3 highlights s'animent à l'apparition
- [ ] Le texte est lisible et bien formaté
- [ ] Les highlights ont un effet hover

### 4. Timeline (Parcours)
- [ ] La ligne centrale est visible
- [ ] Les icônes sont bien positionnées
- [ ] Formation à gauche, expérience à droite
- [ ] Les cartes s'animent au scroll
- [ ] Les liens vers les sections fonctionnent
- [ ] Effet hover sur les cartes

### 5. Projets
- [ ] Toutes les cartes de projets sont affichées
- [ ] Les icônes/placeholders sont visibles
- [ ] L'overlay apparaît au hover
- [ ] Les liens GitHub s'ouvrent dans un nouvel onglet
- [ ] Effet tilt sur les cartes (desktop)
- [ ] Les boutons "Dépôt GitHub" fonctionnent

### 6. Compétences
- [ ] Les logos de technologies s'affichent correctement
- [ ] Animation d'apparition progressive des logos
- [ ] Les logos s'agrandissent au hover
- [ ] Section langues avec drapeaux visible
- [ ] Section certifications visible
- [ ] Tous les logos sont clairs et lisibles

### 7. Formation
- [ ] Les 3 écoles sont affichées
- [ ] Les logos des écoles sont visibles
- [ ] Les listes à puces sont bien formatées
- [ ] Les cartes ont un effet hover

### 8. Expérience
- [ ] Les 3 expériences sont affichées
- [ ] Les logos d'entreprises sont visibles
- [ ] Les dates sont correctes
- [ ] Les descriptions sont complètes

### 9. Modals
- [ ] Le modal CV s'ouvre en cliquant sur l'icône
- [ ] Le modal Contact s'ouvre en cliquant sur l'icône
- [ ] Les modals se ferment avec le bouton X
- [ ] Les modals se ferment en cliquant à l'extérieur
- [ ] Les modals se ferment avec la touche ESC
- [ ] Le formulaire de contact a tous les champs
- [ ] La validation du formulaire fonctionne

### 10. Footer
- [ ] Le footer est visible
- [ ] Les icônes (cœur, café) s'affichent
- [ ] Le copyright est correct

### 11. Animations & Effets
- [ ] Preloader au chargement de la page
- [ ] Scroll progress bar en haut de page
- [ ] Bouton "scroll to top" apparaît après 500px
- [ ] Custom cursor (desktop uniquement)
- [ ] Effet parallax sur les formes ondulées
- [ ] Smooth scroll sur tous les liens
- [ ] Fade-in sur les éléments au scroll

### 12. Performance
- [ ] La page se charge en moins de 3 secondes
- [ ] Les animations sont fluides (60fps)
- [ ] Pas de lag au scroll
- [ ] Les images se chargent rapidement

### 13. Responsive - Mobile (< 600px)
- [ ] Le menu hamburger fonctionne
- [ ] Les sections sont empilées verticalement
- [ ] Les textes sont lisibles
- [ ] Les boutons sont cliquables (assez grands)
- [ ] La timeline est adaptée (une seule colonne)
- [ ] Les cartes de projets sont en une colonne
- [ ] Le custom cursor est désactivé
- [ ] Les cartes flottantes du hero sont masquées

### 14. Responsive - Tablette (600px - 968px)
- [ ] Le layout est adapté
- [ ] La navigation est accessible
- [ ] Les grilles utilisent 2 colonnes
- [ ] Les images sont bien dimensionnées

### 15. Responsive - Desktop (> 968px)
- [ ] Toutes les fonctionnalités sont actives
- [ ] Le custom cursor fonctionne
- [ ] Les effets parallax sont fluides
- [ ] La timeline bifurquée est visible

### 16. Accessibilité
- [ ] Les images ont des attributs alt
- [ ] La navigation au clavier fonctionne
- [ ] Le contraste des textes est suffisant
- [ ] Les liens ont un focus visible

### 17. Compatibilité navigateurs
- [ ] Chrome/Edge (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (dernière version)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 18. SEO & Meta
- [ ] Le titre de la page est correct
- [ ] La meta description est présente
- [ ] Les balises Open Graph sont présentes (optionnel)
- [ ] Le favicon est présent (à ajouter)

## 🐛 Bugs connus à corriger

### Priorité Haute
- [ ] Vérifier que les chemins d'images sont corrects
- [ ] S'assurer que le CV PDF existe dans `/res`
- [ ] Configurer l'URL du formulaire de contact

### Priorité Moyenne
- [ ] Ajouter un favicon
- [ ] Optimiser la taille des images
- [ ] Minifier CSS/JS pour la production
- [ ] Créer la version anglaise (en.html)

### Priorité Basse
- [ ] Ajouter plus d'easter eggs
- [ ] Améliorer les performances sur mobile
- [ ] Ajouter des animations supplémentaires

## 🔧 Comment tester

### Test local

1. **Ouvrir avec un serveur local :**
```bash
# Option 1 : Python
cd portfolio_fusion
python3 -m http.server 8000

# Option 2 : Node.js (http-server)
npx http-server portfolio_fusion -p 8000

# Option 3 : PHP
php -S localhost:8000
```

2. **Ouvrir dans le navigateur :**
   - http://localhost:8000

### Test responsive

1. **Chrome DevTools :**
   - F12 > Toggle device toolbar (Ctrl+Shift+M)
   - Tester différentes tailles :
     - iPhone SE (375px)
     - iPhone 12 Pro (390px)
     - iPad (768px)
     - iPad Pro (1024px)
     - Desktop (1920px)

2. **Firefox Responsive Design Mode :**
   - F12 > Responsive Design Mode (Ctrl+Shift+M)

### Test de performance

1. **Lighthouse (Chrome) :**
   - F12 > Lighthouse
   - Générer un rapport
   - Objectifs :
     - Performance : > 90
     - Accessibility : > 90
     - Best Practices : > 90
     - SEO : > 90

2. **PageSpeed Insights :**
   - https://pagespeed.web.dev/
   - Tester après déploiement

## 📸 Screenshots recommandés

Prendre des screenshots pour la documentation :
- [ ] Hero section (desktop)
- [ ] Timeline bifurquée
- [ ] Section projets
- [ ] Modal CV
- [ ] Modal Contact
- [ ] Version mobile
- [ ] Menu hamburger ouvert

## 🎯 Critères de validation

Le portfolio est prêt pour le déploiement si :
- ✅ Tous les tests de la checklist sont passés
- ✅ Pas de bugs critiques
- ✅ Responsive sur tous les appareils
- ✅ Performance Lighthouse > 80 sur tous les critères
- ✅ Tous les liens fonctionnent
- ✅ Les modals s'ouvrent et se ferment correctement

---

**Note :** Ce guide doit être suivi avant chaque déploiement en production.


