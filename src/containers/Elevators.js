import React, { Component } from 'react';

import Setup from "../components/Setup/Setup";
import Elevator from "../components/Elevator/Elevator";
import RequestController from "../components/RequestController/RequestController";

class Elevators extends Component {
    state = {
        setup: true, // Show setup at the beginning
        numberOfElevators: 2,
        numberOfFloors: 1,
        elevators: [],
        selectedFloor: 1 
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

    handleChangeSelectedFloor = (event) => {
        // User can make an elevator request from floor number 1 to amount of floors available
        if(event.target.value > 0 && event.target.value <= this.state.numberOfFloors) {
            this.setState({...this.state, selectedFloor: event.target.value});
        }
    }

    startSimulation = () => {
        let elevators = [];
        for(let i = 1; i <= this.state.numberOfElevators; i++) {
            // Initialize elevators, represent each elevator with an object; set their status, currentFloor and numberOfTrips
            // to idle, 1 and 0 respectively
            elevators.push({ name: i, status: "idle", currentFloor: 1, numberOfTrips: 0});
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
                                                            key={elevator.name}
                                                            status={elevator.status}
                                                            currentFloor={elevator.currentFloor}
                                                            number={elevator.name}
                                                            count={elevator.numberOfTrips}/>
                                            });

        let requestController = !this.state.setup ? <RequestController 
                                                        selectedFloor={this.handleChangeSelectedFloor}
                                                        floors={this.state.selectedFloor}
                                                        elevatorRequest={this.requestAnElevator}/> : null;
        
        return (
            <div>
                <div className="row">
                    {setup}
                </div>
                <div>
                    {requestController}
                </div>
            </div>
        );
    }

}

export default Elevators;