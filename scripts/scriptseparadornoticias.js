const separadores = document.querySelectorAll('.separador');
const marcadores = document.querySelectorAll('.div-anio');
const enlacesMenu = document.querySelectorAll('.enlace-anio');

// 1. EL STICKY (Color rojo al tocar el techo)
const obsSticky = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const d = entry.boundingClientRect.top;
        // Si choca con el techo (o está 1px por encima/debajo)
        if (entry.intersectionRatio < 1 && d <= 1) {
            entry.target.classList.add('activado');
        } else {
            entry.target.classList.remove('activado');
        }
    });
}, { threshold: [1], rootMargin: "-1px 0px 0px 0px" });

// 2. EL MENÚ (Iluminar el año actual)
const obsMenu = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // En cuanto el marcador asome un poco por la pantalla...
        if (entry.isIntersecting) {
            enlacesMenu.forEach(link => {
                link.classList.remove('anio-active');
                if (link.getAttribute('href') === '#' + entry.target.id) {
                    link.classList.add('anio-active');
                }
            });
        }
    });
}, { 
    // Detectamos el marcador cuando esté en la mitad superior
    rootMargin: "0px 0px -50% 0px",
    threshold: 0 
});

// Lanzamos ambos
separadores.forEach(s => obsSticky.observe(s));
marcadores.forEach(m => obsMenu.observe(m));