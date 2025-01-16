import React from "react";
import Prop_task3_1 from "./Prop_task3_1";

function Prop_task_3() {
  let obj = 
    { Name: "sarang", age: "24", qualification: "BCA" }
  
  return (
    <div>
      <Prop_task3_1 a={obj} />
    </div>
  );
}

export default Prop_task_3;
