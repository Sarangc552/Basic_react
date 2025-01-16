import React, { useReducer } from "react";


const initialState = { isDarkMode: false };


function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { isDarkMode: !state.isDarkMode };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function Usereducer2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        backgroundColor: state.isDarkMode ? "#333" : "#FFF",
        color: state.isDarkMode ? "#FFF" : "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>{state.isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => dispatch({ type: "toggle" })}>Toggle Mode</button>
    </div>
  );
}

export default Usereducer2;
