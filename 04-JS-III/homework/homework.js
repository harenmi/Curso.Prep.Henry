// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];

}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  newArray = [];
  for (i = 0; i < array.length; i++) {

    newArray[i] = array[i] + 1;

  }

  return newArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);

  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);

  return array;
  
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase = "";
  for (i = 0; i < palabras.length; i++) {

    if (i < palabras.length - 1)
      frase += palabras[i] + " ";
    else
      frase += palabras[i];
  }
  return frase;

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  res = false;
  for (i = 0; i < array.length; i++) {

    if (elemento === array[i]) {
      res = true;
      break;
    }else
      res = false;

  }
  return res;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  i = 0;
  suma = 0;

  while (i < numeros.length) {
    suma += numeros[i];
    i++;
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  i = 0;
  suma = 0;
  //prom = 0;

  while (i < resultadosTest.length) {
    suma += resultadosTest[i];
    i++;
  }
  return suma / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var may = 0;
  for(i = 0; i < numeros.length; i++) {

    if (numeros[i] > may) {
      may = numeros[i];
    }

  }
  return may
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  //var prod = 0;
  if (arguments.length === 0) 
    return 0;
  else if (arguments.length === 1)
    return arguments[0];
  else {
    var prod = arguments[0];
    for (i = 1; i < arguments.length; i++){
      prod *= arguments[i];
    }
    return prod;
  }

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  i = 0;
  sumaElem = 0;
  while (i < arreglo.length) {

    if (arreglo[i] > 18) {
      sumaElem += 1;
    }
    i++;

  }
  return sumaElem;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  if (numeroDeDia > 1 && numeroDeDia < 7)
    return "Es dia Laboral";
  else
    return "Es fin de semana";

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  primeraCifra = 0;
  divisor = 0;
  i = 10;

  if(n < i){
    if(n === 9)
      return true;
    else
      return false;
  }else{
    while(i <= n) {
      divisor = i;
      i = i * 10;
    }
    primeraCifra = Math.floor(n / divisor);
    if(primeraCifra === 9)
      return true;
    else
      return false;
  }

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var i = 1;
  while (i < arreglo.length) {

    if (arreglo[i - 1] === arreglo[i]) {
      i++;
      return true;
    }else{
      return false;
      break;
    }
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var i = 0;
  var newArray = [];

  while (i < array.length) {
    if (array[i] === "Enero"){
      newArray.push(array[i]);
    }else if (array[i] === "Marzo"){
      newArray.push(array[i]);
    }else if (array[i] === "Noviembre"){
      newArray.push(array[i]);
    }
    i++;
  }
  if (newArray.length === 3)
    return newArray;
  else
    return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var i = 0;
  var newArray = [];

  while (i < array.length) {

    if (array[i] > 100) {
      newArray.push(array[i]);
    }
    i++;

  }
  return newArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  i = 2;
  newNumero = 0;
  newArray = [];

  while (i <= 20) {

    newNumero = numero + i;
    newArray.push(newNumero);
    
    if (newArray.length === newNumero){
      return "Se interrumpió la ejecución";
      break;
    }
    i += 2;
  }

  return newArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  newNumero = 0;
  newArray = [];

  for (i = 2; i <= 20; i += 2) {

    if (i === 10) {

      continue;
    }else if(i < 10){      
      newNumero = numero + i;
      newArray.push(newNumero);
    }else{
      newNumero = numero + (i - 2);
      newArray.push(newNumero);
    }

  }

  return newArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
