import React from "react";
// import { useOutletContext } from "react-router-dom";

function Place({ title, artistName, imageUrl }) {
  //useParams will make a key with value of id and return an object with all of the custom parameters we defined in the route

  // this is how you grab objects out of the outlets context
  // const obj = useOutletContext();

  return (
    <div className="place">
      <h1>{title}</h1>
      <h4>{artistName}</h4>
      <div>
        <img src={imageUrl} alt="unable to load" width="auto" height="150" />
      </div>
    </div>
  );
}

export default Place;
