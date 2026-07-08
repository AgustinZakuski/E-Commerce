import { getCarrito } from "./storage.js";
import { actualizarContador, crearHeader } from "./ui.js";

const header = crearHeader();
document.body.insertBefore(header, document.body.firstChild);

document.addEventListener("DOMContentLoaded", () => {
    const carrito = getCarrito();
    actualizarContador(carrito);
});