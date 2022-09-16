import React, { useState } from "react";
import axios from "axios";

function PlaceForm() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [artistName, setArtistName] = useState("");

  const submitPlace = () => {
    axios
      .post("http://localhost:4000/placeform", {
        title: title,
        imageUrl: imageUrl,
        artistName: artistName,
      })
      .then((result) => {
        result.redirect("/");
      });
  };

  return (
    <div>
      <h1>PlaceForm</h1>
      <form>
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
        <button type="submit" onClick={submitPlace}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PlaceForm;
