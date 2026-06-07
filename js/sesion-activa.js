const usuario = sessionStorage.getItem('usuario');
if (usuario) {
    document.getElementById('link-perfil').style.display = 'block';
}