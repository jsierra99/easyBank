import React, { useState } from 'react';
import "../css/header.scss";
import logo from "../img/logo.svg";
import hamburger from "../img/icon-hamburger.svg";
import close from "../img/icon-close.svg";

const Header = () => 
{
    const [show, setShow] = useState(false);

    return (
        <header className={show ? "show" : ""}>
            <img src={logo}  className="logo" alt="logo" />
            <img src={close}  onClick={() => setShow(!show)} 
            className={show ? "open x" : "close x"} alt="closed" />
            <img  onClick={() => setShow(!show)} 
            className={show ? "close_icon hamburger" : "open_ham hamburger"} src={hamburger} alt="hamNav" />
            <nav className={show ? "show" : ""}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#careers">Careers</a></li>
                </ul>
            </nav>
            <button className="btn btn_invite">Request Invite</button>
        </header>
    )
}

export default Header
