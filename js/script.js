document.addEventListener('DOMContentLoaded', () => {
    // Navbar toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    animateElements.forEach(el => observer.observe(el));

    // Certificate carousel (basic example)
    const certCards = document.querySelectorAll('.cert-card');
    const certNav = document.querySelector('.cert-nav span');
    const certDots = document.querySelectorAll('.dot');
    const navArrows = document.querySelectorAll('.nav-arrow');
    let currentCert = 0;

    function updateCarousel() {
        certCards.forEach((card, index) => {
            card.style.display = index === currentCert ? 'block' : 'none';
        });
        certNav.textContent = `${currentCert + 1} / ${certCards.length}`;
        certDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentCert);
        });
    }

    navArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.textContent === '→') {
                currentCert = (currentCert + 1) % certCards.length;
            } else {
                currentCert = (currentCert - 1 + certCards.length) % certCards.length;
            }
            updateCarousel();
        });
    });

    certDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentCert = index;
            updateCarousel();
        });
    });

    updateCarousel();

    // Form submission (basic example)
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
        form.reset();
    });
});