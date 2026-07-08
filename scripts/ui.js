import { getCarrito } from "./storage.js";

export const actualizarContador = (carrito) => {
    const contador = document.getElementById("count");
    if (contador) {
        contador.textContent = carrito.length;
    }
};

export const mostrarMensaje = (texto) => {
    alert(texto);
};

export const crearTarjeta = (producto, context) => {

    const tarjeta = document.createElement("article");
    tarjeta.classList.add("note");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");

    const img = document.createElement("img");
    img.src = producto.img;
    img.alt = producto.nombre;
    img.classList.add("noteImg");

    imgContainer.appendChild(img);

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement("i");
    descripcion.textContent = producto.desc;

    const precio = document.createElement("p");
    precio.textContent = `Precio: $${producto.precio}`;

    const boton = document.createElement("button");
    boton.classList.add("btnComprar");

    if (context === "home") {
        boton.classList.add("btn-comprar");
        boton.textContent = "Comprar igual";
    } else {
        boton.classList.add("btn-eliminar");
        boton.textContent = "Eliminar";
    }

    tarjeta.appendChild(imgContainer);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(boton);

    return tarjeta;
}

export const crearHeader = () => {
    const header = document.createElement("header");

    const divLogo = document.createElement("div");
    divLogo.classList.add("divLogo");

    const linkLogo = document.createElement("a");
    linkLogo.classList.add("logo");
    linkLogo.href = "/index.html";

    const parteA = document.createElement("span");
    parteA.classList.add("parteA");
    parteA.textContent = "Así Quedó";

    const parteB = document.createElement("span");
    parteB.classList.add("parteB");
    parteB.textContent = "Ni siquiera lo intentamos.";

    linkLogo.appendChild(parteA);
    linkLogo.appendChild(parteB);
    divLogo.appendChild(linkLogo);

    const navBar = document.createElement("nav");
    navBar.classList.add("navBar");

    const ul = document.createElement("ul");

    const liInicio = document.createElement("li");
    const linkInicio = document.createElement("a");
    linkInicio.href = "/index.html";
    linkInicio.textContent = "Inicio";
    liInicio.appendChild(linkInicio);

    const liContacto = document.createElement("li");
    const linkContacto = document.createElement("a");
    linkContacto.href = "/pages/Contacto.html";
    linkContacto.textContent = "Contacto";
    liContacto.appendChild(linkContacto);

    const liCarrito = document.createElement("li");
    const linkCarrito = document.createElement("a");
    linkCarrito.href = "/pages/Carrito.html";

    const imgCarrito = document.createElement("img");
    imgCarrito.classList.add("icono");
    imgCarrito.src = "/src/carrito.png";
    imgCarrito.alt = "ícono del carrito";

    const liContador = document.createElement("li");
    const spanContador = document.createElement("span");
    spanContador.id = "count";
    spanContador.textContent = "";

    linkCarrito.appendChild(imgCarrito);
    liCarrito.appendChild(linkCarrito);
    liContador.appendChild(spanContador);

    ul.appendChild(liInicio);
    ul.appendChild(liContacto);
    ul.appendChild(liCarrito);
    ul.appendChild(liContador);
    navBar.appendChild(ul);

    header.appendChild(divLogo);
    header.appendChild(navBar);

    return header;
};