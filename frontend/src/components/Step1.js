// Step1.js
import React from "react";
import { Steps, Step } from "react-step-builder";
function Step1(props) {
  return (
    <div>
      <p>name <input name="name" value={props.getState('name', '')} onChange={props.handleChange} /></p>
      <p>Surname: <input name="surname" value={props.getState('surname', '')} onChange={props.handleChange} /></p>
      <button onClick={props.prev}>Previous</button>
      <button onClick={props.next}>Next</button>
      {/* <button disabled={props.step.isFirst()} onClick={props.prev}>Previous</button>
<button disabled={props.step.isLast()} onClick={props.next}>Next</button> */}
    </div>
  );
}

export default Step1;