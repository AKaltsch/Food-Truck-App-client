import React, { useState } from "react";

function PlaceForm() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [artistName, setArtistName] = useState("");

  const handleSubmit = () => {
    console.log("Title:" + title);
  };

  return (
    <div>
      <h1>PlaceForm</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Image URL</label>
          <input
            type="url"
            name="imageUrl"
            id="imageUrl"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Artist Name</label>
          <input
            type="text"
            name="artistName"
            id="artistName"
            onChange={(e) => setArtistName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PlaceForm;
