import React from "react";
import "./index.css";
import Coruscant from "../../../public/planets/Coruscant.bmp";

export default function Bar() {
  return (
    <div className="Bar_container">
      <div className="content flex">
        <div>
          <h1>Coruscant</h1>
          <h4>Capital Planet of The Republic</h4>
        </div>
        <div>
          <button>Learn More</button>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}
