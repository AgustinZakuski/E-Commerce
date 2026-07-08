import { actualizarContador, mostrarMensaje, crearTarjeta, crearHeader, crearFooter } from "./ui.js";
import { getCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./carrito.js";

const header = crearHeader();
document.body.insertBefore(header, document.body.firstChild);

const footer = crearFooter();
document.body.appendChild(footer);

const renderizarCarrito = () => {
    console.log("Renderizando carrito");
    const carrito = getCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";

    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "¿Qué buscás si no agregaste nada, panflín?";

        contenedor.appendChild(mensaje);
        return;
    }

    carrito.forEach((producto, index) => {

        const tarjeta = crearTarjeta(producto, "carrito");

        tarjeta.querySelector(".btn-eliminar")
            .addEventListener("click", () => {
            eliminarProducto(index);
            renderizarCarrito();
        });

        contenedor.appendChild(tarjeta);
    });

    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btnComprar");
    btnVaciar.classList.add("btn-vaciar-carrito");
    btnVaciar.textContent = "Vaciar carrito";

    btnVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });

    divAcciones.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});