document.getElementById('nombre-usuario').textContent = sessionStorage.getItem('usuario');

function cerrarSesion() {
    window.location.href = 'login.html';
}