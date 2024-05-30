import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import './Navbar.css';
import { MenuItemsData } from "./MenuItemsData";
import { MenuItems } from "./MenuItems";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="inNav">
                <Link to="/" className="linkHome">
                    <img className="homeLogo" src='/logo.png' alt="Logo"/>
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