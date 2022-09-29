import React, { useState } from "react";

function MyPlace({ title, artistName, imageUrl, deletePlace, productId }) {
  const handleDeletePlace = () => {
    console.log("deleting");
    deletePlace(productId);
  };

  return (
    <div className="place">
      <h1>{title}</h1>
      <h4>{artistName}</h4>
      <div>
        <img src={imageUrl} alt="unable to load" width="auto" height="150" />
      </div>
      <div>
        <button>Edit</button>
        <button onClick={handleDeletePlace} style={{ backgroundColor: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default MyPlace;
