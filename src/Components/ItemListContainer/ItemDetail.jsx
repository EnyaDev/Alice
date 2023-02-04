// import React from "react";
import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../storage/cartContext";
import "./itemdetail.css"; 
import { Link } from "react-router-dom";
// import Button from "../Button/Button";

function ItemDetail({plants}) {
  const [countInCart, setCountInCart ] = useState(0);
const {title, imgurl, category, price}= plants
  const { addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    const plantsAndCount = { ...plants, count: count };
    addToCart(plantsAndCount);
    setCountInCart(count)
  }

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail_detail">
        <h1>{title}</h1>
        <h4 className="priceTag">$ {price}</h4>
        <p>{category}</p>
      </div>
      {countInCart === 0 ? <ItemCount onAddToCart={handleAddToCart} />
       : <Link to="/cart">Ir al carrito</Link>}
    </div>
  );
}

export default ItemDetail;