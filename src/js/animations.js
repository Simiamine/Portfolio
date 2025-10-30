/**
 * Gestion des animations avec GSAP et Intersection Observer
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class AnimationManager {
  constructor() {
    this.init();
  }

  /**
   * Initialise toutes les animations
   */
  init() {
    this.animateHero();
    this.animateOnScroll();
    this.animateTimeline();
    this.animateCards();
    this.setupPreloader();
  }

  /**
   * Animation du hero
   */
  animateHero() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from('.hero-title-wrap', {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
    .from('.hero h2', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    }, '-=0.5');
  }

  /**
   * Animations au scroll
   */
  animateOnScroll() {
    // Fade in pour les sections
    gsap.utils.toArray('section').forEach(section => {
      gsap.from(section.children, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      });
    });

    // Animation des titres de section
    gsap.utils.toArray('.section-title-wrap').forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 85%'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      });
    });
  }

  /**
   * Animation de la timeline
   */
  animateTimeline() {
    const timelineItems = gsap.utils.toArray('.timeline-item');
    
    timelineItems.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%'
        },
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    });

    // Animation de la ligne centrale
    gsap.from('.timeline::after', {
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      },
      scaleY: 0,
      transformOrigin: 'top center'
    });
  }

  /**
   * Animation des cartes (projets, expérience, etc.)
   */
  animateCards() {
    const cards = gsap.utils.toArray('.services-thumb, .projects-thumb');
    
    cards.forEach(card => {
      // Hover effect avec GSAP
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          boxShadow: '0 1rem 3rem rgba(0,0,0,.25)',
          duration: 0.3
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 1rem 3rem rgba(0,0,0,.175)',
          duration: 0.3
        });
      });

      // Animation au scroll
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    });
  }

  /**
   * Gestion du preloader
   */
  setupPreloader() {
    const preloader = document.querySelector('.preloader');
    
    if (preloader) {
      window.addEventListener('load', () => {
        gsap.to(preloader, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            preloader.style.display = 'none';
          }
        });
      });
    }
  }

  /**
   * Animation de révélation de texte
   */
  revealText(element) {
    const text = element.textContent;
    element.innerHTML = text.split('').map(char => 
      `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    gsap.from(element.children, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.02,
      ease: 'back.out(1.7)'
    });
  }

  /**
   * Animation de compteur
   */
  animateCounter(element, target, duration = 2) {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: duration,
      ease: 'power1.out',
      onUpdate: () => {
        element.textContent = Math.round(obj.value);
      }
    });
  }

  /**
   * Parallax effect
   */
  setupParallax(selector, speed = 0.5) {
    const elements = gsap.utils.toArray(selector);
    
    elements.forEach(el => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
        ease: 'none'
      });
    });
  }
}

export default new AnimationManager();

