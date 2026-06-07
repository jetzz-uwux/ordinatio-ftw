const tabla = document.getElementById("tabla-equipos")

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {cargarTabla(this)}
xhttp.open("GET", "xml/equipos.xml");
xhttp.send();

function cargarTabla(xml){
    const xmlDoc = xml.responseXML;
    const p = xmlDoc.getElementsByTagName("equipo")
    let filas =""
    for (let i = 0; i <p.length; i++) {
         const miembros = p[i].getElementsByTagName("miembro");
        let listaMiembros = "";
        for (let j = 0; j < miembros.length; j++) {
            listaMiembros += miembros[j].childNodes[0].nodeValue + " (" + miembros[j].getAttribute("rol") + ") ";
        }
        filas += "<tr><td>" +
        p[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
        "</td><td>" +
        p[i].getAttribute("tipo") + "</td><td>" +
        p[i].getAttribute("reaccion") +
        "</td><td>" +
        listaMiembros +"</td><td>"+p[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +
        "</td></tr>"
    }
    tabla.innerHTML = filas;
}
