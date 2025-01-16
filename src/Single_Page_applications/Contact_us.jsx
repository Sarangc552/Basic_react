import React from "react";
import Form from 'react-bootstrap/Form';

const Contact_us = () => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundImage:
            "url(https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg)",
        }}
      >
        <div style={{display:"flex",justifyContent:"center",padding:"30px 0px"}}>
          <div style={{marginTop:"80px",color:"whitesmoke"}}>
          <h1>Address</h1>
          <h3>UL CYBER PARK <br />Calicut <br />+91 8845621799 <br /></h3>

          </div>
          
          <div style={{width:"800px",marginLeft:"200px"}}>
          <Form className="w-75 text-light fs-5">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your first name" />
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Last Name" />
        <Form.Label>MObile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter your Mobile Number" />
        <Form.Label>Place</Form.Label>
        <Form.Control type="text" placeholder="Enter your Place" />
      </Form.Group>
      <div style={{textAlign:"center"}}>
      <button style={{width:"150px",color:"whitesmoke",backgroundColor:"green",padding:"10px",fontSize:"18px",border:"0px"}}>Send</button>
      </div>
      
    </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
