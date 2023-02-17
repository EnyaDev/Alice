import { useState, useEffect } from "react";
import Item from "./Item";
import Flex from "../Flex/Flex";
import { getPlantsByCategory, getPlantsByKeyowrd } from "../../services/firebase";
import { obtenerProductos } from "../../services/firebase";
import { useParams } from "react-router-dom";
import "./alert.css";
import Loader from "../Loader/Loader";


function ItemListContainerSearch() {
  const [Plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alertText, setAlertText] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchFilterPlants, SetSearchFilterPlants] = useState([]);
  let { categoryid } = useParams();
  useEffect(() => {
    if (searchKeyword === "") {
      SetSearchFilterPlants([]);
      return;
    }

    getPlantsByKeyowrd(searchKeyword)
      .then((respuesta) => {
        if (respuesta.length === 0)
          throw new Error("No se encontraron productos para esa búsqueda");
        SetSearchFilterPlants(respuesta);
        setAlertText({
          text: "Se encontraron items según tu búsqueda",
          type: "info",
        });
      })
      .catch((error) => {
        setAlertText({ text: error.message, type: "danger" });
      })
      .finally(() => setIsLoading(false));
  }, [Plants, searchKeyword]);

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
        getPlantsByCategory(categoryid)
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
      }
    }, [categoryid]);
    function handleSearch(evt) {
      const keyword = evt.target.value;
      setSearchKeyword(keyword);
    }
    if (isLoading) {
      return <Loader size={120} color="#38603A" />;
    } else {
      return (
        <Flex column>
          <label>
            Buscar🔎: <input onChange={handleSearch}></input>
          </label>
          {alertText && (
            <div className="alert_container">
              <span className={`alert alert_${alertText.type}`}>
                {alertText.text}
              </span>
            </div>
          )}
          <Flex>
            {searchKeyword === ""
              ? Plants.map((itemIterado) => {
                  return <Item key={itemIterado.id} item={itemIterado} />;
                })
              : searchFilterPlants.map((itemIterado) => {
                  return <Item key={itemIterado.id} item={itemIterado} />;
                })}
          </Flex>
        </Flex>
      );
    }
  }

  
  export default ItemListContainerSearch;