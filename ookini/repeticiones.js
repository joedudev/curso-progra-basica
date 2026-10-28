const metodos = ["V60", "Kyoto Drip", "Siphon", "Prensa Francesa"];

for (const metodo of metodos) {
	console.log(`Método de preparación: ${metodo}`);
}

const reservasDelDia = [2, 1, 2, 1, 2];
let totalTazasReservadas = 0;

for (const reserva of reservasDelDia) {
	totalTazasReservadas += reserva;
}

console.log(`Total de tazas reservadas hoy: ${totalTazasReservadas}`);
