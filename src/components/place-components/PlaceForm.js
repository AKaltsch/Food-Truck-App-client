import React, { useState } from "react";
import axios from "axios";

function PlaceForm({ setPlaces, places, setMarker, marker, setNewMarker }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [artistName, setArtistName] = useState("");

  const submitPlace = () => {
    axios
      .post("http://localhost:4000/placeform", {
        title: title,
        imageUrl: imageUrl,
        artistName: artistName,
        lat: marker.lat,
        lng: marker.lng,
        dateUploaded: marker.dateUploaded,
      })
      .then((result) => {
        result.redirect("/places");
      });
  };

  return (
    <div>
      <h1>PlaceForm</h1>
      <form onSubmit={submitPlace}>
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
        <div>
          <button className="button" type="submit">
            Submit
          </button>
          <button
            className="button"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setNewMarker(false);
              setMarker(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlaceForm;
