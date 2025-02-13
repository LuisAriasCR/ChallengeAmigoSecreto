
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];




// Esta funcion guarda en un array los nombres ingresados, validando si el espacio esta en blanco antes de ejecutar
function agregarAmigo() {

    let imput = document.getElementById("amigo").value;

    if (imput.length === 0) {

     alert("Debes ingresar el nombre de tu amigo");
     //se limpia ul para evitar doble impresíon en pantalla
     listaAmigos.innerText = "";
    } else {
        listaAmigos.innerText = "";
        let nombre = document.getElementById("amigo").value;
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
    }
    // se encarga de imprimir la lista en UL cada vez que se agrera un nombre
    imprimirListaAmigos();

}

function imprimirListaAmigos() {
    // recorre el array para imprimirlo el ul , creando nuevas li para cada nombre
    const listaAmigos = document.getElementById('listaAmigos');

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;  // Asigna el valor del amigo al texto del li
        listaAmigos.appendChild(li);  // Añade el li a la lista
    });
}