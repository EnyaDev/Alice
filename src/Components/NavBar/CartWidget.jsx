import CartWidget from "./CartWidget"

function NavBar() {
    return (
    <nav>
        <ul>
        <li>
            <a href="/">
            <h4>Alice's Wonderland</h4>
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
        {<CartWidget></CartWidget>}
        <span>🛒</span>
    </nav>
    );
}

export default NavBar;