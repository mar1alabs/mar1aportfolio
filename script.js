/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (!target) return;

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Cerrar menú móvil después de navegar
        const navLinks = document.querySelector('.nav-links');

        if (navLinks) {
            navLinks.classList.remove('active');
        }
    });

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('active');

        const isOpen = navLinks.classList.contains('active');

        menuToggle.setAttribute(
            'aria-label',
            isOpen ? 'Cerrar menú' : 'Abrir menú'
        );

        const icon = menuToggle.querySelector('svg');

        if (icon) {
            icon.setAttribute(
                'data-lucide',
                isOpen ? 'x' : 'menu'
            );

            lucide.createIcons();
        }
    });
}


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener('click', event => {

    if (!navLinks || !menuToggle) return;

    const clickedInsideMenu =
        navLinks.contains(event.target) ||
        menuToggle.contains(event.target);

    if (!clickedInsideMenu) {
        navLinks.classList.remove('active');

        menuToggle.setAttribute(
            'aria-label',
            'Abrir menú'
        );
    }
});


/* =========================================================
   TERMINAL CONSOLE MESSAGE
   ========================================================= */

window.addEventListener('DOMContentLoaded', () => {

    console.log(
        "%c >_ System initialized. Welcome to María's Portfolio.",
        "color: #00ff66; font-size: 14px; font-family: monospace;"
    );

    console.log(
        "%c [OK] Security mindset loaded.",
        "color: #c77dff; font-family: monospace;"
    );

    console.log(
        "%c [OK] Portfolio interface ready.",
        "color: #00ff66; font-family: monospace;"
    );

});


/* =========================================================
   LUCIDE ICONS
   ========================================================= */

if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}


/* =========================================================
   INTERSECTION OBSERVER
   Entrada suave de las secciones
   ========================================================= */

const animatedElements = document.querySelectorAll(
    '.card, .section-heading, .code-label, .terminal-wrapper'
);

const prefersReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {

    animatedElements.forEach(element => {

        element.style.opacity = '0';
        element.style.transform = 'translateY(12px)';
        element.style.transition =
            'opacity 0.55s ease, transform 0.55s ease';

    });

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                observer.unobserve(entry.target);
            });

        },
        {
            threshold: 0.08
        }
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}
