import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPlants } from "../../services/firebase";
import { cartContext } from "../storage/cartContext";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [plants, setPlants] = useState({ title: "loading", price: "--,--" });
  const [isInCart, setIsInCart] = useState(false);

  let params = useParams();

  const { cart, addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    setIsInCart(true);
    const plantsAndCount = { ...plants, count: count };
    addToCart(plantsAndCount);
  }

  function checkStock() {
    let itemInCart = cart.find((item) => item.id === plants.id);

    let stockUpdated = plants.stock;

    if (itemInCart) {
      stockUpdated = plants.stock - itemInCart.count;
    }
    return stockUpdated;
  }

  useEffect(() => {
    getPlants(params.itemid)
      .then((respuesta) => {
        setPlants(respuesta);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <ItemDetail
      isInCart={isInCart}
      onAddToCart={handleAddToCart}
      title={plants.title}
      imgurl={plants.imgurl}
      category={plants.category}
      price={plants.price}
      stockUpdated={checkStock()}
    />
  );
}
export default ItemDetailContainer;