import React from "react";
import "./style.css";

function ScoreBoard(props) {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-between">
            <h1 className="text-white">Eat the Sushi</h1><br></br>
            <div className="text-white justify-content-center">
                <ul>
                <h5>Current Score: {props.currentScore}</h5>
                <h5>High Score: {props.highScore}</h5>
                </ul>
            </div>
        </nav>
    )
}

export default ScoreBoard;
