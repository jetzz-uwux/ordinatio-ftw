const tabla = document.getElementById("tabla-armas")

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {cargarTabla(this)}
xhttp.open("GET", "xml/armas.xml");
xhttp.send();

function cargarTabla(xml){
    const xmlDoc = xml.responseXML;
    const p = xmlDoc.getElementsByTagName("arma")
    let filas =""
    for (let i = 0; i <p.length; i++) {
        filas += "<tr><td><img src='src/img/armas/" + 
    p[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + 
    "' alt='imagen de " +
    p[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
    "' width='50'></td><td>" +
    p[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
    "</td><td>" +
    p[i].getAttribute("tipo") + "</td><td>" +
    p[i].getAttribute("rareza") +
    "</td><td>" +
    p[i].getElementsByTagName("personajes-recomendados")[0].childNodes[0].nodeValue +
    "</td></tr>"
    }
    tabla.innerHTML = filas;
}
