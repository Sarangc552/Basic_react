import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Mapping_task5(abc) {
  console.log(abc);
  
  const array = [
    { name: "Sarang", qualification: "Bca", age: "24" },
    { name: "Shafiq", qualification: "Bca", age: "22" },
    { name: "mariya", qualification: "Btech", age: "23" },
    { name: "jasil", qualification: "Bsc", age: "23" },
    { name: "musina", qualification: "Btech", age: "25" },
  ];
  return (
    <div style={{ display: "flex", margin: "50px" }}>
      <Dropdown style={{ margin: "30px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown name
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {array.map((text) => {
            return <Dropdown.Item href="#/action-1">{text.name}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown style={{ margin: "30px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Qualification
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {array.map((text) => {
            return (
              <Dropdown.Item href="#/action-1">
                {text.qualification}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown style={{ margin: "30px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Age
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {array.map((text) => {
            return <Dropdown.Item href="#/action-1">{text.age}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Mapping_task5;
