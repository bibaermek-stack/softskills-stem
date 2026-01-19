// Mobile menu toggle (rebuilt nav)
const nav = document.getElementById('siteNav');
const navToggle = document.querySelector('.site-nav__toggle');
const navMenu = document.getElementById('siteNavMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking on a nav link (mobile)
    navMenu.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// Ensure horizontal nav starts from the left when it becomes scrollable
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.site-nav__links');
    if (navLinks) navLinks.scrollLeft = 0;
});

// Language dropdown
function syncLangDropdownLabel() {
    const lang = localStorage.getItem('preferredLanguage') || 'kk';
    const labels = { kk: 'ҚАЗ', ru: 'РУС', en: 'ENG', tr: 'TÜR' };
    document.querySelectorAll('[data-lang-value]').forEach(el => {
        el.textContent = labels[lang] || 'ҚАЗ';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    syncLangDropdownLabel();

    document.querySelectorAll('.lang-dropdown').forEach(drop => {
        const trigger = drop.querySelector('.lang-dropdown__trigger');
        if (!trigger) return;

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = drop.classList.toggle('is-open');
            trigger.setAttribute('aria-expanded', String(isOpen));
        });

        // Close when selecting a language
        drop.querySelectorAll('.lang-btn[data-lang]').forEach(btn => {
            btn.addEventListener('click', () => {
                drop.classList.remove('is-open');
                trigger.setAttribute('aria-expanded', 'false');
                // changeLanguage() runs via onclick; update label after it saves to localStorage
                setTimeout(syncLangDropdownLabel, 0);
            });
        });
    });

    // Close any open dropdown when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.lang-dropdown.is-open').forEach(drop => {
            drop.classList.remove('is-open');
            const trigger = drop.querySelector('.lang-dropdown__trigger');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 90; // navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.92)';
        nav.style.boxShadow = 'none';
    }
});

// Tab functionality for activity section
function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected tab and mark button as active
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Back to top button (guarded)
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.about-card, .direction-card, .team-member, .service-card, .base-item, .publication-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get current language
        const currentLang = localStorage.getItem('preferredLanguage') || 'kk';

        // Success messages in different languages
        const messages = {
            kk: 'Хабарламаңыз жіберілді! Біз сізбен жақын арада байланысамыз.',
            ru: 'Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
            en: 'Your message has been sent! We will contact you soon.',
            tr: 'Mesajınız gönderildi! Kısa süre içinde sizinle iletişime geçeceğiz.'
        };

        // Show success message
        alert(messages[currentLang]);

        // Reset form
        contactForm.reset();
    });
}

// Counter animation for statistics
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
}

// Observe stats cards
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const h3 = entry.target.querySelector('h3');
            if (h3 && !h3.dataset.animated) {
                const value = parseInt(h3.textContent);
                h3.textContent = '0+';
                animateCounter(h3, value);
                h3.dataset.animated = 'true';
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.site-nav__links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Prevent logo image error
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.site-nav__logo');
    if (logo) {
        logo.addEventListener('error', function() {
            // If logo image fails to load, hide it
            this.style.display = 'none';
        });
    }

    // Handle all other images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace with placeholder
            // this.src = 'data:image/svg+xml,...'; // Optional: show a placeholder
            // For now, we might just hide or leave alt text
        });
    });
});

// Print functionality (optional feature)
function printPage() {
    window.print();
}

console.log('STEM Research Center - Updated Features Loaded!');

// Final-pass ASCII-safe fallbacks to avoid mojibake until UTF-8 is enforced
document.addEventListener('DOMContentLoaded', () => {
    try { document.title = 'STEM - Research Center'; } catch (_) {}
    const lang = localStorage.getItem('preferredLanguage') || 'kk';
    const asciiLabels = { kk: 'KAZ', ru: 'RUS', en: 'ENG', tr: 'TR' };
    document.querySelectorAll('[data-lang-value]').forEach(el => {
        el.textContent = asciiLabels[lang] || asciiLabels.kk;
    });
    // Ensure all non-hero images are lazy if not marked
    document.querySelectorAll('img:not([loading])').forEach(img => {
        if (!img.closest('.hero')) img.loading = 'lazy';
    });
});

// --- Overrides and progressive enhancements ---
// Redefine language label sync with clean labels
function syncLangDropdownLabel() {
    const lang = localStorage.getItem('preferredLanguage') || 'kk';
    const labels = { kk: 'ҚАЗ', ru: 'РУС', en: 'ENG', tr: 'TR' };
    document.querySelectorAll('[data-lang-value]').forEach(el => {
        el.textContent = labels[lang] || labels.kk;
    });
}

// Set a clean, localized-ish title and enable lazy-loading for non-hero images
document.addEventListener('DOMContentLoaded', () => {
    try {
        document.title = 'STEM – Ғылыми-зерттеу орталығы';
    } catch (e) { /* noop */ }

    document.querySelectorAll('img:not([loading])').forEach(img => {
        const inHero = img.closest('.hero');
        if (!inHero) img.loading = 'lazy';
    });
});
