import Button from "../Button/Button";

function Card(props){

    return(
        <div>
        <h3>{props.name}</h3>
        <br/>
        <img height="300px" src={props.img} alt={props.name} />
        <h3>${props.price}</h3>
        <small>
            {props.description}
        </small>
        <Button></Button>
    </div>
    );
}

export default Card;