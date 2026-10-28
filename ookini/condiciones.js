// datos de la condicion
const cupoTaza = 8;
const inscritos = 8;

if (inscritos < cupoTaza) {
	console.log("Puedes inscribirte");
} else {
	console.log("Lo siento, el cupo está lleno");
}

const tazasReservadasHoy = 47;
const maxTazasDia = 50;

if (tazasReservadasHoy < maxTazasDia) {
	console.log("Aún hay tazas disponibles para hoy");
} else {
	console.log("Lo siento, no hay tazas disponibles para hoy");
}
