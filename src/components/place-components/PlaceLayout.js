import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

function PlaceLayout() {
  //use SearchParams works just like useState
  const [searchParams, setSearchParams] = useSearchParams({ num: 3 });
  const number = searchParams.get("num");
  return (
    <div>
      <h1>Places</h1>
      <NavLink to="/places/1">Place 1</NavLink>
      <br />
      <NavLink to="/places/2">Place 2</NavLink>
      <br />
      <NavLink to={`/places/${number}`}>Place {number}</NavLink>
      <br />
      <NavLink to="/places/new">Add a new place</NavLink>
      {/* Outlet has to be passed on parent components like this for the links to render thier routes */}
      {/* Objects passed into context will be passed to all the children components */}
      <Outlet context={{ hello: "World" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ num: e.target.value })}
      />
    </div>
  );
}

export default PlaceLayout;
