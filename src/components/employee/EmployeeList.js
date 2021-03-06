import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
// import { Employee } from "./Employee";
import { getEmployees } from "./EmployeeProvider"
import "./Employee.css";
import { useHistory } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"
import { Employee } from "./Employee"

export const EmployeeList = ({ history }) => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext)

  history = useHistory();
  // useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  return (
    <>
      <h2>Employees</h2>
      <button
        onClick={() => {
          history.push("/employees/create");
        }}
      >
        Add Employee
      </button>
      <div className="employees">
        {employees.map((employee) => {
          const clinic = locations.find((l) => l.id === employee.locationId);
          return (<Employee key={employee.id} employee={employee} />);
        })}
      </div>
    </>
  );
};
