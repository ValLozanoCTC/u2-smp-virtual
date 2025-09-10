/*
Arrays -> Los arrays (o arreglos) son una estructura de datos, las estructuras de datos se llaman asi porque permiten almacenar mas de un dato. Existen muchas estructuras de datos, cada una tiene un proposito.

Pueden almacenar datos de distinto tipo. Los datos almacenados los llamamos "elementos", y estos tienen un orden especifico.

Un array es: Ordenado, indexable e iterable.

Sintaxis:

let nombreArray = [1, 'hola', true, variable];

1. Empieza declarando una variable.
2. El "valor" o conjunto de valores que toma debe estar encerrado en corchetes [].
3. Dentro de los corchetes ponemos los elementos del array, separando cada uno con una coma.
*/

// Crea un arreglo que guarde los numeros del 1 al 10.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Mostrar el arreglo
// console.log(numbers);

// Al igual que con una string, podemos acceder a los elementos por indice, ademas de obtener el tamaño (length) de un array
// console.log(`El tamaño del array es ${numbers.length}`);
// console.log(`Primer elemento del arreglo: ${numbers[0]}`);
// console.log(`Último elemento del arreglo: ${numbers[numbers.length - 1]}`);

// Reto 1
// Crea un arreglo que almacene nombres de frutas, luego de crearlo lo muestras en consola. Minimo 4 elementos.
let fruits = ['pera', 'manzana', 'mango', 'uva'];
// console.log(fruits);

// ===================================================
let num1 = 18;
// console.log(num1);

// Aumentando el valor de num1 en 1
// En palabras humanas: num1 tu nuevo valor ahora será el valor que tienes actualmente + 1
num1 = num1 + 1;
// console.log(num1);

/*
Podemos reducir este tipo de expresiones de la siguiente manera

a = a + 1 ES LO MISMO QUE a += 1
*/
num1 += 5;
// console.log(num1);

// Tambien funciona con restas y las otras 2 operaciones basicas
num1 -= 1;
// console.log(num1);

// Si el valor de suma o resta es 1 se puede reducir a variable++
// Operador de incremento
num1++;
// console.log(num1);

num1++;
// console.log(num1);

// Operador de decremento
num1--;
// console.log(num1);

num1--;
// console.log(num1);

// ===================================================
/*
Bucles o Loops - Estructuras de repetición, repiten un bloque de codigo una cantidad finita o infinita de veces.

For -> Bucle finito en JavaScript

Sintaxis:

for (expresion inicial; expresion condicional; expresion de actualizacion) {
  // Codigo a repetir
}

expresion inicial -> Las condiciones de inicio, declaras una variable (i) con su valor inicial.
expresion condicional -> Las condiciones que debe cumplir esa variable para que el bucle se siga repitiendo.
expresion de actualizacion -> La forma en la que la variable se va actualizando, ya sea aumentando o disminuyendo.

Ejemplo:

for (let i = 1; i <= 10; i++) {
  // Codigo del bucle
}

let i = 1 -> Expresion inicial, declaramos una variable i con el valor 1.
i <= 10 -> Expresion condicional, indica que el bucle se repetirá mientras el valor de i sea menor o igual que 10. Es decir mientras que i <= 10 sea true.
i++ -> Significa que la variable i aumentará su valor de 1 en 1.
*/

/*
console.log("EMPIEZA EL BUCLE");

for (let i = 1; i <= 10; i++) {
  console.log("EMPIEZA UNA ITERACION");
  console.log(`Valor de i = ${i}`);
  console.log("HOLA");
  console.log("FIN DE LA ITERACION (i se actualiza)");
  console.log("---------------------");
}

console.log("TERMINA EL BUCLE");
*/

// // Imprime los numeros del 1 al 50, de 1 en 1
// console.log("NUMEROS DEL 1 AL 50");

// // Creo el bucle
// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// Imprime los numeros del 10 al 100, de 10 en 10
// console.log("NUMEROS DEL 10 AL 100, DE 10 EN 10");

// // Creo el bucle
// for (let i = 10; i <= 100; i += 10) {
//   console.log(i);
// }

// Reto 1
// Muestra los numeros del 0 al 26, de 3 en 3.
// console.log("NUMEROS DEL 0 AL 26, DE 3 EN 3");

// for (let i = 0; i <= 26; i += 3) {
//   console.log(i);
// }

// También podemos hacer conteos con negativos, decimales, inversos y disminuyendo
// console.log("NUMEROS DEL 10 al -10, de 2 en 2");

/*
// ESTO DA UN ERROR DE BUCLE INFINITO, NO HACER, PUEDE HACER NUESTRA COMPUTADORA Y NAVEGADOR MUY LENTOS
for (let i = 1; i <= 10; i--) {
  console.log(i);
}
*/

// for (let i = 10.5; i >= -9.5; i -= 2) {
//   console.log(i);
// }

/*
Bucle while, es un bucle infinito en JavaScript, los bucles infinitos se llaman asi porque no tienen un numero predeterminado de repeticiones, como lo hace for. Tambien sigue la consigna de repetir el bucle mientras se cumpla una condicion. Puede ser interrumpido de manera dinamica.

Sintaxis:

while (condicion) {
  // Codigo a repetir
}

While evalua la condicion antes de ejecutar el codigo por primera vez

Ejemplo 1: Contando del 1 al 10, de 1 en 1

// Con for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/
// console.log("NUMEROS DEL 1 AL 10");

// Declaramos un iterador
let iterator = 12;

// Creamos while con la condicion
while (iterator <= 10) {
  // Mostramos el numero
  console.log(iterator);
  // Al final, aumentamos nuestro iterador
  iterator++;
}

// Reto: Mostrar los numeros del 15 al 75, de 5 en 5. Con bucle while.

/*
do... while -> Es un bucle infinito muy parecido a while, la diferencia es que este si o si, siempre ejecuta el codigo al menos una vez y luego empieza a evaluar la condicion.

Sintaxis:

do {
  // Codigo del bucle
} while (condicion);
*/

// iterator = 15;

// do {
//   // Mostramos el numero
//   console.log(iterator);
//   // Al final, aumentamos nuestro iterador
//   iterator++;
// } while (iterator <= 10)

// No importa si no se cumple la condicion, de todas formas se ejecuta al menos una vez

// ===========================
/*
Iterar -> Recorrer

Por eso si decimos que algo es iterable, significa que se puede recorrer sus elementos.
*/

console.log("Iterar un arreglo")

let words = ["hola", "conejo", "agua", "pantalla", "saludo", "arroz"];
console.log(words);

// Indice de inicio -> 0
// Indice final -> array.length - 1
// Actualizacion de los indices -> 1 en 1

// i <= words.length - 1 es igual a i < words.length

// Iterar sobre el arreglo words
for (let i = 0; i < words.length; i++) {
  // console.log(i);
  // console.log(words[i]); // Usamos i como indice
}

console.log("INVERTIR ARREGLO")

// INVERTIR UN ARREGLO
let auxWords = [];

for (let i = words.length - 1; i >= 0; i--) {
  // console.log(words[i])
  auxWords.push(words[i]);
};

console.log(auxWords);
