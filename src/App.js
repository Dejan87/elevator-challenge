import React, { Component } from 'react';

import './App.css';
import Elevators from "./containers/Elevators";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Elevator Simulation</h1>
        <Elevators />
      </div>
    );
  }
}

export default App;
