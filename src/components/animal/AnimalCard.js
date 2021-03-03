// Author:  Mandy Campbell
// This card prints the exact info requested in the DOM
// This is an HTML representation of the printed info in the DOM

import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
          <Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
          </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)

// import React from "react"
// import "./Animal.css"

// export const AnimalCard = ({ animal }) => (
//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <address className="location__address">{animal.location.name}</address>
//     </section>
// )

















// import React from "react"
// import "./Animal.css"
// import { Link } from "react-router-dom"

// export const AnimalCard = ({ animal }) => (
//     <section className="animal">
//         <h3 className="animal__name">
//           <Link to={`/animals/detail/${animal.id}`}>
//             { animal.name }
//           </Link>
//         </h3>
//         <div className="animal__breed">{ animal.breed }</div>
//     </section>
// )