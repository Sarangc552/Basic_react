import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Prop_task5_1({ text }) {
  console.log(text);

  return (
    <div>
      {text.map((a) => {  
        return (
          <div style={{display:"inline-flex",margin:"40px"}}>
            <Card style={{ width: "300px", textAlign: "center"}}>
              <Card.Body>
                <Card.Title style={{fontSize:"30px"}}>Name:{a.name}</Card.Title>
                <Card.Text>Qualification:{a.Qualification}</Card.Text>
                <Card.Text>Age:{a.age}</Card.Text>
                <Button variant="primary">Click</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Prop_task5_1;
