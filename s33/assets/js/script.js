/*
Seleccionamos elementos del DOM gracias al objeto "document" y algunos de sus metodos:

getElementById("nombre-id") -> Obtiene el elemento con el id "nombre-id".
*/
// Seleccionando un elemento por ID y almacenandolo en una variable
let mainTitle = document.getElementById("main-title");

// Mostramos el elemento
console.log(mainTitle);
// Mostramos el contenido de mainTitle
// Si no se ha encontrado un elemento, esto va a dar error
console.log(mainTitle.innerText);
// Actualizamos el contenido dinamicamente
mainTitle.innerText = "OTRO TITULO";
// Mostramos el contenido de mainTitle nuevamente
console.log(mainTitle.innerText);

// getElementsByClassName("nombre-clase") -> Obtiene todos los elementos con la clase "nombre-clase".
// Esto devuelve un arreglo, aunque solo sea un elemento
let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts); // Esto es un ARREGLO y sus elementos son Elementos HTML
// Accedemos a un elemento y mostramos su contenido
console.log(mainTexts[0].innerText);
// Modificamos el contenido
mainTexts[0].innerText = "PARRAFO CAMBIADO";

// getElementsByTagName("nombre") -> Obtiene todos los elementos con la etiqueta "nombre".
let subtitles = document.getElementsByTagName("h2");
console.log(subtitles);
console.log(subtitles[0].innerText);
console.log(subtitles[1].innerText);
console.log(subtitles[2].innerText);

console.log("SELECTOR POR CSS");
/*
Selectores por CSS, se llaman asi porque usan la sintaxis de un selector CSS para seleccionar los elementos del DOM.

querySelector("selector") -> Devuelve el primer elemento que coincida con el selector.
querySelectorAll("selector") -> Devuelve un arreglo de elementos que coincidan con el selector.
*/
// let mainTitle = document.getElementById("main-title");
let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);

// let mainTexts = document.getElementsByClassName("main-text");
let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);

// EVENTOS
console.log("EVENTOS");

/*Selecciono un elemento y le agrego un evento. No es necesario almacenar el elemento en alguna variable

[SELECCIONAR ELEMENTO].addEventListener("nombre-evento", function () {
  // FUNCION A EJECUTAR CUANDO SUCEDA ESE EVENTO
})

La funcion es una funcion anonima, no tiene nombre.
*/
document.getElementById("main-button").addEventListener("click", function () {
  // CODIGO A EJECUTAR CUANDO SUCEDA EL EVENTO
  console.log("BOTON PRESIONADO");

  let mainButton = document.getElementById("main-button");

  // Podemos cambiar estilos
  let currentBackgroundColor = document.body.style.backgroundColor;

  // Cambiado color de forma condicional
  if (currentBackgroundColor == "red") {
    document.body.style.backgroundColor = "white";
    mainButton.style.color = "white";
  } else {
    document.body.style.backgroundColor = "red";
    mainButton.style.color = "red";
  }

  // Obtener el valor ingresado en un input
  // Primero seleccionamos el input
  // Accedemos a la propiedad value
  let magicNumber = document.querySelector("#magic-number").value;

  console.log(`Valor ingresado en el input: ${magicNumber}`);

  // Mostramos el valor en el contenido de un elemento
  let greetParagraph = document.querySelector("#greet");

  // Validacion en caso el input esté vacío
  if (magicNumber == "" || magicNumber.length === 0) {
    greetParagraph.innerText = "NO INGRESASTE UN NOMBRE";
  } else {
    greetParagraph.innerText = `Buenas noches ${magicNumber}`;
  }
});

// Evento de click en otro boton
// Selecionamos el boton
let togglerButton = document.querySelector("#toggler");
// Fijamos el contenido
togglerButton.innerText = "MOSTRAR";
// Seleccionamos el texto
let hiddenText = document.querySelector("#hidden-text");
// Lo ocultamos directamente
hiddenText.style.display = "none";

// Agregamos el event listener
togglerButton.addEventListener("click", function () {
  let currentTextDisplay = hiddenText.style.display;

  // Si el boton esta oculto
  if (currentTextDisplay == "none") {
    // Lo muestro
    hiddenText.style.display = "block";
    togglerButton.innerText = "OCULTAR";
  } else {
    // Si no esta oculto, lo oculto
    hiddenText.style.display = "none";
    togglerButton.innerText = "MOSTRAR";
  }
});

// FORMA CORRECTA DE CAMBIAR ESTILOS, USANDO CLASES
let togglerButton2 = document.querySelector("#toggler-2");
// Fijamos el contenido
togglerButton2.innerText = "MOSTRAR";
// Seleccionamos el texto
let hiddenText2 = document.querySelector("#hidden-text-2");

// Agregamos el event listener
togglerButton2.addEventListener("click", function () {
  if (hiddenText2.classList.contains("hide-text")) {
    hiddenText2.classList.remove("hide-text");
    togglerButton2.innerText = "OCULTAR";
  } else {
    console.log("ELSE");
    hiddenText2.classList.add("hide-text");
    togglerButton2.innerText = "MOSTRAR";
  }
});
