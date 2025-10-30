/**
 * Gestion du thème clair/sombre
 * Avec persistance dans localStorage
 */

export class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme();
    this.init();
  }

  /**
   * Récupère le thème stocké ou utilise la préférence système
   */
  getStoredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;

    // Détection de la préférence système
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }

  /**
   * Initialise le thème
   */
  init() {
    this.applyTheme(this.theme);
    this.createToggleButton();
    this.watchSystemPreference();
  }

  /**
   * Applique le thème
   */
  applyTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Mise à jour de la meta theme-color pour mobile
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#1a1a1a' : '#f7f6f6');
    }

    // Animation smooth de transition
    document.documentElement.style.setProperty('--theme-transition', 'all 0.3s ease');
  }

  /**
   * Toggle entre les thèmes
   */
  toggle() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    
    // Animation du bouton
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        btn.style.transform = 'rotate(0deg)';
      }, 300);
    }
  }

  /**
   * Crée le bouton de toggle
   */
  createToggleButton() {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.innerHTML = `
      <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
      <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    `;
    
    btn.addEventListener('click', () => this.toggle());
    
    // Ajoute le bouton à la navbar
    const navbar = document.querySelector('.navbar-nav.ms-auto');
    if (navbar) {
      const li = document.createElement('li');
      li.className = 'nav-item';
      li.appendChild(btn);
      navbar.appendChild(li);
    }
  }

  /**
   * Surveille les changements de préférence système
   */
  watchSystemPreference() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  /**
   * Obtient le thème actuel
   */
  getCurrentTheme() {
    return this.theme;
  }
}

export default new ThemeManager();

