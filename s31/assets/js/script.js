// Reto 1
/*
prompt() Es una funcion que permite ingresar datos por el navegador y almacenarlos en una variable o usarlos directamente.

prompt("Mensaje a mostrar");

Los datos en prompt siempre se guardan como strings por defecto.

Para convertir a number, envolvemos prompt() en
  - parseInt() para enteros
  - parseFloat() para decimales
*/

// let name = prompt("Ingresa tu nombre");
// console.log(`Buenas noches ${name}`);
// let num1 = parseInt(prompt("Ingresa un numero"));
// let num2 = parseInt(prompt("Ingresa otro numero"));

// console.log(`${num1} + ${num2} = ${num1 + num2}`);

// RETO
// Crea un programa que pida un numero entero al usuario e indique si este numero es par o no.
let num = parseInt(prompt("Ingresa un numero"));

if (num % 2 === 0) {
  console.log(`${num} es par.`);
} else {
  console.log(`${num} es impar.`);
}
