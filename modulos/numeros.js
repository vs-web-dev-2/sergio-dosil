let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let primos = [2, 3, 5, 7];

// Pares
function obtenerPares1(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        if (numero % 2 === 0) {
            pares.push(numero);
        }
    }

    return pares;
}

function obtenerPorCriterio1(numeros, criterio) {
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        if (criterio(numero)) {
            resultado.push(numero);
        }
    }

    return resultado;
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function esPrimo1(numero) {
    for (let i = 0; i < primos.length; i++) {
        if (numero === primos[i]) {
            return true;
        }
    }

    return false;
}

console.log(obtenerPorCriterio1(numeros, esPrimo1));
