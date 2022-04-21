import React from "react"
import "./card.css"




import Star from "./img/Star 1.png"

export default function Card(props){
    console.log(props.x.openSpots)
   let badgeText
   if(props.x.openSpots === 0){
       badgeText="SOLD OUT"
   }else if(props.x.location === "Online"){
       badgeText="ONLINE"
   }else{
       badgeText=""
   }
   
   
    return(
    
        
        <div className="card">
            {badgeText != 0 && <div className="card__badge">{badgeText}</div>}
            <img className="card__photo" src={props.x.coverImg} alt="photo1"></img>
            <div className="card__stats">
                <img className="card__star" src={Star} alt="star"></img> 
                <span>{props.x.stats.rating}</span>
                <span className="gray">({props.x.stats.reviewCount}) - </span>
                <span className="gray">{props.x.location}</span>
            </div>
            <p>{props.x.title}</p>
            <p><span className="bold">From {props.x.price}</span> /person</p>
        </div>
    )
}