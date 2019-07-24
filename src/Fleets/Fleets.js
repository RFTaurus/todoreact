import React from 'react';
import './Fleets.css';

const Fleets = ({fleets, deleteFleet}) => {
    // Note : UI Component Doesn't Have Model Inside

    // Method
    // Ternary Operation
    const fleetList = fleets.map(fleets => {
        return fleets.age > 13 ? (
            <div className="fleet" key={fleets.id}>
                <h1>Name: {fleets.name}</h1>
                <h2>Age: {fleets.age}</h2>
                <h3>Ship Class: {fleets.shipClass}</h3>
                {/* If I want to get the Id With Click, then use data bind () => Method(Param) */}
                <button onClick={() => {deleteFleet(fleets.id)}}>Remove Fleet</button>
            </div>
        ) : null;
    })

    // Rendered Component
    return(
        <div className="fleet-list">
            {fleetList}
        </div>
    );    
}

export default Fleets;