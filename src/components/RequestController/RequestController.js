import React from "react";

import "./RequestController.css";

const requestController = (props) => {
    return (
        <div className="requestController">
            <h4>Choose the floor and make an elevator request...</h4>
            Floor: <input type="number" onChange={props.selectedFloor} value={props.floors} />
            <button onClick={props.elevatorRequest}>Request</button>
        </div>
    );
};

export default requestController;