window.addEventListener('scroll', () => {
    const fondoBlur = document.querySelector('.capa-fondo-borrosa');
    if (window.scrollY > 400) { // Si baja más de 300px
        fondoBlur.style.opacity = '1';
    } else {
        fondoBlur.style.opacity = '0';
    }
});