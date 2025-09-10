/* AQUI ABRE EL COMENTARIO GIGANTE
// OPERADORES

// Operadores aritméticos o matemáticos

// + -> Suma
// - -> Resta
// * -> Multiplicación (NO USAR x NI .)
// / -> Divisón (NO USAR ÷)

// Suma
let sumando1 = 8;
let sumando2 = 4;

console.log(sumando1);
console.log(sumando2);
// Ahora los sumamos
console.log(sumando1 + sumando2);
// También podemos almacenar el resultado de la operación dentro de otra variable
console.log("RESULTADO SUMA");
let resultadoSuma = sumando1 + sumando2;
console.log(resultadoSuma);

// Resta
let minuendo = 5;
let sustraendo = 20;
let resta = minuendo - sustraendo;

console.log("RESULTADO RESTA");
console.log(resta);

// Multiplicación
let factor1 = 20;
let factor2 = 34;
let producto = factor1 * factor2;

console.log("RESULTADO MULTIPLICACIÓN");
console.log(producto);

// División -> NO OLVIDES QUE EL DIVISOR NO PUEDE SER 0
let dividendo = 12;
let divisor = 8;
let cociente = dividendo / divisor;

console.log("RESULTADO DIVISIÓN");
console.log(cociente);

// OPERACIÓN COMBINADA
console.log("OPERACIÓN COMBINADA");
console.log(15 + 43 / (4 + 8) * 2);

// Módulo %
// Me devuelve el RESIDUO de una división.

let moduloNum1 = 12;
let moduloNum2 = 5;
let resultadoModulo = moduloNum1 % moduloNum2;

console.log("RESULTADO MÓDULO");
console.log(resultadoModulo);


// Potencia **

// a**b -> Eleva el número 'a' a la potencia 'b'

let base = 2;
let exponente = 5;
let resultadoPotencia = base**exponente;

console.log("RESULTADO POTENCIA");
console.log(resultadoPotencia);

console.log("============================")
console.log("OPERADORES DE COMPARACIÓN");

// OPERADORES DE COMPARACIÓN

// Sirven para comparar dos valores. SIEMPRE RETORNAN UN BOOLEANO

// >     -> Mayor que
// <     -> Menor que
// >=    -> Mayor igual que
// <=    -> Menor igual que

let valor1 = 8;
let valor2 = 1;

// COMPARAMOS
let mayorQue = valor1 > valor2;
console.log(mayorQue);
console.log(valor1 < valor2);
console.log(valor1 >= valor2);
console.log(valor1 <= valor2);

console.log("============================")
// ==    -> Operador de igualdad, me indica si dos valores son iguales. No le importa el tipo de dato.
// ===   -> Operedar de identidad, me indica si dos valores son IDÉNTICOS. Verifica que el valor y el tipo de dato sean los mismos.

let datoNumber = 1;  // number
let datoString = '1';  // string

// IGUALDAD
console.log(datoNumber == datoString);  // true
// IDENTIDAD
console.log(datoNumber === datoString);  // false

// DIFERENTES (! NEGACIÓN DE LA IGUALDAD O IDENTIDAD)
console.log(datoNumber != datoString);  // false
console.log(datoNumber !== datoString);  // true

console.log("============================")
console.log("OPERADORES LÓGICOS");

// OPERADORES LÓGICOS

// Realizan operaciones lógicas entre valores booleanos.

// &&   (y, AND) -> SOLO ES VERDAD CUANDO AMBOS SON VERDADEROS
// ||   (o, OR ) -> SOLO ES FALSO CUANDO AMBOS SON FALSOS
// !    (negación, NOT) -> NEGACIÓN

// AND
console.log("AND");

console.log(true && true);  // true
console.log(true && false);  // false
console.log(false && false);  // false

// OR
console.log("OR");

console.log(true || true);  // true
console.log(true || false);  // true
console.log(false || false);  // false

// NOT
console.log("NOT");
console.log(!true);  // false
console.log(!false);  // true

AQUI CIERRA EL COMENTARIO GIGANTE */

// STRINGS
// Van siempre entre comillas

// Comillas simples ''
let simples = 'String entre comillas simples';
console.log(simples);

// Comillas dobles ""
let dobles = "String entre comillas dobles";
console.log(dobles);

// Backticks -> Son lo que llamamos comillas invertidas ``
// NO CONFUNDIR CON LA TILDE ´
let backticks = `String entre backticks o comillas invertidas`;
console.log(backticks);

// Me permiten INTERPOLAR STRINGS. Puedo ingresar variables directamente dentro de la string
// ${nombreVariable}
let nombreCompleto = 'Valeria Lozano';
let edad = 24;
let saludo = `Hola, me llamo ${nombreCompleto}! Tengo ${edad} años.`;
console.log(saludo);

// Me permiten escribir strings en más de una sola línea
let frase = `Hola
cómo
estás`;

console.log(frase);

// Metacaracteres -> Representan caracteres especiales
// \n -> Representa un salto de linea (lo que hace un enter en el texto)
frase = "Hola\ncómo\nestás";
console.log(frase);

// Escapar caracteres -> Hace referencia a hacer que un caracter especial no funcione como originalmente lo hacía
// Se escapan poniendo un backlash
let miguelGrau = "Miguel Grau \"El Caballero de los Mares\"";
console.log(miguelGrau);

let prueba2 = 'It\'s me';
console.log(prueba2);

// INDEXACION -> Hace referencia a tomar caracteres de una string por su posición (indice)
// Los indices siempre son NUMEROS ENTEROS
// Podemos acceder de la siguiente manera string[indice]
let palabra = "hola";
console.log(palabra);
console.log("Indexando");

// Accedemos al elemento en la primera posicion, es decir indice 0
console.log(palabra[0]);

// Tamaño de una string -> string.length
console.log(`Tamaño de la string ${palabra} = ${palabra.length}`);

// Accediendo al ultimo caracter (length - 1)
console.log(`Último caracter -> ${palabra[palabra.length - 1]}`);
