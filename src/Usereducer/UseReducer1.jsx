import React, { useReducer } from "react";

function reducer(state, action) {
    console.log(action);
    
  switch (action.name) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count  - 1 };
    default:
      return state;
  }
}

const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ name: "increment" });
  };
  const decrement = () => {
    dispatch({ name: "decrement" });
  };
  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
        <span>{state.count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default UseReducer1;
