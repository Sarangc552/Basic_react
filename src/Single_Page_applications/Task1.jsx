import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { sampleContext } from "../Usecontext_hook/App_parent";

const Task1 = () => {
  const example=useContext(sampleContext)
  console.log(example);
  


  const [objarray, setobjarray] = useState([
    { Name: "sarang", Age: "24", Qualification: "BCA" },
    { Name: "shefiq", Age: "22", Qualification: "BSC" },
    { Name: "Musina", Age: "25", Qualification: "BTECH" },
    { Name: "Mariya", Age: "23", Qualification: "BTECH" },
    { Name: "Jasil", Age: "23", Qualification: "BSC" },
  ]);
  const newEntry = { Name: "Jose", Age: "20", Qualification: "BA" };

  const Add = () => {
    //using spread operator
    const additem = [...objarray, newEntry];
    setobjarray(additem);
  };
  const fruit = ["apple", "orange", "grapes", "banana"];
  const fruit1 = ["pineapple", "stawbery", "mango"];
  const fruitArray = [...fruit, ...fruit1];
  console.log(fruitArray);
  const vegetable = ["tomato", "onion", "chilli", "carrot"];
  const vegetable1 = "cucumber";
  const vegetableArray = [...vegetable, vegetable1];
  console.log(vegetableArray);

  return (
    <div>
      <h1>{example.string}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO:</th>
            <th>Name</th>
            <th>Qualification</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {objarray.map((test, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{test.Name}</td>
                <td>{test.Qualification}</td>
                <td>{test.Age}</td>
                <td>{example.string}</td>
                <td>{example.value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{ marginLeft: "1300px" }}>
        <button
          onClick={Add}
          style={{
            width: "150px",
            padding: "8px",
            color: "whitesmoke",
            backgroundColor: "green",
            borderRadius: "20px",
            border: "0px",
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Task1;
