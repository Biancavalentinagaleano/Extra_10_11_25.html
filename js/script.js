// script.js - Funciones para todas las páginas

function pedirNombreYSaludar() {
  alert("Bienvenido/a a la página principal");
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre && nombre.trim().length > 0) {
    const span = document.getElementById('nombreUsuario');
    if (span) span.textContent = nombre;
    alert("¡Bienvenido/a, " + nombre + "!");
    localStorage.setItem("nombreUsuario", nombre);
  } else {
    alert("No ingresaste un nombre.");
  }
}

function pedirEdadYMostrar() {
  alert("Bienvenido/a a la galería");
  const edadRaw = prompt("Por favor, ingresa tu edad:");
  const edad = Number(edadRaw);
  if (!isNaN(edad) && edadRaw.trim() !== "") {
    const mensaje = edad > 20 ? "Eres mayor de 20 años." : "No eres mayor de 20 años.";
    alert(mensaje);
    const resultado = document.getElementById('edadResultado');
    if (resultado) resultado.textContent = mensaje;
  } else {
    alert("No ingresaste una edad válida.");
  }
}

function operMultiplicacion() {
  const a = Number(prompt("Primer número:"));
  const b = Number(prompt("Segundo número:"));
  if (!isNaN(a) && !isNaN(b)) alert("Resultado: " + (a * b));
  else alert("Valores inválidos.");
}

function operExponente2() {
  const a = Number(prompt("Número a elevar al cuadrado:"));
  if (!isNaN(a)) alert("Resultado: " + (a ** 2));
  else alert("Valor inválido.");
}

function operResta() {
  const a = Number(prompt("Minuendo (número 1):"));
  const b = Number(prompt("Sustraendo (número 2):"));
  if (!isNaN(a) && !isNaN(b)) alert("Resultado: " + (a - b));
  else alert("Valores inválidos.");
}

window.addEventListener("DOMContentLoaded", () => {
  const span = document.getElementById("nombreUsuario");
  const nombreGuardado = localStorage.getItem("nombreUsuario");
  if (span && nombreGuardado) span.textContent = nombreGuardado;

  const btnIniciar = document.getElementById("btnIniciar");
  const btnComprobar = document.getElementById("btnComprobarEdad");
  if (btnIniciar) btnIniciar.addEventListener("click", pedirNombreYSaludar);
  if (btnComprobar) btnComprobar.addEventListener("click", pedirEdadYMostrar);
});

