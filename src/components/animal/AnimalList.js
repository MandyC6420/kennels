// Author:  Mandy Campbell
//

import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useHistory } from "react-router-dom"

export const AnimalList = ({ history }) => {
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)
    const [ filteredAnimals, setFiltered ] = useState([])
    history = useHistory();
    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

     // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])


    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => {
                        return <AnimalCard key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}