import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"

export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <address className="location__address">{employee.location.address}</address>
    </section>
)



