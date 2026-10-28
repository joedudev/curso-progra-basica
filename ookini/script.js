function calcularPrecio(precioUnitario, cantidad) {
	const total = precioUnitario * cantidad;
	return total;
}

function puedeReservar(cantidad) {
	return cantidad <= 2;
}
