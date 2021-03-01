import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
// import { AnimalCard } from "./animal/AnimalCard.js";
import { CustomerCard } from "./customer/Customer.js";
// import { EmployeeCard } from "./employee/Employee.js";
import { LocationCard } from "./location/Location.js";
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { AnimalList } from "./animal/AnimalList.js"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerProvider } from "./customer/CustomerDataProvider.js"
import { CustomerList } from "./customer/CustomerList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"


export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
      <LocationProvider>
        <CustomerProvider>
        <Route exact path="/animals">
          <AnimalList />
        </Route>
        </CustomerProvider>
    </LocationProvider>
      </AnimalProvider>

      {/* <AnimalProvider>
    <LocationProvider>
        <CustomerProvider>
            <Route exact path="/animals/create">
                <AnimalForm />
            </Route>
        </CustomerProvider>
    </LocationProvider>
</AnimalProvider> */}

      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <EmployeeProvider>
        <Route exact path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>

      <LocationProvider>
    <Route exact path="/locations">
        <LocationList />
    </Route>
</LocationProvider>
    </>
  );
};
