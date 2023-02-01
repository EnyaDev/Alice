import { useState, useEffect } from "react";

import Item from "./Item";
import Flex from "../Flex/Flex";
import obtenerProductos, {getPlantsByCategory,} from "../../services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [plants, setPlants] = useState([]);
  let { categoryid } = useParams();


  useEffect(() => {
    if (!categoryid) {
      obtenerProductos()
        .then((respuesta) => {
          setPlants(respuesta);
        })
        .catch((error) => alert(error));
    } else {
      getPlantsByCategory(categoryid).then((respuesta) => {
        setPlants(respuesta);
      });
    }
  }, [categoryid]);

return(
  <Flex> 
  {plants.map( (item)=> <Item key={item.id} item={item}/>)};
  </Flex>
  );
  }
  
  export default ItemListContainer;