// script.js - funciones comunes

// PÁGINA 1: pedir nombre y mostrar saludo en la página
function pedirNombreYSaludar() {
  alert("Bienvenido/a a la página principal");
  const nombre = prompt("¿Cuál es tu nombre?");
  if (nombre && nombre.trim().length>0) {
    // mostrar en el DOM si hay un elemento con id 'nombreUsuario'
    const span = document.getElementById('nombreUsuario');
    if (span) span.textContent = nombre;
    alert("¡Bienvenido/a, " + nombre + "!");
  } else {
    alert("No ingresaste un nombre.");
  }
}

// PÁGINA 2: pedir edad y evaluar si mayor a 20
function pedirEdadYMostrar() {
  alert("Bienvenido/a a la galería");
  const edadRaw = prompt("Por favor, ingresa tu edad:");
  const edad = Number(edadRaw);
  if (!isNaN(edad)) {
    if (edad > 20) {
      alert("Eres mayor de 20 años.");
      document.getElementById('edadResultado')?.textContent = "Eres mayor de 20 años.";
    } else {
      alert("No eres mayor de 20 años.");
      document.getElementById('edadResultado')?.textContent = "No eres mayor de 20 años.";
    }
  } else {
    alert("No ingresaste una edad válida.");
  }
}

/* PÁGINA 3: funciones para operaciones indicadas en la tabla.
   Cada función solicita los valores necesarios y hace alert con el resultado.
*/

// Multiplicación (2 números)
function operMultiplicacion() {
  alert("Multiplicación: ingresa los dos números");
  const a = Number(prompt("Primer número:"));
  const b = Number(prompt("Segundo número:"));
  if(!isNaN(a) && !isNaN(b)) alert("Resultado: " + (a * b));
  else alert("Valores inválidos.");
}

// Exponente al cuadrado (1 número)
function operExponente2() {
  alert("Exponente 2: ingresa un número");
  const a = Number(prompt("Número a elevar al cuadrado:"));
  if(!isNaN(a)) alert("Resultado: " + (a * a));
  else alert("Valor inválido.");
}

// Resta (2 números)
function operResta() {
  alert("Resta: ingresa los dos números");
  const a = Number(prompt("Minuendo (número 1):"));
  const b = Number(prompt("Sustraendo (número 2):"));
  if(!isNaN(a) && !isNaN(b)) alert("Resultado: " + (a - b));
  else alert("Valores inválidos.");
}

