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

    // All floating items with transparent PNG images
    const extremeItems = [
        { name: 'scorpion', img: 'assets/scorpion.png' },
        { name: 'spider', img: 'assets/spider.png' },
        { name: 'centipede', img: 'assets/centipede.png' },
        { name: 'blade', img: 'assets/blade.png' },
        { name: 'blood', img: 'assets/blood.png' },
        { name: 'skull', img: 'assets/skull.png' },
        // Playing cards
        { name: 'card', img: 'assets/card_ace_spades.png' },
        { name: 'card', img: 'assets/card_king_hearts.png' },
        { name: 'card', img: 'assets/card_queen_diamonds.png' },
        { name: 'card', img: 'assets/card_jack_clubs.png' },
    ];

    // Create all floating items (hewan, objek, dan kartu)
    for (let i = 0; i < 18; i++) {
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
    const size = Math.random() * 40 + 50; // Larger size for realistic images
    const rotation = Math.random() * 360;

    item.innerHTML = `<img src="${selected.img}" alt="${selected.name}" />`;
    item.classList.add(selected.name);

    item.style.cssText = `
        left: ${left}%;
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        width: ${size}px;
        height: ${size}px;
        --rotation: ${rotation}deg;
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
