import React from "react";
import Prop_task5_1 from "./Prop_task5_1";

function Props_task5() {
  let studentDetails = [
    { name: "sarang", age: "24", Qualification: "Bca" },
    { name: "jasil", age: "23", Qualification: "Bsc" },
    { name: "shafiq", age: "22", Qualification: "Bsc" },
    { name: "Mariya", age: "23", Qualification: "Btech" },
    { name: "Musina", age: "25", Qualification: "Btech" },
  ];
  return <div>
    <Prop_task5_1 text={studentDetails}/>
  </div>;
}

export default Props_task5;
