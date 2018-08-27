import React, { Component } from 'react';

import Setup from "../components/Setup/Setup";

class Elevator extends Component {
    state = {
        setup: true, // Show setup at the beginning
        numberOfElevators: 2,
        numberOfFloors: 1,
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
        this.setState({...this.state, setup: false}); // Setup is complete, proceed with simulation
    }

    render() {
        
        let setup = this.state.setup ? <Setup 
                                            elevators={this.state.numberOfElevators}
                                            floors={this.state.numberOfFloors}
                                            numberOfElevators={this.handleChangeNumberOfElevators}
                                            numberOfFloors={this.handleChangeNumberOfFloors}
                                            startSimulation={this.startSimulation}/> : null;
        
        return (
            <div>
                {setup}
            </div>
        );
    }

}

export default Elevator;