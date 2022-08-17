/* consigna 1 [definir variables]*/
let nombre = 'jose luis';
let apellido = 'pintado';
let edad = 43;
let email = 'joseomega@yahoo.com.ar';
let dni = 27111027;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(email);
console.log(dni);

/* typeof y parseInt */
let numero1 = 5;
let nombres = 'pedro';
let numero2 = '10';
let nuevoValor = parseInt(numero2);
console.log(typeof(numero1));
console.log(typeof(nombres));
console.log(typeof(nuevoValor));

/* Practica */
// 1) pedir nombre con prompt y mostrarlo en consola
let nombrePedido = prompt('Ingrese su nombre: ');
console.log('Hola ' + nombrePedido);
// 2) pedir num con prompt, parsearlo, sumarlo a otro y mostrarlo
let numeroPedido = parseInt(prompt('Ingrese un numero: '));
let suma = numeroPedido + numero1;
console.log('La suma es: ' + suma);
// 3) pedir 2 textos con prompt, concatenarlos y mostrarlos en un alert
let texto1 = prompt('Ingrese primer texto: ');
let texto2 = prompt('Ingrese segundo texto: ');
let concatenado = texto1 + " " + texto2;
alert(concatenado);


/* Condicionales */
// Practica
let numeroPedido1 = parseInt(prompt('Ingrese un numero: '));
if(numeroPedido1 > 1000){
    alert('el numero es: ' + numeroPedido1);
}
let textoPedido = prompt('Ingrese un texto: ');
if(textoPedido == 'hola'){
    alert(textoPedido);
}
let numero2Pedido = prompt('Ingrese otro numero: ');
if(numero2Pedido >= 10)
    if(numero2Pedido <= 50){
        alert('el numero ' + numero2Pedido + ' esta entre 10 y 50');
    }

/* Arrays */
// Practica
let articulos = ['leche','fideos','arroz','cerveza','pan'];
let art = prompt('Ingrese un articulo: ');
if(articulos.includes(art)){
    alert('El articulo ya esta en la lista');
} else{
    articulos[5]=art;
    console.log(articulos);
}

//switch
let dia = new Date().getDay();
console.log(dia);
switch(dia){
    case 0:
        console.log('domingo');
        break;
    case 1:
        console.log('lunes');
        break;
    case 2:
        console.log('martes');
        break;
    case 3:
        console.log('miercoles');
        break;  
    case 4:
        console.log('jueves');
        break;
    case 5:
        console.log('viernes');
        break;
    case 6:
        console.log('sabado');
        break;
}

/* Ejercicio */
let numeroIngresado = parseInt(prompt('Ingrese un numero: '));
if(numeroIngresado > 10){
    alert('el Numero ingresado es Mayor a 10');
}else if(numeroIngresado < 10){
    alert('el Numero ingresado es Menor a 10');
}else {
    alert('el Numero ingresado es 10');
}

/* do.. while */
let pasos = 100;
do {
    document.write("Solo faltan " + pasos + " pasos por caminar. ");
    pasos = pasos - 1;
} while (pasos>=1);


// ejercicio
let nombres3 = ['Dayana', 'Nelly' ,'Ignacio', 'Pedro', 'Jose', 'Alejandro', 'Juan', 'Alberto', 'Jesus', 'Pablo'];
let nombresCortos = [];
for(let i=0; i <= nombres.length; i++){
    if(nombres3[i].length <= 5) // error con el .length
        nombresCortos[i] = nombres3[i];
}
console.log(nombresCortos);

/* Funciones */
function serie(nombre, apellido, serieFavorita){
    alert("Hola " + nombre + " " + apellido + ", " + "tu serie favorita es " + serieFavorita);
}
serie("Jose", "Pintado", "Game of Thrones");
serie('Dayana', 'Burgos', 'La Reina del Sur');

// practica
function largo(nombre){
    return nombre.length;
}
let auxiliar = largo(prompt("escriba un nombre: "));
console.log('el largo del nombre es: ' + auxiliar);

// practica evento
function saludar(){
    alert('Hola Botoncito');
}
