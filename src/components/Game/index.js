import React, {Component} from "react";
import ScoreBoard from "../ScoreBoard";
import Pic from "../Pic";
import imgs from "../Pic/imgs";
import "./style.css";

class Game extends Component {

// Set state
state = {
    images: imgs.images,
    clicked: [],
    currentScore: 0,
    highScore: 0,
    message: "",
}

componentDidMount() {
    // Set game
    this.setCards(this.state.images);
}

// Generate image cards by randomizing the arrangement
setCards = images => {
    let imgArray = images.sort(() => Math.random()-0.5)
    this.setState({images:imgArray})
    return imgArray;
}

// Click handler
handleClick = id => {
    if (this.state.clicked.includes(id)) {
        this.state.currentScore = 0;
        this.state.message = "Wrong! Already Clicked!";
        this.state.clicked = [];
    } else {
        this.state.clicked.push(id);
        this.state.currentScore += 1;
        if (this.state.currentScore > this.state.highScore) {
            this.state.highScore = this.state.currentScore;
            this.state.message = "CORRECT!"
        }
    }

    // Shuffle and set state to reflect clicks
    this.setCards(this.state.images);
    this.setState({
        images: this.state.images, 
        currentScore: this.state.currentScore, 
        highScore: this.state.highScore
    });
}

isOver = () => {
    // Reset states
    this.setState({
        currentScore: 0,
        clicked: [],
        response: ""
    })
    this.setCards(this.state.images);
}



render() {
    return(
        <div>
            <ScoreBoard
                currentScore={this.state.currentScore}
                highScore={this.state.highScore}
                response={this.state.response} />

        </div>
    )
}

}

export default Game;