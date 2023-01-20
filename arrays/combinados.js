const arrayobjetos = [{
        nombre: "David",
        edad: 24,
        comidafavorita: "Hamburquesa",
    },
    {
        nombre: "SALLY",
        edad: 22,
        comidafavorita: "SHAWARMA",
    },
    {
        nombre: "STEVEN",
        edad: 18,
        comidafavorita: "PIZZA",
    },
    {
        nombre: "SOL",
        edad: 50,
        comidafavorita: "SUSHI",
    },
];

for (let i = 0; i < arrayobjetos.length; i++) {
    console.log(arrayobjetos[i]);
}

for (let i = 0; i < arrayobjetos.length; i++) {
    console.log("+*-/=+*-/=+*-/=+*-/=+*-/=+*-/=+*-/=");
    console.log("Nombre:" + arrayobjetos[i].nombre);
    console.log("Edad:" + arrayobjetos[i].edad);
    console.log("Comida Favorita:" + arrayobjetos[i].comidafavorita);
}

const Objectoconarray = {
    nombre: "Objeto con array",
    arr: ["abeja", "banana", "camion ", "dado"],
};

Objectoconarray.arr.forEach((elemento) => {
    console.log(elemento + "   jajajajajaja");
});

for (let i = 0; i < Objectoconarray.arr.length; i++) {
    console.log(Objectoconarray.arr[i] + "jajaja2");
}