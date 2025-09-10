/*
POO (Programacion Orientada a Objetos) Este es un paradigma de programacion que se usa muchisimo actualmente.

Hay conceptos asociados a la POO como Clases, Objetos, etc.

El concepto de objeto que vamos a aprender hoy, si bien tiene el mismo nombre que este concepto base de la programación que se aplica en muchos lenguajes, no es el mismo. JavaScript lo maneja diferente.


Objeto en Javascript -> Son la abstraccion a la programacion, de cualquier concepto real.

Es una estructura de datos que se almacenan con el formato clave (atributo o propiedad) - valor.

Sintaxis:

let nombreObjeto = {
  atributo1: valor,
  atributo2: valor,
  atributo3: valor
};

LOS ATRIBUTOS SIGUEN LA REGLA DE NOMBRES DE LAS VARIABLES.
Los valores son datos, por ende si son strings, deben ir entre comillas.
Los valores pueden ser de cualquier tipo o estructura de datos, incluyendo otros objetos.

*/
// Ejemplo
// Crea un objeto de persona
let person = {
  name: "Valeria Lozano",
  age: 24,
  cellphone: "987654321",
  hobbies: ["programar", "armar cubos de rubik", "jugar videojuegos"],
};

console.log(person);

// Reto 1
// Crea un objeto de persona con tus datos

/*
Accediendo al valor de los atributos de mi objeto, hay dos formas

1. Notacion de punto: nombreObjeto.nombreAtributo
2. Notacion de corchetes: nombreObjeto["nombreAtributo"]
*/
// Acceder con notacion de punto
console.log(person.name);
// Acceder con notacion de corchetes
console.log(person["age"]);

// Reto 2
// Muestra todos los valores de los atributos de tu objeto
console.log(person.cellphone);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);

console.log("Actualizamos el valor del atributo del objeto");
// Actualizar el valor de un objeto
person.cellphone = "999999999";
console.log(person.cellphone);

console.log("Agregar un nuevo atributo al objeto");
// Agregar un nuevo atributo
person.birthDate = "11-01-2000";
console.log(person);

// Reto 3
// Actualiza una propiedad y agrega una nueva

// Hoisting -> Antes de ejecutar todo el codigo de arriba hacia abajo. JavaScript analiza todas las declaraciones de variables y funciones.

/*
JSON -> JavaScript Object Notation

Son un tipo de archivo que solo almacena datos con la sintaxis de objetos de JavaScript.

Estos archivos tienen la extension .json
Solo almacenan datos, nada de codigo de programacion.
Al contrario que en JavaScript, en los archivos JSON los atributos o propiedades deben ser escritos entre comillas.
*/

let heroes = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

console.log(heroes);
console.log(heroes.formed);
console.log(heroes.active);

// Mostrar el atributo
console.log(heroes.members); // Es un arreglo

// Indexar heroes.members
console.log("Primer elemento de heroes.members");
// Como es un arreglo, lo puedo indexar
console.log(heroes.members[0]);

// Acceder a los atributos del objeto dentro de members
// heroes.members[0] es un objeto, por eso puedo acceder por punto
console.log(heroes.members[0].name);
console.log(heroes.members[0].secretIdentity);

// heroes.members[0].powers es un arreglo, puede indexar
console.log(heroes.members[0].powers[1]);

/* Reto 4
Accediendo al objeto mostrar los siguientes valores:
- Damage resistance
- Eternal Flame
- Inferno
*/
