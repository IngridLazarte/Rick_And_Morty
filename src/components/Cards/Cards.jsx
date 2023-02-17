import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props; //recibe a character por props, viene de la funcion principal app

   return  (<div className={style.container}>
      {
      characters.map(({name,species,gender,image,onClose,id}) => {
      
      return   <Card 
                  name={name}
                  species={species}
                  gender={gender}
                  image ={image}
                  onClose={() => window.alert("Emulamos que se cierra la card")}
                  key={id}
                  id={id}
      
                 
      
         />
               
      })
      
      }
         </div>)

      
   
   
}

