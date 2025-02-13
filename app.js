
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];




function agregarAmigo(){
    
    let imput = document.getElementById("amigo").value;

    if(imput.length === 0){

    alert("Debes ingresar el nombre de tu amigo");

    }else{
        
        let nombre = document.getElementById("amigo");
    amigos.push(nombre);
    console.log(amigos);
    document.getElementById("amigo").value = "";

    }

}
