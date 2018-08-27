import React from "react";

import "./Elevator.css";

const elevator = (props) => {
    return (
        <div className="elevator col-md-4 col-sm-6 col-xs-12">
            <h3>{`Elevator ${props.number}`}</h3>
            Status: <span>{props.status}</span><br/>
            Current Floor: <span>{props.currentFloor}</span><br/>
        </div>
    );
};

export default elevator;