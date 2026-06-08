document.getElementById('nombre-usuario').textContent = sessionStorage.getItem('usuario');

function cerrarSesion() {
    sessionStorage.removeItem('usuario');
    window.location.href = 'login.html';
}