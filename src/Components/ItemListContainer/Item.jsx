import { useState } from "react";
import Button from "../Button/Button";

function Item(props){
const {title, imgurl, detail, price} = props.item;

    return(
        <div class="Item">
        <h3 >{title}</h3>
        <br/>
        <img class="Item-img-top" height="300px" src={imgurl} alt={title} />
        <h3>${price}</h3>
        <small >
            {detail}
        </small>
        <Button padding="15px" color="lightblue">Ver Mas</Button>
    </div>
    );
}

export default Item;