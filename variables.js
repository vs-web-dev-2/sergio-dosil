const PI = 3.14;

let marca = "bh";
let radio = 30;
let rueda = 2 * PI * radio;
let esDeCarretera = true;

// malos usos:
// let marca = "orbea";
// PI = 3;

marca = "orbea";

radio = 40;

console.log("Marca: " + marca);
console.log("Longitud Rueda: " + rueda);
console.log(radio);
console.log("Es de Carretera: " + esDeCarretera);

// Variable compuesta
let bicicleta = {
    marca: "bh",
    precio: 300,
    radio: 30,
    esDeCarretera: true,
    color: "rojo",
};

bicicleta.color = "azul";

console.log(bicicleta);
console.log(bicicleta.precio);
console.log(bicicleta.color);

// Arrays
let colores = ["rojo", "azul", "blanco"];
console.log(colores);
console.log(colores[1]);
colores[2] = "negro";
console.log(colores);

bicicleta.marca = marca;
console.log(bicicleta);
marca = "specialized";
console.log(bicicleta.marca);
console.log(marca);
bicicleta.color = colores[0];
console.log(bicicleta);

let esGrande = bicicleta.radio > 25;
let meGusta = bicicleta.color == "azul";
console.log(esGrande);
console.log(meGusta);
bicicleta.color = colores[1];
console.log(meGusta);
meGusta = bicicleta.color !== "azul";
console.log(meGusta);

// Declaracion
let etiqueta;
// Asignacion
etiqueta = "valor";
// Instruccion
console.log(etiqueta);
// Expresion
etiqueta = "horas: " + (12 + 12);
// Comparaciones
// > < >= <= == !=
