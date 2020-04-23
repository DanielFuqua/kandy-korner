import React from "react";

export default ({ employee, location }) => (
  <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__location">Location: {location.businessName}</div>
    <div className="employee__location">
      Title: {employee.isManager ? "Kind King Kandy Maker" : "Oompa Loompa"}
    </div>
    <div className="employee__location">
      Hustle: {employee.fullTime ? "Hustlin" : "Soft"}
    </div>
    <div className="employee__location">
      Hourly Rate: ${employee.hourlyRate}
    </div>
  </section>
);
