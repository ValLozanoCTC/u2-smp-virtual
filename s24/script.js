// Hola mundo en JavaScript
// console.log("valor a imprimir") me sirve para "imprimir" algo desde la consola
console.log('Hola mundo');

/*
Declaración de variables:

1. Usamos la palabra reservada let
2. Seguido del nombre de la variable
3. El signo de =
4. Escribimos su valor

let nombreVariable = 'valor';

Full Name -> Nombre Completo
*/
let fullName = 'Valeria Lozano';

// Uso de variables -> Solo colocamos su nombre
console.log(fullName);

/*
TIPOS DE DATO

Ver el tipo de dato de una variable

typeof(variable) -> Indica el tipo de la variable

Lo imprimimos con: console.log(typeof(variable))

undefined -> Significa una variable sin valor. Una variable que fue declarada pero nunca asignada.
*/
let person; // NO TIENE UN VALOR ASIGNADO
console.log(person);
console.log(typeof(person));

/*
boolean -> Tipo de dato booleano, es decir que toma los valores de verdadero y falso.
Para esto usa las palabras reservadas true y false.
*/
let valorVerdadero = true;
// let valorFalso = false;
console.log(valorVerdadero);
console.log(typeof(valorVerdadero));

/*
number -> Almacena números ya sean enteros o decimales. SE ESCRIBEN SIN COMILLAS. El decimal va con punto, NO CON COMA.
*/
// Entero
let edad = 24;
console.log(edad);
console.log(typeof(edad));

// Decimal
let estatura = 1.61;
console.log(estatura);
console.log(typeof(estatura));

/*
string -> Lo traducen como cadenas. Digamos que son los tipos de dato de texto. Estos deben ir obligatoriamente dentro de comillas, pueden ser comillas simples o dobles.
*/
let peli = 'Era de Hielo';
let serie = "Más Allá del Jardín";
console.log(serie);
console.log(typeof(serie));

// COMENTARIO DE UNA LÍNEA
// EMPIEZA CON DOBLE DIAGONAL
// OBVIAMENTE SOLO ES DE UNA LÍNEA

/*
COMENTARIO MULTILINEA
ES IGUAL QUE LOS COMENTARIOS EN CSS
ABARCA VARIAS LINEAS
*/