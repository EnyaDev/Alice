import { useState, useEffect } from "react";
import Item from "./Item";
import Flex from "../Flex/Flex";
import obtenerProductos from "../../services/mockService";

function ItemListContainer() {
  const [plants, setPlants] = useState([]);

useEffect(() => {

  obtenerProductos()
  .then((respuesta) => {
    setPlants(respuesta);
  })
  .catch((error) => alert(error));
}, []);

return(
<Flex> 
{plants.map( (item)=> <Item key={item.id} item={item}/>)};
</Flex>
);
}

export default ItemListContainer;