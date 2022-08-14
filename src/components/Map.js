import React, { useState, useCallback, useRef } from "react";
import MapStyles from "./map-components/MapStyles";
import { formatRelative } from "date-fns";

import Search from "./map-components/Search";
import Locate from "./map-components/Locate";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100vw",
  height: "90vh",
};

const center = {
  lat: 38.538802,
  lng: -122.469244,
};

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
};

////////////////////// function start ///////////////////
function Map() {
  // put libraries in state to avoid performance warning (rerender)
  const [libraries] = useState(["places"]);

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [map, setMap] = useState(null);

  const mapRef = useRef();

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    setMap(map);
    mapRef.current = map;
  }, []);

  ////same as onLoad function above ---> Look into diffference btwn the 2!!!!!!!
  // const onLoad = useCallback((map) => {
  //   mapRef.current = map;
  // }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onMapClick = useCallback((e) => {
    setMarkers((marks) => [
      ...marks,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(13);
  }, []);

  if (loadError) {
    return "Error loading maps";
  }

  if (!isLoaded) {
    return "Loading Maps...";
  }
  return (
    <div>
      <Search panTo={panTo} />
      <Locate panTo={panTo} />

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={options}
        onClick={onMapClick}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            draggable={true}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>testing infobox</h2>
              <p>{formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

export default Map;
