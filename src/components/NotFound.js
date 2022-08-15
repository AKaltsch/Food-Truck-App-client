import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  //   useEffect doesnt need a dependency array when you use navigate
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "Page doesn't exist!" });
    }, 2000);
  });

  return (
    <div>
      <h1>Route not found!</h1>
    </div>
  );
}

export default NotFound;
