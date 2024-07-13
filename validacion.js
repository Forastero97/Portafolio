document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const asunto = form.asunto.value.trim();
        const mensaje = form.mensaje.value.trim();

        if (!nombre || !email || !asunto || !mensaje) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingrese un email válido.');
            return;
        }

        // Aquí puedes añadir la lógica para enviar el formulario
        alert('Mensaje enviado correctamente.');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
