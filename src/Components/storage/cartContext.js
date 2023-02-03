import { createContext, useState } from "react";

export const cartContext = createContext({ cart: [] });

function CartProvider(props) {
const [cart, setCart] = useState([]);

const test = () => console.log("test");

function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    let newCart = cart.map((item) => item);

    if (isInCart !== -1) {

alert("Producto ya agregado!");
    } else {
newCart.push(item);
setCart(newCart);
    }
}

function removeItem(itemid) {}

function clear() {}

function getTotalItemsInCart() {
    let total = 5;
    return cart.length;
}

function getTotalPriceInCart() {
    return;
}

return (
    <cartContext.Provider
    value={{ cart, test, addToCart, getTotalItemsInCart }}>
{props.children}
</cartContext.Provider>
);
}

export { CartProvider };