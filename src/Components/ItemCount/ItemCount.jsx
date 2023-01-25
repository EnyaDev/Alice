import { useState } from "react";
import Button from "../Button/Button";
import "./itemcount.css";

function ItemCount({ onAddToCart }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubstract() {
    setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <small>Agregar Plantitas</small>
      <div className="itemcount_control">
        <Button onClick={handleSubstract}>-</Button>
        <span className="itemcount_count">{count}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>

      <div className="itemcount_btns">
        <Button onClick={() => onAddToCart(count)}>Agregar al carrito</Button>
      </div>
    </div>
  );
}

export default ItemCount;