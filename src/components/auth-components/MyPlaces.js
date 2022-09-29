import React, { useState } from "react";
import Place from "../place-components/Place";

function MyPlaces({ places, user }) {
  console.log(user);
  const myPlaces = places.filter((place) => place.userId === user._id);

  return (
    <div className="page-header">
      <h1>My Places</h1>
      <br />
      <div className="flex-container">
        {myPlaces.map((place) => {
          return (
            <Place
              key={place._id}
              title={place.title}
              artistName={place.artistName}
              imageUrl={place.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyPlaces;
