import React from "react";
import Table from "react-bootstrap/Table";

function Mapping_task2() {
  let employee = [
    {
      name: "sarang",
      job: "Software-developer",
      salary: 35000,
      place: "kannur",
    },
    {
      name: "jasil",
      job: "Software-developer",
      salary: 40000,
      place: "kozikode",
    },
    {
      name: "musina",
      job: "Software-developer",
      salary: 50000,
      place: "kozikode",
    },
    {
      name: "mariya",
      job: "Software-developer",
      salary: 55000,
      place: "Eranakulam",
    },
    {
      name: "shafiq",
      job: "Software-developer",
      salary: 65000,
      place: "malappuram",
    },
  ];

  return (
    <div>
      <Table striped bordered hover style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th>NO:</th>
            <th>Name</th>
            <th>Job</th>
            <th>place</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
            {employee.map((item,index)=>{
                return(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.job}</td>
                    <td>{item.place}</td>
                    <td>{item.salary}</td>
                  </tr>
                )
            })}
         
        
        </tbody>
      </Table>
    </div>
  );
}

export default Mapping_task2;
