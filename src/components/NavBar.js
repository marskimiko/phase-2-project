import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
  <div className="navbar">
    <li><NavLink to="/">Home</NavLink></li>
  </div>
  )
}

export default NavBar;