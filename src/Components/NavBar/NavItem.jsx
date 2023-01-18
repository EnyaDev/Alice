const NavItem = ( { children, href }) => {

return (
    <li>
    <a href={href}>{children}</a>
    </li>
);
};
export default NavItem;
