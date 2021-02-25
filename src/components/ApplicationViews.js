import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard.js"
import { CustomerCard } from "./customer/Customer.js"
import { EmployeeCard } from "./employee/Employee.js"
import { LocationCard } from "./location/Location.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>

            <Route path="/customers">
                <CustomerCard />
            </Route>

               
               <Route path="/employees">
                <EmployeeCard />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>
        </>
    )
}