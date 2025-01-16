import React from "react";

function Basic1() {
  const employeDetails = [
    { name: "sarang", position: "React developer", salary: 30000 },
    { name: "Maria", position: "React developer", salary: 30000 },
    { name: "Mushina", position: "React developer", salary: 30000 },
    { name: "jasil", position: "React developer", salary: 30000 },
  ];
  return (
    <div className="row">
      {employeDetails.map((test, index) => {
        console.log(test);
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div
              style={{
                padding: "25px",
                margin: "50px",
                textAlign: "center",
                backgroundColor: "green",
                color: "whitesmoke",
                borderRadius: "20px",
                border: "0px",
              }}
            >
              <h1>{index + 1}</h1>
              <h1>{test.name}</h1>
              <h1>{test.position}</h1>
              <h1>{test.salary}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Basic1;
