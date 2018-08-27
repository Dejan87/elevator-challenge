import React, { Component } from 'react';

import './App.css';
import Elevator from "./containers/Elevator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Elevator Simulation</h1>
        <Elevator />
      </div>
    );
  }
}

export default App;
