function saludar() {
    console.log("Hola Mundo");
}

saludar();

function saludarPorNombre(nombre) {
    console.log("Hola " + nombre);
}

saludarPorNombre("Sergio");

let amigo = "Paco";
saludarPorNombre(amigo);

function saludarElaborado(nombre, saludo = "Hola") {
    console.log(saludo + " " + nombre);
}

saludarElaborado("Alberto", "Buenos días");
saludarElaborado("José Manuel");

function calcularCircunferencia(r) {
    // 2 * PI * r
    const PI = 3.14;
    return 2 * PI * r;
}

let circunferencia = calcularCircunferencia(5);
console.log(circunferencia);

let radio = 10;
circunferencia = calcularCircunferencia(radio);
console.log(circunferencia);

let r = 20;
circunferencia = calcularCircunferencia(r);
console.log(circunferencia);

const PI = 3;
circunferencia = calcularCircunferencia(100);
console.log(circunferencia);

function calcularSuperficie(lado) {
    return lado * lado;
}
console.log(calcularSuperficie(9));

function calcularPerimetro(lado) {
    const lados = 4;
    return lado * lados;
}
console.log(calcularPerimetro(10));
