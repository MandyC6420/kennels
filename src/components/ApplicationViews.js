import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
// import { AnimalCard } from "./animal/AnimalCard.js";
import { CustomerCard } from "./customer/Customer.js";
// import { EmployeeCard } from "./employee/Employee.js";
import { AnimalProvider } from "./animal/AnimalProvider.js";
import { AnimalList } from "./animal/AnimalList.js";
import { EmployeeProvider } from "./employee/EmployeeProvider.js";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { CustomerProvider } from "./customer/CustomerDataProvider.js";
import { CustomerList } from "./customer/CustomerList";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { AnimalForm } from "./animal/AnimalForm";
import { LocationForm } from "./location/LocationForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { LocationCard } from "./location/LocationCard";
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      {/* <AnimalProvider>
      <LocationProvider>
        <CustomerProvider>
        <Route exact path="/animals">
          <AnimalList />
        </Route>
        </CustomerProvider>
    </LocationProvider>
      </AnimalProvider> */}

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
             {/* <Route exact path="/animals">
              <AnimalList />
            </Route> */}
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
            
              <Route exact path="/animals/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>
              <Route path="/animals/edit/:animalId(\d+)">
                <AnimalForm />
              </Route>
              <AnimalProvider>
              <Route exact path="/animals">
                <AnimalSearch />
                <AnimalList />
              </Route>
            </AnimalProvider>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
          <Route path="/employees/edit/:employeeId(\d+)">
            <EmployeeForm />
          </Route>
          <Route exact path="/employees/detail/:employeeId(\d+)">
            <EmployeeDetail />
          </Route>
        </LocationProvider>
      </EmployeeProvider>

      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
        <Route exact path="/locations/create">
          <LocationForm />
        </Route>
        <Route exact path="/locations/detail/:locationId(\d+)">
          <LocationDetail />
        </Route>
        <Route exact path="/locations/edit/:locationId(\d+)">
          <LocationForm />
        </Route>
      </LocationProvider>
    </>
  );
};
