import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
// import { AnimalContext } from "../animal/AnimalProvider"
// import { CustomerContext } from "../customer/CustomerProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { EmployeeProvider } from "../employee/EmployeeProvider"
import { getLocations } from "../location/LocationProvider"
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee, getEmployees, updateEmployee, getEmployeeById } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    // const { customers, getCustomers } = useContext(CustomerContext)

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [employee, setEmployee] = useState({
     name: "",
     locationId: 0,
    //   customerId: 0
    });
    const [isLoading, setIsLoading] = useState(true);
    const {employeeId} = useParams();
    const history = useHistory();

     //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newEmployee = { ...employee }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newEmployee[event.target.id] = event.target.value
      // update state
      setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = () => {
      if (parseInt(employee.locationId) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (employeeId){
          //PUT - update
          updateEmployee({
              id: employee.id,
              name: employee.name,
              locationId: parseInt(employee.locationId),
              customerId: parseInt(employee.customerId)
          })
          .then(() => history.push(`/employees/detail/${employee.id}`))
        }else {
          //POST - add
          addEmployee({
              name: employee.name,
              locationId: parseInt(employee.locationId),
              customerId: parseInt(employee.customerId)
          })
          .then(() => history.push("/employees"))
        }
      }
    }
    useEffect(() => {
      getEmployees().then(getLocations).then(() => {
        if (employeeId){
          getEmployeeById(employeeId).then(employee => {
            setEmployee(employee)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select onChange={handleControlledInputChange} defaultValue={employee.locationId} name="locationId" id="locationId" className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          {/* <fieldset>
              <div className="form-group">
                  <label htmlFor="customerId">Customer: </label>
                  <select defaultValue={animal.customerId} name="customer" id="customerId" className="form-control" >
                      <option value="0">Select a customer</option>
                      {customers.map(c => (
                          <option key={c.id} value={c.id}>
                              {c.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset> */}
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleClickSaveEmployee()
          }}>
        {employeeId ? <>Save Employee</> : <>Add Employee</>}</button>
      </form>
    )
}