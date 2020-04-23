import React from "react";

export default ({ location }) => (
  <section className="location">
    <h3 className="location__address">{location.address}</h3>
    <div className="location__sqFeet">{location.squareFootage}sqft</div>
    <div className="location__handicap">
      Handicap Accessible:{location.handicapAccessible ? " true" : " false"}
    </div>
  </section>
);
