    function abrirLightbox(card) {
      document.getElementById('lightboxFoto').src = card.querySelector('img').src;
      document.getElementById('lightbox').classList.add('activo');
      document.body.style.overflow = 'hidden';
    }
    function cerrarLightbox() {
      document.getElementById('lightbox').classList.remove('activo');
      document.body.style.overflow = '';
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') cerrarLightbox();
    });