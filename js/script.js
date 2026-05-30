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

    /* ---- Inject cover images + Request Demo CTAs ---- */
    const slugMap = {
        'AssetFlow RFID Asset Tracking Platform': 'assetflow',
        'Cultiva Restaurant Inventory System': 'cultiva',
        'GlobalTradeIndiaExpo.com': 'globaltrade',
        'ScanTechInnovations.africa': 'scantech',
        'AI-Powered Customer Service Chatbot': 'chatbot',
        'Safaricom RFID Network Scanner': 'safaricom',
        'UNICEF Uganda RFID Asset Tracking': 'unicef',
        'National Parents Association': 'npa',
        'TREQ B2B Trade App': 'treq',
        'MCHAMA — Group Savings App': 'mchama',
        'Unified Events App': 'unifiedevents',
        'Crypto Merchant Bot': 'crypto',
        'RFID Microservices Platform': 'rfidmicro',
        'Tyre Management System': 'tyre',
        'Biometric Authentication System': 'biometric',
        'Football Bet Predictions': 'bets',
        'Image to Text — OCR': 'image2text-app',
        'Music Chat Bot': 'musicbot',
        'FileVault — File Sharing': 'filevault',
        'NairobiLive': 'nairobilive',
        'FestiveFinder': 'festivefinder',
        'Sharn Nails & Beauty': 'shazbeauty',
        'Velvet Reserve': 'velvet',
        'React Playground': 'playground',
        'Electronics Store': 'electronics',
        'Barber.shop Booking': 'barber',
        'Ayman Global Connect': 'ayman'
    };
    document.querySelectorAll('.project-card').forEach(card => {
        const name = card.querySelector('.project-name')?.textContent.trim();
        const slug = slugMap[name];
        if (slug) {
            const cover = document.createElement('div');
            cover.className = 'project-cover';
            cover.innerHTML = `<img src="assets/images/covers/${slug}.svg" alt="${name} cover" loading="lazy">`;
            card.prepend(cover);
        }
        // Client/enterprise projects (case-study links, no public site) get a demo CTA.
        const primary = card.querySelector('.project-link');
        if (primary && primary.getAttribute('href').startsWith('case-study')) {
            const demo = document.createElement('a');
            demo.className = 'project-link demo-link';
            demo.href = `index.html?subject=${encodeURIComponent('Demo request: ' + name)}#contact`;
            demo.textContent = 'Request Demo';
            card.querySelector('.project-links').appendChild(demo);
        }
    });

    /* ---- Prefill contact subject from ?subject= (Request Demo) ---- */
    const presubject = new URLSearchParams(location.search).get('subject');
    if (presubject) {
        const sf = document.querySelector('#contactForm [name="subject"]');
        if (sf) sf.value = presubject;
    }

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

    /* ---- Contact form (Formspree AJAX) ---- */
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (form.action.includes('YOUR_FORM_ID')) {
            status.textContent = '⚠️ Form not configured yet — email me at iamblessedshammah@gmail.com.';
            status.className = 'form-status error';
            return;
        }
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled = true;
        status.textContent = '';
        status.className = 'form-status';
        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });
            if (res.ok) {
                form.reset();
                status.textContent = '✅ Thanks! Your message has been sent — I\'ll get back to you soon.';
                status.className = 'form-status success';
            } else {
                const data = await res.json().catch(() => ({}));
                status.textContent = data.errors?.map(x => x.message).join(', ')
                    || '❌ Something went wrong. Please email me directly.';
                status.className = 'form-status error';
            }
        } catch {
            status.textContent = '❌ Network error. Please email me at iamblessedshammah@gmail.com.';
            status.className = 'form-status error';
        } finally {
            btn.textContent = original;
            btn.disabled = false;
        }
    });

    /* ---- Footer year ---- */
    const yr = document.querySelector('.footer-copy');
    if (yr) yr.textContent = `© ${new Date().getFullYear()} Blessed Shammah. All rights reserved.`;
});
