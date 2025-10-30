/**
 * Gestion de la navigation et du scroll
 */

export class NavigationManager {
  constructor() {
    this.navbar = null;
    this.navLinks = [];
    this.sections = [];
    this.init();
  }

  /**
   * Initialise la navigation
   */
  init() {
    this.navbar = document.querySelector('.navbar');
    this.navLinks = document.querySelectorAll('.nav-link.click-scroll');
    this.sections = document.querySelectorAll('section[id^="section_"]');
    
    this.setupSmoothScroll();
    this.setupScrollSpy();
    this.setupStickyNav();
    this.setupMobileMenu();
  }

  /**
   * Configure le smooth scroll
   */
  setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const navbarHeight = this.navbar?.offsetHeight || 0;
          const targetPosition = targetSection.offsetTop - navbarHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Ferme le menu mobile si ouvert
          this.closeMobileMenu();
        }
      });
    });
  }

  /**
   * Configure le scroll spy (active link)
   */
  setupScrollSpy() {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.setActiveLink(`#${id}`);
        }
      });
    }, observerOptions);

    this.sections.forEach(section => observer.observe(section));
  }

  /**
   * Met à jour le lien actif
   */
  setActiveLink(targetId) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === targetId) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Configure la navbar sticky
   */
  setupStickyNav() {
    let lastScroll = 0;
    const navbarContainer = this.navbar?.querySelector('.container');

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Ajoute/retire la classe sticky
      if (currentScroll > 100) {
        this.navbar?.classList.add('is-sticky');
        navbarContainer?.classList.add('is-sticky');
      } else {
        this.navbar?.classList.remove('is-sticky');
        navbarContainer?.classList.remove('is-sticky');
      }

      // Cache/montre la navbar au scroll (optionnel)
      if (currentScroll > lastScroll && currentScroll > 500) {
        this.navbar?.style.setProperty('transform', 'translateY(-100%)');
      } else {
        this.navbar?.style.setProperty('transform', 'translateY(0)');
      }

      lastScroll = currentScroll;
    });
  }

  /**
   * Gère le menu mobile
   */
  setupMobileMenu() {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');

    if (toggler && collapse) {
      toggler.addEventListener('click', () => {
        const isExpanded = toggler.getAttribute('aria-expanded') === 'true';
        toggler.setAttribute('aria-expanded', !isExpanded);
        collapse.classList.toggle('show');
      });

      // Ferme le menu quand on clique en dehors
      document.addEventListener('click', (e) => {
        if (!this.navbar?.contains(e.target)) {
          this.closeMobileMenu();
        }
      });
    }
  }

  /**
   * Ferme le menu mobile
   */
  closeMobileMenu() {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    
    if (toggler && collapse && collapse.classList.contains('show')) {
      toggler.setAttribute('aria-expanded', 'false');
      collapse.classList.remove('show');
    }
  }
}

export default new NavigationManager();

