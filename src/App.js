import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
/* import characters, { Rick } from './data.js' */
import Nav from "./components/Nav/Nav.jsx"
import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail.jsx"



function App () {

//creo el estado de characters
const [characters,setCharacters] = useState([]);
//    este estado (characters) es el que le voy a pasar al componente Cards

function onSearch(text) {

  fetch(`https://rickandmortyapi.com/api/character/${text}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
} 
 

  return (
    <div className='App' style={{ padding: '25px' }}>

        <Nav //la Nav lo recibe a onSearch en Nav.jsx como prop
          onSearch={onSearch}
        />

        <Routes> {/* dejo Nav afuera para que se vea en todas las rutas */}

<Route path="/home" element={<Cards characters={characters} />}></Route>
<Route path="/about" element={<About />}></Route>
<Route path="/detail/:detailId" element={<Detail />}></Route>

        </Routes>
      



      <hr />

      </div>     
    
  )
}

export default App
