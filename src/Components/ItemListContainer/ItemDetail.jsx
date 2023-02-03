// import React from "react";
import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css"; 
// import Button from "../Button/Button";

function ItemDetail({ title, imgurl, category, price}) {
  const [countInCart, setCountInCart ] = useState(0);

  function handleAddToCart(count) {

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
      <ItemCount onAddToCart={handleAddToCart} />
        <a href="/cart">Ir al carrito</a>
    </div>
  );
}

export default ItemDetail;