import React, { useState } from "react";
import { createOrder } from "../../services/firebase";
import { useCartContext } from "../storage/cartContext";
import Button from "../Button/Button";
import "./cart.css";
import { useNavigate } from "react-router-dom";


function CartContainer() {
  const [orderId, setOrderId] = useState();

  const { cart, getTotalPriceInCart } = useCartContext();

  function handleCheckout(evt) {
    const items = cart.map(({ id, price, title, count }) => ({
      id,
      price,
      title,
      count,
    }));

    const order = {
      buyer: {
        name: "Melissa",
        email: "mel@re.com",
        phone: 123456,
      },
      items: items, // id, title, price, count
      total: getTotalPriceInCart(),
      date: new Date(),
    };

    async function sendOrder() {
      let id = await createOrder(order);
      setOrderId(id);
    }
    sendOrder();
  }

  if (orderId)
    
  return (
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
                <Button color="#38603A" onClick={item.removeItem}>
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
      <Button onClick={handleCheckout}>Finalizar Compra</Button>
    </>
  );
}
export default CartContainer;