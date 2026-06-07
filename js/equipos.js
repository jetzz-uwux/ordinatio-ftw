const tabla = document.getElementById("tabla-equipos")

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {cargarTabla(this)}
xhttp.open("GET", "xml/equipos.xml");
xhttp.send();

let todosEquipos = [];
function cargarTabla(xml){
    const xmlDoc = xml.responseXML;
    const e = xmlDoc.getElementsByTagName("equipo")
    let filas =""
    for (let i = 0; i <e.length; i++) {
         const miembros = e[i].getElementsByTagName("miembro");
        let listaMiembros = "";
        for (let j = 0; j < miembros.length; j++) {
            listaMiembros += miembros[j].childNodes[0].nodeValue + " (" + miembros[j].getAttribute("rol") + ") ";
        }
        todosEquipos.push({
            nombre: e[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue,
            tipo: e[i].getAttribute("tipo"),
            reaccion: e[i].getAttribute("reaccion"),
            personajes:listaMiembros,
            descripcion:e[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue
        })

        filas += "<tr><td>" +
        e[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
        "</td><td>" +
        e[i].getAttribute("tipo") + "</td><td>" +
        e[i].getAttribute("reaccion") +
        "</td><td>" +
        listaMiembros +"</td><td>"+
        e[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue +
        "</td></tr>"

        
    }
    tabla.innerHTML = filas;
}


document.getElementById('tipo').addEventListener('change', filtrar)
document.getElementById('reaccion').addEventListener('change', filtrar)

function filtrar() {
    const tipo = document.getElementById('tipo').value;
    const reaccion = document.getElementById('reaccion').value;

    let equiposFiltrados = [];
    for (let i = 0; i < todosEquipos.length; i++) {
        const cumpleTipo = tipo === "default" || todosEquipos[i].tipo === tipo
        const cumpleReaccion = reaccion === "default" || todosEquipos[i].reaccion === reaccion

        if (cumpleTipo && cumpleReaccion) {
            equiposFiltrados.push(todosEquipos[i])
        }
    }

    let filas =""
    for (let i = 0; i < equiposFiltrados.length; i++) {
        filas += "<tr><td>" +
        equiposFiltrados[i].nombre +
        "</td><td>"+
        equiposFiltrados[i].tipo+
        "</td><td>"+
        equiposFiltrados[i].reaccion+
        "</td><td>"+
        equiposFiltrados[i].personajes+
        "</td><td>"+
        equiposFiltrados[i].descripcion+
        "</td></tr>"
    }
    tabla.innerHTML = filas
}