import React, { useState } from 'react'

function Use_state_basic2() {
  let [first, second] = useState(0);

  const increment = () => {
    first++;
    second(first);
  };
  const decrement=()=>{
    if (first<=0) {
        second(0)
        
    } else {
        first--;
        second(first)
    }
  }

  return (
    <div>
      <h2>{first}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}


export default Use_state_basic2