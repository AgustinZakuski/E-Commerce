const KEY = "carrito";

export const guardarCarrito = (carrito) => {
    localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const getCarrito = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY);
};
