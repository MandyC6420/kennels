import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { LocationCard } from "./LocationCard";
import "./Location.css";
import { useHistory } from "react-router-dom";
import { Location } from "./Location"

export const LocationList = ({ history }) => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext);
  history = useHistory();
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
  }, []);

  

    return (
      
      <>
      {console.log("this is locations", locations)}
          <h2>Locations</h2>

          <button onClick={() => history.push("/locations/create")}>
              Add Location
          </button>
          <div className="location">
              {
                  locations.map(location => {
                    
                      return <Location key={location.id} location={location} />
                  })
              }
          </div>
      </>
  )
}