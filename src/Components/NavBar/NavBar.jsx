  import { useContext } from "react";

  import NavItem from "./NavItem";
  import "./navbar.css";
  import { Link } from "react-router-dom";
  import Button from "../Button/Button";
  import { cartContext } from "../storage/cartContext";
  import CartWidget from "./CartWidget";
  
  function NavBar(props) {
    const context = useContext(cartContext);
  
    function handleSubmit(evt) {
      evt.preventDefault();
      let user = evt.target.elements[0].value;
      props.onLogin(user);
    }
    return (
      <nav>
        <ul className="nav-menu">
          <NavItem to="/"> Alice's Garden </NavItem>
          <Link to="/category/Interiores">Interiores</Link>
          <Link to="/category/Exteriores">Exteriores</Link>
          <Link to="/category/Cactus y Suculentas">Cactus y Suculentas</Link>
  
          <form onSubmit={handleSubmit}>
            Iniciar sesión
            <input name="user"></input>
          </form>
          <Button onClick={props.onLogout}>Log Out</Button>

          <Link to="/cart">
            <CartWidget />
          </Link>
        </ul>
      </nav>
    );
  }
  export default NavBar;