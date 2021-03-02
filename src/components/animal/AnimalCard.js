// Author:  Mandy Campbell
// This card prints the exact info requested in the DOM
// This is an HTML representation of the printed info in the DOM

import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">Animal Name: {animal.name}</h3>
        <h3 className="breed">Breed: {animal.breed}</h3>
        <address className="location__address">Location Address: {location.address}</address>
        <h3 className = "customer__name">Owner Name: {customer.name}</h3>
        <address className="customer__address">Customer Address: {customer.address}</address>
        <h3 className = "location__name">Location:  {location.name}</h3>
        <address className="location__address">Address:  {location.address}</address>
    </section>
)