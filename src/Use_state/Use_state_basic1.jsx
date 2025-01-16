import React, { useState } from 'react'

function Use_state_basic1() {
    const [name, name2] = useState("sarang");
    const [number, number2] = useState(15);
  
    const changeName = () => {
      name2("jasil");
    };
    const changenumber = () => {
      number2(18);
    };
  
    return (
      <div>
        <h1>{name}</h1>
        <h2>{number}</h2>
        <button onClick={changeName}>change Name</button>
        <button onClick={changenumber}>change number</button>
      </div>
    );
  }

export default Use_state_basic1