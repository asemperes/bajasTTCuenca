// OBSERVER HISTORIA
const timelineItems = document.querySelectorAll('.tl-item');
const observerTimeline = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observerTimeline.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });
timelineItems.forEach(item => observerTimeline.observe(item));

// OBSERVER INSCRIPCIONES
const tarjetasInscripcion = document.querySelectorAll('.card, .sportity-item');
const observerInscripciones = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observerInscripciones.unobserve(entrada.target);
    }
  });
}, { threshold: 0.1 });
tarjetasInscripcion.forEach(tarjeta => observerInscripciones.observe(tarjeta));

// OBSERVER INDEX
const seccionesIndex = document.querySelectorAll('.reveal, .noticia-card');
const observerIndex = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observerIndex.unobserve(entrada.target);
    }
  });
}, { threshold: 0.1 });
seccionesIndex.forEach(seccion => observerIndex.observe(seccion));

// OBSERVER POLITICAS
const articulosLegales = document.querySelectorAll('.legal-article');
const observerPoliticas = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observerPoliticas.unobserve(entrada.target);
    }
  });
}, { threshold: 0.08 });
articulosLegales.forEach(articulo => observerPoliticas.observe(articulo));

// OBSERVER NOTICIAS
const tarjetasNoticias = document.querySelectorAll('.tarjeta-noticia');
const observerNoticias = new IntersectionObserver(entradas => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observerNoticias.unobserve(entrada.target);
    }
  });
}, { threshold: 0.1 });
tarjetasNoticias.forEach(noticia => observerNoticias.observe(noticia));