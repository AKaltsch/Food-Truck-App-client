import React from "react";
import { useParams } from "react-router-dom";

function Place() {
  //useParams will make a key with value of id and return an object with all of the custom parameters we defined in the route
  const { id } = useParams();

  return (
    <div>
      <h1>Place {id}</h1>
    </div>
  );
}

export default Place;
