import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function Place() {
  //useParams will make a key with value of id and return an object with all of the custom parameters we defined in the route
  const { id } = useParams();

  // this is how you grab objects out of the outlets context
  const obj = useOutletContext();

  return (
    <div>
      <h1>
        Place {id} {obj.hello}
      </h1>
    </div>
  );
}

export default Place;
