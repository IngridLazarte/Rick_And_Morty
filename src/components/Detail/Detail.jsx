import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Detail (props) {


const [character, setCharacter] = useState({});
const { detailId } = useParams(); 


//montaje y cuando cambie el id
useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

return (<div>

<div>
<h1>Name:{character.name}</h1>
<span>Status:{character.status}</span><br/>
<span>Specie:{character.species}</span><br/>
<span>Gender:{character.gender}</span><br/>
<img src={character.image} alt={character.image} width="300px"></img>
</div>


    </div>)  
}