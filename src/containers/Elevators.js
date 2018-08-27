import React, { Component } from 'react';

import Setup from "../components/Setup/Setup";
import Elevator from "../components/Elevator/Elevator";
import RequestController from "../components/RequestController/RequestController";

class Elevators extends Component {
    state = {
        setup: true, // Show setup at the beginning
        numberOfElevators: 2, // Minimum of 2 elevators
        numberOfFloors: 1, // We need to have at least one floor
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
        // The elevators cannot climb above or go below the amount of floors available.
        if(event.target.value > 0 && event.target.value <= this.state.numberOfFloors) {
            this.setState({...this.state, selectedFloor: event.target.value});
        }
    }

    startSimulation = () => {
        let elevators = [];
        for(let i = 1; i <= this.state.numberOfElevators; i++) {
            // Initialize elevators, represent each elevator with an object; set their status, currentFloor and numberOfTrips
            // to idle, 1 and 0 respectively
            elevators.push({ name: i, status: "unoccupied", currentFloor: 1, numberOfTrips: 0});
        }
        this.setState({...this.state, setup: false, elevators: elevators}); // Setup is complete, proceed with simulation
    }

    setStatusBackToUnoccupied = (current, destination) => {
        // Set timeout, lets say that elevator needs 1s per floor, multiply with the number of floors(current to destiantion) and after that set its status back to unoccupied
    }

    requestAnElevator = () => {
        // Check if any of the elevators has 100 trips
            // If there is, set its status to service

        // After that, we will have three priorities in total

        // Priority number 1 ( highest priority ): Check if unoccupied elevator is at that floor ( where request is made )
            // After request is made (requestedFloor), check if one of the elevators is on the same floor and if status is unoccupied
                // If it is, set the status to occupied, increase the number of trips, set its destination floor
                    // setStatusBackToUnoccupied(current, destination)


        // Priority number 2: Check if an occupied elevator will pass that floor on its way
            // Check if the elevator is occupied
                // If it is, check if the requestedFloor(where request is made) is in range (current floor - destination floor)
                    // If it is, this elevator will answer the call, increase the number of trips after pickup


        // Priority number 3: This is the default case, Unoccupied elevator closest to it will answer the call
            // Default case, calculate what elevator (unoccupied) is closest to the call(difference between current floor and requestedFloor)
                // If there are more elevators with the same difference, pick the first one, set its status to occupied,
                // increase the number of trips and setStatusBackToUnoccupied(current, destination)
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
                {requestController}
            </div>
        );
    }

}

export default Elevators;