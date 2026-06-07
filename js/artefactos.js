const tabla = document.getElementById("tabla-artefactos")

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {cargarTabla(this)}
xhttp.open("GET", "xml/artefactos.xml");
xhttp.send();

function cargarTabla(xml){
    const xmlDoc = xml.responseXML;
    const p = xmlDoc.getElementsByTagName("set")
    let filas =""
    for (let i = 0; i <p.length; i++) {
        filas += "<tr><td><img src='src/img/artefactos/" + 
    p[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + 
    "' alt='imagen de el set " +
    p[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
    "' width='50'></td><td>" +
    p[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
    "</td><td>" +
    p[i].getElementsByTagName("bonificacion-2")[0].childNodes[0].nodeValue +
    "</td><td>" +
    p[i].getElementsByTagName("bonificacion-4")[0].childNodes[0].nodeValue +
    "</td><td>" +
    p[i].getElementsByTagName("personajes-recomendados")[0].childNodes[0].nodeValue +
    "</td></tr>"
    }
    tabla.innerHTML = filas;
}