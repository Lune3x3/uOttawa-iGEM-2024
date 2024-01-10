import './Navbar.css'

export const Dropdown = ({ submenus }) => {
    return (
        <ul className='submenu'>
            {submenus.map((submenu, index) => (
                <div className='submenuItem'>
                    <a href={submenu.url} className="linkText">
                        {submenu.title}
                    </a>
                </div>
            ))}
        </ul>
    )
}