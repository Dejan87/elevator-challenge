import React from "react";

import "./Setup.css";

const setup = (props) => {
    return (
        <div>
            <h3>Please select number of elevators and floors...</h3>
            Number of Elevators: <input type="number" onChange={props.numberOfElevators} value={props.elevators} />
            Number of Floors: <input type="number" onChange={props.numberOfFloors} value={props.floors} />
            <button onClick={props.startSimulation}>Start simulation</button>
        </div>
    );
};

export default setup;