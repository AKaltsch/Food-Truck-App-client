import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Login from "./auth-components/Login";
import Signup from "./auth-components/Signup";
import MyPlaces from "./auth-components/MyPlaces";
import PlaceRoutes from "./place-components/PlaceRoutes";
import NotFound from "./NotFound";

import "../navbar.css";
import PlaceForm from "./place-components/PlaceForm";

function Navbar() {
  //state on not found page
  //useLocation is the only way to get state out of links
  const location = useLocation();
  return (
    <div>
      <header>
        <nav>
          <ul className="nav__links">
            <span role="img" aria-label="emoji">
              🚚
            </span>
            <li>
              <NavLink to="/">Map</NavLink>
            </li>
            <li>
              <NavLink to="/placeform">Place Form</NavLink>
            </li>
            <li>
              <NavLink to="/myplaces">My Places</NavLink>
            </li>
            <li>
              <NavLink to="/places">Places</NavLink>
            </li>
            <li>
              <button>
                <NavLink className="cta" to="/login">
                  Login
                </NavLink>
              </button>
            </li>
          </ul>
        </nav>
        {location.state}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* When an element is passed to a parent component, it is rendered on all the ckild components */}
        {/* A * has to be added to the path in order for the routes in the element to be recognized */}
        <Route path="/places/*" element={<PlaceRoutes />} />

        <Route path="/myplaces" element={<MyPlaces />} />
        <Route path="/placeform" element={<PlaceForm />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Navbar;
