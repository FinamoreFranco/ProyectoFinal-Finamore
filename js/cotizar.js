// === CONFIGURACIÓN BASE ===
const preciosTipo = {
    rescate: 1000,
    asesinato: 2000,
    exploracion: 1500,
    recoleccion: 1200,
    escolta: 1800,
};

const multiplicadorDificultad = {
    S: 3.5,
    A: 2.5,
    B: 2,
    C: 1.5,
    D: 1.2,
    E: 1,
};

const precioXDia = 150;

// === CLASE Cotizacion ===
class Cotizacion {
    constructor() {}

    calcularPrecio(tipoMision, dificultad, dias = 1) {
        const precioBase = preciosTipo[tipoMision] || 0;
        const multiplicador = multiplicadorDificultad[dificultad] || 1;
        let precioFinal = precioBase * multiplicador;

        if (
            tipoMision === "exploracion" ||
            tipoMision === "recoleccion" ||
            tipoMision === "escolta"
        ) {
            precioFinal += precioXDia * dias;
        }

        // Ajuste especial: Misión Asesinato nivel S
        if (tipoMision === "asesinato" && dificultad === "S") {
            precioFinal *= 1.5; // 50% adicional
        }

        return Math.round(precioFinal);
    }
}

const cotizador = new Cotizacion();

// Función que se llama desde el botón
function calcular() {
    const tipoMision = document.getElementById("tipoMision").value;
    const dificultad = document.getElementById("dificultad").value;
    const dias = parseInt(document.getElementById("dias").value) || 0;

    const precio = cotizador.calcularPrecio(tipoMision, dificultad, dias);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        💰 El costo total de la misión es: <strong>$${precio}</strong>
    `;

    // Guardar en historial
    const cotizacionActual = {
        tipo: tipoMision,
        dificultad: dificultad,
        dias: dias,
        precio: precio,
        fecha: new Date().toLocaleString()
    };

    let historial = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
    historial.push(cotizacionActual);
    localStorage.setItem("historialCotizaciones", JSON.stringify(historial));

    mostrarHistorial();
}

function mostrarHistorial() {
    const historial = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
    const contenedor = document.getElementById("historial");

    if (historial.length === 0) {
        contenedor.innerHTML = "<p>No hay cotizaciones aún.</p>";
        return;
    }

    contenedor.innerHTML = historial.reverse().map(cot => {
        return `
            <div>
                <strong>Misión:</strong> ${cot.tipo} <br>
                <strong>Dificultad:</strong> ${cot.dificultad} <br>
                ${cot.dias > 0 ? `<strong>Días:</strong> ${cot.dias} <br>` : ''}
                <strong>Precio:</strong> $${cot.precio} <br>
                <small>${cot.fecha}</small>
            </div>
        `;
    }).join('');
}

function limpiarHistorial() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, limpiar historial",
        cancelButtonText: "Cancelar",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("historialCotizaciones");
            mostrarHistorial();

            swalWithBootstrapButtons.fire(
                "¡Limpio!",
                "El historial ha sido eliminado.",
                "success"
            );
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarHistorial();

    document.getElementById("tipoMision").addEventListener("change", function () {
        const tipo = this.value;
        const seccionDias = document.getElementById("seccionDias");

        if (tipo === "exploracion" || tipo === "recoleccion" || tipo === "escolta") {
            seccionDias.style.display = "block";
        } else {
            seccionDias.style.display = "none";
        }
    });
});
function mostrarHistorial() {
    const historial = JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
    const contenedor = document.getElementById("historial");

    if (!contenedor) {
        console.error("No se encontró el elemento #historial");
        return;
    }

    if (historial.length === 0) {
        contenedor.innerHTML = "<p>No hay cotizaciones aún.</p>";
        return;
    }

    contenedor.innerHTML = historial.reverse().map(cot => {
        return `
            <div>
                <strong>Misión:</strong> ${cot.tipo} <br>
                <strong>Dificultad:</strong> ${cot.dificultad} <br>
                ${cot.dias > 0 ? `<strong>Días:</strong> ${cot.dias} <br>` : ''}
                <strong>Precio:</strong> $${cot.precio} <br>
                <small>${cot.fecha}</small>
            </div>
        `;
    }).join('');
}