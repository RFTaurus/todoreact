import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Component
import Fleets from './Fleets/Fleets'

class App extends Component{
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

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
  
          <Fleets fleets={this.state.fleets} />
        </header>
      </div>
    );  
  }
}

export default App;
