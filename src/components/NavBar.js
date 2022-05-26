import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  
  return (
  <div className="topnav">
    <a><NavLink to="/" exact activeStyle={{background: 'yellowgreen'}}>Home</NavLink></a>
    <a><NavLink to="/add" exact activeStyle={{background: 'yellowgreen'}}>Add Music</NavLink></a>
    <a><NavLink to="/about" exact activeStyle={{background: 'yellowgreen'}}>About</NavLink></a>
  </div>
  )
}

export default NavBar;