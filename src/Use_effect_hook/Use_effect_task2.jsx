import React, { useEffect, useState } from "react";

function Use_effect_task2() {
  const [name, setname] = useState("ramu");
  useEffect(() => {alert(`The alert is worked ${name}`)}, [name]);

  const changename = () => {
    setname("sarang")
  };

  return (
    <div>
        <h1>{name}</h1>
      <button onClick={changename}>change name</button>
    </div>
  );
}

export default Use_effect_task2;
