import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";

export default function Nav(props) {

return(

<div style={{backgroundColor: "gray", padding: "0", border: "1px"}}>

<Link to="/home"><span>Home</span></Link>

<Link to="/about"><span>About</span></Link>

    <SearchBar onSearch={props.onSearch}></SearchBar> {/* //se lo paso a SearchBar.jsx como props */}


</div>

)

}