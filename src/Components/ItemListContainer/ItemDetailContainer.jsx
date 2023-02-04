import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getPlants } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [plants, setPlants] = useState({ title: "loading", price: "--,--" });

  let params = useParams();

  useEffect(() => {
    getPlants(params.itemid)
      .then((respuesta) => {
        setPlants(respuesta);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <ItemDetail
      plants={plants}
    />
  );
}
export default ItemDetailContainer;