import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="siteTitle">
        Food Truck Finder
      </Link>
      <ul>
        <Link to="/myplaces">My Places</Link>
        <Link to="/places">Places</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
