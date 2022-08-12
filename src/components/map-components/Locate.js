import React from "react";

function Locate({ panTo }) {
  const onClick = () => {
    // props are (successfunc, errorfunc, options)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
    );
  };

  return (
    <button className="locate" onClick={onClick}>
      <img
        src="https://freesvg.org/storage/img/thumb/bussola-mauro-olivo-01.png"
        alt="add compass pic later"
      />
    </button>
  );
}

export default Locate;
