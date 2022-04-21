import React from "react"
import "./card.css"




import Star from "./img/Star 1.png"

export default function Card(props){
    console.log(props.openSpots)
   let badgeText
   if(props.openSpots === 0){
       badgeText="SOLD OUT"
   }else if(props.location === "Online"){
       badgeText="ONLINE"
   }else{
       badgeText=""
   }
   
   
    return(
    
        
        <div className="card">
            {badgeText != 0 && <div className="card__badge">{badgeText}</div>}
            <img className="card__photo" src={props.img} alt="photo1"></img>
            <div className="card__stats">
                <img className="card__star" src={Star} alt="star"></img> 
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) - </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span> /person</p>
        </div>
    )
}