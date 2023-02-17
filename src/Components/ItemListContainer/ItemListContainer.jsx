import { useState, useEffect } from "react";

import Item from "./Item";
import Flex from "../Flex/Flex";
import { getPlantsByCategory } from "../../services/firebase";
import { obtenerProductos } from "../../services/firebase";
import { useParams } from "react-router-dom";
import Loader from "../Loaders/Loader";

function ItemListContainer() {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alertText, setAlertText] = useState();
  let { categoryid } = useParams();


  useEffect(() => {
    if (!categoryid) {
      obtenerProductos()
        .then((respuesta) => {
          setPlants(respuesta);
          setAlertText({
            text: "Items Cargados Correctamente",
            type: "default",
          });
        })
        .catch((error) => {
        setAlertText({ text: error, type: "danger" });
      })
      .finally(() => setIsLoading(false));
  } else {
      getPlantsByCategory(categoryid).then((respuesta) => {
        setPlants(respuesta);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
    }
  }, [categoryid]);
  if (isLoading) {
    return <Loader size={120} />;
  } else {
    return (
      <>
        <Flex>
          {alertText && (
            <div className="alert_container">
              <span className={`alert alert_${alertText.type}`}>
                {alertText.text}
              </span>
            </div>
          )}
          <Flex>
            {plants.map((itemIterado) => {
              return <Item key={itemIterado.id} item={itemIterado} />;
            })}
          </Flex>
        </Flex>
      </>
    );
  }
}

export default ItemListContainer;