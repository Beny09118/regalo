// Obtener la referencia a cada carta
var cartas = document.querySelectorAll(".carta");

// Función para mostrar el mensaje cuando se pasa el cursor por encima de la carta
function mostrarMensaje(event) {
  event.target.querySelector(".mensaje").style.display = "block";
}

// Agregar eventos a cada carta
cartas.forEach(function(carta) {
  carta.addEventListener("mouseover", mostrarMensaje);
});

// Función para dispersar las cartas por toda la pantalla
function dispersarCartas() {
  var x = Math.random() * (window.innerWidth - 200);
  var y = Math.random() * (window.innerHeight - 300);
  cartas.forEach(function(carta) {
    carta.style.left = x + "px";
    carta.style.top = y + "px";
  });
}

// Llamar a la función para dispersar las cartas
dispersarCartas();

// Función para agrandar las cartas cuando se pasa el cursor por encima
function agrandarCarta(event) {
  event.target.style.transform = "scale(1.2)";
}

// Función para reducir las cartas cuando se pasa el cursor fuera
function reducirCarta(event) {
  event.target.style.transform = "";
}

// Agregar eventos a cada carta
cartas.forEach(function(carta) {
  carta.addEventListener("mouseover", agrandarCarta);
  carta.addEventListener("mouseout", reducirCarta);
});

document.getElementById('boton').addEventListener('click', function() {
  var audio = document.getElementById('miAudio');
  audio.play();
});