// Smooth Scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Pequeño efecto dinámico al cargar
window.addEventListener('DOMContentLoaded', () => {
    console.log("%c >_ System initialized. Welcome to María's Portfolio.", "color: #00ff66; font-size: 14px; font-family: monospace;");
});
