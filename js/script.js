// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const navbarNav = document.getElementById('navbar-nav');
const navbarToggler = document.getElementById('navbar-toggler');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
        navbarToggler.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Don't close if it's a modal trigger or external link
        if (!link.hasAttribute('data-modal') && !link.hasAttribute('target')) {
            navbarNav.classList.remove('active');
            navbarToggler.classList.remove('active');
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignore if it's just "#" or a modal trigger
        if (href === '#' || this.hasAttribute('data-modal')) {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== MODALS =====
const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('[data-dismiss="modal"]');

// Open modal
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});

// Close modal on outside click
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.classList.contains('show')) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-category')) {
                animateSkillBars(entry.target);
            }
            
            // Animate project cards
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
            }
        }
    });
}, observerOptions);

// Observe elements for animation
const elementsToAnimate = document.querySelectorAll(`
    .timeline-item,
    .project-card,
    .skill-category,
    .highlight-item,
    .about-image-wrapper,
    .about-text,
    .section-header
`);

elementsToAnimate.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ===== SKILL BARS ANIMATION =====
function animateSkillBars(skillCategory) {
    const skillBars = skillCategory.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        if (progress) {
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 200);
        }
    });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

if (contactForm) {
    // Remplace par ton URL de Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual fetch to Google Sheets)
        setTimeout(() => {
            formResponse.textContent = '✓ Message envoyé avec succès !';
            formResponse.style.color = '#6ad396';
            contactForm.reset();
            
            // Reset button
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                formResponse.textContent = '';
                
                // Close modal after success
                const modal = contactForm.closest('.modal');
                if (modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            }, 2000);
        }, 1500);

        /* Uncomment to use actual Google Sheets integration:
        fetch(scriptURL, { 
            method: 'POST', 
            body: new FormData(contactForm)
        })
        .then(response => {
            formResponse.textContent = '✓ Message envoyé avec succès !';
            formResponse.style.color = '#6ad396';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                formResponse.textContent = '';
                
                const modal = contactForm.closest('.modal');
                if (modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            }, 2000);
        })
        .catch(error => {
            formResponse.textContent = '✗ Erreur lors de l\'envoi. Veuillez réessayer.';
            formResponse.style.color = '#e94225';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            console.error('Erreur!', error.message);
        });
        */
    });
}

// ===== PARALLAX EFFECT ON FLOATING CARDS =====
const floatingCards = document.querySelectorAll('.floating-card');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    floatingCards.forEach((card, index) => {
        const speed = (index + 1) * 15;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        card.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===== WAVE SHAPES ANIMATION =====
const waveShapes = document.querySelectorAll('.wave-shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    waveShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.05;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.01}deg)`;
    });
});

// ===== TYPING EFFECT FOR HERO (Optional) =====
const chatBubbles = document.querySelectorAll('.chat-bubble');
let typingDelay = 0;

chatBubbles.forEach((bubble, index) => {
    const text = bubble.textContent;
    bubble.textContent = '';
    bubble.style.opacity = '0';
    
    setTimeout(() => {
        bubble.style.opacity = '1';
        let charIndex = 0;
        
        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                bubble.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }, typingDelay);
    
    typingDelay += 600;
});

// ===== CURSOR EFFECT (Desktop only) =====
if (window.innerWidth > 968) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let cursorX = 0;
    let cursorY = 0;
    let pageX = 0;
    let pageY = 0;

    document.addEventListener('mousemove', (e) => {
        pageX = e.clientX;
        pageY = e.clientY;
    });

    // Add cursor styles
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #815443;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease, opacity 0.3s ease;
            opacity: 0;
        }
        
        body {
            cursor: none;
        }
        
        a, button {
            cursor: none;
        }
    `;
    document.head.appendChild(style);

    function loop() {
        cursorX = lerp(cursorX, pageX, 0.1);
        cursorY = lerp(cursorY, pageY, 0.1);
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        cursor.style.opacity = '1';
        requestAnimationFrame(loop);
    }

    function lerp(start, end, amount) {
        return (1 - amount) * start + amount * end;
    }

    loop();

    // Hover effects for cursor
    document.querySelectorAll('a, button, .project-card, .timeline-content').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.opacity = '0.5';
            cursor.style.borderColor = '#5e2933';
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.opacity = '1';
            cursor.style.borderColor = '#815443';
        });
    });
}

// ===== PROJECT CARDS TILT EFFECT =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== TIMELINE ITEMS STAGGER ANIMATION =====
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    
    setTimeout(() => {
        item.style.transition = 'all 0.6s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
    }, index * 150);
});

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Bonjour ! ', 'color: #815443; font-size: 20px; font-weight: bold;');
console.log('%cPortfolio d\'Amine M\'ZALI 🚀', 'color: #5e2933; font-size: 14px;');
console.log('%cCurieux du code ? Contactez-moi ! 💼', 'color: #7d5e4c; font-size: 12px;');

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== SCROLL PROGRESS INDICATOR =====
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #5e2933 0%, #815443 100%);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #5e2933 0%, #815443 100%);
    color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 10px 30px rgba(94, 41, 51, 0.3);
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1) translateY(-5px)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1) translateY(0)';
});

// ===== CLIENTS/TECH LOGOS ANIMATION =====
const clientsImages = document.querySelectorAll('.clients-image');

clientsImages.forEach((img, index) => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        img.style.transition = 'all 0.4s ease';
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    }, index * 50);
});

// ===== RANDOM FACTS / EASTER EGG =====
const facts = [
    "🎮 Fan de jeux vidéo et passionné de game dev",
    "✈️ Intéressé par l'aéronautique et l'espace",
    "📚 Lecteur de romans fantastiques et mangas",
    "🏀 Amateur de sports collectifs",
    "🤝 Fondateur de la Onizuka Foundation"
];

let factIndex = 0;
setInterval(() => {
    console.log('%c' + facts[factIndex], 'color: #815443; font-size: 12px;');
    factIndex = (factIndex + 1) % facts.length;
}, 10000);

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%c⚡ Page chargée en ${pageLoadTime}ms`, 'color: #6ad396; font-weight: bold;');
    }
});


