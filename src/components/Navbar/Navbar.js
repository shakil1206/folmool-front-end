import React from 'react';
import './Navbar.css';
import logo from './../../Images/logo.JPG';
import menu from './../../Images/Menu.JPG';

const Navbar = () => {
    return (
        <div className="topNav">
            <a href="/"> <img src={logo} alt="Folmool logo" /></a><img src={menu} alt="Menu" />
        </div>
    );
};

export default Navbar;