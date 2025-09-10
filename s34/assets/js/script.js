// Metodos de arrays
let fruits = ["manzana", "naranja", "pera"];
console.log(fruits);

console.log("push");
// push(x) -> Agrega el elemento x al final del arreglo.
fruits.push("uva");

// Verificamos
console.log(fruits);

console.log("pop");
// pop(x) -> Quita el ultimo elemento del arreglo y lo retorna.
let lastItem = fruits.pop();
console.log(fruits);

console.log("unshift");
// unshift(x) -> Agrega el elemento x al inicio del arreglo.
fruits.unshift("mango");
console.log(fruits);

console.log("shift");
// shift(x) -> Quita el primer elemento del arreglo y lo retorna.
fruits.shift();
console.log(fruits);

console.log("includes");
// includes(x) -> Verifica si el array contiene el elemento x. Retorna un booleano.
console.log(fruits.includes("naranja")); // true
console.log(fruits.includes("fresa")); // false

console.log("indexOf");
// indexOf(x) -> Retorna el indice del elemento x en el arreglo. Si no lo encuentra, retorna -1.
console.log(fruits.indexOf("naranja"));
console.log(fruits.indexOf("pera"));
console.log(fruits.indexOf("arándano"));

console.log("join");
// join() -> Junta los elementos de un arreglo en una string. Por defecto usa el caracter de coma (,) y opcionalmente se le puede indicar el caracter con el que quieras juntar los elementos.
let fruitsString = fruits.join();
console.log(fruitsString);

// Indicamos otro caracter
console.log(fruits.join(".")); // Con punto
console.log(fruits.join("-")); // Con guion al medio
console.log(fruits.join(" ")); // Con espacio
console.log(fruits.join("")); // Sin ningun caracter (todo junto)

// VUELVE TODO A STRING
let randomArray = ["hola", 12, 34.5, true, "palabra"];
console.log(randomArray.join());

console.log("========================");
// Recalcando el arreglo
fruits = ["manzana", "naranja", "pera", "banana", "uva", "fresa"];
console.log("ARREGLO ORIGNAL");
console.log(fruits);

console.log("slice");
// slice(inicio, fin) -> Retorna una COPIA del arreglo original. Cortando desde el indice de "inicio" indicado. Opcionalmente se le indica un indice de "fin" y este es exclusivo. Osea que no toma el elemento con el indice fin, sino el anterior.

// Corta desde el indice 3 hasta el final
let slicedFruits = fruits.slice(3);
console.log(slicedFruits); // Nuevo arreglo generado

// Agregando un argumento de fin
console.log(fruits.slice(1, 4));

fruits = ["manzana", "naranja", "pera", "banana", "uva", "fresa"];

console.log("splice");
// splice(inicio, cantidad, elementos nuevos...) -> Modifica el ARREGLO ORIGINAL. Solo el argumento de inicio es obligatorio. Toma los elementos hastas "inicio", elimina la "cantidad" de elementos indicada y por ultimo agrega los "elementos nuevos" indicados desde esa posicion

// fruits.splice(2);
// console.log(fruits);

// Desde el elemento con indice 2, elimina 3 elementos
// fruits.splice(2, 3);
// console.log(fruits);

// Desde el elemento con indice 2, elimina 3 elementos. Y desde esa posicion agrega los elementos nuevos...
fruits.splice(2, 3, "sandía", "cereza", "aguaymanto");
console.log(fruits);

console.log("========================");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

// map(funcion) -> Retorna una copia del arreglo y aplica la funcion indicada a cada uno de sus elementos. El arreglo resultante tiene la misma cantidad de elementos que el original.
let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Número ${x}`);
console.log(numsToString);

// filter(funcion) -> Retorna una copia del arreglo y aplica un filtrado por medio de la funcion. Solo retorna los elementos que cumplen con esa condicion de filtrado.
let filteredNums = nums.filter((x) => x % 2 === 0);
console.log(filteredNums);

// reduce(funcion, acumulador) -> Reduce todo el arreglo a un valor, el cual es el resultado de aplicar la funcion reiteradamente. Ademas se indica un acumulador que va guardando el resultado a la par.
let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

console.log("========================");
console.log("Objeto Math");
// Estos metodos siempre van despues del objeto Math, este se pone con mayuscula al inicio.

console.log("Math.round()");
// Math.round(x) -> Redondea el numero x de la "forma comun", es decir que si es mayor a .5 redondea hacia arriba, en todo caso redondea hacia abajo
console.log(Math.round(14.3)); // Redondea a 14
console.log(Math.round(14.8)); // Redondea a 15

console.log("Math.ceil()");
// Math.ceil(x) -> Redondea el numero x hacia arriba
console.log(Math.ceil(14.3)); // Redondea a 15

console.log("Math.floor()");
// Math.floor(x) -> Redondea el numero x hacia abajo
console.log(Math.floor(14.8)); // Redondea a 15
