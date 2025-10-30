/**
 * Fonctions utilitaires
 */

/**
 * Debounce une fonction
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle une fonction
 */
export function throttle(func, limit = 100) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Vérifie si un élément est visible dans le viewport
 */
export function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 - offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Copie du texte dans le presse-papiers
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback pour les navigateurs anciens
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch (e) {
      document.body.removeChild(textarea);
      return false;
    }
  }
}

/**
 * Formate une date
 */
export function formatDate(date, locale = 'fr-FR') {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Génère un ID unique
 */
export function generateId(prefix = 'id') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Vérifie si on est sur mobile
 */
export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Vérifie si on est sur un appareil tactile
 */
export function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Obtient les paramètres URL
 */
export function getUrlParams() {
  return new URLSearchParams(window.location.search);
}

/**
 * Met à jour l'URL sans recharger la page
 */
export function updateUrl(params) {
  const url = new URL(window.location);
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }
  });
  window.history.pushState({}, '', url);
}

/**
 * Charge un script dynamiquement
 */
export function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/**
 * Précharge une image
 */
export function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Anime un nombre de 0 à la valeur cible
 */
export function animateValue(element, start, end, duration = 2000) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.round(current);
  }, 16);
}

/**
 * Calcule le temps de lecture
 */
export function calculateReadingTime(text, wordsPerMinute = 200) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/**
 * Tronque un texte avec ellipse
 */
export function truncate(text, length = 100, suffix = '...') {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + suffix;
}

/**
 * Échappe les caractères HTML
 */
export function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Déséchappe les caractères HTML
 */
export function unescapeHtml(text) {
  const map = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'"
  };
  return text.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, m => map[m]);
}

/**
 * Obtient une valeur CSS calculée
 */
export function getCssVar(name, element = document.documentElement) {
  return getComputedStyle(element).getPropertyValue(name).trim();
}

/**
 * Définit une valeur CSS
 */
export function setCssVar(name, value, element = document.documentElement) {
  element.style.setProperty(name, value);
}

/**
 * Smooth scroll vers un élément
 */
export function scrollToElement(element, offset = 0) {
  const targetPosition = element.offsetTop - offset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

/**
 * Attend un certain temps
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Vérifie la connexion internet
 */
export function isOnline() {
  return navigator.onLine;
}

/**
 * Écoute les changements de connexion
 */
export function watchConnection(onOnline, onOffline) {
  window.addEventListener('online', onOnline);
  window.addEventListener('offline', onOffline);
  
  return () => {
    window.removeEventListener('online', onOnline);
    window.removeEventListener('offline', onOffline);
  };
}

