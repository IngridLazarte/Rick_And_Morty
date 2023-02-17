import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css"


export default function Card({name,species,gender,image,onClose,id}) {
   return (
      <div className={style.container}>
         <button onClick={onClose} className={style.closeButton}>X</button>

         <NavLink to={`/detail/${id}`}>
         <h2 className={style.name}>{name}</h2>
         </NavLink>
         <h2 className={style.species}>{species}</h2>
         <h2 className={style.gender}>{gender}</h2>
         <img  src={image} alt="" className={style.image}/> 
      </div>
   );
}
