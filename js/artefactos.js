const tabla = document.getElementById("tabla-artefactos")

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {cargarTabla(this)}
xhttp.open("GET", "xml/artefactos.xml");
xhttp.send();

let todosArtefactos = [];
function cargarTabla(xml){
    const xmlDoc = xml.responseXML;
    const a = xmlDoc.getElementsByTagName("set")
    let filas =""
    for (let i = 0; i <a.length; i++) {
        filas += "<tr><td><img src='src/img/artefactos/" + 
        a[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + 
        "' alt='imagen de el set " +
        a[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
        "' width='50'></td><td>" +
        a[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
        "</td><td>" +
        a[i].getElementsByTagName("bonificacion-2")[0].childNodes[0].nodeValue +
        "</td><td>" +
        a[i].getElementsByTagName("bonificacion-4")[0].childNodes[0].nodeValue +
        "</td><td>" +
        a[i].getElementsByTagName("personajes-recomendados")[0].childNodes[0].nodeValue +
        "</td></tr>"
        todosArtefactos.push({
            imagen:a[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue,
            nombre:a[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue,
            piezas2:a[i].getElementsByTagName("bonificacion-2")[0].childNodes[0].nodeValue,
            piezas4:a[i].getElementsByTagName("bonificacion-4")[0].childNodes[0].nodeValue,
            personajes: a[i].getElementsByTagName("personajes-recomendados")[0].childNodes[0].nodeValue
        })
    }
    tabla.innerHTML = filas;
}

document.getElementById('buscar-artefacto').addEventListener('input', filtrar)

function filtrar() {
    const busqueda = document.getElementById('buscar-artefacto').value.toLowerCase()

    let artefactosFiltrados = [];
    for (let i = 0; i < todosArtefactos.length; i++) {
        if (todosArtefactos[i].nombre.toLowerCase().includes(busqueda)) {
            artefactosFiltrados.push(todosArtefactos[i])
        }
    }

    let filas = "";
    for (let i = 0; i < artefactosFiltrados.length; i++) {
        filas += "<tr><td><img src='src/img/artefactos/" + 
        artefactosFiltrados[i].imagen + 
        "' alt='imagen de " +
        artefactosFiltrados[i].nombre +
        "' width='50'></td><td>" +
        artefactosFiltrados[i].nombre +
        "</td><td>"+
        artefactosFiltrados[i].piezas2+
        "</td><td>"+
        artefactosFiltrados[i].piezas4+
        "</td><td>"+
        artefactosFiltrados[i].personajes+
        "</td></tr>"
    }
    tabla.innerHTML = filas

}