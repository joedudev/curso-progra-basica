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

/**
 * Calcula la nueva cantidad de tazas tras realizar una reserva.
 *
 * @param {number} tazasActuales - La cantidad de tazas antes de la reserva.
 * @returns {number} La nueva cantidad de tazas restantes.
 */
function restarCupo(tazasActuales) {
	return tazasActuales - 1;
}

/**
 * Actualiza los elementos del DOM (interfaz de usuario) con los nuevos valores
 * y ajusta el estado del botón cuando ya no quedan cupos.
 *
 * @param {number} tazasRestantes - El número de tazas disponibles para mostrar.
 * @param {HTMLElement} elementoContador - El elemento HTML donde se muestra la cantidad de tazas.
 * @param {HTMLButtonElement} elementoBoton - El botón HTML encargado de realizar la reserva.
 */
function actualizarEstadoDOM(tazasRestantes, elementoContador, elementoBoton) {
	if (tazasRestantes > 0) {
		elementoContador.textContent = tazasRestantes;
	} else {
		// Cuando se llega a 0 tazas, se muestra el mensaje de agotado y se deshabilita el botón
		elementoContador.textContent = "No hay reservas disponibles";
		elementoBoton.textContent = "Sin Cupos";
		elementoBoton.disabled = true;
	}
}

/**
 * Controla la lógica de la reserva al interactuar con la interfaz.
 *
 * @param {HTMLElement} elementoContador - El elemento que contiene las tazas actuales.
 * @param {HTMLButtonElement} elementoBoton - El botón de reserva presionado.
 */
function manejarReserva(elementoContador, elementoBoton) {
	const tazasActuales = Number(elementoContador.textContent);

	if (puedeReservar(tazasActuales)) {
		const tazasRestantes = restarCupo(tazasActuales);
		actualizarEstadoDOM(tazasRestantes, elementoContador, elementoBoton);
	} else {
		alert("Lo sentimos, no hay tazas disponibles para reservar.");
	}
}

// Selección de elementos del DOM
const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector(".contador-tazas");

// Escuchador de eventos vinculado a la función orquestadora
botonReservar.addEventListener("click", function () {
	manejarReserva(contadorTazas, botonReservar);
});
