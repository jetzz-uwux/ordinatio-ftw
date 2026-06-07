const tabla = document.getElementById("tabla-personajes")

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {cargarTabla(this)}
xhttp.open("GET", "xml/personajes.xml");
xhttp.send();

let todosPersonajes = [];
function cargarTabla(xml){
    const xmlDoc = xml.responseXML;
    const p = xmlDoc.getElementsByTagName("personaje")
    let filas =""
    for (let i = 0; i <p.length; i++) {
        filas += "<tr><td><img src='src/img/personajes/" + 
        p[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + 
        "' alt='imagen de " +
        p[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
        "' width='50'></td><td>" +
        p[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
        "</td><td>" +
        p[i].getAttribute("elemento") + "</td><td>" + 
        p[i].getElementsByTagName("rareza")[0].childNodes[0].nodeValue +
        "</td><td>" +
        p[i].getElementsByTagName("rol")[0].childNodes[0].nodeValue +
        "</td><td>" +
        p[i].getElementsByTagName("tipo-arma")[0].childNodes[0].nodeValue +
        "</td><td>"+ 
        p[i].getAttribute("region") + "</td><td>" +
        p[i].getElementsByTagName("afiliacion")[0].childNodes[0].nodeValue +
        "</td><td>"+
        p[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +
        "</td></tr>"
        todosPersonajes.push({
            imagen: p[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue,
            nombre: p[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue,
            elemento: p[i].getAttribute("elemento"),
            rareza: p[i].getElementsByTagName("rareza")[0].childNodes[0].nodeValue,
            rol: p[i].getElementsByTagName("rol")[0].childNodes[0].nodeValue,
            tipoArma: p[i].getElementsByTagName("tipo-arma")[0].childNodes[0].nodeValue,
            region: p[i].getAttribute("region"),
            afiliacion: p[i].getElementsByTagName("afiliacion")[0].childNodes[0].nodeValue,
            descripcion: p[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue
        })
    }
    tabla.innerHTML = filas
}
// Filtrado por elemento y arma
document.getElementById('pyro').addEventListener('change', filtrar)
document.getElementById('cryo').addEventListener('change', filtrar)
document.getElementById('anemo').addEventListener('change', filtrar)
document.getElementById('electro').addEventListener('change', filtrar)
document.getElementById('hydro').addEventListener('change', filtrar)
document.getElementById('geo').addEventListener('change', filtrar)
document.getElementById('dendro').addEventListener('change', filtrar)
document.getElementById('mandoble').addEventListener('change', filtrar)
document.getElementById('lanza').addEventListener('change', filtrar)
document.getElementById('espadaligera').addEventListener('change', filtrar)
document.getElementById('arco').addEventListener('change', filtrar)
document.getElementById('catalizador').addEventListener('change', filtrar)
document.getElementById('rareza').addEventListener('change', filtrar)


function filtrar() {
    const elementosMarcados = [];

    if (document.getElementById('pyro').checked) elementosMarcados.push('Pyro')
    if (document.getElementById('cryo').checked) elementosMarcados.push('Cryo')
    if (document.getElementById('anemo').checked) elementosMarcados.push('Anemo')
    if (document.getElementById('electro').checked) elementosMarcados.push('Electro')
    if (document.getElementById('hydro').checked) elementosMarcados.push('Hydro')
    if (document.getElementById('geo').checked) elementosMarcados.push('Geo')
    if (document.getElementById('dendro').checked) elementosMarcados.push('Dendro')
    
    const tiposMarcados = [];
    if (document.getElementById('mandoble').checked) tiposMarcados.push('Mandoble');
    if (document.getElementById('lanza').checked) tiposMarcados.push('Lanza');
    if (document.getElementById('espadaligera').checked) tiposMarcados.push('Espada Ligera');
    if (document.getElementById('arco').checked) tiposMarcados.push('Arco');
    if (document.getElementById('catalizador').checked) tiposMarcados.push('Catalizador');

    const rareza = document.getElementById('rareza').value;

    let personajesFiltrados = [];
    for (let i = 0; i < todosPersonajes.length; i++) {
        const cumpleElemento = elementosMarcados.length === 0 || elementosMarcados.includes(todosPersonajes[i].elemento);
        const cumpleArma = tiposMarcados.length === 0 || tiposMarcados.includes(todosPersonajes[i].tipoArma);
        const cumpleRareza = rareza === "Todos" || todosPersonajes[i].rareza === rareza

        if (cumpleElemento && cumpleArma && cumpleRareza) {
            personajesFiltrados.push(todosPersonajes[i])
        }
    }

    let filas = "";
    for (let i = 0; i < personajesFiltrados.length; i++) {
        filas += "<tr><td><img src='src/img/personajes/" + 
        personajesFiltrados[i].imagen + 
        "' alt='imagen de " +
        personajesFiltrados[i].nombre +
        "' width='50'></td><td>" +
        personajesFiltrados[i].nombre +
        "</td><td>" +
        personajesFiltrados[i].elemento +
        "</td><td>"+
        personajesFiltrados[i].rareza+
        "</td><td>"+
        personajesFiltrados[i].rol+
        "</td><td>"+
        personajesFiltrados[i].tipoArma+
        "</td><td>"+
        personajesFiltrados[i].region+
        "</td><td>"+
        personajesFiltrados[i].afiliacion+
        "</td><td>"+
        personajesFiltrados[i].descripcion+
        "</td></tr>"
    }
    tabla.innerHTML = filas
}
