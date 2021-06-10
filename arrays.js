let colores = ["rojo", "azul", "blanco"];

// for (let i = 0; i < colores.length; i++) {
//     console.log(colores[i]);
// }

colores.push("marron");

// for (let i = 0; i < colores.length; i++) {
//     console.log(colores[i]);
// }

function recorrerArray(unArray) {
    let tamaño = unArray.length;
    console.log(`Recorremos un array de ${tamaño} elementos`);
    for (let i = 0; i < colores.length; i++) {
        console.log(`En la posicion ${i} tenemos el color ${unArray[i]}`);
    }
}

recorrerArray(colores);

colores.forEach((color) => {
    console.log(`Color ${color}`);
});
