const nodoFecha = document.getElementById("fecha");
const nodoCotizacionesList = document.getElementById("cotizacionesList");
const nodoCotizacionesTable = document.getElementById("cotizacionesTable");

const url = "https://api.frankfurter.app/latest";

const request = fetch(url);

const bodyJson = request.then((response) => response.json());

bodyJson.then(procesarDatosTable);

function procesarDatos(data) {
    const fechaString = data.date;
    const fecha = new Date(Date.parse(fechaString));

    nodoFecha.innerText = `${fecha.getDate()}/${
        fecha.getMonth() + 1
    }/${fecha.getFullYear()}`;

    const objetoCotizaciones = data.rates;

    const nombresDivisa = Object.keys(objetoCotizaciones);

    // console.log(objetoCotizaciones);
    nombresDivisa.forEach((divisa) => {
        const nodoDivisaItem = document.createElement("li");
        nodoDivisaItem.textContent = `${divisa}: ${objetoCotizaciones[divisa]}`;
        nodoCotizacionesList.appendChild(nodoDivisaItem);
    });
}

function procesarDatosTable(data) {
    const fechaString = data.date;
    const fecha = new Date(Date.parse(fechaString));

    nodoFecha.innerText = `${fecha.getDate()}/${
        fecha.getMonth() + 1
    }/${fecha.getFullYear()}`;

    const objetoCotizaciones = data.rates;

    const nombresDivisa = Object.keys(objetoCotizaciones);

    // console.log(objetoCotizaciones);
    nombresDivisa.forEach((divisa) => {
        const nodoDivisaRow = document.createElement("tr");
        const nodoDivisaNombre = document.createElement("td");
        const nodoDivisaCotizacion = document.createElement("td");
        const nodoDivisaValor = document.createElement("td");

        nodoDivisaNombre.innerText = divisa;
        nodoDivisaCotizacion.innerText = objetoCotizaciones[divisa];
        nodoDivisaValor.innerText = `${(1 / objetoCotizaciones[divisa]).toFixed(
            3
        )}€`;

        nodoDivisaRow.appendChild(nodoDivisaNombre);
        nodoDivisaRow.appendChild(nodoDivisaCotizacion);
        nodoDivisaRow.appendChild(nodoDivisaValor);

        nodoCotizacionesTable.appendChild(nodoDivisaRow);
    });
}
