import React from "react";

export default ({ location }) => (
  <section className="location">
    <h3 className="location__address">{location.address}</h3>
    <div className="location__sqFeet">{location.squareFootage}</div>
    <div className="location__handicap">{location.handicapAccessible}</div>
  </section>
);
