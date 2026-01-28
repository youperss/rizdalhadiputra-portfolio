// ========================================
// Rizdal Hady Putra - Portfolio Website
// JavaScript Interactions
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initParticles();
    initFloatingCards();
    initScrollAnimations();
    initSmoothScroll();
    initBookingForm();
});

// ========================================
// Floating Objects Animation (Extreme Magic Theme)
// ========================================
function initFloatingCards() {
    const container = document.getElementById('floatingCards');
    if (!container) return;

    // Cards
    const cardSymbols = ['♠', '♥', '♦', '♣'];
    const cardValues = ['A', 'K', 'Q', 'J'];

    // Extreme magic items with detailed SVG icons
    const extremeItems = [
        {
            name: 'scorpion',
            svg: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M52 28c-2-4-6-6-10-6h-4l-2-4c-1-2-3-4-6-4s-5 2-6 4l-2 4h-4c-4 0-8 2-10 6-2 3-2 7 0 10l8 12c2 3 5 4 8 4h16c3 0 6-1 8-4l8-12c2-3 2-7 0-10zM32 18c1 0 2 1 3 2l1 2h-8l1-2c1-1 2-2 3-2z"/><path d="M58 16c-1-2-3-4-6-4-2 0-4 1-5 3l-3 5 2 2 4-6c0-1 1-2 2-2 1 0 2 1 3 2 1 2 1 4-1 6l-6 8 2 2 6-8c3-4 3-8 2-8zM6 16c1-2 3-4 6-4 2 0 4 1 5 3l3 5-2 2-4-6c0-1-1-2-2-2-1 0-2 1-3 2-1 2-1 4 1 6l6 8-2 2-6-8c-3-4-3-8-2-8z"/></svg>`
        },
        {
            name: 'spider',
            svg: `<svg viewBox="0 0 64 64" fill="currentColor"><ellipse cx="32" cy="36" rx="10" ry="8"/><circle cx="32" cy="24" r="6"/><path d="M26 24c-8-4-16 0-20 8M38 24c8-4 16 0 20 8M24 32c-10 0-18 6-20 14M40 32c10 0 18 6 20 14M26 40c-6 6-8 14-6 20M38 40c6 6 8 14 6 20M28 28c-4-8-2-16 4-22M36 28c4-8 2-16-4-22" stroke="currentColor" stroke-width="2.5" fill="none"/></svg>`
        },
        {
            name: 'centipede',
            svg: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M8 32c0-4 28-4 48 0 0 4-28 4-48 0z"/><path d="M12 28v-8M16 26v-10M20 24v-10M24 24v-8M28 24v-6M32 24v-4M36 24v-6M40 24v-8M44 24v-10M48 26v-10M52 28v-8M12 36v8M16 38v10M20 40v10M24 40v8M28 40v6M32 40v4M36 40v6M40 40v8M44 40v10M48 38v10M52 36v8" stroke="currentColor" stroke-width="2"/><circle cx="8" cy="32" r="4"/></svg>`
        },
        {
            name: 'blade',
            svg: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M56 8L20 44l-4 12 12-4L64 16c0-4-4-8-8-8z"/><path d="M16 48l-8 8 4 4 8-8z"/></svg>`
        },
        {
            name: 'knife',
            svg: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M8 56L48 16c4-4 8-8 8-12 0-2-2-4-4-4-4 0-8 4-12 8L4 48c-2 2-2 6 0 8 2 2 6 2 8 0z"/><rect x="2" y="50" width="12" height="6" rx="2"/></svg>`
        },
        {
            name: 'nail',
            svg: `<svg viewBox="0 0 64 64" fill="currentColor"><rect x="28" y="16" width="8" height="40" rx="1"/><polygon points="28,56 32,64 36,56"/><ellipse cx="32" cy="12" rx="12" ry="6"/></svg>`
        },
        {
            name: 'blood',
            svg: `<svg viewBox="0 0 64 64" fill="currentColor"><path d="M32 4c-12 16-20 28-20 40 0 11 9 20 20 20s20-9 20-20c0-12-8-24-20-40z"/></svg>`
        },
        {
            name: 'skull',
            svg: `<svg viewBox="0 0 64 64" fill="currentColor"><ellipse cx="32" cy="28" rx="20" ry="18"/><rect x="20" y="42" width="24" height="12" rx="2"/><ellipse cx="24" cy="28" rx="5" ry="6" fill="#000"/><ellipse cx="40" cy="28" rx="5" ry="6" fill="#000"/><path d="M28 48v6M32 48v8M36 48v6" stroke="#000" stroke-width="2"/></svg>`
        },
    ];

    // Create cards (8 pieces)
    for (let i = 0; i < 8; i++) {
        createFloatingCard(container, cardSymbols, cardValues);
    }

    // Create extreme items (20 pieces)
    for (let i = 0; i < 20; i++) {
        createFloatingItem(container, extremeItems);
    }
}

