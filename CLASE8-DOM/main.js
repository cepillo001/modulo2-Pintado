/* 1- ACCEDER A LOS ELEMENTOS */   
//GET ELEMENT BY ID (obtiene lo que hay en el elemento con ese id
// y lo guarda en la variable... obtiene el contenido del <p>)
let parrafo1 = document.getElementById('para1');
// muestra el objeto
console.log(parrafo1);
// leer contenido (.textcontent muestra el contenido del <p>)
console.log(parrafo1.textContent);  



//QUERY SELECTOR 
//(es como GetElementById, pero usa la Etiqueta "h1" para obtenerlo)
const elementoH1 = document.querySelector("h1");
console.log(elementoH1);
console.log(elementoH1.textContent);

// con .list pasamos el elemento usando la Clase del elemento
const lista = document.querySelector(".list");
console.log(lista);
console.log(lista.textContent);

//QUERY SELECTOR ALL
const listaElementos = document.querySelectorAll("ul > li");
console.log(listaElementos);

listaElementos.forEach((elemento) => {
    console.log(elemento.textContent);
})


const listaElementos2 = document.querySelectorAll("body > h1");
console.log(listaElementos2);

listaElementos2.forEach((elemento) => {
    console.log(elemento.textContent);
})


/* 2 -AÑADIR ELEMENTOS AL DOM */
/* creo el objeto (estara en memoria unicamente) 
luego .appendChild renderiza el objeto en el <body> 
todavia no aparece nada porq es una lista desordenada vacia */
let listaDesordenada = document.createElement("ul");
document.body.appendChild(listaDesordenada); 


let listaElemento1 = document.createElement("li");
//en este caso .textContent asigna el string al elemento
listaElemento1.textContent = "Libreria React"; 
//appendChild agrega el <li> al <ul>
listaDesordenada.appendChild(listaElemento1); 

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Framework Angular";
listaDesordenada.appendChild(listaElemento2); 


/* 3 - ELIMINAR ELEMENTOS DEL DOM de forma dinamica */
// ej: solo pueden ver ese parrafo los usuarios registrados
let parrafo = document.getElementById("parrafo-a-eliminar");
parrafo.parentNode.removeChild(parrafo); 
/* .parentNode me lleva al padre de <p> (en este caso el <body>), 
y me dice que remueva al hijo... el <p> */

/* 4 - OBTENER DATOS DE FORMULARIO (capturarlos) */
// Asignar valores a los inputs
document.getElementById("nombre").value = "Harry";
document.getElementById("edad").value  = 13;

// Capturar valores de los inputs (y mostrarlos por consola)
const getValueInput = () => {
    // con .value obtengo el contenido del elemento del DOM
    let inputValue1 = document.querySelector("#name").value; 
    let inputValue2 = document.querySelector("#surname").value;      

    console.log(inputValue1);
    console.log(inputValue2);
};
/* con esto ya puedo capturar los campos, transformarlos en Json y pasarlos a una api */



