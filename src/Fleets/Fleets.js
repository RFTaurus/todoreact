import React from 'react';
import './Fleets.sass'

const Fleets = ({fleets}) => {
    // Mini Component
    const fleetList = fleets.map(fleets => {
        if(fleets.age > 13){
            return (
                <div className="fleet" key={fleets.id}>
                    <h1>Name: {fleets.name}</h1>
                    <h2>Age: {fleets.age}</h2>
                    <h3>Ship Class: {fleets.shipClass}</h3>
                </div>
            )
        } else {
            return null;
        }
    })

    // Ternary Operation
    const fleetListSecond = fleets.map(fleets => {
        return fleets.age > 13 ? (
            <div className="fleet" key={fleets.id}>
                <h1>Name: {fleets.name}</h1>
                <h2>Age: {fleets.age}</h2>
                <h3>Ship Class: {fleets.shipClass}</h3>
            </div>
        ) : null;
    })

    // Rendered Component
    return(
        <div className="fleet-list">
            {fleetListSecond}
        </div>
    );    
}

export default Fleets;