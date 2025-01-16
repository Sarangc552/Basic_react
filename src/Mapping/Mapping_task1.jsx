import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { sampleContext } from "../Usecontext_hook/App_parent";

function Mapping_task1() {
  const {string,value,num2}=useContext(sampleContext)


  let container = [
    {
      Image:
        "https://www.shutterstock.com/image-photo/cute-baby-elephant-playing-water-600nw-2432135173.jpg",
      name: "Elephant",
      type: "wild animal",
    },
    {
      Image:
        "https://plus.unsplash.com/premium_photo-1661847643150-4e06569d2ec1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlnZXJzfGVufDB8fDB8fHww",
      name: "Tiger",
      type: "wild animal",
    },
    {
      Image:
        "https://media.istockphoto.com/id/877369086/photo/lion-panthera-leo-10-years-old-isolated-on-white.jpg?s=612x612&w=0&k=20&c=J__Jx_BX_FN7iehO965TJtPFYUl0A-bwFgIYaK32R3Y=",
      name: "Lion",
      type: "wild animal",
    },
    {
      Image:
        "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
      name: "Dog",
      type: "pet-animal",
    },
  ];

  return (
    <div>
      <h1>{num2}</h1>
      {container.map((test, index) => {
        console.log(test);
        return (
          <div className="d-inline-flex">
            <Card style={{ width: "18rem", textAlign: "center",margin:"40px" }}>
              <Card.Img
                variant="top"
                src={test.Image}
                height={350}
              />
              <Card.Body>
                <Card.Title>{test.name}</Card.Title>
                <Card.Text>{test.type}</Card.Text>
                <Card.Text>{string}</Card.Text>
                <Card.Text>{value}</Card.Text>
                <Button variant="primary">view</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
export default Mapping_task1;
