        //EVENTO PARA ENVIAR CORREO DESDE FORM
        document.querySelector('.btn-send').addEventListener('click', () => {
            // SE CREAN VARIABLES QUE ALMACENEN LOS VALORES DE LOS CAMPOS DEL FORMULARIO
            const email = document.getElementById('email').value;
            const nombre = document.getElementById('nombre').value;
            // EN CASO DE QUE ESTÉ VACÍO EL asunto, SE GENERA UNO POR DEFECTO QUE ES 'Contacto web'
            const asunto = document.getElementById('asunto').value || 'Contacto web';
            const mensaje = document.getElementById('mensaje').value;
            // SE VALIDA QUE LOS CAMPOS DE NOMBRE Y EMAIL NO ESTÉN VACÍOS
            if (!nombre) { alert('Por favor, introduce tu nombre.'); return; }
            if (!email) { alert('Por favor, introduce tu email.'); return; }
            const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
            window.location.href = `mailto:cuencamotor4x4@hotmail.com?subject=${encodeURIComponent(asunto)}&body=${body}`;
        });