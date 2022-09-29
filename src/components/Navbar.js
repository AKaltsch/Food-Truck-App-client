import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Login from "./auth-components/Login";
import Signup from "./auth-components/Signup";
import MyPlaces from "./auth-components/MyPlaces";
// import PlaceRoutes from "./place-components/PlaceRoutes";
import Places from "./place-components/Places";
import NotFound from "./NotFound";
import Map from "./Map";

import "../navbar.css";

function Navbar({
  places,
  setPlaces,
  postLogin,
  handleLogout,
  postSignup,
  user,
  deletePlace,
}) {
  //state on not found page
  //useLocation is the only way to get state out of links
  const location = useLocation();

  return (
    <div>
      <header>
        <nav className="navbar">
          <ul className="nav__links">
            <span role="img" aria-label="emoji">
              🚚
            </span>
            <li>
              <NavLink to="/">Map</NavLink>
            </li>
            <li>
              <NavLink to="/places">Places</NavLink>
            </li>
            {localStorage.token ? (
              <li>
                <NavLink to="/myplaces">My Places</NavLink>
              </li>
            ) : null}
            <li>
              {!localStorage.token ? (
                <button>
                  <NavLink className="cta" to="/login">
                    Login
                  </NavLink>
                </button>
              ) : (
                <button>
                  <NavLink to="/login" onClick={handleLogout}>
                    Logout
                  </NavLink>
                </button>
              )}
            </li>
          </ul>
        </nav>
        {location.state}
      </header>
      <Routes>
        <Route
          path="/"
          element={<Map places={places} setPlaces={setPlaces} />}
        />

        {/* When an element is passed to a parent component, it is rendered on all the ckild components */}
        {/* A * has to be added to the path in order for the routes in the element to be recognized */}
        {/* <Route path="/places" element={<PlaceRoutes />} /> */}
        <Route path="/places" element={<Places places={places} />} />

        <Route
          path="/myplaces"
          element={
            <MyPlaces places={places} user={user} deletePlace={deletePlace} />
          }
        />

        <Route path="/login" element={<Login postLogin={postLogin} />} />
        <Route path="/signup" element={<Signup postSignup={postSignup} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Navbar;
