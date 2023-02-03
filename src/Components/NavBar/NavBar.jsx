import { useContext } from "react";
import NavItem from "./NavItem";
import Button from "../Button/Button";
import './navbar.css';
import { Link } from "react-router-dom";
// import CartWidget from "./CartWidget"
import { cartContext } from "../storage/cartContext";

function NavBar(props) {
  const context = useContext(cartContext);
  context.test();

  function handleSubmit(evt) {
    evt.preventDefault();
    let user = evt.target.elements[0].value;
    console.log(user);
    props.onLogin(user);
  }

    return (
      <nav>
        <ul className="nav-menu">
          <NavItem className="nav-header" to="/"> Alice's Garden </NavItem>
          <Link className="nav-link" to="/category/Interiores">Interiores</Link>
          <Link  className="nav-link" to="/category/Exteriores">Exteriores</Link>
          <Link className="nav-link" to="/category/Cactus y Suculentas">Cactus y Suculentas</Link>
          <Link className="nav-link" to="/cart">
            <span>🛒</span>
          </Link>
  
          <Button onClick={props.onLogout}>Log Out: {context.user}</Button>
  
          <form onSubmit={handleSubmit}>
            Iniciar sesión
            <input name="user"></input>
          </form>

        </ul>
      </nav>
    );
  }

  export default NavBar;


