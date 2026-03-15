// Esperamos a que el DOM esté cargado para evitar errores
document.addEventListener('DOMContentLoaded', () => {
    
    const botonMenu = document.querySelector('.desplegable');
    const menuNavegacion = document.querySelector('.contenedor-navegacion');

    // Añadimos el evento de clic
    botonMenu.addEventListener('click', () => {
        if (menuNavegacion.style.display === 'flex') {
            menuNavegacion.style.display = 'none';
        } else if (window.innerWidth >= 1033) {
            menuNavegacion.style.display = 'flex';
        } else {
            menuNavegacion.style.display = 'flex';
        }
    });
});