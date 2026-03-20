    function handleFooterForm(e) {
        e.preventDefault();
        const email   = document.getElementById('f-email').value;
        const nombre  = document.getElementById('f-nombre').value;
        const mensaje = document.getElementById('f-mensaje').value;
        const body    = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
        window.location.href = `mailto:cuencamotor4x4@hotmail.com?subject=Contacto web&body=${body}`;
    }