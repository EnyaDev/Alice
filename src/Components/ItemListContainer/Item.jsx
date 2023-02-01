// import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import './item.css';

function Item(props){
const {title, imgurl, category, price, id} = props.item;

    return(
        <div className="card-container">
        <div className="card-header">
        <h2>{title}</h2>
        </div>
        <br/>
        <img className="card-img" src={imgurl} alt={title} />
        <div className="card-detail">
        <h3 className="card-price">$ {price}</h3>
        <small>{category}</small>
        </div>
        <Link to={`/detalle/${id}`}>
        <Button padding="10px">Ver Mas</Button>
        </Link>
        <br></br>
    </div>
    )
}

export default Item;

