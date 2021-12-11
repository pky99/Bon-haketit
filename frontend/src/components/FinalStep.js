// FinalStep.js
import React from "react";

function FinalStep(props) {
  return (
    <div>
    <p>Question1: {props.state.name}</p>
    <p>Question2: {props.state.email}</p>
      <button onClick={props.prev}>Previous</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default FinalStep;