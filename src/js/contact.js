/**
 * Gestion du formulaire de contact
 */

import i18n from '../i18n/translations.js';

export class ContactForm {
  constructor() {
    this.form = null;
    this.init();
  }

  /**
   * Initialise le formulaire
   */
  init() {
    this.form = document.getElementById('contactForm');
    if (!this.form) return;

    this.setupValidation();
    this.setupSubmit();
  }

  /**
   * Configure la validation en temps réel
   */
  setupValidation() {
    const inputs = this.form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        this.validateField(input);
      });

      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          this.validateField(input);
        }
      });
    });
  }

  /**
   * Valide un champ
   */
  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'Ce champ est requis';
    } else if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Adresse email invalide';
      }
    }

    this.updateFieldStatus(field, isValid, errorMessage);
    return isValid;
  }

  /**
   * Met à jour le statut visuel d'un champ
   */
  updateFieldStatus(field, isValid, errorMessage) {
    const feedback = field.parentElement.querySelector('.invalid-feedback');
    
    if (isValid) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
      if (feedback) feedback.textContent = '';
    } else {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
      
      if (!feedback) {
        const div = document.createElement('div');
        div.className = 'invalid-feedback';
        div.textContent = errorMessage;
        field.parentElement.appendChild(div);
      } else {
        feedback.textContent = errorMessage;
      }
    }
  }

  /**
   * Configure la soumission du formulaire
   */
  setupSubmit() {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Valide tous les champs
      const inputs = this.form.querySelectorAll('input, textarea');
      let isFormValid = true;

      inputs.forEach(input => {
        if (!this.validateField(input)) {
          isFormValid = false;
        }
      });

      if (!isFormValid) return;

      // Désactive le bouton pendant l'envoi
      const submitBtn = this.form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Envoi...';

      try {
        const formData = new FormData(this.form);
        
        const response = await fetch('https://formspree.io/f/xbldanjv', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          this.showMessage('success', i18n.t('contact.success'));
          this.form.reset();
          inputs.forEach(input => {
            input.classList.remove('is-valid', 'is-invalid');
          });
          
          // Ferme le modal après 2 secondes
          setTimeout(() => {
            const modal = document.getElementById('contactModal');
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) bsModal.hide();
          }, 2000);
        } else {
          throw new Error('Erreur serveur');
        }
      } catch (error) {
        this.showMessage('error', i18n.t('contact.error'));
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  /**
   * Affiche un message de retour
   */
  showMessage(type, message) {
    const responseDiv = document.getElementById('formResponse');
    if (!responseDiv) return;

    const className = type === 'success' ? 'text-success' : 'text-danger';
    const icon = type === 'success' ? '✓' : '✗';
    
    responseDiv.innerHTML = `<p class="${className}"><strong>${icon}</strong> ${message}</p>`;
    
    // Animation d'apparition
    responseDiv.style.opacity = '0';
    responseDiv.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      responseDiv.style.transition = 'all 0.3s ease';
      responseDiv.style.opacity = '1';
      responseDiv.style.transform = 'translateY(0)';
    }, 10);

    // Efface le message après 5 secondes
    setTimeout(() => {
      responseDiv.innerHTML = '';
    }, 5000);
  }

  /**
   * Réinitialise le formulaire
   */
  reset() {
    this.form?.reset();
    const inputs = this.form?.querySelectorAll('input, textarea') || [];
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
    });
    
    const responseDiv = document.getElementById('formResponse');
    if (responseDiv) responseDiv.innerHTML = '';
  }
}

export default new ContactForm();

