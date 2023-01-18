// import CartWidget from "./CartWidget";

function NavBar() {
//   const links = [
//     { title: "Atuendos", url: "/atuendos" },
//     { title: "Calzado", url: "/calzado" },
//   ];

  return (
    <nav>
      <ul className="nav-menu">
        <li>
          <a href="/">
            <h4>Alice's Closet</h4>
          </a>
        </li>
        <li>
          <a href="/">Calzado</a>
        </li>
        <li>
          <a href="/">Atuendos</a>
        </li>
        <li>
          <a href="/">Accesorios</a>
        </li>
      </ul>
      {/* {<CartWidget></CartWidget>} */}
      <span>🛒</span>
    </nav>
  );
}

export default NavBar;
