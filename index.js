/*Esto es javascript*/
/*console.log("hola mundo");
console.log("hola  Ericka Valeska Pichardo Palma ");

var numero = 5;

var miNumero = 10;

console.log(numero);

console.log(miNumero);

var edad = 24;

console.log("Mi edad es:" + edad);

const Pi = 3.1416;

//Pi=56.560;

console.log(Pi);

var resultado = 2 + 2;

var miResultado = 2 - 2;

console.log(resultado);

console.log(25 + 10 + resultado);

console.log(miResultado);

console.log(resultado - miResultado);

let numeros = 6;

if (numeros == 8) {
  console.log("Si mi numero vale:" + numeros);
} else {
  console.log("No mi numero es diferente de  6");
}

let minombre = "Alfonso";

let nombre = "Ericka";

if (minombre == nombre) {
  console.log("Si mi nombre es:" + minombre);
} else {
  console.log("No mi nombre es:" + nombre);
}

if (numeros >= 5 && minombre == "Alfonso") {
  console.log("Si mi nombre es:" + minombre + "y mi numero es mayor" + numeros);
} else {
  console.log("No mi nombre es:" + nombre);
}

if (numeros >= 5 || minombre == nombre) {
  console.log("Si mi nombre es:" + minombre + "y mi numero es mayor" + numeros);
} else {
  console.log("No mi nombre es:" + nombre);
}

if (numeros > 0) {
  console.log("Mi numero es positivo");
} else if (numeros === 0) {
  console.log("Mi numero es cero");
} else {
  console.log("Mi numero es negativo");
}

let contador = 0;
while (contador < 5) {
  console.log(contador);
  console.log("Primeras vez usando el while en javascript");

  contador++;
}


for(let contador=1; contador<=100 ;contador++)
{
    console.log("Estoy imprimiendo los numeros del 1 al 100 " +contador);
}



for(let i=1; i<=100 ;i++)
{
    console.log("Estoy imprimiendo los numeros del 1 al 100 esto es fuera de serie el nodejs " +i);
}
/*

for(let i=1000000; i>=100 ;i--)
{
    console.log("Estoy imprimiendo los numeros del 1 al 100 esto es fuera de serie el nodejs " +i);
}*/

function saludar() {
  console.log("hola mundos");
}

saludar();

function prueba(varx) {
  console.log("hola mundos:" + varx);
}

prueba("ALFONSO");

function prueba2(varx, edad) {
  console.log("hola mundos:" + varx);
  console.log("Y mi edad es :" + edad);
}

prueba2("ALFONSO", 39);

function multiplicar(x, y) {
  let resultado = x * y;
  return resultado;
}

let final = multiplicar(10, 50);

console.log(final);

let miArreglo = [
  "Alfonso",
  "Ericka",
  "Jose Armando",
  "Ericksito",
  "Vicenta Olimpia",
  "Lesly",
];

for (let i = 0; i < 6; i++) {
  console.log("Accediendo a los indices del array:" + i);
  let mostrar = miArreglo[i];
  console.log(mostrar);
}

miArreglo.forEach((element) => console.log(element));

let persona = {
  nombre: "Alfonso",
  Edad: 39,
  masculino: true,
};

let persona2 = {
  nombre: "Ericka",
  Apellido: "Pichardo",
  Edad: 36,
  femenino: true,
};

console.log(persona);
console.log(persona2);

persona.carrera = "Administracion y Sistemas";

persona2.carrera = "Psicologia";

console.log(persona);
console.log(persona2);

delete persona.nombre
delete persona2.femenino;

console.log(persona);
console.log(persona2);
