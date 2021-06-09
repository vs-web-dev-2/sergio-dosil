function calcularIva(importe, tipoIva = 21) {
    return (importe * tipoIva) / 100;
}

function calcularPrecio(importe) {
    return importe + calcularIva(importe);
}

let importe = 100;
console.log("El IVA de " + importe + " es " + calcularIva(importe));
console.log(calcularPrecio(100));

let ivaNormal = {
    nombre: "Normal",
    tipo: 21,
};

let ivaReducido = {
    nombre: "Reducido",
    tipo: 4,
};

function imprimir(iva, base) {
    console.log("---- Clasico ----");
    console.log(
        "El IVA " +
            iva.nombre +
            " al " +
            iva.tipo +
            "% de " +
            base +
            " es " +
            calcularIva(base, iva.tipo)
    );
}

imprimir(ivaNormal, 100);
imprimir(ivaReducido, 100);

let bicicleta = {
    nombre: "Bicicleta",
    importe: 100,
};
function imprimirTicket(articulo) {
    console.log("---- Ticket ----");
    console.log(
        "El coste total de " +
            articulo.nombre +
            " es " +
            calcularPrecio(articulo.importe)
    );
}
imprimirTicket(bicicleta);

function imprimirModerno(iva, base) {
    console.log("---- Moderno ----");
    console.log(
        `El IVA ${iva.nombre} al tipo ${iva.tipo} de ${base} es ${calcularIva(
            base
        )}`
    );
}

imprimirModerno(ivaNormal, 100);

// Guia
function imprimirGuiado(iva, tipoIva, base, valor) {
    console.log("---- Guiado ----");
    console.log(`El IVA ${iva} al tipo ${tipoIva} de ${base} es ${valor}`);
}
let precio = 10;
let iva = "reducido";
let tipoIva = 4;
let cuota = calcularIva(precio);
imprimirGuiado(iva, tipoIva, precio, cuota);
