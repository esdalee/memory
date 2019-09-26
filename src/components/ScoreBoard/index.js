import React from "react";
import "./style.css";

function ScoreBoard(props) {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
            <span className="navbar-brand mb-0 h1 eb-title-font">Eat the Sushi</span>
            <div className="text-white d-flex justify-content-end">
                <h3>Current Score: {props.score}</h3>
                <h3>High Score: {props.highScore}</h3>
            </div>
        </nav>
    )
}

export default ScoreBoard;
