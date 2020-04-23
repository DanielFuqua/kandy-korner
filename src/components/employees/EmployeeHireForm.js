/*
Create a form for hiring employees. Display the form in a modal when the user clicks on an element labeled "Hire Employee". You must be able to choose a location when filling out the form. An employee should have the following information provided.

Name (string)
Location (foreign key)
isManager (boolean)
Full time (boolean)
Hourly rate (number)
Once the user fills out the form, a new employee object representation should be created, then use fetch to POST that object to your database. When the saving process is complete, make sure the dialog closes and the employee shows up in the list.

Make sure that each employee HTML representation displays the name of the location in which she works instead of the foreign key.
*/

import React, { useContext, useRef, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../locations/LocationProvider";
import "./Employees.css";

export default (props) => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const name = useRef();
  const location = useRef();
  const hourlyRate = useRef();
  const [isFullTime, setIsFullTime] = useState(false);
  const [isManager, setIsManager] = useState(false);

  const constructNewEmployee = () => {
    const locationId = parseInt(location.current.value);

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      addEmployee({
        name: name.current.value,
        locationId: locationId,
        isManager: isManager,
        fullTime: isFullTime,
        hourlyRate: hourlyRate.current.value,
      }).then(props.toggler);
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name: </label>
          <input
            type="text"
            id="employeeName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Employee Name"
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="employeeLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.businessName}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="isManager">Assign this employee a position: </label>
          <div>
            <label>King Kandy Maker</label>
            <input
              label="King Kandy Maker"
              type="radio"
              checked={isManager === true}
              onClick={() => setIsManager(true)}
              value={true}
            />
          </div>
          <div>
            <label>Oompa Loompa</label>
            <input
              label="Oompa Loompa"
              type="radio"
              checked={isManager === false}
              onClick={() => setIsManager(false)}
              value={false}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="isFullTime">Is this employee full time: </label>
          <div>
            <label>Full-Time</label>
            <input
              label="Full-Time"
              type="radio"
              checked={isFullTime === true}
              onClick={() => setIsFullTime(true)}
              value={true}
            />
          </div>
          <div>
            <label>Part-Time</label>
            <input
              label="Part-Time"
              type="radio"
              checked={isFullTime === false}
              onClick={() => setIsFullTime(false)}
              value={false}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeHourlyRate">Hourly Rate: </label>
          <input
            type="text"
            id="employeeHourlyRate"
            ref={hourlyRate}
            required
            autoFocus
            className="form-control"
            placeholder="Employee Hourly Rate"
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewEmployee();
        }}
        className="btn btn-primary"
      >
        Save Employee
      </button>
    </form>
  );
};
