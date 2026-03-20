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

