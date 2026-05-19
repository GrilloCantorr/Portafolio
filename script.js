/* ================================================
   PORTAFOLIO PROFESIONAL v2.0 - JAVASCRIPT
   Animaciones e Interactividad
   ================================================ */

// ================================================
// INTERSECTION OBSERVER - Animaciones al scroll
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeScrollAnimations();
    initializeSmoothScroll();
    initializeSubtitleAnimation();
});

/**
 * Inicializa animaciones basadas en scroll
 * Usa Intersection Observer para detectar cuando elementos entran en vista
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Opcionalmente dejar de observar después de animar
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clase animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Inicializa scroll suave en navegación
 */
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Animación opcional de subtítulo cambiante
 * Descomenta para activar
 */
function initializeSubtitleAnimation() {
    const subtitulos = [
        'Estudiante de Ingeniería de Sistemas - IX Semestre',
        'Desarrollador Full Stack apasionado 💻',
        'Especialista en Arquitectura de Software 🏗️',
        'Innovador Tecnológico en formación 🚀'
    ];

    let index = 0;
    const subtituloElement = document.querySelector('.hero-subtitle');

    // Cambiar subtítulo cada 5 segundos (opcional)
    // Descomenta la siguiente línea si deseas que cambie automáticamente
    /*
    setInterval(() => {
        // Remover el cursor parpadeante temporalmente
        const originalContent = subtituloElement.textContent.split('|')[0].trim();
        
        // Cambiar al siguiente subtítulo
        index = (index + 1) % subtitulos.length;
        subtituloElement.textContent = subtitulos[index];
    }, 5000);
    */
}

// ================================================
// FUNCIONES AUXILIARES
// ================================================

/**
 * Detecta si el usuario está en móvil
 * @returns {boolean}
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Agrega clase de carga completa al documento
 * Útil para mostrar contenido solo después de cargar
 */
document.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ================================================
// EVENTOS DE RENDIMIENTO
// ================================================

// Log en consola (solo en desarrollo)
if (process.env.NODE_ENV !== 'production') {
    console.log('Portafolio cargado correctamente');
}

// Medir tiempo de carga
window.addEventListener('load', function() {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Tiempo total de carga: ' + pageLoadTime + 'ms');
});
