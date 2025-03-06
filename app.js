// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, escribe un nombre antes de añadir.");
        return;
    }
    
    // Agregamos el nombre al array
    amigos.push(nombre);
    
    // Creamos un elemento li y lo agregamos a la lista en el DOM
    const li = document.createElement('li');
    li.textContent = nombre;
    document.getElementById('listaAmigos').appendChild(li);
    
    // Limpiamos el campo de entrada y devolvemos el foco
    input.value = "";
    input.focus();
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    // Verificar que existan al menos dos amigos
    if (amigos.length < 2) {
        alert("Se necesita al menos dos amigos para realizar el sorteo.");
        return;
    }
    
    // Hacemos una copia del array de amigos y lo mezclamos aleatoriamente
    const mezclados = shuffleArray(amigos.slice());
    
    // Limpiar resultados previos
    const listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = "";
    
    // Crear los pares: cada amigo saca al siguiente de la lista y el último saca al primero
    for (let i = 0; i < mezclados.length; i++) {
        const amigo = mezclados[i];
        const amigoSecreto = mezclados[(i + 1) % mezclados.length];
        
        const li = document.createElement('li');
        li.textContent = `${amigo} saca a ${amigoSecreto}`;
        listaResultados.appendChild(li);
    }
}

// Función auxiliar para mezclar un array de forma aleatoria (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}