const tabla = document.getElementById("tabla-armas")

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {cargarTabla(this)}
xhttp.open("GET", "xml/armas.xml");
xhttp.send();

let todosArmas = [];
function cargarTabla(xml){
    const xmlDoc = xml.responseXML;
    const a = xmlDoc.getElementsByTagName("arma")
    let filas =""
    for (let i = 0; i <a.length; i++) {
        filas += "<tr><td><img src='src/img/armas/" + 
        a[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + 
        "' alt='imagen de " +
        a[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
        "' width='50'></td><td>" +
        a[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
        "</td><td>" +
        a[i].getAttribute("tipo") + "</td><td>" +
        a[i].getAttribute("rareza") +
        "</td><td>" +
        a[i].getElementsByTagName("personajes-recomendados")[0].childNodes[0].nodeValue +
        "</td></tr>"
        todosArmas.push({
            imagen: a[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue,
            nombre: a[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue,
            tipo: a[i].getAttribute("tipo"),
            rareza:a[i].getAttribute("rareza"),
            personajes: a[i].getElementsByTagName("personajes-recomendados")[0].childNodes[0].nodeValue
        })
    }
    tabla.innerHTML = filas;
}

document.getElementById('mandoble').addEventListener('change', filtrar)
document.getElementById('lanza').addEventListener('change', filtrar)
document.getElementById('espadaligera').addEventListener('change', filtrar)
document.getElementById('arco').addEventListener('change', filtrar)
document.getElementById('catalizador').addEventListener('change', filtrar)
document.getElementById('rareza').addEventListener('change', filtrar)

function filtrar() {
    
    const tiposMarcados = [];
    if (document.getElementById('mandoble').checked) tiposMarcados.push('Mandoble')
    if (document.getElementById('lanza').checked) tiposMarcados.push('Lanza')
    if (document.getElementById('espadaligera').checked) tiposMarcados.push('Espada Ligera')
    if (document.getElementById('arco').checked) tiposMarcados.push('Arco')
    if (document.getElementById('catalizador').checked) tiposMarcados.push('Catalizador')

    const rareza = document.getElementById('rareza').value

    let armasFiltrados = [];
    for (let i = 0; i < todosArmas.length; i++) {
        const cumpleArma = tiposMarcados.length === 0 || tiposMarcados.includes(todosArmas[i].tipo)
        const cumpleRareza = rareza === "Todos" || todosArmas[i].rareza === rareza

        if (cumpleArma && cumpleRareza) {
            armasFiltrados.push(todosArmas[i])
        }
    }

    let filas = "";
    for (let i = 0; i < armasFiltrados.length; i++) {
        filas += "<tr><td><img src='src/img/armas/" + 
        armasFiltrados[i].imagen + 
        "' alt='imagen de " +
        armasFiltrados[i].nombre +
        "' width='50'></td><td>" +
        armasFiltrados[i].nombre +
        "</td><td>"+
        armasFiltrados[i].tipo+
        "</td><td>"+
        armasFiltrados[i].rareza+
        "</td><td>"+
        armasFiltrados[i].personajes+
        "</td></tr>"
    }
    tabla.innerHTML = filas
}
