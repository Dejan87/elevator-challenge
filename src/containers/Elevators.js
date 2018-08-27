import React, { Component } from 'react';

import Setup from "../components/Setup/Setup";
import Elevator from "../components/Elevator/Elevator";

class Elevators extends Component {
    state = {
        setup: true, // Show setup at the beginning
        numberOfElevators: 2,
        numberOfFloors: 1,
        elevators: [],
        status: "idle", // Status of every elevator at the beginning
        currentFloor: 1 // All elevators start at the first floor
    }

    handleChangeNumberOfElevators = (event) => {
        if(event.target.value >= 2) { // There must be at least 2 elevators
            this.setState({...this.state, numberOfElevators: event.target.value});
        }
    }

    handleChangeNumberOfFloors = (event) => {
        if(event.target.value > 0) { // Number of floors cannot be a negative number
            this.setState({...this.state, numberOfFloors: event.target.value});
        }
    }

    startSimulation = () => {
        let elevators = [];
        for(let i = 1; i <= this.state.numberOfElevators; i++) {
            elevators.push(i); // Initialize elevators
        }
        this.setState({...this.state, setup: false, elevators: elevators}); // Setup is complete, proceed with simulation
    }

    render() {
        
        let setup = this.state.setup ? <Setup 
                                            elevators={this.state.numberOfElevators}
                                            floors={this.state.numberOfFloors}
                                            numberOfElevators={this.handleChangeNumberOfElevators}
                                            numberOfFloors={this.handleChangeNumberOfFloors}
                                            startSimulation={this.startSimulation}/> : this.state.elevators.map(elevator => {
                                                return <Elevator 
                                                            key={elevator}
                                                            status={this.state.status}
                                                            currentFloor={this.state.currentFloor}
                                                            number={elevator}/>
                                            });
        
        return (
            <div>
                {setup}
            </div>
        );
    }

}

export default Elevators;