# 🚀 Démarrage Rapide - Portfolio Fusionné

## ⚡ En 5 minutes

### 1. Tester localement

```bash
cd portfolio_fusion
python3 -m http.server 8000
```

Ouvrir dans le navigateur : **http://localhost:8000**

### 2. Personnaliser rapidement

#### Modifier les informations personnelles

Dans `fr.html`, chercher et remplacer :

```html
<!-- Nom -->
Amine M'ZALI → TON NOM

<!-- Email -->
TON_EMAIL@example.com

<!-- Téléphone -->
TON_TELEPHONE

<!-- LinkedIn -->
https://www.linkedin.com/in/TON_PROFIL/

<!-- GitHub -->
https://github.com/TON_USERNAME
```

#### Changer la photo

Remplacer :
- `images/moi.jpg` → Ta photo de profil
- `images/test.png` → Image de la section À propos

#### Ajouter ton CV

Placer ton CV PDF dans :
- `res/cvfr.pdf` → CV français
- `res/cven.pdf` → CV anglais

### 3. Déployer en 2 minutes sur GitHub Pages

```bash
# Dans le dossier portfolio_fusion
git init
git add .
git commit -m "Mon portfolio fusionné"
git branch -M main
git remote add origin https://github.com/TON_USERNAME/Portfolio.git
git push -u origin main
```

Puis sur GitHub :
1. **Settings** > **Pages**
2. Source : **main** branch
3. **Save**

✅ Ton site sera en ligne sur : `https://TON_USERNAME.github.io/Portfolio/`

---

## 🎨 Personnalisation avancée

### Changer les couleurs

Dans `css/style.css`, ligne 14-16 :

```css
--primary-dark: #5e2933;    /* Ta couleur foncée */
--primary-light: #815443;   /* Ta couleur claire */
--secondary-beige: #d2bdb1; /* Ta couleur d'accent */
```

### Ajouter un projet

Dans `fr.html`, copier ce bloc dans `.projects-grid` :

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-overlay">
            <a href="TON_LIEN_GITHUB" target="_blank" class="project-link">
                <i class="fab fa-github"></i>
            </a>
        </div>
        <div class="project-placeholder">
            <i class="fas fa-rocket"></i> <!-- Change l'icône -->
        </div>
    </div>
    <div class="project-content">
        <h3>Nom du Projet</h3>
        <h4>Description courte</h4>
        <p>Description détaillée de ton projet...</p>
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
        </ul>
        <a href="TON_LIEN_GITHUB" target="_blank" class="custom-btn custom-border-btn">
            <i class="fab fa-github"></i> Dépôt GitHub
        </a>
    </div>
</div>
```

### Modifier la timeline

Dans `fr.html`, section `.timeline` :

```html
<div class="timeline-row">
    <!-- Formation (gauche) -->
    <a href="#formation" class="timeline-item-link">
        <div class="timeline-item left">
            <div class="timeline-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="timeline-content">
                <small>Dates</small>
                <h4>Nom de l'école</h4>
                <p>Description</p>
            </div>
        </div>
    </a>
    
    <!-- Expérience (droite) -->
    <a href="#experience" class="timeline-item-link">
        <div class="timeline-item right">
            <div class="timeline-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <div class="timeline-content">
                <small>Dates</small>
                <h4>Nom de l'entreprise</h4>
                <p>Description du poste</p>
            </div>
        </div>
    </a>
</div>
```

---

## 📝 Checklist essentielle avant déploiement

### Contenu
- [ ] Remplacer toutes les mentions "Amine M'ZALI" par ton nom
- [ ] Modifier les liens LinkedIn, GitHub, etc.
- [ ] Ajouter tes propres projets
- [ ] Mettre à jour ta formation et expérience
- [ ] Ajouter tes compétences techniques

### Médias
- [ ] Remplacer `images/moi.jpg` par ta photo
- [ ] Remplacer `images/test.png`
- [ ] Ajouter `res/cvfr.pdf` (ton CV)
- [ ] Optimiser les images (< 500 Ko chacune)

### Configuration
- [ ] Tester le formulaire de contact
- [ ] Vérifier tous les liens externes
- [ ] Tester sur mobile
- [ ] Vérifier dans Chrome, Firefox, Safari

### SEO
- [ ] Modifier le `<title>` dans `fr.html`
- [ ] Modifier la `<meta description>`
- [ ] Ajouter un favicon (optionnel)

---

## 🔥 Astuces rapides

### Désactiver le custom cursor

Dans `js/script.js`, commenter la section :

```javascript
// Commenter de la ligne 200 à 250
/*
if (window.innerWidth > 968) {
    // ... code du custom cursor
}
*/
```

### Changer la vitesse des animations

Dans `css/style.css` :

```css
/* Ligne 19 */
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                   ^^^^ Change cette valeur
```

### Désactiver le preloader

Dans `js/script.js`, ligne 2-3 :

```javascript
setTimeout(() => {
    // ...
}, 0); // Mettre 0 au lieu de 1000
```

### Ajouter Google Analytics

Avant la fermeture de `</head>` dans `fr.html` :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

---

## 🆘 Problèmes courants

### Les images ne s'affichent pas

Vérifier les chemins dans le HTML :
```html
<!-- Chemin relatif correct -->
<img src="images/moi.jpg" alt="Photo">

<!-- PAS comme ça -->
<img src="../images/moi.jpg" alt="Photo">
```

### Le menu ne fonctionne pas sur mobile

Vérifier que jQuery est bien chargé :
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

### Les animations ne fonctionnent pas

Ouvrir la console (F12) et vérifier s'il y a des erreurs.

### Le formulaire ne s'envoie pas

Configurer l'URL Google Apps Script dans `js/script.js` ligne 180.

---

## 📚 Ressources utiles

- **Icônes :** https://fontawesome.com/icons
- **Images gratuites :** https://unsplash.com
- **Optimisation images :** https://tinypng.com
- **Test responsive :** Chrome DevTools (F12)
- **Validation HTML :** https://validator.w3.org
- **Performance :** https://pagespeed.web.dev

---

## 💡 Prochaines étapes

1. ✅ Tester localement
2. ✅ Personnaliser le contenu
3. ✅ Ajouter tes images et CV
4. ✅ Tester sur mobile
5. ✅ Déployer sur GitHub Pages
6. 🎉 Partager ton portfolio !

---

**Besoin d'aide ?** Consulte le `README.md` complet ou le `GUIDE_TEST.md`

**Bonne chance ! 🚀**


