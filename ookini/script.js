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
 * @param {number} tazasDiponibles - La cantidad actual de tazas disponibles.
 * @returns {boolean} Devuelve `true` si hay al menos una taza disponible; de lo contrario `false`.
 */
function puedeReservar(tazasDiponibles) {
	return tazasDiponibles >= 1;
}

// Selección de elementos del DOM mediante querySelector
const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector(".contador-tazas");

// Asignación de un evento al hacer clic en el botón de reserva
botonReservar.addEventListener("click", function () {
	// Convertimos el texto del contador a un valor de tipo número
	const tazasActuales = Number(contadorTazas.textContent);

	// Verificamos si aún se puede reservar
	if (puedeReservar(tazasActuales)) {
		const tazasRestantes = tazasActuales - 1;
		// Actualizamos el DOM con la nueva cantidad de tazas
		contadorTazas.textContent = tazasRestantes;
		// alert("¡Reserva exitosa! Disfruta tu taza de café.");
	} else {
		// Si ya no quedan tazas, deshabilitamos el botón y notificamos al usuario
		botonReservar.textContent = "Sin Cupos";
		botonReservar.disabled = true;
		contadorTazas.textContent = "Ya no hay tazas disponibles";
		alert("Lo sentimos, no hay tazas disponibles para reservar.");
	}
});
