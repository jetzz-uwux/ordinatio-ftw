const login = document.getElementById("btn-login")

login.addEventListener('click',iniciarsesion)

function iniciarsesion(){
    
    const correo = document.getElementById('usuario').value
    const password = document.getElementById('password').value
    const xhttp = new XMLHttpRequest();
    
    let encontrado = false;
    
    xhttp.onload = function() {
        
        const xmlDoc = xhttp.responseXML
        const usuarios = xmlDoc.getElementsByTagName("usuario")
        
        for (let i = 0; i<usuarios.length; i++){
            const correoXML = usuarios[i].getElementsByTagName('correo')[0].textContent
            const passwordXML = usuarios[i].getElementsByTagName('password')[0].textContent
            if (correo === correoXML && password === passwordXML) {
                encontrado = true;
                window.location.href = 'perfil.html'
            }
        }
        if (!encontrado) {
            document.getElementById('error-login').innerHTML = 'Usuario o contraseña incorrectos'
        }
    }
    xhttp.open("GET", "xml/usuarios.xml")
    xhttp.send()
}

// Check de mostrar contraseña
const checkcontrasena = document.getElementById("passwordmostrar")

checkcontrasena.addEventListener('change', mostrarContraseña)

function mostrarContraseña(){

    const campo = document.getElementById('password')
    if (checkcontrasena.checked){
        campo.type = 'text'
    }
    else{
        campo.type = 'password'
    }
}