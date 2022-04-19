import React from "react"
import "./card.css"

import Star from "./img/Star 1.png"

export default function Card(props){
    return(
        <div className="card">
            <img className="card__photo" src={props.img} alt="photo1"></img>
            <div className="card__stats">
                <img className="card__star" src={Star} alt="star"></img> 
                <span>{props.rating}</span>
                <span className="gray">({props.reviews}) - </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.name}</p>
            <p><span className="bold">From {props.price}</span> /person</p>
        </div>
    )
}