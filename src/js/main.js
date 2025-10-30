/**
 * Point d'entrée principal de l'application
 * Initialise tous les modules et gère l'orchestration
 */

import i18n from '../i18n/translations.js';
import themeManager from './theme.js';
import navigationManager from './navigation.js';
import animationManager from './animations.js';
import lazyLoader from './lazyload.js';
import contactForm from './contact.js';
import { isMobile, watchConnection } from './utils.js';

/**
 * Classe principale de l'application
 */
class App {
  constructor() {
    this.isInitialized = false;
    this.init();
  }

  /**
   * Initialise l'application
   */
  async init() {
    try {
      // Affiche un loader pendant le chargement
      this.showPreloader();

      // Initialise l'i18n
      this.setupI18n();

      // Initialise le thème
      themeManager;

      // Initialise la navigation
      navigationManager;

      // Initialise les animations (attend que le DOM soit prêt)
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          animationManager;
        });
      } else {
        animationManager;
      }

      // Initialise le lazy loading
      lazyLoader;

      // Initialise le formulaire de contact
      contactForm;

      // Configure les événements globaux
      this.setupGlobalEvents();

      // Configure le service worker (PWA)
      this.registerServiceWorker();

      // Marque l'application comme initialisée
      this.isInitialized = true;

      // Log pour le développement
      if (import.meta.env.DEV) {
        console.log('🚀 Portfolio initialisé avec succès');
        console.log('Mode:', import.meta.env.MODE);
        console.log('Langue:', i18n.getCurrentLanguage());
        console.log('Thème:', themeManager.getCurrentTheme());
      }
    } catch (error) {
      console.error('❌ Erreur lors de l\'initialisation:', error);
      this.handleInitError(error);
    }
  }

  /**
   * Configure l'internationalisation
   */
  setupI18n() {
    // Initialise la langue
    i18n.updateDOM();

    // Ajoute les boutons de changement de langue
    const langButtons = document.querySelectorAll('[data-lang]');
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        i18n.setLanguage(lang);
        
        // Met à jour l'URL
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url);
      });
    });

    // Détecte le paramètre de langue dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && (langParam === 'fr' || langParam === 'en')) {
      i18n.setLanguage(langParam);
    }
  }

  /**
   * Configure les événements globaux
   */
  setupGlobalEvents() {
    // Gestion de la connexion internet
    watchConnection(
      () => this.showNotification('✓ Connexion rétablie', 'success'),
      () => this.showNotification('✗ Pas de connexion internet', 'warning')
    );

    // Détection du resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.handleResize();
      }, 250);
    });

    // Détection de la visibilité de la page
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.handlePageHidden();
      } else {
        this.handlePageVisible();
      }
    });

    // Raccourcis clavier
    document.addEventListener('keydown', (e) => {
      this.handleKeyboard(e);
    });

    // Prévention du clic droit sur les images (optionnel)
    if (!import.meta.env.DEV) {
      document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          return false;
        });
      });
    }

    // Analytics (Google Analytics, Matomo, etc.)
    this.setupAnalytics();
  }

  /**
   * Gère le redimensionnement de la fenêtre
   */
  handleResize() {
    // Mise à jour de la hauteur du viewport pour mobile
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    );
  }

  /**
   * Gère la page cachée (onglet en arrière-plan)
   */
  handlePageHidden() {
    // Pause des animations, vidéos, etc.
  }

  /**
   * Gère la page visible
   */
  handlePageVisible() {
    // Reprend les animations, vidéos, etc.
  }

  /**
   * Gère les raccourcis clavier
   */
  handleKeyboard(e) {
    // Ctrl/Cmd + K : Focus sur la recherche (si présente)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      // Implémentation future
    }

    // Échap : Ferme les modales
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('.modal.show');
      modals.forEach(modal => {
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) bsModal.hide();
      });
    }

    // Ctrl/Cmd + / : Toggle du thème
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      e.preventDefault();
      themeManager.toggle();
    }
  }

  /**
   * Enregistre le service worker (PWA)
   */
  async registerServiceWorker() {
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('✓ Service Worker enregistré:', registration.scope);

        // Écoute les mises à jour
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              this.showUpdateNotification();
            }
          });
        });
      } catch (error) {
        console.error('❌ Erreur Service Worker:', error);
      }
    }
  }

  /**
   * Affiche une notification de mise à jour
   */
  showUpdateNotification() {
    const message = 'Une nouvelle version est disponible !';
    const action = 'Actualiser';
    
    this.showNotification(message, 'info', action, () => {
      window.location.reload();
    });
  }

  /**
   * Affiche une notification toast
   */
  showNotification(message, type = 'info', actionText = null, actionCallback = null) {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-message">${message}</span>
        ${actionText ? `<button class="toast-action">${actionText}</button>` : ''}
      </div>
    `;

    document.body.appendChild(toast);

    // Action
    if (actionText && actionCallback) {
      toast.querySelector('.toast-action').addEventListener('click', () => {
        actionCallback();
        this.removeNotification(toast);
      });
    }

    // Animation d'apparition
    setTimeout(() => toast.classList.add('show'), 10);

    // Suppression automatique
    setTimeout(() => {
      this.removeNotification(toast);
    }, 5000);
  }

  /**
   * Supprime une notification
   */
  removeNotification(toast) {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }

  /**
   * Configure les analytics
   */
  setupAnalytics() {
    // Google Analytics
    if (import.meta.env.VITE_GA_ID) {
      this.initGoogleAnalytics(import.meta.env.VITE_GA_ID);
    }

    // Track des pages vues
    this.trackPageView();

    // Track des événements personnalisés
    this.setupEventTracking();
  }

  /**
   * Initialise Google Analytics
   */
  initGoogleAnalytics(id) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', id);
  }

  /**
   * Track une page vue
   */
  trackPageView() {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }

  /**
   * Configure le tracking des événements
   */
  setupEventTracking() {
    // Track des clics sur les liens externes
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      link.addEventListener('click', () => {
        this.trackEvent('click', 'external_link', link.href);
      });
    });

    // Track des téléchargements
    document.querySelectorAll('a[download]').forEach(link => {
      link.addEventListener('click', () => {
        this.trackEvent('download', 'file', link.href);
      });
    });

    // Track des clics sur les réseaux sociaux
    document.querySelectorAll('.social-icon-link, a[href*="linkedin"], a[href*="github"]').forEach(link => {
      link.addEventListener('click', () => {
        const platform = link.href.includes('linkedin') ? 'linkedin' : 
                        link.href.includes('github') ? 'github' : 'social';
        this.trackEvent('click', 'social', platform);
      });
    });
  }

  /**
   * Track un événement personnalisé
   */
  trackEvent(action, category, label = null, value = null) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  /**
   * Affiche le preloader
   */
  showPreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.display = 'flex';
    }
  }

  /**
   * Gère les erreurs d'initialisation
   */
  handleInitError(error) {
    // Affiche un message d'erreur à l'utilisateur
    const errorDiv = document.createElement('div');
    errorDiv.className = 'init-error';
    errorDiv.innerHTML = `
      <div class="error-content">
        <h2>❌ Erreur de chargement</h2>
        <p>Une erreur est survenue lors du chargement de la page.</p>
        <button onclick="window.location.reload()">Recharger la page</button>
      </div>
    `;
    document.body.appendChild(errorDiv);

    // Cache le preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.display = 'none';
    }
  }
}

// Initialise l'application
new App();

// Export pour utilisation externe si nécessaire
export default App;

