import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  
  return (
  <div className="topnav">
    <NavLink to="/" exact activeStyle={{background: 'yellowgreen'}}>Home</NavLink>
    <NavLink to="/add" exact activeStyle={{background: 'yellowgreen'}}>Add Music</NavLink>
    <NavLink to="/about" exact activeStyle={{background: 'yellowgreen'}}>About</NavLink>
  </div>
  )
}

export default NavBar;