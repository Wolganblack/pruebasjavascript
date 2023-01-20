console.log("HOLA MUNDO");

const miarray = ["Ericka", "Jose Armando", "Erick Jose"];

const cant = miarray.length;

console.log(cant);

miarray.push("alfonso");

const contador = miarray.length;

console.log(contador);

console.log(miarray);

miarray.unshift("Palma");

console.log(miarray);

let final = miarray.pop();

console.log(miarray);

console.log(final);

let inicio = miarray.shift();

console.log(miarray);

console.log(inicio);


for (let i = 0; i < miarray.length; i++) {
    console.log(miarray[i]);
}


const persona = {

    nombre: "Ericka Valeska",
    edad: 36,
    comidaFavorita: "Sopa Maggi",

};

persona.deportefavorito = "volleyball";


for (let key in persona) {
    console.log(key, persona[key]);
}

delete persona.deportefavorito;

for (let key in persona) {
    console.log(key, persona[key]);
}