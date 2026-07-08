import { getCarrito } from "./storage.js";
import { actualizarContador, crearHeader, crearFooter } from "./ui.js";

const header = crearHeader();
document.body.insertBefore(header, document.body.firstChild);

const footer = crearFooter();
document.body.appendChild(footer);

document.addEventListener("DOMContentLoaded", () => {
    const carrito = getCarrito();
    actualizarContador(carrito);
});