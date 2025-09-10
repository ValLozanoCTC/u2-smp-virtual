/*
POO en JavaScript

Clase -> Es el molde de mi objeto y determina de una manera generica sus atributos y metodos.

  - Atributos: "Caracteristicas" del objeto, son representados por variables.
  - Metodos: Son "funciones o comportamientos" del objeto, son representados por funciones.

En ECMAScript 6, se introdujo la palabra reservada "class" para la sintaxis de objetos, antes de eso se usaba "function", de todas maneras esto sigue funcionando.

JavaScript NO IMPLEMENTA DIRECTAMENTE LA POO, simplemente es una especie de "mascara" que la simula.

Explicacion sintaxis:

1. Palabra reservada "class" indica que vamos a crear una clase.
2. El nombre de la clase, debe ir en PascalCase. Es muy parecido a camelCase, solo que la primera letra tambien es mayuscula.
3. Abrimos llaves para indicar el bloque de codigo de la clase.
4. Metodo constructor. Es un metodo especial que nos indica los atributos de la clase.
5. Pasar los atributos de nuestra clase como parametros del metodo constructor.
6. Dentro del metodo constructor, INICIALIZAMOS NUESTROS ATRIBUTOS. Esto significa decirle a la clase que ESE atributo va a tomar cierto valor. this -> significa "esto" y es una palabra reservada que hace referencia al propio objeto.
7. Luego agregamos los metodos, ya dijimos que son funciones, pero los metodos no llevan la palabra reservada "function".

Sintaxis

class NombreClase {
  constructor(atributo1, atributo2) {
    this.atributo1 = atributo1;
    this.atributo2 = atributo2;
  }

  metodo() {
    // codigo del metodo...
  }
}
*/

// Ejemplo
// Creamos una clase de persona con los atributos y metodos vistos en el diagrama

// Palabra reservada class y nombre en PascalCase
class Person {
  // Encapsulamiento, exponer solo los atributos que necesito
  // #nombreAtributo, van antes del metodo constructor
  #cellphone;

  // Metodo constructor y pasamos los atributos como parametros
  constructor(firstName, lastName, age, height, weight, hobbies, cellphone) {
    // Inicializamos los atributos
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies;
    this.#cellphone = cellphone;
  }

  // Agregamos los metodos necesarios
  sayHello() {
    // Codigo de mi metodo
    console.log("Hola desde el metodo!");
  }

  // Usando los atributos
  introduce() {
    console.log(
      `Hola buenas noches, me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años.`
    );
  }

  // Mostrando un atributo protegido
  showCellphone() {
    return this.#cellphone;
  }
}

// Instanciar un objeto, usamos la palabra reservada new
// let nombreObjeto = new NombreClase(atributo1, atributo2, ...);
// Almacenamos ese objeto en una variable.
let person1 = new Person(
  "Valeria",
  "Lozano",
  24,
  1.61,
  57,
  ["programar", "armar el cubo de rubik"],
  "987654321"
);

// Mostramos en consola
console.log(person1);
// Accediendo a los atributos
console.log(person1.firstName);
console.log(person1.hobbies);

console.log("METODOS");
// Llamando a mi metodo
person1.sayHello();
person1.introduce();

// Intentamos acceder al atributo oculto por encapsulamiento
// console.log(person1.#cellphone);  // error
// console.log(person1.cellphone);  // undefined

console.log("ENCAPSULAMIENTO");
// Accediendo al atributo desde un metodo
console.log(person1.showCellphone());

/*
HERENCIA

Es la capacidad de una clase de poder heredar los atributos y metodos de la otra. Clase Padre -> Clase Hija
*/
console.log("HERENCIA");

// Vamos a crear una clase hija a partir de la clase Person
// Ejemplo
// Crea una clase de Chef a partir de Person
class Chef extends Person {
  // Si yo quiero agregar mas atributos, debo escribir el constructor de la siguiente manera
  // Debe contener TODOS los atributos de la clase padre
  constructor(
    firstName,
    lastName,
    age,
    height,
    weight,
    hobbies,
    cellphone,
    restaurant,
    favoriteFood
  ) {
    // Primero pasas los atributos a la clase padre -> super()
    super(firstName, lastName, age, height, weight, hobbies, cellphone);
    // Luego de super(), agregas tus atributos nuevos. ESTOS NUEVOS ATRIBUTOS NO SE PASAN A LA CLASE PADRE
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }

  // Podemos sobreescribir metodos del padre, probemos sobreescribiendo introduce()
  introduce() {
    console.log(
      `Hola me llamo ${this.firstName} ${this.lastName} y soy chef en el restaurante ${this.restaurant}.`
    );
  }

  cook() {
    console.log(
      `El chef ${this.lastName} esta cocinando ${this.favoriteFood}...`
    );
  }
}

// Instanciamos un objeto de Chef
let chef1 = new Chef(
  "Alfredo",
  "Linguini",
  24,
  1.61,
  65,
  ["Cocinar", "Lavar platos"],
  "987654321",
  "Guestau",
  "Lasagna"
);

console.log(chef1.firstName);
console.log(chef1.favoriteFood);
chef1.sayHello();
chef1.cook();

// LOS NUEVOS ATRIBUTOS Y METODOS DE CHEF NO FUNCIONAN EN PERSON

/*
POLIMORFISMO

Permite que un metodo se comporte de manera distinta de acuerdo al objeto que lo llame.
*/
chef1.introduce();
person1.introduce();
