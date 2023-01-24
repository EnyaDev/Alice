import NavItem from "./NavItem";
import './navbar.css';
// import CartWidget from "./CartWidget"


function NavBar() {
  const links = [
    { title: "Interiores", url: "/interiores" },
    { title: "Exteriores", url: "/exteriores" },
    { title: "Cactus y Suculentas", url: "/cactus y suculentas" },
  ];

  return (
    <nav>
    <ul className="nav-menu">
      <NavItem href="/">Alice's Garden</NavItem>

{links.map((elemento) => {
  elemento.url = "/";
  return <NavItem href={elemento.url}>{elemento.title}</NavItem>;
})}
      </ul>
      {/* {<CartWidget></CartWidget>} */}
      <span>🛒</span>

    </nav>
  );
}

export default NavBar;
