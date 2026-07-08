import { agregarAlCarrito } from "./carrito.js";
import { getCarrito } from "./storage.js";
import { actualizarContador, crearTarjeta, crearHeader } from "./ui.js";

const header = crearHeader();
document.body.insertBefore(header, document.body.firstChild);

const renderizarProductos = () => {
    const contenedor = document.getElementById("main-container");

    fetch("./data/products.json")
        .then((response) => response.json())
        .then((data) =>
            data.forEach((producto) => {

                const tarjeta = crearTarjeta(producto, "home");

                tarjeta.querySelector(".btn-comprar")
                    .addEventListener("click", () => {
                        agregarAlCarrito(producto);
                    });

                contenedor.appendChild(tarjeta);
            })
        )
};

document.addEventListener("DOMContentLoaded", () => {
    const carrito = getCarrito();
    actualizarContador(carrito);
    renderizarProductos();
});
