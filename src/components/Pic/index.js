import React from "react";
// import "./style.css";

function Pic(props) {
  return (
    <div className="card">
      <div
        className="pic-card"
        onClick={() => props.handleClick(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Pic;

