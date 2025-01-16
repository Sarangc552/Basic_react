import React, { useState } from "react";

function Use_state_basic3() {
  const [first, second] = useState("red");

  const orange = () => {
    second("orange");
  };
  const green = () => {
    second("green");
  };
  const blue = () => {
    second("blue");
  };
  const yellow = () => {
    second("yellow");
  };

  return (
    <div>
      <h1 style={{ color: first }}>The colour is {first}</h1>
      <button onClick={orange}>orange</button>
      <button onClick={green}>green</button>
      <button onClick={blue}>blue</button>
      <button onClick={yellow}>yellow</button>
    </div>
  );
}

export default Use_state_basic3;
