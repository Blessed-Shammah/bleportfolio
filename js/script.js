document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');

    /* ---- Mobile nav toggle ---- */
    navToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.innerHTML = navLinks.classList.contains('open') ? '&times;' : '&#9776;';
    });
    navLinks?.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.innerHTML = '&#9776;';
        })
    );

    /* ---- Theme toggle ---- */
    const themeToggle = document.getElementById('themeToggle');
    themeToggle?.addEventListener('click', () => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    /* ---- Sticky navbar shadow + scroll-cue fade ---- */
    const scrollCue = document.querySelector('.scroll-down');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
        scrollCue?.classList.toggle('hide', window.scrollY > 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---- Scroll reveal ---- */
    // Auto-tag section headings/sub-text so they animate too.
    document.querySelectorAll('.section-title, .section-sub').forEach(el => {
        if (!el.classList.contains('animate-on-scroll')) el.classList.add('animate-on-scroll');
    });

    const reveal = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in-view');
                reveal.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    // Stagger reveals within each grid/group so cards cascade in.
    document.querySelectorAll('.project-grid, .skills-grid, .cert-grid, .timeline').forEach(group => {
        group.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
            el.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
        });
    });
    document.querySelectorAll('.animate-on-scroll').forEach(el => reveal.observe(el));

    /* ---- Project filtering ---- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                const cats = card.dataset.category.split(' ');
                const show = filter === 'all' || cats.includes(filter);
                card.classList.toggle('hide', !show);
            });
        });
    });

    /* ---- Scroll-spy active nav link ---- */
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    const spy = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(l => l.classList.toggle('active',
                    l.getAttribute('href') === `#${e.target.id}`));
            }
        });
    }, { threshold: 0.5 });
    sections.forEach(s => spy.observe(s));

    /* ---- Footer year ---- */
    const yr = document.querySelector('.footer-copy');
    if (yr) yr.textContent = `© ${new Date().getFullYear()} Blessed Shammah. All rights reserved.`;
});
