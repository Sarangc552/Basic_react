import React, { useContext } from "react";
import { sampleContext } from "./App_parent";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Task2_usecontext = () => {
  const { obj, array } = useContext(sampleContext);
  return (
    <div>
      <div className="text-center">
        <h1>{obj.name}</h1>
        <h2>{obj.age}</h2>
        <h2>{obj.place}</h2>
        <h2>{obj.qualification}</h2>
      </div>
      {array.map((a,index) => {
        return (
          <div className="d-inline-flex text-center">
            <Card style={{ width: "18rem",marginLeft:"15px",padding:"10px",backgroundColor:"lightblue" }}>
              <Card.Body>
              <Card.Title>{index+1}</Card.Title>
                <Card.Title>Name:{a.name}</Card.Title>
                <Card.Title>Place:{a.place}</Card.Title>
                <Card.Title>Age:{a.age}</Card.Title>
                <Card.Title>Qualification:{a.qualification}</Card.Title>
                <Button variant="primary">click</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Task2_usecontext;
