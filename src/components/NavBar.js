import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

  // const link = {
  //   width: '100px',
  //   paddinng: '12px',
  //   margin: '0 6px 6px',
  //   backgroundColor: 'blue',
  //   textDecoration: 'none',
  //   color: 'orange',
  // }
  
  return (
  <div className="navbar">
    <a><NavLink to="/" exact activeStyle={{background: 'darkblue'}}>Home</NavLink></a>
    <a><NavLink to="/add" exact activeStyle={{background: 'darkblue'}}>Add Music</NavLink></a>
    <a><NavLink to="/about" exact activeStyle={{background: 'darkblue'}}>About</NavLink></a>
  </div>
  )
}

export default NavBar;