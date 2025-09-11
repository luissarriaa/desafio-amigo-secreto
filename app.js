let amigos = [];

function agregarAmigo() {
   let amigo = document.getElementById("amigo").value;
   if (amigo === "") {
       alert("Por favor, inserte un nombre.");
   } else {
       amigos.push(amigo);
       limpiarListado();
       limpiarCaja();
       listaAmigos();
   }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}
function limpiarListado(){
    document.getElementById("listaAmigos").innerHTML = "";
}

function listaAmigos(){
    let listado= document.getElementById("listaAmigos");
    for (let i = 0; i < amigos.length; i++) {
        listado.innerHTML += `<li> ${amigos[i]} </li>`;
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista para sortear.";
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `El amigo elegido es: ${amigos[indice]}`;
}
