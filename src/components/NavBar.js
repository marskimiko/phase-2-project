import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

  const link = {
    width: '100px',
    paddinng: '12px',
    margin: '0 6px 6px',
    backgroundColor: 'blue',
    textDecoration: 'none',
    color: 'orange',
  }
  
  return (
  <div className="navbar">
    <li><NavLink to="/" style={link} exact activeStyle={{background: 'darkblue'}}>Home</NavLink></li>
    <li><NavLink to="/add" style={link} exact activeStyle={{background: 'darkblue'}}>Add Music</NavLink></li>
    <li><NavLink to="/about" style={link} exact activeStyle={{background: 'darkblue'}}>About</NavLink></li>
  </div>
  )
}

export default NavBar;