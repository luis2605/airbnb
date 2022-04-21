import React from "react";
import "./HeroSection.css"
import MainImage from "./img/Group 77.png"

export default function HeroSection(){
    return(
         <div className="hero__container">
            <img className="image1" src={MainImage} alt="images of happy costumers"></img>
            <h1 className="titel">Online Experiences</h1>
            <p className="hero__text-1">Join unique interactive activities led by one-of-a-kind hosts.
</p>

         </div>

    )
}