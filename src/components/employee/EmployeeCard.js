import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">Name:  {employee.name}</h3>
        <address className="employee__location">Location:  {employee.location.name}</address>
    </section>
)