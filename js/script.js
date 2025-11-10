// script.js — FUNCIONAL Y TESTEADO

// --- PÁGINA 1: PEDIR NOMBRE ---
function pedirNombreYSaludar() {
  alert("Bienvenido/a a la página principal");
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre && nombre.trim() !== "") {
    const span = document.getElementById("nombreUsuario");
    if (span) span.textContent = nombre;
    alert("¡Bienvenido/a, " + nombre + "!");
    localStorage.setItem("nombreUsuario", nombre);
  } else {
    alert("No ingresaste un nombre.");
  }
}

// --- PÁGINA 2: PEDIR EDAD ---
function pedirEdadYMostrar() {
  alert("Bienvenido/a a la galería");
  const edadTexto = prompt("Por favor, ingresa tu edad:");
  const edad = Number(edadTexto);
  if (!isNaN(edad) && edadTexto.trim() !== "") {
    const mensaje = edad > 20 ? "Eres mayor de 20 años." : "No eres mayor de 20 años.";
    alert(mensaje);
    const salida = document.getElementById("edadResultado");
    if (salida) salida.textContent = mensaje;
  } else {
    alert("Edad no válida.");
  }
}

// --- OPERACIONES DE LA TABLA ---
function operMultiplicacion() {
  const a = Number(prompt("Primer número:"));
  const b = Number(prompt("Segundo número:"));
  alert("Resultado: " + (a * b));
}

function operExponente2() {
  const a = Number(prompt("Número a elevar al cuadrado:"));
  alert("Resultado: " + (a ** 2));
}

function operResta() {
  const a = Number(prompt("Primer número (minuendo):"));
  const b = Number(prompt("Segundo número (sustraendo):"));
  alert("Resultado: " + (a - b));
}

// --- ASIGNAR BOTONES ---
window.onload = function() {
  console.log("script.js cargado correctamente ✅");

  const span = document.getElementById("nombreUsuario");
  const nombreGuardado = localStorage.getItem("nombreUsuario");
  if (span && nombreGuardado) span.textContent = nombreGuardado;

  const btnInicio = document.getElementById("btnIniciar");
  const btnEdad = document.getElementById("btnComprobarEdad");

  if (btnInicio) {
    btnInicio.onclick = pedirNombreYSaludar;
    console.log("Botón de inicio activado");
  }
  if (btnEdad) {
    btnEdad.onclick = pedirEdadYMostrar;
    console.log("Botón de comprobar edad activado");
  }
};



