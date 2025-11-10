// script.js - funciones comunes

// =====================================
// PÁGINA 1: pedir nombre y mostrar saludo en la página
// =====================================
function pedirNombreYSaludar() {
  alert("Bienvenido/a a la página principal");

  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre && nombre.trim().length > 0) {
    // mostrar en el DOM si hay un elemento con id 'nombreUsuario'
    const span = document.getElementById('nombreUsuario');
    if (span) span.textContent = nombre;
    alert("¡Bienvenido/a, " + nombre + "!");

    // guarda el nombre en localStorage (para que se mantenga en otras páginas)
    localStorage.setItem("nombreUsuario", nombre);
  } else {
    alert("No ingresaste un nombre.");
  }
}

// =====================================
// PÁGINA 2: pedir edad y evaluar si mayor a 20
// =====================================
function pedirEdadYMostrar() {
  alert("Bienvenido/a a la galería");

  const edadRaw = prompt("Por favor, ingresa tu edad:");
  const edad = Number(edadRaw);

  if (!isNaN(edad) && edadRaw.trim() !== "") {
    let mensaje;
    if (edad > 20) {
      mensaje = "Eres mayor de 20 años.";
    } else {
      mensaje = "No eres mayor de 20 años.";
    }

    alert(mensaje);
    // Mostrar resultado en el HTML si existe el elemento
    const resultado = document.getElementById('edadResultado');
    if (resultado) resultado.textContent = mensaje;
  } else {
    alert("No ingresaste una edad válida.");
  }
}

// =====================================
// PÁGINA 3: funciones para operaciones indicadas en la tabla.
// Cada función solicita los valores necesarios y hace alert con el resultado.
// =====================================

// Multiplicación (2 números)
function operMultiplicacion() {
  alert("Multiplicación: ingresa los dos números");
  const a = Number(prompt("Primer número:"));
  const b = Number(prompt("Segundo número:"));
  if (!isNaN(a) && !isNaN(b)) {
    alert("Resultado: " + (a * b));
  } else {
    alert("Valores inválidos.");
  }
}

// Exponente al cuadrado (1 número)
function operExponente2() {
  alert("Exponente 2: ingresa un número");
  const a = Number(prompt("Número a elevar al cuadrado:"));
  if (!isNaN(a)) {
    alert("Resultado: " + (a ** 2));
  } else {
    alert("Valor inválido.");
  }
}

// Resta (2 números)
function operResta() {
  alert("Resta: ingresa los dos números");
  const a = Number(prompt("Minuendo (número 1):"));
  const b = Number(prompt("Sustraendo (número 2):"));
  if (!isNaN(a) && !isNaN(b)) {
    alert("Resultado: " + (a - b));
  } else {
    alert("Valores inválidos.");
  }
}

// =====================================
// FUNCIONES AUXILIARES: mostrar nombre guardado al cargar (solo si existe)
// =====================================
window.addEventListener("DOMContentLoaded", () => {
  const span = document.getElementById("nombreUsuario");
  const nombreGuardado = localStorage.getItem("nombreUsuario");
  if (span && nombreGuardado) {
    span.textContent = nombreGuardado;
  }
});

