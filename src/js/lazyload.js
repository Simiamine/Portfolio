/**
 * Lazy loading des images pour de meilleures performances
 */

export class LazyLoader {
  constructor() {
    this.images = [];
    this.observer = null;
    this.init();
  }

  /**
   * Initialise le lazy loading
   */
  init() {
    // Sélectionne toutes les images avec data-src
    this.images = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      this.setupObserver();
    } else {
      // Fallback pour les navigateurs anciens
      this.loadAllImages();
    }
  }

  /**
   * Configure l'Intersection Observer
   */
  setupObserver() {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.01
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    this.images.forEach(img => this.observer.observe(img));
  }

  /**
   * Charge une image
   */
  loadImage(img) {
    const src = img.dataset.src || img.src;
    
    if (!src) return;

    // Crée une image temporaire pour le chargement
    const tempImg = new Image();
    
    tempImg.onload = () => {
      // Ajoute une classe de transition
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.3s ease';
      
      // Change la source
      img.src = src;
      img.removeAttribute('data-src');
      
      // Fade in
      setTimeout(() => {
        img.style.opacity = '1';
      }, 10);
      
      // Marque comme chargée
      img.classList.add('loaded');
    };

    tempImg.onerror = () => {
      // En cas d'erreur, affiche une image placeholder
      img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%23999"%3EImage%3C/text%3E%3C/svg%3E';
      img.classList.add('error');
    };

    tempImg.src = src;
  }

  /**
   * Charge toutes les images (fallback)
   */
  loadAllImages() {
    this.images.forEach(img => this.loadImage(img));
  }

  /**
   * Ajoute une nouvelle image à observer
   */
  observe(img) {
    if (this.observer) {
      this.observer.observe(img);
    } else {
      this.loadImage(img);
    }
  }

  /**
   * Précharge les images critiques
   */
  preloadCritical(urls) {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }
}

export default new LazyLoader();

