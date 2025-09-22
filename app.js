// El principal objetivo de este desafío
//  es fortalecer tus habilidades
//  en lógica de programación.
//  Aquí deberás desarrollar la lógica
//  para resolver el problema.

// Array donde se almacenan los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Mostrar la lista actualizada
  mostrarLista();

  // Limpiar el campo de texto
  input.value = "";
}

// Función para mostrar la lista en el HTML
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar lista previa

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista. Agrega al menos uno antes de sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <b>${amigoSorteado}</b></li>`;
}
