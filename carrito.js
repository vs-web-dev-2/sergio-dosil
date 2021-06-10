// Array de productos
// Cada producto debe tener un tipo de iva
// {nombre: 'bicicleto', precio: '200', iva: normal}
let productos = [
    { nombre: "bicicleta", precio: 500, iva: "Normal" },
    { nombre: "manillar", precio: 80, iva: "Normal" },
    { nombre: "pedal", precio: 20, iva: "Reducido" },
    { nombre: "sillin", precio: 15, iva: "Normal" },
    { nombre: "rueda", precio: 120, iva: "Normal" },
    { nombre: "cuadro", precio: 150, iva: "Normal" },
    { nombre: "cadena", precio: 15, iva: "Reducido" },
];

// Carrito: es un array (subconjunto de los productos escogidos)
// Criterio => precio < 10
let carrito = productos.filter((producto) => producto.precio < 100);
// console.log(carrito);

// Calcular subtotal sin iva
function calcularPrecioSinIva(carro) {
    let subtotal = 0;
    carro.forEach((item) => {
        subtotal += item.precio;
    });

    return `El subtotal sin IVA es ${subtotal}`;
}

console.log(calcularPrecioSinIva(carrito));

// Array de tipos de iva {nombre:'normal', tipo: 21}
let ivas = [
    { nombre: "Normal", tipo: 21 },
    { nombre: "Reducido", tipo: 4 },
];

// Calcular total con iva
function calcularTotalConIva(carro) {
    let total = 0;
    carro.forEach((item) => {
        let iva = ivas.find((iva) => iva.nombre == item.iva);
        total += item.precio + (item.precio * iva.tipo) / 100;
    });

    return `El total con IVA es ${total}`;
}

console.log(calcularTotalConIva(carrito));

// Linea en blanco
console.log();

// Imprimir Ticket Compra
function imprimirTicket(carro) {
    let total = 0;

    console.log("TICKET COMPRA");
    console.log("-------------");
    carro.forEach((item) => {
        let iva = ivas.find((iva) => iva.nombre == item.iva);
        // console.log(iva);
        let precioItemConIva = item.precio + (item.precio * iva.tipo) / 100;

        console.log(
            `${item.nombre}\n\t${iva.tipo}% IVA\t---\t${precioItemConIva}€`
        );

        total += precioItemConIva;
    });
    console.log("\t-----------------------");
    console.log(`\t\tTOTAL: ${total}€`);
}

imprimirTicket(carrito);
