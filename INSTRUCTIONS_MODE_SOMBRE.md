# 🌓 Ajouter le Mode Sombre à Votre Site (SIMPLE)

## ✅ Ce qui a été créé

J'ai créé 2 fichiers à ajouter à votre site EXISTANT qui fonctionne :

1. `css/darkmode.css` - Styles pour le mode sombre
2. `js/darkmode.js` - JavaScript pour gérer le toggle

## 🚀 Installation (5 minutes)

### Étape 1 : Modifier `fr.html`

Ouvrez le fichier `fr.html` et faites ces 2 ajouts :

#### A. Dans le `<head>`, après la ligne 21, ajoutez :

```html
<link href="css/templatemo-first-portfolio-style.css" rel="stylesheet">
<!-- NOUVEAU : Mode sombre -->
<link href="css/darkmode.css" rel="stylesheet">
```

#### B. Dans la navigation, après la ligne 96 (après le lien vers EN), ajoutez :

```html
<li class="nav-item">
    <a class="nav-link" href="en.html">
        <img src="images/langues/english_flag.png" alt="English" style="width: 36px; height: 36px; border-radius: 3px;">
    </a>
</li>
<!-- NOUVEAU : Bouton mode sombre -->
<li class="nav-item">
    <button class="theme-toggle-btn nav-link" onclick="toggleDarkMode()" aria-label="Changer le thème" title="Mode sombre/clair">
        <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
    </button>
</li>
```

#### C. Avant `</body>` à la ligne 946, ajoutez :

```html
<script src="js/custom.js"></script>
<!-- NOUVEAU : Mode sombre -->
<script src="js/darkmode.js"></script>
```

### Étape 2 : Faire EXACTEMENT la même chose pour `en.html`

Répétez les 3 modifications ci-dessus dans le fichier `en.html` (mêmes lignes, mêmes endroits).

### Étape 3 : Tester !

1. Ouvrez `fr.html` dans votre navigateur
2. Vous devriez voir un nouveau bouton ☀️ dans la navbar
3. Cliquez dessus → Le site passe en mode sombre 🌙
4. Cliquez encore → Retour au mode clair ☀️

## ✨ Fonctionnalités

- ✅ **Clic sur le bouton** : Toggle entre clair/sombre
- ✅ **Persistance** : Votre choix est sauvegardé
- ✅ **Détection système** : Si vous n'avez pas de préférence, suit votre OS
- ✅ **Raccourci clavier** : Ctrl+Shift+D pour toggle
- ✅ **Animation** : Le bouton tourne à chaque clic

## 🎨 Personnalisation (Optionnel)

### Changer les couleurs du mode sombre

Dans `css/darkmode.css`, modifiez :

```css
body.dark-mode {
    background-color: #0f0f0f !important;  /* Changez cette couleur */
    color: #e5e5e5 !important;             /* Et celle-ci */
}
```

### Couleurs disponibles :
- Noir profond : `#0f0f0f`
- Gris très foncé : `#1a1a1a`
- Gris foncé : `#2a2a2a`
- Bleu nuit : `#0a1929`
- Violet sombre : `#1a0a2e`

## 🐛 Dépannage

### Le bouton n'apparaît pas ?
- Vérifiez que vous avez bien ajouté `darkmode.css` dans le `<head>`
- Vérifiez que vous avez bien ajouté le `<li>` avec le bouton

### Le mode sombre ne fonctionne pas ?
- Vérifiez que vous avez bien ajouté `darkmode.js` avant `</body>`
- Ouvrez la console (F12) et regardez s'il y a des erreurs

### Le style est bizarre ?
- Assurez-vous que `darkmode.css` est ajouté APRÈS `templatemo-first-portfolio-style.css`

## 📱 Bonus : Sur Mobile

Le mode sombre fonctionne parfaitement sur mobile ! Le bouton s'adapte automatiquement dans le menu hamburger.

---

## ⚡ Résumé rapide

1. ✅ Ajoutez `<link href="css/darkmode.css" rel="stylesheet">` dans le `<head>`
2. ✅ Ajoutez le bouton dans la navbar (après le lien EN)
3. ✅ Ajoutez `<script src="js/darkmode.js"></script>` avant `</body>`
4. ✅ Répétez pour `en.html`
5. ✅ Testez !

**C'est tout ! Votre site a maintenant un mode sombre professionnel ! 🎉**

---

## 🚫 À NE PAS faire

- ❌ Ne touchez PAS à `fr.html` et `en.html` sauf pour les 3 ajouts ci-dessus
- ❌ Ne supprimez PAS les anciens fichiers
- ❌ N'utilisez PAS le dossier `src/` (c'était pour la version Vite)

## ✅ À FAIRE ensuite

Une fois que ça fonctionne :
1. Commit vos changements : `git add . && git commit -m "Ajout mode sombre"`
2. Déployez sur GitHub Pages
3. Profitez ! 🎉

Besoin d'aide ? Les fichiers `darkmode.css` et `darkmode.js` sont commentés !

