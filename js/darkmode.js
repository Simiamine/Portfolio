/**
 * MODE SOMBRE SIMPLE
 * Ajouter ce fichier et inclure dans fr.html et en.html
 */

// Fonction pour activer/désactiver le mode sombre
function toggleDarkMode() {
    const body = document.body;
    const button = document.querySelector('.theme-toggle-btn');
    
    // Toggle la classe
    body.classList.toggle('dark-mode');
    
    // Animation du bouton
    if (button) {
        button.classList.add('rotating');
        setTimeout(() => button.classList.remove('rotating'), 500);
    }
    
    // Sauvegarde dans localStorage
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// Charger le thème sauvegardé au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier la préférence sauvegardée
    const darkMode = localStorage.getItem('darkMode');
    
    // Si l'utilisateur avait activé le mode sombre
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    // Si pas de préférence sauvegardée, vérifier la préférence système
    else if (darkMode === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
    
    // Écouter les changements de préférence système
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            // Seulement si l'utilisateur n'a pas de préférence manuelle
            if (localStorage.getItem('darkMode') === null) {
                if (e.matches) {
                    document.body.classList.add('dark-mode');
                } else {
                    document.body.classList.remove('dark-mode');
                }
            }
        });
    }
});

// Option : raccourci clavier Ctrl+Shift+D pour toggle
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        toggleDarkMode();
    }
});

