import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Component
import Fleets from './Fleets/Fleets'
import AddFleet from './AddFleet/AddFleet'

class App extends Component{
  // Note: Container Have a Model Inside
  
  // Model
  state = {
    fleets: [
      {
        id: 1,
        name: "Javelin",
        age: 13,
        shipClass: "Torpedo"
      },
      {
        id: 2,
        name: "Z23",
        age: 14,
        shipClass: "Torpedo"
      },
      {
        id: 3,
        name: "Laffy",
        age: 12,
        shipClass: "Torpedo"
      },
      {
        id: 4,
        name: "Ayanami",
        age: 13,
        shipClass: "Torpedo"
      },
    ]
  }

  // Method
  addFleet = (fleet) => {
    fleet.id = Math.random();
    let fleets = [...this.state.fleets, fleet]
    // console.log("Fleets : ", fleets)
    this.setState({
      fleets: fleets,
    })
  }

  deleteFleet = (id) => {
    // console.log("Fleet Id : ", id)
    // Filter isn't a destructive method since it won't alter the state directly
    let fleets = this.state.fleets.filter(fleet => {
      // It will return false if not equal
      return fleet.id !== id
    });
    this.setState({
      fleets: fleets,
    })
  }

  // Rendered Component
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Fleets deleteFleet={this.deleteFleet} fleets={this.state.fleets} />
          <br/>
          <AddFleet addFleet={this.addFleet} />
        </header>
      </div>
    );  
  }
}

export default App;
