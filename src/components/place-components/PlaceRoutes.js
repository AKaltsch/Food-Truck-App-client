import React from "react";
import { Routes, Route } from "react-router-dom";
import PlaceLayout from "./PlaceLayout";
import Places from "./Places";
import Place from "./Place";

function PlaceRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<PlaceLayout />}>
          <Route index element={<Places />} />
          <Route path=":id" element={<Place />} />
        </Route>
      </Routes>
    </div>
  );
}

export default PlaceRoutes;
