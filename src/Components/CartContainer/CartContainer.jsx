import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import "./cart.css";

function CartContainer() {
  const { cart } = useContext(cartContext);

  console.log(cart.length);

  return (

    // <div>
    //   {cart.map((itemInCart) => (
    //     <div>
    //       <h2>{itemInCart.title}</h2>
    //       <h4>{itemInCart.price}</h4>
    //       <h4>{itemInCart.count}</h4>
    //       <Button onClick={() => removeItem(itemInCart)} color="red">
    //         X
    //       </Button>
    //     </div>
    //   ))}
    //   <p>El total de tu compra es de: ${getTotalPriceInCart()}</p>
    //   <Button>Vaciar Carrito</Button>
    //   <Button>Finalizar Compra</Button>
    // </div>
    <>
    <h1>Tu Carrito</h1>

    <table className="cartList">
      <thead className="cartList_head">
        <tr className="cartList_row">
          <th>Miniatura</th>
          <th>Titulo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Remover</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id} className="cartList_row">
            <td>
              <img height={50} src={item.imgurl} alt={item.title} />
            </td>
            <td>{item.title}</td>
            <td>$ {item.price}</td>
            <td>{item.count}</td>
            <td>
              <Button color="#c63224" onClick={item.removeItem}>
                X
              </Button>
            </td>
            <th>$ --,--</th>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="cartList_detail">
      <h4>El total de tu compra es de $ --,--</h4>
    </div>
  </>
);
}

export default CartContainer;