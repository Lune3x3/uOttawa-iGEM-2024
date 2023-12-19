import './Navbar.css'

export const Dropdown = ({ submenus }) => {
    return (
        <ul>
            {submenus.map((submenu, index) => (
                <li>
                    <a href={submenu.url} className="linkText">
                        {submenu.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}