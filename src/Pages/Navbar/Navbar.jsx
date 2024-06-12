import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import './Navbar.css';
import { MenuItemsData } from "./MenuItemsData";
import { MenuItems } from "./MenuItems";
import logo from "../../../public/logo.png"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="inNav">
                <Link to="/uottawa" className="linkHome">
                    <img className="homeLogo" src={logo} alt="Logo"/>
                    <p className="homeText">
                        Phytogene
                    </p>
                </Link>
                <ul className="pages">
                    {MenuItemsData.map((menu, index) => {
                        return <MenuItems items={menu} key={index}/>
                    })}
                </ul>
            </div>
        </nav>
    )
}