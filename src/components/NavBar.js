import React from "react";
import { NavLink } from "react-router-dom";
 const links = {
display:"flex",
flexDirection: "row",
gap:"1rem"
 }
function NavBar() {
  return (
    <div className="navbar" style={links}>
      <NavLink  to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );
}

export default NavBar;
