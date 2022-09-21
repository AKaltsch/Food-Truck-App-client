import axios from "axios";
import React, { useEffect, useState } from "react";
import Place from "./Place";

function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    console.log(localStorage);
    axios
      .get("http://localhost:4000/places")
      .then((result) => {
        setPlaces(result.data.places);
      })
      .then(console.log(places));
  }, []);

  return (
    <div>
      {places.map((place) => {
        return (
          <Place
            key={place._id}
            title={place.title}
            artistName={place.artistName}
          />
        );
      })}
    </div>
  );
}

export default Places;
