// Step2.js
import React from "react";

function Step2(props) {
  return (
    <div>
      <p>Question2: <input name="email" value={props.getState('email', '')} onChange={props.handleChange} /></p>
      {/* <p>phone: <input name="phone" value={props.getState('phone', '')} onChange={props.handleChange} /></p> */}
      <button onClick={props.prev}>Previous</button>
      <button onClick={props.next}>Next</button>
    </div>
  );
}

export default Step2;