function createFloatingCard(container, symbols, values) {
    const card = document.createElement('div');
    card.className = 'floating-card';

    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    const isRed = symbol === '♥' || symbol === '♦';

    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;
    const size = Math.random() * 15 + 25;
    const rotation = Math.random() * 360;

    card.innerHTML = `<span class="card-value">${value}</span><span class="card-suit">${symbol}</span>`;
    card.classList.add(isRed ? 'red' : 'black');

    card.style.cssText = `
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        width: ${size}px;
        height: ${size * 1.4}px;
        font-size: ${size * 0.35}px;
        --rotation: ${rotation}deg;
    `;

    container.appendChild(card);
}

function createFloatingItem(container, items) {
    const item = document.createElement('div');
    item.className = 'floating-item';

    const selected = items[Math.floor(Math.random() * items.length)];

    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 12 + 18;
    const size = Math.random() * 24 + 28;
    const rotation = Math.random() * 360;

    item.innerHTML = selected.svg;
    item.classList.add(selected.name);

    item.style.cssText = `
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        width: ${size}px;
        height: ${size}px;
        --rotation: ${rotation}deg;
        color: var(--color-red);
    `;

    container.appendChild(item);
}

// ========================================
// Booking Form - WhatsApp Integration
// ========================================
function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const tanggalRaw = document.getElementById('tanggal').value;
        const jam = document.getElementById('jam').value;
        const kota = document.getElementById('kota').value;
        const jenisEvent = document.getElementById('jenisEvent').value;
        const durasi = document.getElementById('durasi').value;
        const audience = document.getElementById('audience').value;
        const venue = document.getElementById('venue').value;
        const soundlight = document.getElementById('soundlight').value;

        // Format date to Indonesian format
        const dateObj = new Date(tanggalRaw);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const tanggalFormatted = dateObj.toLocaleDateString('id-ID', options);
        const tanggalJam = `${tanggalFormatted}, ${jam}`;

        // Format message for WhatsApp
        const message = `*📋 BOOKING INQUIRY - RIZDAL HADY PUTRA*
*EXTREME/FAKIR MAGIC*

━━━━━━━━━━━━━━━━━━━━━
📅 *Tanggal & Jam Acara:* ${tanggalJam}
📍 *Kota / Lokasi:* ${kota}
🎭 *Jenis Event:* ${jenisEvent}
⏱️ *Durasi Show:* ${durasi}
👥 *Estimasi Audience:* ${audience}
🏛️ *Venue:* ${venue}
🔊 *Sound & Lighting:* ${soundlight}
━━━━━━━━━━━━━━━━━━━━━

Mohon informasi lebih lanjut mengenai ketersediaan dan harga. Terima kasih! 🙏`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp number (format: 62819...)
        const whatsappNumber = '6281936369006';

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    });
}

// ========================================
// Navigation
// ========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ========================================
// Floating Particles
// ========================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random position and animation properties
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 4 + 6;

    particle.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
    `;

    container.appendChild(particle);
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    // Observer for general elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe section headers
    document.querySelectorAll('.section-header').forEach(el => {
        observer.observe(el);
    });

    // Observe about elements
    document.querySelectorAll('.about-image, .about-text').forEach(el => {
        observer.observe(el);
    });

    // Observe booking form
    document.querySelectorAll('.booking-form-wrapper').forEach(el => {
        observer.observe(el);
    });

    // Observe cards with stagger effect
    const cardTypes = [
        '.achievement-card',
        '.media-card',
        '.video-item',
        '.gallery-card'
    ];

    cardTypes.forEach(selector => {
        const cards = document.querySelectorAll(selector);
        cards.forEach((card, index) => {
            // Add stagger delay based on index
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
    });

    // Parallax effect on scroll for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero-bg');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// ========================================
// Smooth Scroll
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Utility: Debounce
// ========================================
function debounce(func, wait = 20) {
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

// ========================================
// Easter Egg: Konami Code
// ========================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateMagicMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateMagicMode() {
    document.body.style.animation = 'magicPulse 0.5s ease 3';

    // Add temporary glow effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes magicPulse {
            0%, 100% { filter: none; }
            50% { filter: hue-rotate(180deg) brightness(1.2); }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 1500);
}
