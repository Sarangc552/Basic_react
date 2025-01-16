import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Mapping_task4(map) {
  console.log(map);

  const array = [
    { name: "Sarang", qualification: "Bca", age: "24" },
    { name: "Shafiq", qualification: "Bca", age: "22" },
    { name: "mariya", qualification: "Btech", age: "23" },
    { name: "jasil", qualification: "Bsc", age: "23" },
    { name: "musina", qualification: "Btech", age: "25" },
  ];
  console.log(array);
  return (
    <div>
      {map.tittle}
      {array.map((text) => {
        console.log(text);
        return (
          <DropdownButton
            id="dropdown-basic-button"
            title="button"
            style={{ margin: "30px" }}
          >
            
            <Dropdown.Item href="#/action-1">{text.name}</Dropdown.Item>
            <Dropdown.Item href="#/action-2">{text.age}</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              {text.qualification}

            </Dropdown.Item>
            <Dropdown.Item href="#/action-4">{map.tittle}</Dropdown.Item>

          </DropdownButton>
        );
      })}
    </div>
  );
}

export default Mapping_task4;
