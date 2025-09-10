/*
Condicionales, sirven para evaluar una pregunta y de acuerdo al resultado, se realiza una u otra cosa. Una condicion te va a devolver un booleano, ese es el valor que se evalua.

if -> Si (Que pasaria si...?)

Sintaxis

if (condicion) {
  // El codigo a ejecutar si la condicion es verdadera
}

Por pasos:
  1. Palabra reservada "if"
  2. Entre paréntesis va mi condición a evaluar
  3. Abrimos un bloque de código con llaves {}
  4. Dentro de ese bloque colocamos el código que se ejecutará si mi respuesta es verdadera.
*/
// Ejemplo de un programa que indica si un nombre es largo. Para esto se pregunta si el nombre tiene más de 7 caracteres

let nombre = 'Michelle';

console.log("ANTES DE LA CONDICIONAL");

// Condicion
if (nombre.length > 7) {
  // Codigo a ejecutar si mi condicion se cumple (es true)
  console.log("Que nombre tan largo tienes.");
  // No olvides cerrar la llave
}

// Fuera del bloque de la condicional
console.log("AHORA ESTOY FUERA DEL BLOQUE CONDICIONAL");

// Reto 1
// Consultar si el nombre tiene menos de 5 caracteres, si se cumple, mostrar un mensaje.
console.log("Reto 1");

if (nombre < 5) {
  console.log("Que nombre tan corto tienes.");
}

console.log("==============");

// if... else
// Sintaxis
//  if (condicion) {
//    codigo si es verdad...
//  } else {
//    codigo si es falso...
//  }

nombre = "Ana";

// Completemos el ejemplo anterior
if (nombre.length > 7) {
  // Codigo a ejecutar si la condicion es true
  console.log("Que nombre tan largo tienes.");
} else {
  // Codigo a ejecutar si la condicion es false
  console.log("Tu nombre no es muy largo.");
}

console.log("Reto 2");
// Reto 2
// Crea un programa que evalue una edad dada y responda si es mayor de edad o no.
let edad = 16;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

console.log("Reto 3");

// Reto 3
// Compara dos numeros y muestra cual es el mayor.
let num1 = 7;
let num2 = 7;

console.log(`Primer numero -> ${num1}`);
console.log(`Segundo numero -> ${num2}`);

if (num1 > num2) {
  console.log("El primer numero es el mayor.");
} else if (num2 > num1) {
  console.log("El segundo numero es el mayor.")
} else {
  console.log("Ambos numeros son iguales")
}

/*
Sintaxis if... else...

if (condicion) {
  // Codigo a ejecutar si la condicion se cumple
} else if (otra condicion) {
  // Codigo a ejecutar si la otra condicion se cumple
} else if (otra condicion) {
  // Codigo a ejecutar si la otra condicion se cumple
} else {
  // Codigo a ejecutar si ninguna de las condiciones se cumple
}

REGLAS:
  - SIEMPRE INICIA CON IF (ES EL UNICO OBLIGATORIO)
  - EL ORDEN ES
    1. if
    2. else if (todos los que quieras)
    3. else SIEMPRE AL ULTIMO
*/

// ANIDACIÓN, ES PONER UNA ESTRUCTURA DENTRO DE OTRA.

// if (true) {
//   // Codigo
//   // Condicional anidada
//   if (true) {
//     // Mas codigo
//   }
// } else {
//   if (true) {
//     // Codigo
//   } else {
//     // Codigo
//     if (true) {
//       // Mas codigo
//     }
//   }
// }

console.log("Anidación");

// Verificar si una persona es mayor de edad en Perú y en Estados Unidos.
edad = 21;
let estaEnUSA = true;

// ESTAS ANIDACIONES Y REPETICIONES ESTAN FORZADAS CON UN FIN DIDACTICO
if (edad >= 18) {
  if (estaEnUSA) {
    if (edad >= 21) {
      console.log("Es mayor de edad.");
    } else {
      console.log("Es menor de edad.");
    }
  } else {
    console.log("Es mayor de edad.");
  }
} else {
  console.log("Es menor de edad.");
}

// Sentencia Switch
/*
Sintaxis de switch

switch (expresion) {
  case valor1:
    // Codigo a ejecutar si la expresion tiene el valor1
    break; // Sirve para terminar la condicion
  case valor2:
    // Codigo a ejecutar si la expresion tiene el valor2
    break;
  case valor3:
    // Codigo a ejecutar si la expresion tiene el valor3
    break;
  // PUEDES PONER LOS QUE NECESITES
  default:
    // Codigo a ejecutar si no se cumple ninguna condicion anterior. Es como el else del switch. SIEMPRE VA AL ULTIMO.
}
*/

console.log("Switch Case");
// Creamos un programa que muestre el nombre de un mes de acuerdo a su numero
let numeroMes = 18;

switch (numeroMes) {
  // Empiezo comparando los posibles valores de mi variable
  case 1:
    // Si el valor es 1, ejecuta este codigo
    console.log("Enero");
    break;
  case 2:
    // Si el valor es 2, ejecuta este codigo
    console.log("Febrero");
    break;
  // PODEMOS PONER MAS CASE
  default:
    // Se ejecuta si no se encontro ninguna coincidencia.
    console.log("VALOR NO VALIDO.");
}
