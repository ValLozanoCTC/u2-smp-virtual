/*
Función -> Es un bloque de código reutilizable que puede tomar valores para transformarlos. Además también puede retornar algún valor.

Sintaxis básica:

function nombreFuncion() {
  // Código de mi función
  // Todo este codigo se ejecutará cada vez que yo "llame" a mi función
}

Dato importante: Lo mas recomendable para nombrar funciones, es hacerlo con verbos descriptivos en infinitivo
*/

console.log("FUNCIONES");
// Ejemplo básico: Escribe un saludo, muestra un numero y muestra tu nombre;

// Definir una función
function mostrarMensajes() {
  // Codigo de la funcion
  console.log("Inicio")
  console.log("Buenas noches");
  console.log(8);
  console.log("Valeria");
  console.log("Fin");
}

// Llamar a la función, NO OLVIDES LOS ()
// console.log("LLAMADA #1");
// mostrarMensajes();  // Con la llamada se ejecuta su codigo
// console.log("LLAMADA #2");
// mostrarMensajes();
// console.log("LLAMADA #3");
// mostrarMensajes();
// console.log("LLAMADA #4");
// mostrarMensajes();
// console.log("LLAMADA #5");
// mostrarMensajes();

// Reto 1: Crea una function que imprima los numeros del 1 al 10 (1 por 1)
console.log("Reto 1");

// Definimos la funcion
function showNumbers() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
  console.log(10);
}

// Llamamos a la funcion
// showNumbers();
// showNumbers();

/*
Parametros -> Son valores que son pasados a la funcion para que esta los pueda usar, transformar, modificar, operar, etc.

Los parametros van dentro de los parentesis, en este caso serian a y b. El nombre que le das a los parametros es el que usaras dentro de la funcion.

function nombreFuncion(a, b) {
  // Código de mi función
  // Dentro de mi funcion podria hacer cosas con a y b
}

Los parametros son posicionales
*/

// Ejemplo
// Crear una funcion que toma dos numeros y muestre su suma
// Scope -> Alcance, hace referencia a un bloque de codigo donde una variable puede ser usada.

function addTwoNumbers(x, y) {
  console.log(`Primer parametro: ${x}`);
  console.log(`Segundo parametro: ${y}`);

  let result = x + y;

  console.log(`El resultado de ${x} + ${y} = ${result}`);
}

// Llamada a la funcion con parametros
// addTwoNumbers(266, 14);

let num1 = 14;
let num2 = 25;

// Cuando pasas los valores de los parametros, estos se llaman argumentos
// addTwoNumbers(num1, num2);

console.log("RETORNO DE VALORES")
// Retorno de valores -> Es la caracteristica que tiene una funcion de retornar un valor al finalizar su ejecucion. Ese valor puede ser almacenado en una variable o usado directamente.

// Ejemplo
// Crear una funcion que reciba como parametro un nombre y muestre un mensaje de saludo

function greet(targetName) {
  let message = `Hola ${targetName}, espero tengas un buen día.`;
  // Retorno de un dato
  return message;
}

let name = 'Valeria';
// Llamada a la funcion, al retornar un valor, podemos almacenarlo
let greetMessage = greet(name);
// Y luego usamos ese dato almacenado
console.log(greetMessage);

// O tambien podemos usar el valor de retorno directamente
console.log(greet(name));

console.log("ARROW FUNCTIONS")
// Arrow functions (Funciones de flecha) -> Son una sintaxis distinta para escribir funciones, fueron introducidas en ECMAScript6. Se llaman asi por el simbolo de =>
// Funcion anonima

let value1 = 14;
let value2 = 2;

let multiplyTwoNumbers = (a, b) => {
  console.log(`Factor 1 -> ${a}`);
  console.log(`Factor 2 -> ${b}`);

  let result = a*b;
  let message = `${a} x ${b} = ${result}`;

  return message;
};

console.log(multiplyTwoNumbers(value1, value2));

/*
function multiplyTwoNumbers(a, b) {
  console.log(`Factor 1 -> ${a}`);
  console.log(`Factor 2 -> ${b}`);

  let result = a*b;
  let message = `${a} x ${b} = ${result}`;

  return message;
}

console.log(multiplyTwoNumbers(value1, value2));

// Arrow function de una linea

let multiplyTwoNumbers = (a, b) => a*b;
*/

let word = "Holaa";
let age = 24;

// obj.method()
console.log(word.toUpperCase());
console.log(age.toUpperCase());