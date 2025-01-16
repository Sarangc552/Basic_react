import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Prop_task3_1({ a }) {
    console.log(a);
    
  return (
    <div>
          <Card style={{ width: '20rem',textAlign:"center",margin:"auto",marginTop:"30px" }}>
      <img src="https://th.bing.com/th/id/R.923e4e3ada23b498613b65e08212e00b?rik=dcUBHSpq2plKtg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f04%2fCartoon.jpg&ehk=04CKPNqo4wd7WSgglnQceFxHeAS0Y7vE%2fSmz2nwqcJ4%3d&risl=&pid=ImgRaw&r=0"></img>
      <Card.Body>
        <Card.Title>Name: {a.Name}</Card.Title>
        <Card.Text>Qualification:{a.qualification}</Card.Text>
        <Card.Text>age:{a.age}</Card.Text>
        <Button variant="primary" style={{width:"200px",backgroundColor:"lightgreen",border:"0px"}}>Click</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Prop_task3_1;
