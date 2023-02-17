import { useState } from "react";
import style from "./SearchBar.module.css"



export default function SearchBar(props) {

   const [text,setText] = useState("");

   //voy a necesitar una funcion que maneje cuando haya una modificacion en el input
   
   const handleChange = (event) => { //que guarde en el estado dentro del evento lo que venga en su valor
   console.log(event.target.value)
      setText(event.target.value);   
   } 


   return (
      <div className={style.inputCompleto}>
          <input className={style.buscar} type='search' value={text} onChange={handleChange}/> {/* //va a mostrar lo que se escriba y lo que se guarde en el estado. Onchange cuando haya un cambio se ejecute la handlePersonaje */}
          {/* <button onClick={props.onSearch}>Agregar</button> */}
          <button className={style.button} onClick={()=>{props.onSearch(text)}}>Agregar</button>
      </div>
   );
}
