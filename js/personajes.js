const tabla = document.getElementById("tabla-personajes")

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {cargarTabla(this)}
xhttp.open("GET", "xml/personajes.xml");
xhttp.send();

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
    }
    tabla.innerHTML = filas;
}
