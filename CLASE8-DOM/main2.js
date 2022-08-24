//Antes - FUNCION CON CUERPO
var fecha = new Date();
var hora = fecha.getHours();
var saludo = function (hr) {
  if (hr <= 12) {
    return 'Buenos días!!!';
  } else if(hr > 12 && hr < 20) {
    return 'Buenas tardes!!!';
  } else if(hr >= 20) {
    return 'Buenas noches!!!';
  }
};
console.log( saludo(hora) ); //Imprime el saludo dependiendo la hora del día

//Ahora
let fecha2 = new Date();
let hora2 = fecha2.getHours();

let saludo2 = (hr) => {
  if (hr <= 12) {
    return 'Buenos días!!!';
  } else if(hr > 12 && hr < 20) {
    return 'Buenas tardes!!!';
  } else if(hr >= 20) {
    return 'Buenas noches!!!';
  }
};
console.log( saludo2(hora2) ); //Imprime el saludo dependiendo la hora del día


/* Async - Await */
async function getIp() {
    try { //define sentencias q se van a ejecutar y pueden producirse errores dependiendo del codigo (ej letra q no se puede parsear a entero, que el fetch no se complete, etc)
      let response = await fetch("https://api.ipify.org/?format=json"); // con fetch, uso el metodo GET (porq no defini otro), para llamar la api... me devuelve una ip para guardarlo en la variable... el await dice que espere (antes de hacer la asignacion hace que espere a que se complete lo del fetch)
      let ipResponse = await response.json(); // await hace que recien cuando el ip guardado en la var se transforme en un json, se guarde en la var ipresponse
      console.log(ipResponse);
  
      let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip); // ipResponse.ip  obtiene la info de localizacion del cliente, y llamando a la api antes, me entrega la hubicacion completa
      let locationResponse = await responseLocation.json();
      console.log(locationResponse);
    } catch { // si hay un error en las sentencias anteriores se ejecuta el catch
      console.log("Algo paso, no se pudo resolver...");
    }
  }
  getIp();