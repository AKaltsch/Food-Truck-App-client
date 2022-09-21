import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function Place({ title, artistName }) {
  //useParams will make a key with value of id and return an object with all of the custom parameters we defined in the route

  // this is how you grab objects out of the outlets context
  const obj = useOutletContext();

  return (
    <div>
      <h1>{title}</h1>
      <h4>{artistName}</h4>
    </div>
  );
}

export default Place;
