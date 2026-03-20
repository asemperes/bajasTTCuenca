
const items = document.querySelectorAll('.tl-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
items.forEach(i => observer.observe(i));
// OBSERVER INSCRIPCIONES
const revealEls = document.querySelectorAll('.card, .sportity-item');
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer2.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => observer2.observe(el));
// OBSERVER NOTICIAS
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .noticia-card').forEach(el => obs.observe(el));

// OBSERVER POLITICAS
  const obs2 = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs2.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.legal-article').forEach(el => obs2.observe(el));