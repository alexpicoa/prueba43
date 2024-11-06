// Cambiar texto
// Seleccionar botón
let button1 = document.getElementById("changeTextButton");

// Escuchar el evento click
button1.addEventListener("click", function () {
    // Seleccionar el texto
    let paragraph1 = document.getElementById("example1");
    // Cambiar el contenido del texto
    paragraph1.textContent = "Nuevo texto actualizado";
});


// Modificar estilo CSS
// Seleccionar botón
let button2 = document.getElementById("changeStyleButton");

// Escuchar el evento click
button2.addEventListener("click", function () {
    // Seleccionar el texto
    let paragraph2 = document.getElementById("example2");
    // Cambiar color de fondo y tamaño de fuente
    paragraph2.style.backgroundColor = "lightblue";
    paragraph2.style.fontSize = "50px";
});

// Cambiar clase
// Seleccionar el botón
let button3 = document.getElementById("toggleClassButton");

// Escuchar el evento click
button3.addEventListener("click", function () {
    // Seleccionar el texto
    let paragraph3 = document.getElementById("example3");
    // Añadir la clase en el texto
    paragraph3.classList.add("new-class");
});


// Agregar elemento
// Seleccionar el botón
let button = document.getElementById("addElementButton");

// Escuchar evento click
button.addEventListener("click", function () {
    // Crear nuevo elemento de párrafo
    let newParagraph = document.createElement("p");
    // Configurar el texto del párrafo
    newParagraph.textContent = "This is a new paragraph.";
    // Seleccionar el elemento padre
    let parentDiv = document.getElementById("parent");
    // Añadir el nuevo párrafo al elemento padre
    parentDiv.appendChild(newParagraph);
});