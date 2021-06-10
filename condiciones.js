let bici_1 = {
    marca: "bh",
    precio: 300,
    radio: 30,
    esDeCarretera: true,
    color: "rojo",
};

let bici_2 = {
    marca: "orbea",
    precio: 400,
    radio: 25,
    esDeCarretera: true,
    color: "rojo",
};

let bici_3 = {
    marca: "orbea",
    precio: 350,
    radio: 25,
    esDeCarretera: true,
    color: "azul",
};

let bici_4 = {
    marca: "orbea",
    precio: 400,
    radio: 25,
    esDeCarretera: false,
    color: "azul",
};

function comprarBici(bici) {
    console.log(
        `🎁 Me compro la ${bici.marca} de color ${bici.color} por ${bici.precio}€`
    );
}

function descartarBici(bici) {
    console.log(
        `🛒 No me compro la ${bici.marca} de color ${bici.color} por ${bici.precio}€`
    );
}

function puedoComprar(bici) {
    return (bici.color === "rojo" || !bici.esDeCarretera) && bici.precio < 350;
}

// comprarBici(bici_1);

if (puedoComprar(bici_1)) {
    comprarBici(bici_1);
} else {
    descartarBici(bici_1);
}

if (puedoComprar(bici_2)) {
    comprarBici(bici_2);
} else {
    descartarBici(bici_2);
}

if (puedoComprar(bici_3)) {
    comprarBici(bici_3);
} else {
    descartarBici(bici_3);
}

if (puedoComprar(bici_4)) {
    comprarBici(bici_4);
} else {
    descartarBici(bici_4);
}
