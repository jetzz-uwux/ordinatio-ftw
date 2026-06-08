const btnEnviar = document.getElementById('btn-enviar');

btnEnviar.addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        document.getElementById('respuesta').innerHTML = 'Por favor llena todos los campos';
        return;
    }

    document.getElementById('respuesta').innerHTML = '¡Gracias ' + nombre + '! Tu mensaje fue enviado ✦';
});