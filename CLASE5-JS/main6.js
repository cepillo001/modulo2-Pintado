let nombre = [  //Array
    'jorge',
    'facundo',
    'pedro'
]

console.log(nombre[2]);

let persona = { // Objeto
    nombre: "Juan",
    edad: 29,
    mascotas: ['perro', 'gato']
}

console.log(persona.nombre);
console.log(JSON.stringify(persona)); // objeto a Json

let persona2 = {
    nombre: "Pablo",
    edad: 33,
    mascotas: ['loro', 'tortuga']
}

console.log(persona.mascotas[0]);

let personas = [persona];
console.log(personas[0].edad);
console.log(personas.length); //longitud

personas.push(persona2);
console.log(personas.length); //longitud
console.log(personas[1]);


//PROMESAS ---------------------------------
console.log("antes de promesa...");
let promise = new Promise(function (resolve, reject) {  
    //la funcion se ejecuta cuando se construye la promesa
  setTimeout(() => resolve(), 5000); //permite que se cumpla algo luego de q pasen 5 seg
}).then((resp) => {
  console.log("termino timeout...");
});
console.log("despues de promesa...");