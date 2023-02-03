import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPlants } from "../../services/mockService";
import { cartContext } from "../../storage/cartContext";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [plants, setPlants] = useState({ title: "loading", price: "--,--" });

  let params = useParams();
  const { addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    const plantsAndCount = { ...plants, count: count };
    addToCart(plantsAndCount);
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
      onAddToCart={handleAddToCart}
      title={plants.title}
      imgurl={plants.imgurl}
      category={plants.category}
      price={plants.price}
    />
  );
}
export default ItemDetailContainer;
