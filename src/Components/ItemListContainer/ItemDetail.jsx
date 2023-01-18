import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlants } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [plants, setPlants] = useState({ title: "loading", price: "--,--" });

  let params = useParams();

  function handleAddToCart(count) {
    console.log(
      `Agregaste al carrito ${count} unidades del producto ${plants.title}`
    );
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