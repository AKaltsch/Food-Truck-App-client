import React, { useState } from "react";
import MyPlace from "./MyPlace";

function MyPlaces({ places, user, deletePlace }) {
  console.log(user);
  const myPlaces = places.filter((place) => place.userId === user._id);

  return (
    <div className="page-header">
      <h1>My Places</h1>
      <br />
      <div className="flex-container">
        {myPlaces.map((place) => {
          return (
            <MyPlace
              key={place._id}
              productId={place._id}
              title={place.title}
              artistName={place.artistName}
              imageUrl={place.imageUrl}
              deletePlace={deletePlace}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyPlaces;
