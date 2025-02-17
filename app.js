
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
        agregarAmigoEnArray();
    }
    // se encarga de imprimir la lista en UL cada vez que se agrera un nombre
    imprimirListaAmigos();


}

function agregarAmigoEnArray() {
    listaAmigos.innerText = "";
    let nombre = document.getElementById("amigo").value;
    amigos.push(nombre);
    document.getElementById("amigo").value = "";
}

function imprimirListaAmigos() {
    // recorre el array para imprimirlo el ul , creando nuevas li para cada nombre
    const listaAmigos = document.getElementById('listaAmigos');
     amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;  // Asigna el valor del amigo al texto del li
        listaAmigos.appendChild(li);  // Añade el li a la lista en html
    });
}

function sortearAmigo() {

    if (amigos.length === "") {
        alert("Debes de ingresar al menos un amigo ");

    } else {

        const lista = document.getElementById("resultado");
        const li = document.createElement('li');
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let ganador = amigos[numeroAleatorio];
        console.log(ganador);

        li.textContent = `El amigo secrteto elegido es 🏆 : ${ganador}`;
        lista.appendChild(li);
        document
        document.getElementsByClassName("button-add")[0].disabled = true;
        document.getElementsByClassName("button-draw")[0].disabled = true;
    }


}