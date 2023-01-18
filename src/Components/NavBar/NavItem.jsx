import './navbar.css';

const NavItem = ( { children, href }) => {

return (
    <li class="nav-item">
    <a href={href}>{children}</a>
    </li>
);
};
export default NavItem;
