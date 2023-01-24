import { useState } from "react";
import Button from "../Button/Button";
// import "../card.css"
import './card.css';

function Item(props){
const {title, imgurl, detail, price} = props.item;

    return(
        <div className="card-container">
        <h3 >{title}</h3>
        <br/>
        <img className="card-img" src={imgurl} alt={title} />
        <h3>${price}</h3>
        <small >
            {detail}
        </small>
        <Button padding="15px" color="lightblue">Ver Mas</Button>
    </div>
    );
}

export default Item;