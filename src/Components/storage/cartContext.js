import { createContext, useEffect, useState, useContext } from "react";
import { useDeepCopy } from "../Hooks/UseDeepCopy";


export const cartContext = createContext({ cart: [] });

export function CartProvider(props) {
const [cart, setCart] = useState([]);
let newCart = useDeepCopy(cart);


function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    if (isInCart !== -1) {

    alert("Cuidado! item ya agregado");
    } else {
    newCart.push(item);
    setCart(newCart);
    }

}
function removeItem(itemid) {}
function clear() {
}

function getTotalItemsInCart() {
    let total = 5;
    return cart.length;
}

function getTotalPriceInCart() {
    let total = 1500;
    return total;
}

return (
    <cartContext.Provider
    
    value={{
        cart,
        addToCart,
        getTotalItemsInCart,
        getTotalPriceInCart,
        removeItem,
    }}
    >
    {props.children}
    </cartContext.Provider>
);
}

export function useCartContext() {
return useContext(cartContext);
}