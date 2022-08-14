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
      </ul>
    </nav>
  );
}

export default Navbar;
