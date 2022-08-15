import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./auth-components/Login";
import Signup from "./auth-components/Signup";
import MyPlaces from "./auth-components/MyPlaces";
import PlaceRoutes from "./place-components/PlaceRoutes";
import NotFound from "./NotFound";

import "../styles.css";

function Navbar() {
  //state on not found page
  //useLocation is the only way to get state out of links
  const location = useLocation();
  return (
    <>
      <nav>
        <NavLink to="/" className="siteTitle">
          Food Truck Finder
        </NavLink>
        <ul>
          <NavLink to="/myplaces">My Places</NavLink>
          <NavLink to="/places">Places</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* When an element is passed to a parent component, it is rendered on all the ckild components */}
        {/* A * has to be added to the path in order for the routes in the element to be recognized */}
        <Route path="/places/*" element={<PlaceRoutes />} />

        <Route path="/myplaces" element={<MyPlaces />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Navbar;
