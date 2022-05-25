import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
  <div className="navbar">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/add">Add Music</NavLink></li>
  </div>
  )
}

export default NavBar;