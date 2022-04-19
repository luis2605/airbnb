import React from "react";
import "./header.css";
import Logo from "./img/airbnb 1.png";

export default function Header(){
    return(
        <div className="header__container">
            <img className="logo" src={Logo} alt="logo from airbnb"></img>


        </div>
    )
}