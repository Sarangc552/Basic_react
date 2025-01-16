import React, { createContext, useState } from "react";
import Task1 from "../Single_Page_applications/Task1";
import Mapping_task1 from "../Mapping/Mapping_task1";
import Task1_usecontext from "./Task1_usecontext";
import Task2_usecontext from "./Task2_usecontext";

const sampleContext = createContext();

function App_parent() {
  const [value, setvalue] = useState(25);
  const [string, setstring] = useState("sarang");
  const [num2, setnum2] = useState(50);
  const [name, setname] = useState("sarang");
  const obj = {
    name: "Sarang",
    age: "24",
    place: "Thalassery",
    qualification: "Bca",
  };
  const array = [
    { name: "Sarang", age: "24", place: "Thalassery", qualification: "Bca" },
    { name: "jasil", age: "24", place: "kozhikode", qualification: "Bsc" },
    { name: "mariya", age: "23", place: "Ernakulam", qualification: "Btech" },
    { name: "musina", age: "24", place: "Malapuram", qualification: "Btech" },
    { name: "Shafeeq", age: "22", place: "Malapuram", qualification: "Bca" },
  ];
  return (
    <div>
      <sampleContext.Provider
        value={{ value, string, num2, name, setname, obj ,array}}
      >
        {/* <Task1/> */}
        {/* <Mapping_task1/> */}
        <div>
          {/* <Task1_usecontext/> */}
          <Task2_usecontext />
        </div>
      </sampleContext.Provider>
    </div>
  );
}

export default App_parent;
export { sampleContext };
