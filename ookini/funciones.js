function calcularPrecio(precioUnitario, cantidad) {
	const total = precioUnitario * cantidad;
	return total;
}

console.log(calcularPrecio(10, 5)); // Output: 50
console.log(calcularPrecio(15, 3)); // Output: 45
console.log(calcularPrecio(20, 2)); // Output: 40

function puedeReservar(cantidad) {
	if (cantidad <= 2) {
		return true;
	} else {
		return false;
	}
}
if (puedeReservar(2)) {
	console.log("Puedes reservar la cantidad solicitada.");
} else {
	console.log("No puedes reservar la cantidad solicitada.");
}
