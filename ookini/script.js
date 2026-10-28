/**
 * Calcula el costo total multiplicando el precio de una unidad por la cantidad solicitada.
 *
 * @param {number} precioUnitario - El costo de una sola taza de café.
 * @param {number} cantidad - El número de tazas a comprar.
 * @returns {number} El total calculado de la compra.
 */
function calcularPrecio(precioUnitario, cantidad) {
	const total = precioUnitario * cantidad;
	return total;
}

/**
 * Evalúa si hay disponibilidad suficiente para procesar una reserva.
 *
 * @param {number} tazasDisponibles - La cantidad actual de tazas disponibles.
 * @returns {boolean} Devuelve `true` si hay al menos una taza disponible; de lo contrario `false`.
 */
function puedeReservar(tazasDisponibles) {
	return tazasDisponibles >= 1;
}

// Selección de elementos del DOM mediante querySelector
const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector(".contador-tazas");

// Asignación de un evento al hacer clic en el botón de reserva
botonReservar.addEventListener("click", function () {
	// Convertimos el texto del contador a un valor de tipo número
	const tazasActuales = Number(contadorTazas.textContent);

	// Verificamos si hay al menos 1 taza para reservar
	if (puedeReservar(tazasActuales)) {
		const tazasRestantes = tazasActuales - 1;
		contadorTazas.textContent = tazasRestantes;

		// Si tras la reserva nos quedamos sin tazas, bloqueamos el botón inmediatamente
		if (tazasRestantes === 0) {
			contadorTazas.textContent = "No hay reservas disponibles";
			botonReservar.textContent = "Sin Cupos";
			botonReservar.disabled = true;
		}
	} else {
		// Caso de respaldo por si el botón vuelve a ser presionado cuando está deshabilitado o en 0
		botonReservar.textContent = "Sin Cupos";
		contadorTazas.textContent = "No hay reservas disponibles";

		botonReservar.disabled = true;
		alert("Lo sentimos, no hay tazas disponibles para reservar.");
	}
});
