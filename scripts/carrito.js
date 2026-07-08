import { actualizarContador, mostrarMensaje } from "./ui.js";
import {
    guardarCarrito,
    getCarrito,
    vaciarCarritoStorage,
} from "./storage.js";

export const agregarAlCarrito = (producto) => {
    const carrito = getCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Aaaahhh! En serio querías esa porquería! Cómo te sobra la guita!");
};

export const eliminarProducto = (indice) => {
    const carrito = getCarrito();
    carrito.splice(indice, 1);

    guardarCarrito(carrito);

    actualizarContador(carrito);
    mostrarMensaje("Ahora te arrepentís? La próxima pensalo bien si lo querés antes de venir a complicarme la vida a mí!");
};

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("No te alcanzaba con llenar esto de basura, ahora lo tenés que venir a vaciar! Qué ganas de hacerme perder el tiempo que tenés!");
};
