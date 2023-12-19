import { useState } from "react";
import { Dropdown } from "./Dropdown";

import './Navbar.css'

export const MenuItems = ({ items }) => {
    const [visible, setVisible] = useState(false);

    return(
        <li className="pageText"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}>
            <a className="dropdown">
                {items.title}
            </a>
            {visible && (<Dropdown submenus={items.submenu}/>)}
        </li>
    );
};