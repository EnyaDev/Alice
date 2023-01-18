import NavItem from "./NavItem";
// import CartWidget from "./CartWidget"


function NavBar() {
//   const links = [
//     { title: "Atuendos", url: "/atuendos" },
//     { title: "Calzado", url: "/calzado" },
//   ];

  return (
    <nav>
      <ul className="nav-menu">
      <a className="navbar-brand" href="/">
      <NavItem href="/">Alice's Closet</NavItem>
      </a>

        <NavItem href="/atuendos">Atuendos</NavItem>
        <NavItem href="/calzado">Calzado</NavItem>
        <NavItem href="/accesorios">Accesorios</NavItem>
      </ul>
      {/* {<CartWidget></CartWidget>} */}
      <span>🛒</span>
    </nav>
  );
}

export default NavBar;
