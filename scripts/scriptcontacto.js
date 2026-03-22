        //OBSERVER CONTACTO
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal, .reveal-left').forEach(el => obs.observe(el));
        //EVENTO PARA ENVIAR CORREO DESDE FORM
        document.querySelector('.btn-send').addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const nombre = document.getElementById('nombre').value;
            const asunto = document.getElementById('asunto').value || 'Contacto web';
            const mensaje = document.getElementById('mensaje').value;
            if (!email) { alert('Por favor, introduce tu email.'); return; }
            const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
            window.location.href = `mailto:cuencamotor4x4@hotmail.com?subject=${encodeURIComponent(asunto)}&body=${body}`;
        });